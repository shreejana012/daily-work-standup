import axios from 'axios';
const ROOT_URL = 'http://localhost:5000/api/v1';
const API_KEY = '?key=STANDUPS1234';
export function UpdateStandup(standups) {
    const request = axios({
         headers: { 
            'client': 'hG39rKDQsgSV1fkKCVGCdA',
            'expiry': '1514959841',
            'token-type': 'Bearer',
            'access-token': '6avqSYNNQotewfeAzTqeBg',
            'uid': 'manager2@gmail.com' 
         },
        method: 'POST',
        url: `${ROOT_URL}/standups${API_KEY}`,
        data: standups
    });    
    return {
        type: 'ADDED_STANDUP',
        payload: request
    }
}
