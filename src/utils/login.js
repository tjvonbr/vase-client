import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL

function login(credentials, ...props) {
	return axios.post(`${apiURL}/auth/login`, credentials)
		.then(response => {
			if (response.status === 200) {
				return response.data
			} else {
				return Promise.reject("Sorry, but something went wrong during your login!");
			}
		})	
}

export { login }