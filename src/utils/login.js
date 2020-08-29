import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL

function login(credentials) {
	return axios.post(`${apiURL}/auth/login`, credentials)
		.then(response => {
			return response.data
		})	
		.catch(err => {
			return err
		})
}

export {login}