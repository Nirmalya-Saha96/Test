import { GET_ALL_USERS, GET_USER } from './types';


export const getUsers = (data) => dispatch => {
    dispatch({
      type: GET_ALL_USERS,
      payload: data
    });
  }

  export const getUserSingle = (data) => dispatch => {
    dispatch({
      type: GET_USER,
      payload: data
    });
  }