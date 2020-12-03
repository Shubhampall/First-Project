import {
  Add_To_Email,
  Add_To_Password,
  Add_To_Name,
} from '../../../constant/Constant';

const initalstate = {
  name: '',
  email: '',
  password: '',
};
const addInput = (state = initalstate, action) => {
  switch (action.type) {
    case Add_To_Email:
      return {...state, email: action.data};
    case Add_To_Password:
      return {...state, password: action.data};
    case Add_To_Name:
      return {...state, name: action.data};
    default:
      return {...state};
  }
};

export default addInput;
