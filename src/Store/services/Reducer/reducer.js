import {
  Add_To_Email,
  Add_To_Password,
  Add_To_Name,
  Login_Email,
  Login_Password,
} from '../../Types/type';

const initalstate = {
  userData: {
    name: '',
    email: '',
    password: '',
  },
  loginData: {
    email: '',
    password: '',
  },
};
export const addInput = (state = initalstate, action) => {
  switch (action.type) {
    case Add_To_Email:
      return {...state, userData: {...state.userData, email: action.data}};
    case Add_To_Password:
      return {...state, userData: {...state.userData, password: action.data}};
    case Add_To_Name:
      return {...state, userData: {...state.userData, name: action.data}};
    default:
      return {...state};
  }
};
export const loginInput = (state = initalstate, action) => {
  switch (action.type) {
    case Login_Email:
      return {...state, loginData: {...state.loginData, email: action.data}};
    case Login_Password:
      return {...state, loginData: {...state.loginData, password: action.data}};
    default:
      return {...state};
  }
};
