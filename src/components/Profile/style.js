import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  upper: {
    height: 100,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 5,
    transform: [{translateX: 95}, {translateY: 45}],
  },
  Card: {
    width:"auto",
    height:"auto",
    backgroundColor:"red"
  },
  profile: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
    left: -10,
    top: -10,
  },
});
