import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  Heading: {
    color: 'black',
    fontSize: 40,
    // marginLeft:30
  },
  InputBox: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: "#e6e4e0",
    borderRadius: 40,
    width: '100%',
    height: 70,
  },
  SearchInput: {
    fontSize: 20,
    alignSelf: "flex-end",
    paddingRight: 80,
    color: "black"
  },
  CartMainBox: {
    width: '100%',
    height: 140,
    backgroundColor: 'white',
    marginTop: 30,
    elevation: 10,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  ImgBox: {
    width: 140,
    // height: 130,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImgView: {
    width: '100%',
    height: 85,
    resizemode: 'content',
  },
  TitleCOntent: {
    flex: 1,
    width: 160,
    height: 120,
    borderColor: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Title: {
    color: 'black',
    fontSize: 30,
  },
  price: {
    color: 'black',
    fontSize: 20,
  },
  IconContainer: {
    width: 140,
    // height:80,
    flexDirection: 'row',
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  deleteIcon: {
    borderRadius: 30,
    height: 50,
    width: 50,
    backgroundColor: "#ecca08",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },

});