import { combineReducers } from 'redux';

import swiperReducer from './swiper/reducer';

const rootReducer = combineReducers({
  swiper: swiperReducer,
});

export default rootReducer;
