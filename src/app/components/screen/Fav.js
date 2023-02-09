import {
  View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, SafeAreaView, FlatList, Image,
  Pressable, TextInput
} from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "../styles/favStyles"
import {removeFromFav} from "../redux/reducer/Favroit"
import { addToCart } from '../redux/reducer/Reducers';

export default function Fav({ navigation }) {
  const Fav = useSelector(state => state.fav.fav);
  // console.log(Fav)
 const dispatch = useDispatch()

const RemoverFromFev = item =>{
  dispatch(removeFromFav(item));
}

const addItemToCart = item => {
  dispatch(addToCart(item));
};
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Heading}>Favorite </Text>
      <View
        style={styles.InputBox}>
        <Icon name="search" size={35} color="black" />
        <TextInput
          style={styles.SearchInput}
          placeholder="Search Your Favorite Product.."
          placeholderTextColor="black"
        />
        <Icon name="close" size={35} color="black" />
      </View>
      <FlatList
        data={Fav}
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
                <Pressable
                style={styles.deleteIcon}
                >
                  <Icon
                    name="delete-outline"
                    size={30}
                    color="black"
                  onPress={() => RemoverFromFev(item)}
                  
                  />
                </Pressable>
                <Pressable
                style={styles.deleteIcon}
                
                >
                  <Icon
                    name="add-shopping-cart"
                    size={25}
                    color="black"
                    onPress={() => addItemToCart(item)}
                  />
                </Pressable>
              </View>
            </View>
          );
        }}
      />

    </SafeAreaView>
  );
}

