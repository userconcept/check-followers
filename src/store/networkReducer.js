const CONNECT_NETWORK = 'CONNECT_NETWORK';
const CONNECT_NETWORK_SUCCESS = 'CONNECT_NETWORK_SUCCESS';
const CONNECT_NETWORK_ERROR = 'CONNECT_NETWORK_ERROR';

const defaultState = {
    loading: false,
    error: null
}

export const networkReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONNECT_NETWORK:
            return {loading: true, error: defaultState.error};
        case CONNECT_NETWORK_SUCCESS:
            return {loading: defaultState.loading, error: defaultState.error};
        case CONNECT_NETWORK_ERROR:
            return {loading: defaultState.loading, error: action.payload};
        default:
            return state;
    }
}

export const connectNetworkAction = () => ({type: CONNECT_NETWORK});
export const connectNetworkSuccessAction = () => ({type: CONNECT_NETWORK_SUCCESS});
export const connectNetworkErrorAction = (payload) => ({type: CONNECT_NETWORK_ERROR, payload});
