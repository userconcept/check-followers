import { addLimitsAction, removeLimitsAction } from './../store/limitsReducer.js';

export function controlLimits(timestampReset) {
    return async function controlLimitsThunk(dispatch) {
        const timestampNow = Math.round(Date.now() / 1000);
        const secondsReset = timestampReset - timestampNow;
        const milliSecondsReset = secondsReset * 1000;
        const minutesReset = Math.round(secondsReset / 60);
        dispatch(addLimitsAction(minutesReset));

        setTimeout(function() {
            dispatch(removeLimitsAction());
        }, milliSecondsReset);
    }
}
