import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  Header: {
    borderColor: "black",
    borderWidth: 0.1,
    top: "-10%",
    borderTopColor: "#FFFFFF",
    // backgroundColor: '#FFFFFF',
    right: "20%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    width: "100%",
    left: "0.2%",
    padding: "0.5%",
    alignItems: "center",
    elevation: 1,
    height: "70%",
    paddingTop: 20,
    backgroundColor: "black"
  },
  input: {
    marginTop: "05%",
    backgroundColor: "#fff",
    flex: 2,
    width: "90%",
    flexDirection: "row",
    alignItems: "center"
    //left: 0,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'black',
    // width: '90%',
    // borderColor: 'black',
    // borderWidth: 0,
    // // eslint-disable-next-line no-dupe-keys
    // backgroundColor: 'black',
    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 1},
    // shadowRadius: 2,
    // shadowOpacity: 0.05,
    // borderRadius: 5,
    // elevation: 2,
    // flex: 2,
    // height: '-100%',
  },
  item: {
    marginTop: 24,
    padding: 30
  },
  upper: {
    width: "100%",
    height: "35%",
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    top: 10
  },
  secondupper: {
    top: 0,
    width: "100%",
    height: "30%",
    flex: 2,
    backgroundColor: "pink"
  },
  buttonView: { flexDirection: "row", width: "100%" },
  middleText: { fontSize: 50, marginLeft: "10%", top: "01%" },
  scrollView: {
    width: "100%",
    paddingHorizontal: 5
  },
  // eslint-disable-next-line no-dupe-keys
  scroll: {
    marginVertical: 10
  },
  map: {
    height: 120,
    marginTop: 5,
    alignItems: "center"
  },
  Top10: {
    top: "10%"
  },
  shopping: {
    marginLeft: "10%",
    top: "10%"
  },
  backgroundBox: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center"
  },

  searchBox: {
    width: "90%"
  }
});
export default styles;
