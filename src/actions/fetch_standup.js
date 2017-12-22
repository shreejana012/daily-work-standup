import axios from 'axios';
const ROOT_URL = 'http://localhost:5000/api/v1';
const API_KEY = '?key=STANDUPS1234';
export function fetchStandUp() {
    const request = axios.get(`${ROOT_URL}/standups${API_KEY}`, {
         headers: { 
             'client': 'hG39rKDQsgSV1fkKCVGCdA',
             'expiry': '1514959841',
             'token-type': 'Bearer', 
             'access-token': '6avqSYNNQotewfeAzTqeBg',
             'uid': 'manager2@gmail.com'
             }
        });
    return {
        type: 'FETCH_STANDUP',
        payload: request
    };
}