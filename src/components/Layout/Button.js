import React from 'react';
import {Alert, Button} from 'react-native';

const ButtonComponent = ({title, navigation, page = null, pass}) => {
  return (
    <Button
      title={title}
      color="#663399"
      onPress={() => {
        // eslint-disable-next-line no-alert
        page != null ? navigation.navigate(page) : alert('Please check');
        // Alert.alert(pass);
      }}
    />
  );
};
export default ButtonComponent;
