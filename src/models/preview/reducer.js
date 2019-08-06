import {
  previewRequest,
  previewSuccess,
  previewFailed,
  previewCanceled,
} from './actions';

const initState = {
  loading: false,
  data: {},
  error: false,
  errorInfo: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case previewRequest.type:
      return {
        ...initState,
        loading: true,
      };

    case previewSuccess.type: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case previewFailed.type:
      return {
        ...state,
        loading: false,
        error: true,
        errorInfo: action.payload,
      };

    case previewCanceled.type:
      return initState;

    default:
      return state;
  }
};

export default reducer;
