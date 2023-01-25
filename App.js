import {View, Text} from 'react-native';
import React from 'react';
import Maincontainer from './src/app/components/Maincontainer';
// import {Store} from './src/app/components/redux/Store';
import {Provider} from 'react-redux';
import store from './src/app/components/redux/Store';


export default function App() {
  return (
    <Provider store={store}>
    
        <Maincontainer />
     </Provider>

  );
}
