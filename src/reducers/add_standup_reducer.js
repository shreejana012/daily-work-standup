export default function(state = {}, action){
    switch (action.type) {
        case 'ADDED_STANDUP':
            return action.payload
        default:
            return state;
    }
}