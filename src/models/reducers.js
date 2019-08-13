import { combineReducers } from 'redux';

import swiperReducer from './swiper/reducer';
import resultsReducer from './results/reducer';
import libraryReducer from './library/reducer';
import previewReducer from './preview/reducer';
import reviewsReducer from './reviews/reducer';
import settingsReducer from './settings/reducer';

const rootReducer = combineReducers({
  swiper: swiperReducer,
  results: resultsReducer,
  library: libraryReducer,
  preview: previewReducer,
  reviews: reviewsReducer,
  settings: settingsReducer,
});

export default rootReducer;
