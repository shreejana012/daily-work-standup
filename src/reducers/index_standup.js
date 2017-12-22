export default function(state = {}, action){
    switch (action.type) {
        case 'FETCH_STANDUP':
            return {standups: action.payload.data.standups}
        default:
            return state;
    }
}