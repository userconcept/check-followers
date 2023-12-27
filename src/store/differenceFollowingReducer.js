const SET_DIFFERENCE_FOLLOWING = 'SET_DIFFERENCE_FOLLOWING';
const SET_DIFFERENCE_FOLLOWING_SUCCESS = 'SET_DIFFERENCE_FOLLOWING_SUCCESS';
const SET_DIFFERENCE_FOLLOWING_ERROR = 'SET_DIFFERENCE_FOLLOWING_ERROR';
const CLEAR_DIFFERENCE_FOLLOWING = 'CLEAR_DIFFERENCE_FOLLOWING';

const defaultState = {
    differenceFollowing: [],
    loading: false,
    error: null
}

export const differenceFollowingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DIFFERENCE_FOLLOWING:
            return {...state, loading: true, error: null, differenceFollowing: [...state.differenceFollowing]};
        case SET_DIFFERENCE_FOLLOWING_SUCCESS:
            return {...state, loading: false, error: null, differenceFollowing: [...action.payload]};
        case SET_DIFFERENCE_FOLLOWING_ERROR:
            return {...state, loading: false, error: action.payload, differenceFollowing: defaultState.differenceFollowing};
        case CLEAR_DIFFERENCE_FOLLOWING:
            return {...state, differenceFollowing: defaultState.differenceFollowing};
        default:
            return state;
    }
}

export const setDifferenceFollowingAction = () => ({type: SET_DIFFERENCE_FOLLOWING});
export const setDifferenceFollowingSuccessAction = (payload) => ({type: SET_DIFFERENCE_FOLLOWING_SUCCESS, payload});
export const setDifferenceFollowingErrorAction = (payload) => ({type: SET_DIFFERENCE_FOLLOWING_ERROR, payload});
export const clearDifferenceFollowingAction = () => ({type: CLEAR_DIFFERENCE_FOLLOWING});
