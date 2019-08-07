import { reviewsRequest, reviewsSuccess, reviewsFailed } from './actions';

const initState = {
  loading: false,
  reviewsLink: '',
  reviews: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case reviewsRequest.type:
      return {
        ...initState,
        loading: true,
      };

    case reviewsSuccess.type:
      return {
        ...initState,
        reviewsLink: action.payload.reviewsLink,
        reviews: action.payload.reviews,
      };

    case reviewsFailed.type:
      return {
        ...initState,
        reviewsLink: '',
        reviews: [],
      };

    default:
      return state;
  }
};

export default reducer;
