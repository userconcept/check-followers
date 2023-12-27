import { connectNetworkAction, connectNetworkSuccessAction, connectNetworkErrorAction } from './../store/networkReducer.js';
import { fetchFollowersAction, fetchFollowersSuccessAction, fetchFollowersErrorAction } from './../store/followersReducer.js';
import { fetchFollowing } from './fetchFollowing.js';
import { controlLimits } from './controlLimits.js';

import { parserConfig } from './../config/parserConfig.js';

export function fetchFollowers(profile) {
    const requestsNumber = Math.ceil(profile.followers / parserConfig.perPage);

    return async function fetchFollowersThunk(dispatch, getState) {
        for (let i = 1; i <= requestsNumber; i++) {

            if (getState().limits.limit === false) {

                dispatch(connectNetworkAction());
                dispatch(fetchFollowersAction());

                await fetch(`https://api.github.com/users/${profile.login}/followers?per_page=${parserConfig.perPage}&page=${i}`, {cache: 'no-store'})
                    .then(response => {
                        if (response.headers.get('x-ratelimit-remaining') === '0') {
                            dispatch(controlLimits(response.headers.get('x-ratelimit-reset')));
                            throw new Error(`Your ratelimit is empty, try again after ${getState().limits.minutes} minutes...`);
                        }

                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Load followers error...');
                        }
                    })
                    .then(data => {
                        dispatch(connectNetworkSuccessAction());
                        dispatch(fetchFollowersSuccessAction(data));
                    })
                    .catch(error => {
                        dispatch(connectNetworkErrorAction(error));
                        dispatch(fetchFollowersErrorAction(error));
                    });
            }
        }

        if (!getState().followers.error) {
            dispatch(fetchFollowing(profile));
        }
    }
}
