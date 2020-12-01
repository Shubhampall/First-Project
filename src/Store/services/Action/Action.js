import {
  Add_To_Email,
  Add_To_Password,
  Add_To_Name,
} from '../../../constant/Constant';

export const addToEmail = (data) => {
  return {
    type: Add_To_Email,
    data,
  };
};
export const addToPassword = (data) => {
  return {
    type: Add_To_Password,
    data,
  };
};
export const addToName = (data) => {
  return {
    type: Add_To_Name,
    data,
  };
};
