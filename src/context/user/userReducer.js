import {
  EDIT_USER,
  GET_USER,
  GET_ISSUES,
  LOGIN_USER,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case EDIT_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case GET_ISSUES:
      return {
        ...state,
        issues: action.payload,
        loading: false
      }
    default:
      return state;
  }
}