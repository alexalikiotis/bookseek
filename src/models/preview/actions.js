import createAction from '@/utils/reduxActions';
import * as types from './types';

export const previewRequest = createAction(types.PREVIEW_REQUEST);
export const previewSuccess = createAction(types.PREVIEW_SUCCESS);
export const previewFailed = createAction(types.PREVIEW_FAILED);
export const previewCanceled = createAction(types.PREVIEW_CANCELED);
