import { View, Text,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome, { SolidIcons} from 'react-native-fontawesome';

import React, { useState } from 'react';
import styles from "../styles/SignupStyle"
import { StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Signup() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async () => {
    setFormSubmitted(true);
    if (!firstname || !lastname || !email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_2}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
        {/* <StatusBar style="auto" /> */}
        <View style={styles.inputView}>
          {/* <Ionicons name={user}/> */}
          <Icon
            name="person"
            style={styles.iconstyle}
            size={30}
            color="white"
          />
          <TextInput
            style={styles.TextInput}
            placeholder="First Name"
            placeholderTextColor="white"
            onChangeText={firstname => setFirstName(firstname)}
            value={firstname}
          />
        </View>
        <View style={styles.inputView}>
          {/* <Ionicons name={user}/> */}
          <Icon
            name="person"
            style={styles.iconstyle}
            size={30}
            color="white"
          />
          {/* <FontAwesome icon={SolidIcons.smile} /> */}
          <TextInput
            style={styles.TextInput}
            placeholder="Last Name"
            placeholderTextColor="white"
            onChangeText={lastname => setLastName(lastname)}
            value={lastname}
          />
        </View>
        <View style={styles.inputView}>
          {/* <Ionicons name={user}/> */}
          <Icon name="email" style={styles.iconstyle} size={30} color="white" />
          <TextInput
            style={styles.TextInput}
            placeholder="User Email"
            placeholderTextColor="white"
            onChangeText={email => setEmail(email)}
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
            onChangeText={password => setPassword(password)}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}
        onPress={handleSubmit}>
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

