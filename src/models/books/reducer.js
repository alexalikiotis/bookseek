import {
  searchRequest,
  searchSuccess,
  searchFailed,
  searchCanceled,
} from './actions';

const initState = {
  loading: false,
  entities: [],
  error: false,
  errorInfo: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case searchRequest.type:
      return {
        ...initState,
        loading: true,
      };

    case searchSuccess.type: {
      const resluts = action.payload;
      const sortedResults = resluts.sort((a, b) => {
        return (b.description || '').length - (a.description || '').length;
      });

      return {
        ...state,
        loading: false,
        entities: sortedResults,
      };
    }

    case searchFailed.type:
      return {
        ...state,
        loading: false,
        error: true,
        errorInfo: action.payload,
      };

    case searchCanceled.type:
      return initState;

    default:
      return state;
  }
};

export default reducer;
