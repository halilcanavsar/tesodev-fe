import { useReducer } from 'react';
import userReducer from './userReducer';
import { SEARCH_USERS } from './types';
import userContext from './userContext';
import Data from '../data.json';

const UserState = (props) => {
  const initialState = {
    users: Data.data,
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const searchUsers = (text) => {
    console.log(Data, 'data');
    dispatch({
      type: SEARCH_USERS,
      payload: text,
    });
  };

  return (
    <userContext.Provider value={{ users: state.users, searchUsers }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
