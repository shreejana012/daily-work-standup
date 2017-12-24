import {combineReducers} from 'redux';
import IndexStandup from './index_standup';
import AddStandupReducer from './add_standup_reducer';
import ShowStandupReducer from './show_standup_reducer';
const allReducers = combineReducers({
   IndexStandup,
   AddStandupReducer,
   ShowStandupReducer
})
export default allReducers;
