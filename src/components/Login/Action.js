import {Login_Email, Login_Password} from '../../Store/Types/type';

export const addToEmail = (data) => {
  return {
    type: Login_Email,
    data,
  };
};
export const addToPassword = (data) => {
  return {
    type: Login_Password,
    data,
  };
};
