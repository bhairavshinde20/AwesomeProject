import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 50,
      // marginBottom:50
      // height:100
    },
    container_2: {
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      // height: 100,
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    image: {
      marginBottom: 50,
      height: 150,
      width: 150,
    },
    inputView: {
      // flex:1,
      flexDirection: 'row',
      backgroundColor: '#465881',
      //   borderWidth: 1,
      color: 'white',
      //   borderColor: '#FFBF00',
      borderRadius: 20,
      width: '80%',
      height: 70,
      marginBottom: 20,
      alignItems: 'center',
    },
    iconstyle: {
      marginLeft: 20,
    },
    TextInput: {
      fontSize: 22,
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Roboto',
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
      fontWeight: 'bold',
    },
    loginBtn: {
      width: '50%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      borderRadius: 20,
      //   borderWidth: 1,
      //   borderColor: 'white',
      backgroundColor: '#FFA500',
    },
    loginText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
    },
    forgot_button: {
      color: 'white',
    },
  });
  