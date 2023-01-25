import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {removeFromCart} from '../redux/reducer/Reducers';
import {useDispatch} from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Cart({navigation}) {
  const dispatch = useDispatch();

  const item = useSelector(state => state.cart.cart);

  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };
 
 

  const Totalitem = item =>{
  
        let totalPrice = 0;
        item.forEach((item) => {
          totalPrice += item.price;
          
        });
        return [totalPrice];
  }

  // const Totalitem = item =>{
  //   let quantity = 0;
  //       let totalPrice = 0;
  //       item.forEach((item) => {
  //         quantity += item.quantity;
  //         totalPrice += item.price * item.quantity;
  //       });
  //       return [totalPrice];
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Shooping Cart</Text>

      <FlatList
        data={item}
        renderItem={({item, index}) => {
          return (
            <View style={styles.CartMainBox}>
              <View style={styles.ImgBox}>
                <Image
                  style={styles.ImgView}
                  // source={require('../../assets/shoose1.jpg')}`
                  source={item.image}
                />
              </View>
              <View style={styles.TitleCOntent}>
                <Text style={styles.Title}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <View style={styles.IconContainer}>
                <Pressable>
                  <Icon
                    name="delete"
                    size={30}
                    color="#ecca08"
                    onPress={() => removeItemFromCart(item)}
                  />
                </Pressable>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity>
        <View style={styles.parent}>
          <Text style={{color:'black',fontSize:20}}>Total:$ {Totalitem(item)}</Text>
          <Text style={styles.PayBtn}> Pay Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin:20,
    padding: 20,
    backgroundColor: 'white',
  },
  Heading: {
    color: 'black',
    fontSize: 40,
  },
  CartMainBox: {
    width: '100%',
    height: 140,
    // borderWidth:1,
    backgroundColor: 'white',
    marginTop: 30,
    elevation: 10,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  // shadowProp: {
  //   shadowOffset: {width: -2, height: 4},
  //   shadowColor: '#171717',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 3,
  // },
  ImgBox: {
    // borderWidth:1,
    // borderColor:'black',
    width: 140,
    height: 120,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImgView: {
    width: 160,
    height: 110,
    resizemode: 'content',
    resizemode:'fix'
  },
  TitleCOntent: {
    flex: 1,
    width: 160,
    height: 120,
    // borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Title: {
    color: 'black',
    fontSize: 30,
  },
  price: {
    color: 'black',
    fontSize: 20,
  },
  IconContainer: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  parent: {
    bottom: 0,
    left: 0,
    right: 0,
    position: 'relative',
    alignSelf: 'center',
    width: 150,
    height: 70,
    // borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#ecca08',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  PayBtn: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
