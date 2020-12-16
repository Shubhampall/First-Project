import React from "react";
import { View, Text, Pressable } from "react-native";
import Icons from "react-native-vector-icons/AntDesign";

import styles from "./Style";

const HeaderComponent = props => {
  const { name, navigation } = props;
  console.log(navigation, props);
  const isHomeScreen = name === "Home";
  const handleHeaderAction = () => {
    if (isHomeScreen) {
      navigation.openDrawer();
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.Header}>
      <Pressable onPress={handleHeaderAction}>
        <Icons
          style={styles.headerIcon}
          name={isHomeScreen ? "bars" : "arrowleft"}
        />
      </Pressable>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default HeaderComponent;
