import * as types from './types';
import createAction from '../../utils/reduxActions';

export const searchRequest = createAction(types.SEARCH_REQUEST);
export const searchSuccess = createAction(types.SEARCH_SUCCESS);
export const searchFailed = createAction(types.SEARCH_FAILED);
