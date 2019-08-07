import createAction from '@/utils/reduxActions';
import * as types from './types';

export const reviewsRequest = createAction(types.REVIEWS_REQUEST);
export const reviewsSuccess = createAction(types.REVIEWS_SUCCESS);
export const reviewsFailed = createAction(types.REVIEWS_FAILED);
