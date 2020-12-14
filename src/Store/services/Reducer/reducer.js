import {
  Add_To_Email,
  Add_To_Password,
  Add_To_Name,
} from '../../../constant/Constant';

const initalstate = {
  userData: {
    name: '',
    email: '',
    password: '',
  },
};
const addInput = (state = initalstate, action) => {
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

export default addInput;
