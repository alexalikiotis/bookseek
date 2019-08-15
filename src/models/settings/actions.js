import createAction from '@/utils/reduxActions';
import * as types from './types';

export const settingsUpdate = createAction(types.SETTINGS_UPDATE);

export const settingsLoadRequest = createAction(types.SETTINGS_LOAD_REQUEST);
export const settingsLoadSuccess = createAction(types.SETTINGS_LOAD_SUCCESS);
export const settingsLoadFailed = createAction(types.SETTINGS_LOAD_FAILED);
