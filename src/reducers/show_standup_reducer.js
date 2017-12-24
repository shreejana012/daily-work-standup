<<<<<<< HEAD
export default function(state={}, action){
  switch(action.type){
    case 'STANDUP_SHOW':
      return {standup: action.payload.data.standup};
    default:
    return state;
  }
}
=======
export default function(state = {}, action){
    switch(action.type){
        case 'STANDUP_SHOW':
            return {standup: action.payload.data.standup
            
            };
        default:
            return state;
    }
}
>>>>>>> 51c0978568a6fccad3aaa6f2435c3154dd4010ff
