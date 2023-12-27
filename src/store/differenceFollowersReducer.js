const SET_DIFFERENCE_FOLLOWERS = 'SET_DIFFERENCE_FOLLOWERS';
const SET_DIFFERENCE_FOLLOWERS_SUCCESS = 'SET_DIFFERENCE_FOLLOWERS_SUCCESS';
const SET_DIFFERENCE_FOLLOWERS_ERROR = 'SET_DIFFERENCE_FOLLOWERS_ERROR';
const CLEAR_DIFFERENCE_FOLLOWERS = 'CLEAR_DIFFERENCE_FOLLOWERS';

const defaultState = {
    differenceFollowers: [],
    loading: false,
    error: null
}

export const differenceFollowersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DIFFERENCE_FOLLOWERS:
            return {...state, loading: true, error: null, differenceFollowers: [...state.differenceFollowers]};
        case SET_DIFFERENCE_FOLLOWERS_SUCCESS:
            return {...state, loading: false, error: null, differenceFollowers: [...action.payload]};
        case SET_DIFFERENCE_FOLLOWERS_ERROR:
            return {...state, loading: false, error: action.payload, differenceFollowers: defaultState.differenceFollowers};
        case CLEAR_DIFFERENCE_FOLLOWERS:
            return {...state, differenceFollowers: defaultState.differenceFollowers};
        default:
            return state;
    }
}

export const setDifferenceFollowersAction = () => ({type: SET_DIFFERENCE_FOLLOWERS});
export const setDifferenceFollowersSuccessAction = (payload) => ({type: SET_DIFFERENCE_FOLLOWERS_SUCCESS, payload});
export const setDifferenceFollowersErrorAction = (payload) => ({type: SET_DIFFERENCE_FOLLOWERS_ERROR, payload});
export const clearDifferenceFollowersAction = () => ({type: CLEAR_DIFFERENCE_FOLLOWERS});
