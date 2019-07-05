import { saveBook, removeBook } from './actions';

const initState = {
  keys: [],
  entities: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case saveBook.type: {
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

    case removeBook.type:
      // WIP
      return state;

    default:
      return state;
  }
};

export default reducer;
