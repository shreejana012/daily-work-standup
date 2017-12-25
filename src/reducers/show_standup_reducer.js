export default function(state={}, action){
  switch(action.type){
    case 'STANDUP_SHOW':
      return {standup: action.payload.data.standup};
    default:
    return state;
  }
}
