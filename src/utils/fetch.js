import axios from 'axios';

function postLogin(creds) {
  return axios
    .post('http://localhost:4000/auth/login', creds)
    .then(response => console.log(response))
    .catch(err => console.log(err))
};

export { postLogin };