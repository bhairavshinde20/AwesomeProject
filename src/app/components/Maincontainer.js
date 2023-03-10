import 'react-native-gesture-handler';
import * as React from 'react';
import styles from './styles/MainContainerStyle'
import HomeScreen from './screen/Home';
import SerachScreen from './screen/Serach';
import FavScreen from './screen/Fav';
import CartScreen from './screen/Cart';
import AccountScreen from './screen/Account';
import SingleProduct from './screen/SingleProduct';
import Signup from './screen/Signup';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from './screen/CustomDrawer';

import {Animated,StyleSheet,View} from 'react-native';
import {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainComponent from './screen/MainComponent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,      
        tabBarStyle:{height:73,
        width:'90%',
        alignSelf:'center',
        borderRadius:20,marginBottom:10,
        padding:10,
        paddingBottom:10
        },
        tabBarActiveTintColor: '#6D00B6',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home ',
          tabBarLabelStyle: {fontSize: 17},
          tabBarIcon: ({focused}) => (
            <Icon name="home" color={focused ? '#6D00B6' : 'black'} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SerachScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: {fontSize: 17},
          tabBarIcon: ({focused}) => (
            <Icon
              name="search"
              color={focused ? '#6D00B6' : 'black'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavScreen"
        component={FavScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarLabelStyle: {fontSize: 17},
          tabBarIcon: ({focused}) => (
            <Icon
              name="favorite-border"
              color={focused ? '#6D00B6' : 'black'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: {fontSize: 17},
          tabBarIcon: ({focused}) => (
            <Icon
              name="add-shopping-cart"
              color={focused ? '#6D00B6' : 'black'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarLabelStyle: {fontSize: 17},
          tabBarIcon: ({focused}) => (
            <Icon
              name="person-outline"
              color={focused ? '#6D00B6' : 'black'}
              size={30}
            />
          ),
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
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="Signup" component={Signup} />
      {/* <Stack.Screen name="MainComponent" component={MainComponent} /> */}


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
      {/* <Stack.Screen name="CheckOut" component={CheckOut} /> */}
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

const Maincontainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: 'black', //Set Header text color

          drawerLabelStyle: {
            // marginLeft: 25,
            fontFamily: 'Roboto-Medium',
            fontSize: 25,
          },
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({color}) => (
              <Icon
                name="home"
                style={styles.iconstyle}
                size={30}
                color="#a53fe9"
              />
            ),
          }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SearchScreenStack"
          options={{
            drawerLabel: 'Search',
            title: 'Search',
            drawerIcon: ({color}) => (
              <Icon
                name="search"
                style={styles.iconstyle}
                size={30}
                color="#a53fe9"
              />
            ),
          }}
          component={SearchScreenStack}
        />
        <Drawer.Screen
          name="FavScreenStack"
          options={{
            drawerLabel: 'Favroit',
            title: 'Favroit',
            drawerIcon: ({color}) => (
              <Icon
                name="favorite"
                style={styles.iconstyle}
                size={30}
                color="#a53fe9"
              />
            ),
          }}
          component={FavScreenStack}
        />
        <Drawer.Screen
          name="CartScreenStack"
          options={{
            drawerLabel: 'Cart',
            title: 'Cart',
            drawerIcon: ({color}) => (
              <Icon
                name="shop"
                style={styles.iconstyle}
                size={30}
                color="#a53fe9"
              />
            ),
          }}
          component={CartScreenStack}
        />
        <Drawer.Screen
          name="AccountScreenStack"
          options={{
            drawerLabel: 'Account',
            title: 'Account',
            drawerIcon: ({color}) => (
              <Icon
                name="person"
                style={styles.iconstyle}
                size={30}
                color="#a53fe9"
              />
            ),
          }}
          component={AccountScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Maincontainer;