import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import styles from "../styles/AccountStyle"
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function Account({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }

    // Perform login API call here
    setEmail('');
    setPassword('')
  

  };
  return (
    // <ScrollView>
    <View style={styles.container}>
      <View style={styles.container_2}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
        <View style={styles.inputView}>
          <Icon
            name="person"
            style={styles.iconstyle}
            size={30}
            color="white"
          />
          <TextInput
            isRequired
            style={styles.TextInput}
            placeholder="User Email"
            keyboardType="email-address"
            placeholderTextColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            onChange={email => setEmail(email)}
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
            onChangeText={password => setPassword(password)}
            value={password}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}
          onPress={handleLogin}>
          <Text style={styles.loginText}  >LOGIN</Text>
        </TouchableOpacity>
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
      </View>
    </View>
    // </ScrollView>
  );
}


