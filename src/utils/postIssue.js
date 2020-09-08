import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;
const token = window.localStorage.getItem('token');

function postIssue(issue) {
  console.log("...Posting")
  axios.post(`${apiURL}/issues`, issue, {
    headers: {
      Authorization: token
    }
  })
    .then(response => {
      if (response.status === 201) {
        return response.data
      } else {
        return Promise.reject("Sorry, but we couldn't add the issue!")
      }
    })
    .catch(err => console.log(err))
}

export { postIssue }