import {
  settingsUpdate,
  settingsLoadSuccess,
  settingsLoadFailed,
} from './actions';

const initState = {
  flash: false,
  pictureQuality: 0.75,
  skipProcessing: true,
  pauseAfterCapture: true,
  bookSuggestions: 3,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case settingsUpdate.type:
      return {
        ...state,
        ...action.payload,
      };

    case settingsLoadSuccess.type:
      return action.payload;

    case settingsLoadFailed.type:
      return initState;

    default:
      return state;
  }
};

export default reducer;
