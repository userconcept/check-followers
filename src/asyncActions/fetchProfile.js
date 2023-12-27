import { connectNetworkAction, connectNetworkSuccessAction, connectNetworkErrorAction } from './../store/networkReducer.js';
import { fetchProfileAction, fetchProfileSuccessAction, fetchProfileErrorAction } from './../store/profileReducer.js';
import { clearFollowersAction } from './../store/followersReducer.js';
import { clearFollowingAction } from './../store/followingReducer.js';
import { clearDifferenceFollowersAction } from './../store/differenceFollowersReducer.js';
import { clearDifferenceFollowingAction } from './../store/differenceFollowingReducer.js';
import { fetchFollowers } from './fetchFollowers.js';
import { controlLimits } from './controlLimits.js';

export function fetchProfile(nickname) {
    return async function fetchProfileThunk(dispatch, getState) {

        if (nickname === '') {
            return;
        }

        dispatch(clearFollowersAction());
        dispatch(clearFollowingAction());
        dispatch(clearDifferenceFollowersAction());
        dispatch(clearDifferenceFollowingAction());

        if (getState().limits.limit === false) {

            dispatch(connectNetworkAction());
            dispatch(fetchProfileAction());

            await fetch(`https://api.github.com/users/${nickname}`, {cache: 'no-store'})
                .then(response => {

                    // console.log('profile x-ratelimit-remaining:', response.headers.get('x-ratelimit-remaining'));
                    // console.log('profile x-ratelimit-reset:', response.headers.get('x-ratelimit-reset'));

                    if (response.headers.get('x-ratelimit-remaining') === '0') {
                        dispatch(controlLimits(response.headers.get('x-ratelimit-reset')));
                        throw new Error(`Your ratelimit is empty, try again after ${getState().limits.minutes} minutes...`);
                    }

                    if (response.ok) {
                        return response.json();
                    } else {
                        if (response.status === 404) {
                            throw new Error('User not found...');
                        }
                    }
                })
                .then(data => {
                    dispatch(connectNetworkSuccessAction());
                    dispatch(fetchProfileSuccessAction(data));
                    dispatch(fetchFollowers(data));
                })
                .catch(error => {
                    dispatch(connectNetworkErrorAction(error));
                    dispatch(fetchProfileErrorAction(error));
                });
        }
    }
}
