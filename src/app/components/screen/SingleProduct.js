import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  RefreshControl,
  VirtualizedList,
  TouchableHighlight,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Slideshow from 'react-native-image-slider-show-razzium';
import {useSelector} from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { addToCart } from '../redux/reducer/Reducers';
export default function SingleProduct({navigation}) {
  const newData = useSelector(state => state.product.product);
  let myKeysArr = [];
  myKeysArr.push(newData);
  // console.log(myKeysArr);

  // add item to cart code  
  const dispatch = useDispatch();

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };


  //  click background color code

  // const [ isPress, setIsPress ] = React.useState(false);

  // const touchProps = {
  //   activeOpacity: 1,
  //   underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
  //   style: isPress ? styles.IconCircle : styles.btnNormal, // <-- but you can still apply other style changes
  //   onHideUnderlay: () => setIsPress(false),
  //   onShowUnderlay: () => setIsPress(true),
  //   onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
  // };
  return (
    <FlatList
    data={myKeysArr}
    renderItem={({item}) => {
      return (
        <View style={styles.container}>
          <View style={styles.ImgContainer}>
            <Image
              style={styles.mainImg}
              // source={require('../../assets/nike1.jpg')}
              source={item.image}
            />
          </View>
          <View style={styles.Img4Container}>
            <View style={styles.Img1Container}>
              <Image
                style={styles.ImagView}
                //   source={require('../../assets/nike11.jpg')}
                source={item.image2}
              />
            </View>
            <View style={styles.Img1Container}>
              <Image
                style={styles.ImagView}
                //   source={require('../../assets/nike12.jpg')}
                source={item.image3}
              />
            </View>
            <View style={styles.Img1Container}>
              <Image
                style={styles.ImagView}
                //   source={require('../../assets/nike1.jpg')}
                source={item.image4}
              />
            </View>
            <View style={styles.Img1Container}>
              <Image
                style={[styles.ImagView, styles.Img4view]}
                //   source={require('../../assets/nike13.jpg')}
                source={item.image5}
              />
            </View>
          </View>
          <View style={styles.TitleContainer}>
            <Text style={styles.ImgTitle}>{item.name}</Text>
            <View style={styles.PriceView}>
              <Text style={styles.Price}>$ {item.price}</Text>
            </View>
          </View>
          <View style={styles.StarIconContainer}>
            <Icon name="star-rate" size={30} color="#ecca08" />
            <Icon name="star-rate" size={30} color="#ecca08" />
            <Icon name="star-rate" size={30} color="#ecca08" />
            <Icon name="star-half" size={30} color="#ecca08" />
          </View>
          <Text style={styles.AvailableSize}>Available Size</Text>
          <View style={styles.MainSizeBox}>
            <View style={styles.SizeBox}>
              <Text style={styles.SizeNumber}>US 6</Text>
            </View>
            <View style={styles.SizeBox}>
              <Text style={styles.SizeNumber}>US 7</Text>
            </View>
            <View style={styles.SizeBox}>
              <Text style={styles.SizeNumber}>US 8</Text>
            </View>
            <View style={[styles.SizeBox, styles.US9]}>
              <Text style={styles.SizeNumber}>US 9</Text>
            </View>
          </View>
          <Text style={styles.AvailableSize}>Color</Text>
          <View style={styles.ColorBox}>
            <View style={styles.ColorBox2}>
              <View style={[styles.CBox, styles.CBox1]}></View>
              <View style={[styles.CBox, styles.CBox2]}></View>
              <View style={[styles.CBox, styles.CBox3]}></View>
              <View style={[styles.CBox, styles.CBox4]}></View>
            </View>
            <View style={styles.IconStyles}>
              <Pressable>
              <View style={styles.IconCircle}>
                <Icon
                  name="add-shopping-cart"
                  size={45}
                  color="black"
                  onPress={() => addItemToCart(item)}
                  
                />
                {/* </TouchableHighlight> */}
              </View>
              </Pressable>
            </View>
          </View>
          <Text style={styles.AvailableSize}>Despriction</Text>
          <Text style={styles.Description}>
            A shoe is an item of footwear intended to protect and comfort
            the human foot. They are often worn with a sock. Shoes are also
            used as an item of decoration and fashion.
          </Text>
        </View>
      );
    }}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ImgContainer: {
    width: '90%',
    height: 350,
    //    borderWidth:1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mainImg: {
    width: '100%',
    height: 320,
    resizemode: 'content',
  },
  Img4Container: {
    width: '100%',
    height: 130,
    alignSelf: 'center',
    // borderWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  Img1Container: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    opacity: 0.8,
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImagView: {
    width: '100%',
    height: 42,
    resizemode: 'content',
  },
  Img4view: {
    width: '50%',
    height: 70,
  },
  TitleContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImgTitle: {
    color: 'black',
    fontSize: 45,
    marginLeft: 10,
  },
  PriceView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  Price: {
    color: 'black',
    fontSize: 45,
  },
  StarIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  AvailableSize: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
  },
  MainSizeBox: {
    width: '75%',
    height: 100,
    // alignSelf: 'center',
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  SizeBox: {
    flex: 1,
    margin: 10,
    width: 85,
    height: 55,
    borderWidth: 1,
    borderColor: '#f8d300f6',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f8d300f6',
  },
  US9: {
    backgroundColor: '#f8d300f6',
    borderWidth: 0,
  },
  SizeNumber: {
    color: 'black',
    fontSize: 24,
  },
  ColorBox: {
    width: '100%',
    height: 90,
    margin: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ColorBox2: {
    width: '50%',
    flexDirection: 'row',
  },
  CBox: {
    flex: 1,
    margin: 10,
    width: 38,
    height: 38,
    // borderWidth: 1,
    borderRadius: 50,
  },
  CBox1: {
    backgroundColor: 'black',
    opacity: 0.8,
  },
  CBox2: {
    backgroundColor: 'red',
    opacity: 0.7,
  },
  CBox3: {
    backgroundColor: '#f8d300f6',
    // opacity:0.8
  },
  CBox4: {
    backgroundColor: 'blue',
    opacity: 0.7,
  },
  IconStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconCircle: {
    // borderWidth:1,
    backgroundColor: '#f8d300f6',
    height: 80,
    width: 80,
    borderRadius: 50,
    // marginBottom: 80,
    marginLeft: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    right: 0,
    bottom: 0,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
  Description: {
    marginLeft: 10,
    fontSize: 18,
    color: 'black',
  },
});
