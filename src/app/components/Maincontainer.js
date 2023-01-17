import "react-native-gesture-handler"
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';

import HomeScreen from './screen/Home';
import SerachScreen from './screen/Serach';
import FavScreen from './screen/Fav';
import CartScreen from './screen/Cart';
import AccountScreen from './screen/Account';
import Signup from "./screen/Signup";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}
    //   style={styles.Bottom}

      >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home ',
          tabBarIcon: () => <Icon name="home" color="#FFB100" size={40} />,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SerachScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <Icon name="search" color="#FFB100" size={40} />,
        }}
      />
      <Tab.Screen
        name="FavScreen"
        component={FavScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: () => <Icon name="favorite" color="#FFB100" size={40} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: () => <Icon name="shop" color="#FFB100" size={40} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <Icon name="person" color="#FFB100" size={40} />,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
    </Stack.Navigator>
  );
};

const SearchScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={SerachScreen} />
    </Stack.Navigator>
  );
};
const FavScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favroit"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Favroit" component={FavScreen} />
    </Stack.Navigator>
  );
};

const CartScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="cart"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};
const AccountScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};

// const SignScreenStack = () => {
//     return (s
//       <Stack.Navigator
//         // initialRouteName="Account"
//         screenOptions={{headerShown: true}}>
//         <Stack.Screen name="signup" component={Signup} />
//       </Stack.Navigator>
//     );
//   };
  


const Maincontainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            // drawerIcon: ({focused,size}) =>{
            //     <Icon
            //     name='home'
            //     size={size}
            //     color={focused ? 'red' : 'black '}/>
            // }
          }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SearchScreenStack"
          options={{
            drawerLabel: 'Search',
            title: 'Search',
          }}
          component={SearchScreenStack}
        />
        <Drawer.Screen
          name="FavScreenStack"
          options={{
            drawerLabel: 'Favroit',
            title: 'Favroit',
          }}
          component={FavScreenStack}
        />
        <Drawer.Screen
          name="CartScreenStack"
          options={{
            drawerLabel: 'Cart',
            title: 'Cart',
          }}
          component={CartScreenStack}
        />
        <Drawer.Screen
          name="AccountScreenStack"
          options={{
            drawerLabel: 'Account',
            title: 'Account',
          }}
          component={AccountScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Bottom: {
    size: 50,
    color: 'red',
    height: 100,
  },
});
export default Maincontainer;
// export {BottomTabStack}

// import  React from "react"
// import { NavigationContainer  } from "@react-navigation/native"
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import Icon from "react-native-vector-icons/MaterialIcons"

// // screens tab

// import HomeScreen from "./screen/Home"
//  import SerachScreen from "./screen/Serach"
//  import FavScreen from "./screen/Fav"
//  import CartScreen from "./screen/Cart"
//  import AccountScreen from "./screen/Account"
// // import { Colors } from "react-native/Libraries/NewAppScreen"

// const Tab = createBottomTabNavigator();

// function Maincontainer (){

//     return(
//         <NavigationContainer >
//         {/* <StatusBar style={{backgroundColor:'#FFB100'}} /> */}

//             <Tab.Navigator

//             initialRouteName='Home'>
//                 <Tab.Screen

//                 name ='Home'
//                  component={HomeScreen}

//                  options={{

// tabBarIcon: () => (
//     <Icon name='home' color='#FFB100' size={40} />
// )
//                 }}
//                 style={{paddingBottom:50,
//                     backgroundColor: 'red'}}
//                  />
//                 <Tab.Screen name ='Search' component={SerachScreen}
//                  options={{
//                     tabBarIcon: () => (
//                         <Icon name='search' color='#FFB100' size={40} />
//                     ),
//                 }}
//                 />
//                 <Tab.Screen name ='Favroit' component={FavScreen}
//                  options={{
//                     tabBarIcon: () => (
//                         <Icon name='favorite' color='#FFB100' size={40} />
//                     ),
//                 }}
//                 />
//                 <Tab.Screen name ='Cart' component={CartScreen}
//                  options={{
//                     tabBarIcon: () => (
//                         <Icon name='shop' color='#FFB100' size={40} />
//                     ),
//                 }}
//                 />
//                 <Tab.Screen name ='Account' component={AccountScreen}
//                  options={{
//                     tabBarIcon: () => (
//                         <Icon name='person' color='#FFB100' size={40} />
//                     ),
//                 }}
//                 />

//             </Tab.Navigator>
//         </NavigationContainer >
//     )
// }

// export default Maincontainer
