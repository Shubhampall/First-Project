import React from 'react';
import {Button} from 'react-native';

const ButtonComponent = ({title, navigation, page = null}) => {
  return (
    <Button
      title={title}
      color="#663399"
      onPress={() => {
        // eslint-disable-next-line no-alert
        page != null ? navigation.navigate(page) : alert('Please check');
      }}
    />
  );
};
export default ButtonComponent;
