import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { profileReducer } from './profileReducer.js';
import { followersReducer } from './followersReducer.js';
import { followingReducer } from './followingReducer.js';
import { differenceFollowersReducer } from './differenceFollowersReducer.js';
import { differenceFollowingReducer } from './differenceFollowingReducer.js';
import { networkReducer } from './networkReducer.js';
import { limitsReducer } from './limitsReducer.js';

const rootReducer = combineReducers({
    profile: profileReducer,
    followers: followersReducer,
    following: followingReducer,
    differenceFollowers: differenceFollowersReducer,
    differenceFollowing: differenceFollowingReducer,
    network: networkReducer,
    limits: limitsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
