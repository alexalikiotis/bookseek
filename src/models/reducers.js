import { combineReducers } from 'redux';

import swiperReducer from './swiper/reducer';
import booksReducer from './books/reducer';

const rootReducer = combineReducers({
  swiper: swiperReducer,
  books: booksReducer,
});

export default rootReducer;
