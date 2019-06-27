import normalizer from '@/utils/reduxNormalizer';

import {
  searchRequest,
  searchSuccess,
  searchFailed,
  searchCanceled,
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
      return {
        ...initState,
        loading: true,
      };

    case searchSuccess.type: {
      const [keys, entities] = normalizer(action.payload, 'id');
      return {
        ...state,
        loading: false,
        keys,
        entities,
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
