import {combineReducers} from 'redux';
import IndexStandup from './index_standup';
import AddStandupReducer from './add_standup_reducer';
const allReducers = combineReducers({
   IndexStandup,
   AddStandupReducer
})
export default allReducers;
