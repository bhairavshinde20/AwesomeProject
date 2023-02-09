import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ImageSlider, Data } from 'react-native-image-slider-banner';
import { ScrollView } from 'react-native-gesture-handler';
import { ViewSingleProduct, setCurrentProduct } from '../redux/reducer/Product';
import { addToFav } from '../redux/reducer/Favroit';
import { addToCart } from '../redux/reducer/Reducers';

import Skeleton from '@thevsstech/react-native-skeleton';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from '../styles/Homestyle'

const Home = ({ navigation, }) => {

  const [apidata, setApiData] = useState([])
  const [isLoading, setLoading] = useState(true);
  //  main product api getting 
  useEffect(() => {
    axios.get("https://parind.online/parind4/public/api/products")
      .then(async (res) => {
        const backendData = await res.data.data;
        setApiData(backendData);

      }).catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  // console.log(apidata);
  let newapidata = [];
  newapidata.push(apidata);
  // console.log(newapidata[0])
  const mainapidata = newapidata[0];


  //  featured api product listing 
  const [featureddata, setFeaturedData] = useState([]);

  useEffect(() => {
    axios.get('https://parind.online/parind4/public/api/products?featured')
      .then(async (res) => {
        const featuredProduct = await res.data.data; ``
        // console.log(featuredProduct);
        setFeaturedData(featuredProduct);
      }).catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  // console.log(featureddata);
  let newfeaturedapidata = [];
  newfeaturedapidata.push(featureddata)
  const mainfeaturedapidata = newfeaturedapidata[0];

  // new product api listing 
  const [newproduct, setNewProduct] = useState([]);
  useEffect(() => {
    axios.get('https://parind.online/parind4/public/api/products?new&limit=4')
      .then(async (res) => {
        const newproductapi = await res.data.data;
        setNewProduct(newproductapi);
      }).catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  let newProductApi = [];
  newProductApi.push(newproduct);
  const MainNewProductApi = newProductApi[0]

  // slider api fectching imgs
  const [slider, setSlider] = useState([])
  useEffect(() => {
    axios.get('https://parind.online/parind4/public/api/sliders')
      .then(async (res) => {
        const SliderData = await res.data.data
        setSlider(SliderData);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [setSlider])

  const sliderdata = slider.map((item) => {
    return (
      { img: item.image_url }
      // console.log({img:item.image_url})
    )
  })
  // console.log(sliderdata)



  const dispatch = useDispatch();
  // const fav = useSelector(state => state.fav.fav);
  // console.log(fav);
  const AddtoFavroit = item => {
    dispatch(addToFav(item))
  }


  const item = useSelector(state => state.data.data);
  const FetchSingleProducts = (item) => {
    return (
      dispatch(ViewSingleProduct(item))
      // console.log(id)
    )
  }
  // const data = [
  //   {
  //     id: 1,
  //     name: 'Nk Downshifter',
  //     title: 'Best Selling',
  //     price: 100,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     image: require('../../assets/ecom3.png'),
  //     image2: require('../../assets/ecom2.png'),
  //     image3: require('../../assets/ecom1.png'),
  //     image4: require('../../assets/ecom4.png'),
  //     image5: require('../../assets/ecom5.png'),
  //   },
  //   {
  //     id: 2,
  //     name: 'Nk Revolition 6 NN',
  //     title: 'Tranding',
  //     price: 240,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     image: require('../../assets/ecom8.png'),
  //     image2: require('../../assets/ecom7.png'),
  //     image3: require('../../assets/ecom9.png'),
  //     image4: require('../../assets/ecom7.png'),
  //     image5: require('../../assets/ecom6.png'),
  //   },
  //   {
  //     id: 3,
  //     name: 'NK Air Zoom 39',
  //     title: 'Best Selling',
  //     price: 120,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     image: require('../../assets/ecom12.png'),
  //     image2: require('../../assets/ecom11.png'),
  //     image3: require('../../assets/ecom13.png'),
  //     image4: require('../../assets/ecom14.png'),
  //     image5: require('../../assets/ecom11.png'),
  //   },
  //   {
  //     id: 4,
  //     name: 'Nk Air Winflo 9',
  //     title: 'tranding',
  //     price: 140,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     image: require('../../assets/shoose4.jpg'),
  //     image2: require('../../assets/ecom11.png'),
  //     image3: require('../../assets/ecom13.png'),
  //     image4: require('../../assets/ecom14.png'),
  //     image5: require('../../assets/ecom11.png'),
  //   },
  //   {
  //     id: 5,
  //     name: 'M Nk Air Max',
  //     title: 'Best Selling',
  //     price: 160,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     image: require('../../assets/shoose5.jpg'),
  //     image2: require('../../assets/ecom11.png'),
  //     image3: require('../../assets/ecom13.png'),
  //     image4: require('../../assets/ecom14.png'),
  //     image5: require('../../assets/ecom11.png'),
  //   },
  //   {
  //     id: 6,
  //     name: 'Nk Revolition 6 NN',
  //     title: 'Tranding',
  //     price: 180,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     // image: require('../../assets/nike1.jpg'),
  //     image: require('../../assets/shoose5.jpg'),
  //     image2: require('../../assets/ecom11.png'),
  //     image3: require('../../assets/ecom13.png'),
  //     image4: require('../../assets/ecom14.png'),
  //     image5: require('../../assets/ecom11.png'),
  //   },
  //   {
  //     id: 7,
  //     name: 'NK Air Zoom 39',
  //     title: 'Best Selling',
  //     price: 200,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     // image: require('../../assets/nike2.jpg'),
  //     image: require('../../assets/shoose5.jpg'),
  //     image2: require('../../assets/ecom11.png'),
  //     image3: require('../../assets/ecom13.png'),
  //     image4: require('../../assets/ecom14.png'),
  //     image5: require('../../assets/ecom11.png'),
  //   },
  //   {
  //     id: 8,
  //     name: 'Nk Air Winflo 9',
  //     title: 'Tranding',
  //     price: 220,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     // image: require('../../assets/nike3.jpg'),
  //     image: require('../../assets/shoose5.jpg'),
  //     image2: require('../../assets/ecom11.png'),
  //     image3: require('../../assets/ecom13.png'),
  //     image4: require('../../assets/ecom14.png'),
  //     image5: require('../../assets/ecom11.png'),
  //   },

  //   {
  //     id: 9,
  //     name: 'Nk Air Zoom 10',
  //     title: 'Best Selling',
  //     price: 260,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     image: require('../../assets/shooseIcon.jpg'),
  //     image2: require('../../assets/ecom15.png'),
  //     image3: require('../../assets/ecom16.png'),
  //     image4: require('../../assets/ecom17.png'),
  //     image5: require('../../assets/ecom18.png'),
  //   },
  //   {
  //     id: 10,
  //     name: 'Nike Zoom Air',
  //     title: 'Best Selling',
  //     price: 280,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     // image: require('../../assets/nike1.png'),
  //     image: require('../../assets/shoose5.jpg'),
  //     image2: require('../../assets/ecom15.png'),
  //     image3: require('../../assets/ecom16.png'),
  //     image4: require('../../assets/ecom17.png'),
  //     image5: require('../../assets/ecom18.png'),
  //   },
  //   {
  //     id: 11,
  //     name: 'Nk Downshifter',
  //     title: 'Best Selling',
  //     price: 300,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     // image: require('../../assets/nike2.png'),
  //     image: require('../../assets/shoose5.jpg'),
  //     image2: require('../../assets/ecom15.png'),
  //     image3: require('../../assets/ecom16.png'),
  //     image4: require('../../assets/ecom17.png'),
  //     image5: require('../../assets/ecom18.png'),
  //   },
  //   {
  //     id: 12,
  //     name: 'Nike Air Zoom 29',
  //     title: 'Best Selling',
  //     price: 320,
  //     des: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.',
  //     // image: require('../../assets/nike3.png'),
  //     image: require('../../assets/shoose5.jpg'),
  //     image2: require('../../assets/ecom15.png'),
  //     image3: require('../../assets/ecom16.png'),
  //     image4: require('../../assets/ecom17.png'),
  //     image5: require('../../assets/ecom18.png'),
  //   },
  // ];
  // const HeaderFlatList = ({ item }) => {
  //   return (
  //     <View>

  //       <View style={styles.serContainer}>
  //         <Pressable>
  //           <View style={[styles.ImageBox, styles.shadowProp]}>
  //             <Pressable>
  //               <Icon name="favorite-outline" style={styles.IconStyles}
  //                 onPress={() => AddtoFavroit(item)}
  //               />
  //             </Pressable>
  //             <Image style={styles.Image} source={item.image} />
  //             <Text style={styles.Name}>{item.name}</Text>
  //             <Text style={styles.Tanding}>{item.title}</Text>
  //             <View style={styles.PriceBox}>
  //               <Pressable>
  //                 <Text
  //                   style={styles.price}
  //                   onPress={() =>
  //                     navigation.navigate(
  //                       `SingleProduct`,
  //                       FetchSingleProducts(item),
  //                     )
  //                   }>
  //                   <Text style={styles.Doller}>$</Text> {item.price}
  //                 </Text>
  //               </Pressable>
  //             </View>
  //           </View>
  //         </Pressable>
  //       </View>
  //     </View>
  //   )
  // }

  // const MainFlatList = ({ item }) => {
  //   return (
  //     <View style={styles.serContainer}>
  //       <View style={[styles.ImageBox, styles.shadowProp]}>
  //         <Icon name="favorite-outline" style={styles.IconStyles} />
  //         <Image style={styles.Image} source={item.image} />
  //         <Text style={styles.Name}>{item.name}</Text>
  //         <Text style={styles.Tanding}>{item.title}</Text>
  //         <View style={styles.PriceBox}>
  //           <Pressable>
  //             <Text
  //               style={styles.price}
  //               onPress={() =>
  //                 navigation.navigate(
  //                   `SingleProduct`,
  //                   FetchSingleProducts(item),
  //                 )
  //               }>
  //               <Text style={styles.Doller}>$</Text> {item.price}
  //             </Text>
  //           </Pressable>
  //         </View>
  //       </View>
  //     </View>
  //   )
  // }

  // const BottomFlatList = () => {
  //   return (

  //     <View>
  //       <Text style={styles.Cat}>Trainding Product</Text>

  //       <SafeAreaView>
  //         <FlatList
  //           horizontal
  //           data={data.reverse()}
  //           renderItem={({ item }) => {
  //             return (
  //               <View style={styles.serContainer}>
  //                 <View style={[styles.ImageBox, styles.shadowProp]}>
  //                   <Icon name="favorite-outline" style={styles.IconStyles} />
  //                   <Image style={styles.Image} source={item.image} />
  //                   <Text style={styles.Name}>{item.name}</Text>
  //                   <Text style={styles.Tanding}>{item.title}</Text>
  //                   <View style={styles.PriceBox}>
  //                     <Pressable>
  //                       <Text
  //                         style={styles.price}
  //                         onPress={() =>
  //                           navigation.navigate(
  //                             `SingleProduct`,
  //                             FetchSingleProducts(item),
  //                           )
  //                         }>
  //                         <Text style={styles.Doller}>$</Text> {item.price}
  //                       </Text>
  //                     </Pressable>
  //                   </View>
  //                 </View>
  //               </View>
  //             );
  //           }}
  //           keyExtractor={item => item.id}
  //         />
  //         <Text style={styles.Cat}>New Arrival</Text>

  //       </SafeAreaView>
  //     </View>
  //   )
  // }
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          isLoading ?
            <Skeleton>
              <Skeleton.Item width="100%" height={280} />
            </Skeleton> :
            <ImageSlider
              caroselImageStyle={styles.previewImageContainer}
              // caroselImageContainerStyle={styles.ImgContSlider}
              data={sliderdata} />
        }
        <Text style={styles.Cat}
        >Category</Text>
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
        <SafeAreaView>
          <Text style={styles.Cat}
            onPress={() => navigation.navigate('MainComponent')}
          >Best Selling Product </Text>
          {isLoading ?
            <Skeleton>
              <Skeleton.Item flexDirection="row" >
                <Skeleton.Item alignItems="center" width={210} height={320}
                  marginLeft={20} borderRadius={20} marginTop={20} />
                <Skeleton.Item alignItems="center" width={210} height={320} marginLeft={20} borderRadius={20} marginTop={20} />
              </Skeleton.Item>
            </Skeleton>
            : <FlatList
              horizontal
              data={mainfeaturedapidata}
              renderItem={({ item }, index) => {
                var isFav = false
                if (item) {
                  let price = parseFloat(item.price).toFixed(2);
                  return (
                    <View style={styles.serContainer}>
                      <View style={[styles.ImageBox, styles.shadowProp]}>
                        <Pressable>
                          {item.isFav ? <Icon name="favorite" style={styles.IconStyles}
                            onPress={() => {
                              item.isFav = true,
                                AddtoFavroit(item)
                            }}
                          /> :
                            <Icon name="favorite-outline" style={styles.IconStyles}
                              onPress={() => {
                                item.isFav = true,
                                  AddtoFavroit(item)
                              }}
                            />
                          }

                        </Pressable>
                        <Image style={styles.Image}
                          source={{ uri: item.images[0].original_image_url }} />
                        <Text style={styles.Name}>{item.name}</Text>
                        <Text style={styles.Tanding}>{item.type}</Text>
                        <View style={styles.PriceBox}>
                          <Pressable>
                            <Text
                              style={styles.price}
                              onPress={() =>
                                navigation.navigate(
                                  `SingleProduct`,
                                  FetchSingleProducts(item)
                                )
                              }>
                              <Text style={styles.Doller}>$</Text> {price}
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  )
                }
              }}
            />
          }
        </SafeAreaView>
        <SafeAreaView>
          <Text style={styles.Cat}>Featured Product </Text>
          {
            isLoading ?
              <Skeleton>
                <Skeleton.Item flexDirection="row" >
                  <Skeleton.Item alignItems="center" width={210} height={320}
                    marginLeft={20}
                    borderRadius={20} marginTop={20}
                  />
                  <Skeleton.Item alignItems="center" width={210} height={320}
                    marginLeft={20}
                    borderRadius={20} marginTop={20}
                  />
                </Skeleton.Item>
              </Skeleton>
              : <FlatList
                horizontal
                data={mainapidata.reverse()}
                renderItem={({ item }, index) => {
                  if (item) {
                    let price = parseFloat(item.price).toFixed(2);
                    return (
                      <View style={styles.serContainer}>
                        <View style={[styles.ImageBox, styles.shadowProp]}>
                          <Pressable>
                            <Icon name="favorite-outline" style={styles.IconStyles}
                              onPress={() =>
                                navigation.navigate(
                                  `Favroit`,
                                  AddtoFavroit(item),
                                )
                              }
                            />
                          </Pressable>
                          <Image style={styles.Image}
                            source={{ uri: item.images[0].original_image_url }} />
                          <Text style={styles.Name}>{item.name}</Text>
                          <Text style={styles.Tanding}>{item.type}</Text>
                          <View style={styles.PriceBox}>
                            <Pressable>
                              <Text
                                style={styles.price}
                                onPress={() =>
                                  navigation.navigate(
                                    `SingleProduct`,
                                    FetchSingleProducts(item)
                                  )
                                }>
                                <Text style={styles.Doller}>$</Text> {price}
                              </Text>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    )
                  }
                }}
              />
          }
        </SafeAreaView>
        <SafeAreaView>
          <Text style={styles.Cat}>New Product </Text>
          {
            isLoading ?
              <Skeleton>
                <Skeleton.Item flexDirection="row" >
                  <Skeleton.Item alignItems="center" width={210} height={320}
                    marginLeft={20}
                    borderRadius={20} marginTop={20}
                  />
                  <Skeleton.Item alignItems="center" width={210} height={320}
                    marginLeft={20}
                    borderRadius={20} marginTop={20}
                  />
                </Skeleton.Item>
              </Skeleton>
              : <FlatList
                data={MainNewProductApi}
                renderItem={({ item }, index) => {
                  if (item) {
                    let price = parseFloat(item.price).toFixed(2);
                    return (
                      <View style={styles.serContainer}>
                        <View style={[styles.ImageBox, styles.shadowProp]}>
                          <Pressable>
                            <Icon name="favorite-outline" style={styles.IconStyles}
                              onPress={() =>
                                navigation.navigate(
                                  `Favroit`,
                                  AddtoFavroit(item),
                                )
                              }
                            />
                          </Pressable>
                          <Image style={styles.Image}
                            source={{ uri: item.images[0].original_image_url }} />
                          <Text style={styles.Name}>{item.name}</Text>
                          <Text style={styles.Tanding}>{item.type}</Text>
                          <View style={styles.PriceBox}>
                            <Pressable>
                              <Text
                                style={styles.price}
                                onPress={() =>
                                  navigation.navigate(
                                    `SingleProduct`,
                                    FetchSingleProducts(item)
                                  )
                                }>
                                <Text style={styles.Doller}>$</Text> {price}
                              </Text>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    )
                  } 
                }}
                numColumns={2}
                keyExtractor={(item, index) => item.id} />}
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
export default Home;