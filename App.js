import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import Maincontainer from './src/app/components/Maincontainer';
import store from './src/app/components/redux/Store';


export default function App() {
  return (
    <Provider store={store}>
      <Maincontainer />
    </Provider>

  );
}
  