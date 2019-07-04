import { combineReducers } from 'redux';

import swiperReducer from './swiper/reducer';
import booksReducer from './books/reducer';
import libraryReducer from './library/reducer';

const rootReducer = combineReducers({
  swiper: swiperReducer,
  books: booksReducer,
  library: libraryReducer,
});

export default rootReducer;
