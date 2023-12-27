import { connectNetworkAction, connectNetworkSuccessAction, connectNetworkErrorAction } from './../store/networkReducer.js';
import { fetchFollowingAction, fetchFollowingSuccessAction, fetchFollowingErrorAction } from './../store/followingReducer.js';
import { compareData } from './compareData.js';
import { controlLimits } from './controlLimits.js';

import { parserConfig } from './../config/parserConfig.js';

export function fetchFollowing(profile) {
    const requestsNumber = Math.ceil(profile.following / parserConfig.perPage);

    return async function fetchFollowingThunk(dispatch, getState) {
        for (let i = 1; i <= requestsNumber; i++) {

            if (getState().limits.limit === false) {

                dispatch(connectNetworkAction());
                dispatch(fetchFollowingAction());

                await fetch(`https://api.github.com/users/${profile.login}/following?per_page=${parserConfig.perPage}&page=${i}`, {cache: 'no-store'})
                    .then(response => {
                        if (response.headers.get('x-ratelimit-remaining') === '0') {
                            dispatch(controlLimits(response.headers.get('x-ratelimit-reset')));
                            throw new Error(`Your ratelimit is empty, try again after ${getState().limits.minutes} minutes...`);
                        }

                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Load following error...');
                        }
                    })
                    .then(data => {
                        dispatch(connectNetworkSuccessAction());
                        dispatch(fetchFollowingSuccessAction(data));
                    })
                    .catch(error => {
                        dispatch(connectNetworkErrorAction(error));
                        dispatch(fetchFollowingErrorAction(error));
                    });
            }
        }

        if (!getState().following.error) {
            dispatch(compareData());
        }
    }
}
