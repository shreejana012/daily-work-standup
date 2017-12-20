import {combineReducers} from 'redux';
import IndexStandup from './index_standup';

const allReducers = combineReducers({
    standups: IndexStandup
})
export default allReducers;
