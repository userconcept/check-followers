import { setDifferenceFollowersAction, setDifferenceFollowersSuccessAction, setDifferenceFollowersErrorAction } from './../store/differenceFollowersReducer.js';
import { setDifferenceFollowingAction, setDifferenceFollowingSuccessAction, setDifferenceFollowingErrorAction } from './../store/differenceFollowingReducer.js';

export function compareData() {
    return async function compareDataThunk(dispatch, getState) {
        dispatch(setDifferenceFollowersAction());
        dispatch(setDifferenceFollowingAction());

        const followers = getState().followers.followers;
        const following = getState().following.following;

        const differenceFollowers = [];
        const differenceFollowing = [];

        for (let item of followers) {
            if (!following.find(i => i.login === item.login)) {
                differenceFollowers.push(item);
            }
        }

        for (let item of following) {
            if (!followers.find(i => i.login === item.login)) {
                differenceFollowing.push(item);
            }
        }

        if (differenceFollowers.length > 0) {
            dispatch(setDifferenceFollowersSuccessAction(differenceFollowers));
        } else {
            dispatch(setDifferenceFollowersErrorAction('No difference followers...'));
        }

        if (differenceFollowing.length > 0) {
            dispatch(setDifferenceFollowingSuccessAction(differenceFollowing));
        } else {
            dispatch(setDifferenceFollowingErrorAction('No difference following...'));
        }
    }
}
