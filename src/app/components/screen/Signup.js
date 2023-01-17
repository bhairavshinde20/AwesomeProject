import { View, Text} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
// import FontAwesome, { SolidIcons} from 'react-native-fontawesome';

import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Signup() {
    
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [mobno, setMobNO] = useState("");
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
    <View style={styles.container_2}>
      <Image style={styles.image} source={require("../../assets/logo.png")} />
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
        {/* <Ionicons name={user}/> */}
        <Icon name="person" style={styles.iconstyle} size={30} color="white" />
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="white"
          onChangeText={(firstname) => setFirstName(firstname)}
          value={firstname}
        />
      </View><View style={styles.inputView}>
        {/* <Ionicons name={user}/> */}
        <Icon name="person" style={styles.iconstyle} size={30} color="white" />
        {/* <FontAwesome icon={SolidIcons.smile} /> */}
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="white"
          onChangeText={(lastname) => setLastName(lastname)}
          value={lastname}
        />
      </View><View style={styles.inputView}>
        {/* <Ionicons name={user}/> */}
        <Icon name="person" style={styles.iconstyle} size={30} color="white" />
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile NUmber"
          placeholderTextColor="white"
          onChangeText={(mobno) => setMobNO(mobno)}
          value={mobno}
        />
      </View>
      <View style={styles.inputView}>
        {/* <Ionicons name={user}/> */}
        <Icon name="email" style={styles.iconstyle} size={30} color="white" />
        <TextInput
          style={styles.TextInput}
          placeholder="User Email"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="lock" style={styles.iconstyle} size={30} color="white" />

        <TextInput

          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          // underlineColorAndroid='black'
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>
      

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
      {/* <Text style={{ paddingTop: 10, fontWeight: "bold", color: "white" }}>
        If you don't Have an accout ?
      </Text> */}

      {/* <Text style={{color:"black"}}>HII</Text> */}
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#003f5c",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom:50
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
      backgroundColor: "#465881",
    //   borderWidth: 1,
      color:'white',
    //   borderColor: '#FFBF00',
      borderRadius: 20,
      width: "80%",
      height: 70,
      marginBottom: 20,
      alignItems: "center",
    },
    iconstyle: {
      marginLeft: 20
    },
    TextInput: {
      fontSize: 22,
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Roboto'
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
      fontWeight: 'bold',
    },
    loginBtn: {
      width: "50%",
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      borderRadius: 20,
    //   borderWidth: 1,
    //   borderColor: 'white',
    backgroundColor:'#FFA500'
    },
    loginText: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white"
    },
    forgot_button: {
      color: "white"
    }
  });