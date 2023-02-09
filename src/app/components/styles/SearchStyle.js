import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    serContainer: {
      // flex: 1,
      // backgroundColor: '#003f5c',
      width: '45%',
      marginLeft: 20,
      marginBottom: 20,
  
      flexDirection: 'column',
      alignContent: 'space-around',
      justifyContent: 'space-around',
      alignSelf: 'center',
    },
    ImageBox: {
      width: 210,
      height: 305,
      // borderWidth: 1,
      borderColor: '#808080',
      alignItems: 'flex-start',
      borderRadius: 20,
      marginTop: 40,
      padding: 10,
      backgroundColor: 'white',
    },
    Name: {
      fontSize: 20,
      color: 'black',
      alignSelf: 'center',
    },
    IconStyles: {
      color: 'orange',
      // opacity: 0.3,
      fontSize: 40,
    },
    Doller: {
      color: '#808080',
      fontSize: 22,
    },
    Image: {
      width: '100%',
      height: 150,
      // flexDirection:"column",
      // backgroundColor:"#A1E52C'",
      alignSelf: 'center',
      position: 'relative',
      overflow: 'hidden',
      resizeMode: 'contain',
      backgroundColor: 'transparant',
    },
    PriceBox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    price: {
      fontSize: 35,
      color: 'black',
      fontWeight: 'bold',
    },
    ShareIcon: {
      color: '#808080',
      opacity: 0.9,
      fontSize: 30,
    },
  
    //   box: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   width: '70%',
    //   height: 400,
    //   borderColor: '#FFBF00',
    //   borderRadius: 25,
    // },
    // NewAra: {
    //   fontSize: 20,
    //   fontFamily: 'Gill Sans',
    // },
    // Summ: {
    //   fontSize: 30,
    //   font,
    // },
    InputBox: {
      marginTop: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 15,
      backgroundColor: "#e6e4e0",
      borderRadius: 40,
      width: '94%',
      height: 70,
      alignSelf:"center"
    },
    SearchInput: {
      fontSize: 20,
      alignSelf: "flex-end",
      marginRight: '35%',
      color: "black"
    },
  });
  