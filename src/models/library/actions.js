import createAction from '@/utils/reduxActions';

import * as types from './types';

export const saveBook = createAction(types.SAVE_BOOK);
export const removeBook = createAction(types.REMOVE_BOOK);
