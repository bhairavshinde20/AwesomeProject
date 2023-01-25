import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
  BackHandler,
} from 'react-native';
// import GestureHandlerRootView from 'react-native-gesture-handler';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ImageSlider} from 'react-native-image-slider-banner';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/reducer/Reducers';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {ViewSingleProduct} from '../redux/reducer/Product';
const Home = ({navigation}) => {
  //  new code
  // const cart = useSelector(state => state.cart.cart);
  // console.log(cart);
  const dispatch = useDispatch();

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };
  const data = [
    {
      id: 1,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 100,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/ecom3.png'),
      image2: require('../../assets/ecom2.png'),
      image3: require('../../assets/ecom1.png'),
      image4: require('../../assets/ecom4.png'),
      image5: require('../../assets/ecom5.png'),
    },
    {
      id: 2,
      name: 'Nk Revolition 6 NN',
      title: 'Tranding',
      price: 240,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/ecom8.png'),
      image2: require('../../assets/ecom7.png'),
      image3: require('../../assets/ecom9.png'),
      image4: require('../../assets/ecom7.png'),
      image5: require('../../assets/ecom6.png'),
    },
    {
      id: 3,
      name: 'NK Air Zoom 39',
      title: 'Best Selling',
      price: 120,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/ecom12.png'),
      image2: require('../../assets/ecom11.png'),
      image3: require('../../assets/ecom13.png'),
      image4: require('../../assets/ecom14.png'),
      image5: require('../../assets/ecom11.png'),
    },
    {
      id: 4,
      name: 'Nk Air Winflo 9',
      title: 'tranding',
      price: 140,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/shoose4.jpg'),
      image2: require('../../assets/ecom11.png'),
      image3: require('../../assets/ecom13.png'),
      image4: require('../../assets/ecom14.png'),
      image5: require('../../assets/ecom11.png'),
    },
    {
      id: 5,
      name: 'M Nk Air Max',
      title: 'Best Selling',
      price: 160,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/shoose5.jpg'),
      image2: require('../../assets/ecom11.png'),
      image3: require('../../assets/ecom13.png'),
      image4: require('../../assets/ecom14.png'),
      image5: require('../../assets/ecom11.png'),
    },
    {
      id: 6,
      name: 'Nk Revolition 6 NN',
      title: 'Tranding',
      price: 180,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/nike1.jpg'),
      image2: require('../../assets/ecom11.png'),
      image3: require('../../assets/ecom13.png'),
      image4: require('../../assets/ecom14.png'),
      image5: require('../../assets/ecom11.png'),
    },
    {
      id: 7,
      name: 'NK Air Zoom 39',
      title: 'Best Selling',
      price: 200,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/nike2.jpg'),
      image2: require('../../assets/ecom11.png'),
      image3: require('../../assets/ecom13.png'),
      image4: require('../../assets/ecom14.png'),
      image5: require('../../assets/ecom11.png'),
    },
    {
      id: 8,
      name: 'Nk Air Winflo 9',
      title: 'Tranding',
      price: 220,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/nike3.jpg'),
      image2: require('../../assets/ecom11.png'),
      image3: require('../../assets/ecom13.png'),
      image4: require('../../assets/ecom14.png'),
      image5: require('../../assets/ecom11.png'),
    },

    {
      id: 9,
      name: 'Nk Air Zoom 10',
      title: 'Best Selling',
      price: 260,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/shooseIcon.jpg'),
      image2: require('../../assets/ecom15.png'),
      image3: require('../../assets/ecom16.png'),
      image4: require('../../assets/ecom17.png'),
      image5: require('../../assets/ecom18.png'),
    },
    {
      id: 10,
      name: 'Nike Zoom Air',
      title: 'Best Selling',
      price: 280,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/nike1.png'),
      image2: require('../../assets/ecom15.png'),
      image3: require('../../assets/ecom16.png'),
      image4: require('../../assets/ecom17.png'),
      image5: require('../../assets/ecom18.png'),
    },
    {
      id: 11,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 300,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/nike2.png'),
      image2: require('../../assets/ecom15.png'),
      image3: require('../../assets/ecom16.png'),
      image4: require('../../assets/ecom17.png'),
      image5: require('../../assets/ecom18.png'),
    },
    {
      id: 12,
      name: 'Nike Air Zoom 29',
      title: 'Best Selling',
      price: 320,
      des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
      image: require('../../assets/nike3.png'),
      image2: require('../../assets/ecom15.png'),
      image3: require('../../assets/ecom16.png'),
      image4: require('../../assets/ecom17.png'),
      image5: require('../../assets/ecom18.png'),
    },
  ];

  const item = useSelector(state => state.product.product);

  const FetchSingleProducts = item => {
    dispatch(ViewSingleProduct(item));
    // console.log(item);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.container}>
        <ImageSlider
          data={[
            {
              img: 'https://c0.wallpaperflare.com/preview/186/124/897/red-and-white-air-jordan-1-shoe-on-concrete-floor.jpg',
            },
            {
              img: 'https://wallpaperaccess.com/full/1076764.jpg',
            },
            {
              img: 'https://wallpaperaccess.com/full/1597753.jpg',
            },
          ]}
          autoPlay={false}
          // onItemChanged={item => console.log('item', item)}
          closeIconColor="#ffff"
        />

        <Text style={styles.Cat}>Category</Text>
        <View style={styles.ShoesView}>
          <Image
            style={styles.BannerImg}
            source={require('../../assets/shoose2.jpg')}
          />
          <Text
            style={styles.Shoose}
            onPress={() => navigation.navigate('Search')}>
            Shoose
          </Text>
        </View>
        <Text
          style={styles.Cat}
          onPress={() => navigation.navigate('SingleProduct')}
          // onPress={() => SendData()}
        >
          Best Selling Product
        </Text>

        <SafeAreaView>
          <FlatList
            horizontal
            data={data}
            renderItem={({item}) => {
              return (
                // onPress={() =>
                //           navigation.navigate(
                //             `SingleProduct`,
                //             FetchSingleProducts(item),
                //           )
                //         }

                <View style={styles.serContainer}>
                  <Pressable>
                    <View style={[styles.ImageBox, styles.shadowProp]}>
                      <Icon name="favorite-outline" style={styles.IconStyles} />

                      <Image style={styles.Image} source={item.image} />

                      <Text style={styles.Name}>{item.name}</Text>
                      <Text style={styles.Tanding}>{item.title}</Text>
                      <View style={styles.PriceBox}>
                        <Pressable>
                          <Text
                            style={styles.price}
                            onPress={() =>
                              navigation.navigate(
                                `SingleProduct`,
                                FetchSingleProducts(item),
                              )
                            }>
                            <Text style={styles.Doller}>$</Text> {item.price}
                          </Text>
                        </Pressable>
                        {/* <Pressable>
                        <Button
                          title="View Product"
                          style={{marginTop: 20}}
                          // onPress={() => navigation.navigate('SingleProduct')}
                          // onPress={() => FetchSingleProducts(item)}
                          onPress={() =>
                            navigation.navigate(
                              `SingleProduct`,
                              FetchSingleProducts(item),
                            )
                          }
                          // onPress={()=>navigation.navigate(`SingleProduct/${FetchSingleProducts(id)}`)}
                        />
                      </Pressable> */}
                      </View>
                    </View>
                  </Pressable>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>

        <Text style={styles.Cat}>Trainding Product</Text>

        <SafeAreaView>
          <FlatList
            horizontal
            data={data.reverse()}
            renderItem={({item}) => {
              return (
                <View style={styles.serContainer}>
                  <View style={[styles.ImageBox, styles.shadowProp]}>
                    <Icon name="favorite-outline" style={styles.IconStyles} />
                    <Image style={styles.Image} source={item.image} />
                    <Text style={styles.Name}>{item.name}</Text>
                    <Text style={styles.Tanding}>{item.title}</Text>
                    <View style={styles.PriceBox}>
                      <Pressable>
                        <Text
                          style={styles.price}
                          onPress={() =>
                            navigation.navigate(
                              `SingleProduct`,
                              FetchSingleProducts(item),
                            )
                          }>
                          <Text style={styles.Doller}>$</Text> {item.price}
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>

        <Text style={styles.Cat}>New Arrival</Text>

        <SafeAreaView>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View style={styles.serContainer}>
                  <View style={[styles.ImageBox, styles.shadowProp]}>
                    <Icon name="favorite-outline" style={styles.IconStyles} />
                    <Image style={styles.Image} source={item.image} />
                    <Text style={styles.Name}>{item.name}</Text>
                    <Text style={styles.Tanding}>{item.title}</Text>
                    <View style={styles.PriceBox}>
                      <Pressable>
                        <Text
                          style={styles.price}
                          onPress={() =>
                            navigation.navigate(
                              `SingleProduct`,
                              FetchSingleProducts(item),
                            )
                          }>
                          <Text style={styles.Doller}>$</Text> {item.price}
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            }}
            numColumns={2}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Cat: {
    color: 'black',
    fontSize: 45,
    paddingLeft: 25,
    marginTop: 5,
  },
  ShoesView: {
    padding: 10,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    borderColor: 'grey',
    // opacity:0.5,
    borderWidth: 1,
    borderRadius: 50,
    width: 200,
    height: 80,
    justifyContent: 'space-evenly',
  },
  BannerImg: {
    width: '50%',
    height: 70,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    resizeMode: 'contain',
    marginLeft: 10,
  },
  Shoose: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
  },

  serContainer: {
    marginLeft: 20,
    // margin:20,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  NewImgBox: {
    marginLeft: 20,
    flex: 1,
    flexDirection: 'column-reverse',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  ImageBox: {
    width: 210,
    height: 310,
    // borderWidth: 1,
    // borderColor: '#808080',
    backgroundColor: 'white',

    alignItems: 'flex-start',
    borderRadius: 20,
    marginTop: 40,
    padding: 10,
    elevation: 10,
  },

  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  Name: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },
  IconStyles: {
    color: 'orange',
    // opacity: 0.3,
    fontSize: 40,
  },
  Doller: {
    color: '#808080',
    fontSize: 22,
  },
  Image: {
    width: '100%',
    height: 150,
    // flexDirection:"column",
    alignSelf: 'center',
    position: 'relative',
    overflow: 'hidden',
    resizeMode: 'contain',
    backgroundColor: 'transparant',
  },
  Tanding: {
    color: 'orange',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 7,
  },
  PriceBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  price: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
  },
  // btn: {
  //   backgroundColor: '#c275f5',
  //   width: 100,
  //   height: 50,
  //   borderRadius: 10,
  //   fontSize: 18,
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
