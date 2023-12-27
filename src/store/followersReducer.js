const FETCH_FOLLOWERS = 'FETCH_FOLLOWERS';
const FETCH_FOLLOWERS_SUCCESS = 'FETCH_FOLLOWERS_SUCCESS';
const FETCH_FOLLOWERS_ERROR = 'FETCH_FOLLOWERS_ERROR';
const CLEAR_FOLLOWERS = 'CLEAR_FOLLOWERS';

const defaultState = {
    followers: [],
    loading: false,
    error: null
}

export const followersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_FOLLOWERS:
            return {...state, loading: true, error: null, followers: [...state.followers]};
        case FETCH_FOLLOWERS_SUCCESS:
            return {...state, loading: false, error: null, followers: [...state.followers, ...action.payload]};
        case FETCH_FOLLOWERS_ERROR:
            return {...state, loading: false, error: action.payload, followers: defaultState.followers};
        case CLEAR_FOLLOWERS:
            return {...state, followers: defaultState.followers};
        default:
            return state;
    }
}

export const fetchFollowersAction = () => ({type: FETCH_FOLLOWERS});
export const fetchFollowersSuccessAction = (payload) => ({type: FETCH_FOLLOWERS_SUCCESS, payload});
export const fetchFollowersErrorAction = (payload) => ({type: FETCH_FOLLOWERS_ERROR, payload});
export const clearFollowersAction = () => ({type: CLEAR_FOLLOWERS});
