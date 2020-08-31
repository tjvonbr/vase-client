import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL

function login(credentials, ...props) {
	return axios.post(`${apiURL}/auth/login`, credentials)
		.then(response => {
			console.log(response.status)
			if (response.status === 200) {
				console.log("Great")
			} else {
				return Promise.reject("Sorry");
			}
		})	
}

export {login}