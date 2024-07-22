// rootReducer.js
import { combineReducers } from 'redux';
import blogsReducer from '../features/blog/blogsSlice';

const rootReducer = combineReducers({
  blogs: blogsReducer,
  // Add other reducers here
});

export default rootReducer;