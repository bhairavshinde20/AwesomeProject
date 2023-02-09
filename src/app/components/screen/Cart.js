import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/CartStyle'
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { removeFromCart } from '../redux/reducer/Reducers';
import { useDispatch } from 'react-redux';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Cart({ navigation }) {
  const dispatch = useDispatch();

  const item = useSelector(state => state.cart.cart);

  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };
  // total calculation for payments

  const Totalitem = item => {

    let totalPrice = 0;
    
    item.forEach((item) => {
      let price = parseFloat(item.price).toFixed(1);
      totalPrice += parseFloat(price);
      

    });
    return [totalPrice];

  }
  // const Totalitem = item =>{
  //   let quantity = 0;`
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
        renderItem={({ item, index }) => {
          let price = parseFloat(item.price).toFixed(2);

          return (
            <View style={styles.CartMainBox}>
              <View style={styles.ImgBox}>
                <Image
                  style={styles.ImgView}
                  // source={require('../../assets/shoose1.jpg')}`
                  // source={item.image}
                  source={{ uri: item.images[0].original_image_url }}
                />
              </View>
              <View style={styles.TitleCOntent}>
                <Text style={styles.Title}>{item.name}</Text>
                <Text style={styles.price}>${price}</Text>
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
          <Text style={{ color: 'black', fontSize: 20 }}>Total:$ {Totalitem(item)}</Text>
          <Text style={styles.PayBtn}> Pay Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
