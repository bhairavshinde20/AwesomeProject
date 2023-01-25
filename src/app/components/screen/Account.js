import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { FontAwesome5 } from 'react-native-vector-icons';
import React, {useState} from 'react';

export default function Account({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState()


const HandleSubmit = () =>{
  if(email =="" || password ==""){
    setError(true)

  }
}


  // const [checkvalieemail, setCheckValidEmail] = useState(false);
  // const handlecheck = text => {
  //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   setEmail(text);
  //   if (reg.text(text)) {
  //     setCheckValidEmail(false);
  //   } else {
  //     checkvalieemail("Email and password are mandatory");
  //   }

  // };

  return (
    
    <View style={styles.container}>
      <View style={styles.container_2}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />

        <View style={styles.inputView}>
          {/* <Ionicons name={user}/> */}
           <Icon
            name="person"
            style={styles.iconstyle}
            size={30}
            color="white"
          /> 
           {/* <FontAwesome5
                name="user-alt"
                size={30}
                // color={focused ? 'red' : 'gray'}
              ></FontAwesome5> */}
          <TextInput
          isRequired 
            style={styles.TextInput}
            placeholder="User Email"
            placeholderTextColor="white"
            // onChangeText={text => handlecheck(text)}
            onChange={email => setEmail(email)}
            value={email}
          />
        </View>
        {/* {checkvalieemail ? (
          <Text style={{color:"red"}}>Wrong Email address</Text>
        ) : (
          <Text></Text>
        )} */}
{
  error ? <Text style={{color:"red"}}>Email and password are mandatory</Text> : <Text></Text>
}

        <View style={styles.inputView}>
          <Icon name="lock" style={styles.iconstyle} size={30} color="white" />

          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            // onChangeText={text => handlecheck(text)}
            onChangeText={password => setPassword(password)}
            value={password}
          />
          {/* <Icon
            name="visibility"
            style={{marginRight: 20}}
            size={20}
            color="white"
          /> */}
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}  >LOGIN</Text>
        </TouchableOpacity>
        {/* <Text style={{ paddingTop: 10, fontWeight: "bold", color: "white" }}>
          If you don't Have an accout ?
        </Text> */}
        <Text
          style={{
            paddingTop: 10,
            fontWeight: 'bold',
            color: 'white',
            fontSize: 20,
          }}
          onPress={() => navigation.navigate('Signup')}>
          Signup
        </Text>

        {/* <Text style={{color:"black"}}>HII</Text> */}
      </View>
    </View>
  );
}
// css for the login form start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
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
    shadowOffset: {width: -2, height: 4},
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
    // borderWidth: 1,
    color: 'white',
    // borderColor: '#FFBF00',

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
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: 'white',
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
// css for the login form end
