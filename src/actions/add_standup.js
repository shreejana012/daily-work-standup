import axios from 'axios';
const ROOT_URL = 'http://localhost:5000/api/v1';
const API_KEY = '?key=STANDUPNEW1234';
export function UpdateStandup() {
  const request = axios.get(`${ROOT_URL}/standups${API_KEY}`, { headers: { 'client': '1j9xzNxVsey9WuX8AosmQA','expiry': '1514971905','token-type': 'Bearer', 'access-token': 'IfCEQWzYXyzKvKqnUopkSA','uid': 'manager2@gmail.com' } });
  return {
    type: 'ADDED_STANDUP',
    payload: request
  }
}
