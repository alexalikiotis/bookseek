import { settingsUpdate } from './actions';

const initState = {
  flash: false,
  pictureQuality: 0.75,
  skipProcessing: true,
  pauseOnCapture: true,
  bookSuggestions: 3,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case settingsUpdate.type:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
