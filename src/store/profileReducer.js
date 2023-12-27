const FETCH_PROFILE = 'FETCH_PROFILE';
const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
const FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR';

const defaultState = {
    profile: {},
    loading: false,
    error: null
}

export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
            return {loading: true, error: null, profile: defaultState.profile};
        case FETCH_PROFILE_SUCCESS:
            return {loading: false, error: null, profile: action.payload};
        case FETCH_PROFILE_ERROR:
            return {loading: false, error: action.payload, profile: defaultState.profile};
        default:
            return state;
    }
}

export const fetchProfileAction = () => ({type: FETCH_PROFILE});
export const fetchProfileSuccessAction = (payload) => ({type: FETCH_PROFILE_SUCCESS, payload});
export const fetchProfileErrorAction = (payload) => ({type: FETCH_PROFILE_ERROR, payload});
