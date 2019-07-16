import { combineReducers } from 'redux';

import swiperReducer from './swiper/reducer';
import resultsReducer from './results/reducer';
import libraryReducer from './library/reducer';

const rootReducer = combineReducers({
  swiper: swiperReducer,
  results: resultsReducer,
  library: libraryReducer,
});

export default rootReducer;
