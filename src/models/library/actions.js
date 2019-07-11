import createAction from '@/utils/reduxActions';

import * as types from './types';

export const saveBookRequest = createAction(types.SAVE_BOOK_REQUEST);
export const saveBookSuccess = createAction(types.SAVE_BOOK_SUCCESS);
export const saveBookFailed = createAction(types.SAVE_BOOK_FAILED);

export const loadBooksRequest = createAction(types.LOAD_BOOKS_REQUEST);
export const loadBooksSuccess = createAction(types.LOAD_BOOKS_SUCCESS);
export const loadBooksFailed = createAction(types.LOAD_BOOKS_FAILED);

export const removeBookRequest = createAction(types.REMOVE_BOOK_REQUEST);
export const removeBookSuccess = createAction(types.REMOVE_BOOK_SUCCESS);
export const removeBookFailed = createAction(types.REMOVE_BOOK_FAILED);
