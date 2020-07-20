import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
import NavBar from './NavBar';
import EditGrid from './EditGrid';
import UserContext from '../context/user/userContext'

// Send current user via props below
function ProfileEdit(props) {
  const userContext = useContext(UserContext);
  console.log("USER CONTEXT FROM EDIT", userContext);
  const { 
    id,
    token,
    first_name,
    last_name,
    email,
    bio } = userContext.user;

  const [editCreds, setEditCreds] = useState({
    first_name: first_name,
    last_name: last_name,
    email: email,
    bio: bio
  });

  console.log('edit creds', editCreds);

  // Handle submit
  async function handleSubmit(e) {
    e.preventDefault();
    // Wait for changes to be made
    const changes = await axios
      .put(`http://localhost:4000/users/${id}`, editCreds, {
        headers: {
          Authorization: token
        }
      })
    userContext.editUser(changes);
    props.history.push(`/profile/${id}`);
  };

  // Handle input
  function handleInput(e) {
    setEditCreds({ ...editCreds, [e.target.name]: e.target.value });
    console.log(editCreds);
  };

  return (
    <div className='edit-main-wrapper'>
      <Dimmer active={ userContext.loading ? true : false }>
        <Loader>Loading...</Loader>
      </Dimmer>
      <EditGrid />
      <div className='edit-form-wrapper'>
        <div className='edit-form-content-wrapper'>
          <div className='edit-form-content'>
            <form onSubmit={handleSubmit}>
              <h3 className='edit-form-header'>Edit your profile</h3>
              <label className='edit-form-label'>
                First Name
                <input 
                  className='edit-form-input'
                  type='text'
                  name='first_name'
                  onChange={handleInput}
                  value={editCreds.first_name}
                  placeholder={editCreds.first_name}
                />  
              </label>
              <label className='edit-form-label'>
                Last Name
                <input 
                  className='edit-form-input'
                  type='text'
                  name='last_name'
                  onChange={handleInput}
                  value={editCreds.last_name}
                  placeholder={editCreds.last_name}
                />  
              </label>
              <label className='edit-form-label'>
                Email
                <input 
                  className='edit-form-input'
                  type='email'
                  name='email'
                  onChange={handleInput}
                  value={editCreds.email}
                  placeholder={editCreds.email}
                />
              </label>
              <label className='edit-form-label'>
                Bio
                <textarea
                  className='edit-form-textarea'
                  type='text'
                  name='bio'
                  onChange={handleInput}
                  value={editCreds.bio}
                  placeholder={editCreds.bio}
                />
              </label>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  )
};

export default ProfileEdit;
