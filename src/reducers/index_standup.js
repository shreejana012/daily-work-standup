// import _ from 'lodash';
export default function(state = {}, action){
    switch (action.type) {
        case 'FETCH_STANDUP':
            // return _.mapKeys(action.payload.data, 'id');
            return {standups: action.payload.data.standups}
        default:
            return state;
    }
}