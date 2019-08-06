import { combineReducers } from 'redux';

import swiperReducer from './swiper/reducer';
import resultsReducer from './results/reducer';
import libraryReducer from './library/reducer';
import previewReducer from './preview/reducer';

const rootReducer = combineReducers({
  swiper: swiperReducer,
  results: resultsReducer,
  library: libraryReducer,
  preview: previewReducer,
});

export default rootReducer;
