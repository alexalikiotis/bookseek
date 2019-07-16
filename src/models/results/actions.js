import createAction from '@/utils/reduxActions';
import * as types from './types';

export const searchRequest = createAction(types.SEARCH_REQUEST);
export const searchSuccess = createAction(types.SEARCH_SUCCESS);
export const searchFailed = createAction(types.SEARCH_FAILED);
export const searchCanceled = createAction(types.SEARCH_CANCELED);
