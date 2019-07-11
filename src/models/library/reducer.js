import {
  saveBookSuccess,
  loadBooksSuccess,
  removeBookSuccess,
} from './actions';

import normalizer from '@/utils/reduxNormalizer';

const initState = {
  keys: [],
  entities: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case saveBookSuccess.type: {
      const { id: key, title, authors } = action.payload;
      return {
        ...state,
        keys: [...state.keys, key],
        entities: {
          ...state.entities,
          [key]: {
            title,
            authors,
          },
        },
      };
    }

    case loadBooksSuccess.type: {
      const [keys, entities] = normalizer(action.payload, 'id');
      return {
        ...state,
        keys,
        entities,
      };
    }

    case removeBookSuccess.type: {
      const keys = state.keys.filter(key => key != action.payload);
      // eslint-disable-next-line
      const { [action.payload]: key, ...restEntities } = state.entities;

      return {
        ...state,
        keys,
        entities: restEntities,
      };
    }

    default:
      return state;
  }
};

export default reducer;
