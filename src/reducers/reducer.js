export function reducer(state, action) {
    switch (action.type) {

     case "SET_VOLUME":
       return {
        ...state,
        volume: action.payload
        };

     case "SELECT_CARD":
       return {
        ...state,
        selectedCard: action.payload.selectedCard,
        themeAppBg: action.payload.themeAppBg,
        themeMenuBg: action.payload.themeMenuBg,
        bgVideoSrc: action.payload.bgVideoSrc
       }

     case "SWITCH_MODE":
        return {
            ...state,
            meditationMode: !state.meditationMode,
        }

     case "TRIGGER_ERROR_BOX":
        return {
            ...state,
            errorMsg: action.payload.message,
            triggeredError: action.payload.isErrorTriggered
        }

     case "TOGGLE_TIMER":
        return {
            ...state,
            activeTimer: !state.activeTimer
     }

     case "CHANGE_TIMER_STATUS": 
        return {
            ...state,
            timerStatus: action.payload,
            elapsedSeconds: action.payload === "stop" ? 0 : state.elapsedSeconds
        }

     case "SET_TIMER_MINUTES":
        return {
            ...state,
            timerSeconds: action.payload
        }

     case "TICK":
        return {
            ...state,
            elapsedSeconds: state.elapsedSeconds + 1
        }

     default: {
        throw Error('Unknown action: ' + action.type);
     }
    } 
   }