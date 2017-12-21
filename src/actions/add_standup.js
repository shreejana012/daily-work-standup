import axios from 'axios';
const ROOT_URL = 'http://localhost:5000/api/v1';
const API_KEY = '?key=STANDUPNEW1234';
export function UpdateStandup() {
    const request = axios.post(`${ROOT_URL}/standups${API_KEY}`, { headers: { 'client': 'foz7HZ8nBpNz_z4lYPTaGA ','expiry': '1515059539','token-type': 'Bearer', 'access-token': 'MY4PUjsoWAt4np51IxNU8g','uid': 'manager2@gmail.com' } });    
    return {
        type: 'ADDED_STANDUP',
        payload: request
    }
}
