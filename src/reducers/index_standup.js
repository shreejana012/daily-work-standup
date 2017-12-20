import _ from 'lodash';
export default function standups(state = {}, action){
    switch (action.type) {
        case 'FETCH_STANDUP':
            return _.mapKeys(action.payload.data, 'id');
            // console.log(action.payload.data);
        default:
            return state;
    }
}