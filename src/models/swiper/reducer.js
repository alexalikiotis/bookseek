import { setOffset } from './actions';

const initState = {
  offset: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case setOffset.type:
      return {
        ...state,
        offset: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
