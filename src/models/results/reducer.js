import normalize from '@/utils/reduxNormalizer';
import {
  searchRequest,
  searchSuccess,
  searchFailed,
  searchCanceled,
  previewRequest,
  previewSuccess,
  previewFailed,
  previewCanceled,
} from './actions';

const initState = {
  loading: false,
  keys: [],
  entities: {},
  error: false,
  errorInfo: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case searchRequest.type:
    case previewRequest.type:
      return {
        ...initState,
        loading: true,
      };

    case searchSuccess.type:
    case previewSuccess.type: {
      const [keys, entities] = normalize(action.payload, 'id');

      return {
        ...state,
        loading: false,
        keys,
        entities,
      };
    }

    case searchFailed.type:
    case previewFailed.type:
      return {
        ...state,
        loading: false,
        error: true,
        errorInfo: action.payload,
      };

    case searchCanceled.type:
    case previewCanceled.type:
      return initState;

    default:
      return state;
  }
};

export default reducer;
