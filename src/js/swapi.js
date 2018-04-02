const request = require('superagent');
const BASE_URL = 'https://swapi.co/api';

export default {
	getAllCharacters (page = 1) {
		return request.get(`${BASE_URL}/people?page=${page}`)
	}
}