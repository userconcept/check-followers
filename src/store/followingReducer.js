const FETCH_FOLLOWING = 'FETCH_FOLLOWING';
const FETCH_FOLLOWING_SUCCESS = 'FETCH_FOLLOWING_SUCCESS';
const FETCH_FOLLOWING_ERROR = 'FETCH_FOLLOWING_ERROR';
const CLEAR_FOLLOWING = 'CLEAR_FOLLOWING';

const defaultState = {
    following: [],
    loading: false,
    error: null
}

export const followingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_FOLLOWING:
            return {...state, loading: true, error: null, following: [...state.following]};
        case FETCH_FOLLOWING_SUCCESS:
            return {...state, loading: false, error: null, following: [...state.following, ...action.payload]};
        case FETCH_FOLLOWING_ERROR:
            return {...state, loading: false, error: action.payload, following: defaultState.following};
        case CLEAR_FOLLOWING:
            return {...state, following: defaultState.following};
        default:
            return state;
    }
}

export const fetchFollowingAction = () => ({type: FETCH_FOLLOWING});
export const fetchFollowingSuccessAction = (payload) => ({type: FETCH_FOLLOWING_SUCCESS, payload});
export const fetchFollowingErrorAction = (payload) => ({type: FETCH_FOLLOWING_ERROR, payload});
export const clearFollowingAction = () => ({type: CLEAR_FOLLOWING});
