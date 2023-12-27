const ADD_LIMITS = 'ADD_LIMITS';
const REMOVE_LIMITS = 'REMOVE_LIMITS';

const defaultState = {
    limit: false,
    minutes: null
}

export const limitsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_LIMITS:
            return {limit: true, minutes: action.payload};
        case REMOVE_LIMITS:
            return {limit: false, minutes: defaultState.minutes};
        default:
            return state;
    }
}

export const addLimitsAction = (payload) => ({type: ADD_LIMITS, payload});
export const removeLimitsAction = () => ({type: REMOVE_LIMITS});
