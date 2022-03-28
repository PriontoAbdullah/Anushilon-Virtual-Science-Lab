import { GLOBALTYPES } from '../actions/globalTypes';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  jwtToken: localStorage.getItem('jwtToken'),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
