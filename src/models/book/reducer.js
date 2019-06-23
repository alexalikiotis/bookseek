import { searchRequest, searchSuccess, searchFailed } from './actions';

const INITIAL_STATE = {
  fetching: false,
  info: {},
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchRequest.type:
      return {
        ...state,
        fetching: true,
      };

    case searchSuccess.type:
      return {
        ...state,
        fetching: false,
        info: action.payload,
      };

    case searchFailed.type:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
