import { combineReducers } from 'redux';

import swiperReducer from '../models/swiper/reducer';

const rootReducer = combineReducers({
  swiper: swiperReducer,
});

export default rootReducer;
