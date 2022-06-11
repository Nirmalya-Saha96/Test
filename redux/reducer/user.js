import { GET_ALL_USERS, GET_USER } from '../action/types';

//stating the initialstate as an empty array
const initialState = {
    users: [],
    user: null
};

//receives the action ans initialState
function userReducer(state = initialState, action) {
  //destructing the type and payload from actions
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_USERS:
        return {
            ...state,
            users: payload
          };
    case GET_USER:
      return {
       ...state,
       user: payload
      };
    default:
      return state;
  }
}

export default userReducer;