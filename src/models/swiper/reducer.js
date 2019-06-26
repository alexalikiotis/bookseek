import { changeIndex } from './actions';

const initState = {
  index: 1,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case changeIndex.type:
      return {
        ...state,
        index: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
