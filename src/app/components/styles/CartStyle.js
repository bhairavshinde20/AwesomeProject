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
      height: 120,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ImgView: {
      width: 160,
      height: 110,
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
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    parent: {
      bottom: 0,
      left: 0,
      right: 0,
      position: 'relative',
      alignSelf: 'center',
      width: 150,
      height: 70,
      borderRadius: 10,
      borderColor: 'black',
      backgroundColor: '#ecca08',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    PayBtn: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
  });
  