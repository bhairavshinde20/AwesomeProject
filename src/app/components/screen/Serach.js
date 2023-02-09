import {
  Image,
  View,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
  Pressable,
  Button,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/SearchStyle'
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { ViewSingleProduct } from '../redux/reducer/Product';
import React, { useState, useEffect, useRef } from 'react';
import { addToFav } from '../redux/reducer/Favroit';
import Skeleton from '@thevsstech/react-native-skeleton';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Share from "react-native-share"

export default function Serach({ navigation }) {

  const [apidata, setApiData] = useState([])
  const [isLoading, setLoading] = useState(true);

  //  main product api getting 
  useEffect(() => {
    axios.get("https://parind.online/parind4/public/api/products?new&limit=4")
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


  const dispatch = useDispatch()
  const FetchSingleProducts = (item) => {
    dispatch(ViewSingleProduct(item))
  }


  const AddtoFavroit = item => {
    dispatch(addToFav(item))
  }

  const data = [
    {
      id: 1,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 100,
      image: require('../../assets/shoose1.jpg'),
      // image2:require()
    },
    {
      id: 2,
      name: 'Nk Downshifter',
      title: 'Tranding',
      price: 240,
      image: require('../../assets/shoose2.jpg'),
    },
    {
      id: 3,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      image: require('../../assets/shoose3.jpg'),
    },
    {
      id: 4,
      name: 'Nk Downshifter',
      title: 'tranding',
      price: 140,
      image: require('../../assets/shoose4.jpg'),
    },
    {
      id: 5,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      image: require('../../assets/shoose5.jpg'),
    },
    {
      id: 6,
      name: 'Nk Downshifter',
      title: 'Tranding',
      price: 120,
      // image: require('../../assets/nike1.jpg'),
    },
    {
      id: 7,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      // image: require('../../assets/nike2.jpg'),
    },
    {
      id: 8,
      name: 'Nk Downshifter',
      title: 'Tranding',
      price: 120,
      // image: require('../../assets/nike3.jpg'),
    },

    {
      id: 9,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      image: require('../../assets/shooseIcon.jpg'),
    },
    {
      id: 10,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      // image: require('../../assets/nike1.png'),
    },
    {
      id: 11,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      // image: require('../../assets/nike2.png'),
    },
    {
      id: 12,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      // image: require('../../assets/nike3.png'),
    },
  ];

  const NewDumyDataItems = ({ name, price, image }) => (
    <ScrollView>
      <View style={styles.serContainer}>
        <View style={styles.ImageBox}>
          <Icon name="favorite-outline" style={styles.IconStyles} />
          <Image style={styles.Image} source={image} />
          <Text style={styles.Name}>{name}</Text>
          <View style={styles.PriceBox}>
            <Text style={styles.price}>
              <Text style={styles.Doller}>$</Text> {price}
            </Text>
            <Icon name="share" style={styles.ShareIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );

  const onSearch = (text) => {
    if (text == "") {
      setApiData(mainapidata)
    }
    else {
      let serList = mainapidata.filter(item => {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1
      });
      setApiData(serList)
    }
  }
  return (
    <ScrollView>
      <Text style={{ color: 'black', fontSize: 50, marginLeft: 30 }}>
        Our Product
      </Text>



      <View
        style={styles.InputBox}>
        <Icon name="search" size={35} color="black" />
        <TextInput
          style={styles.SearchInput}
          placeholder="Search Your Product.."
          placeholderTextColor="black"
        />
        <Icon name="close" size={35} color="black" />

      </View>

      {
        isLoading ?
          <Skeleton>
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
          </Skeleton>
          // <ActivityIndicator /> 
          : <FlatList
            data={mainapidata}
            numColumns={2}
            renderItem={({ item }, index) => {
              if (item) {
                let price = parseFloat(item.price).toFixed(2);
                return (
                  <View style={styles.serContainer}>
                    <View style={styles.ImageBox}>
                      <Icon name="favorite-outline"
                        onPress={() => AddtoFavroit(item)}
                        style={styles.IconStyles} />
                      <Image style={styles.Image} source={{ uri: item.images[0].original_image_url }} />
                      <Text style={styles.Name}>{item.name}</Text>
                      <View style={styles.PriceBox}>
                        <Pressable>
                          <Text style={styles.price}
                            onPress={() =>
                              navigation.navigate(
                                `SingleProduct`,
                                FetchSingleProducts(item),
                              )
                            }
                          >
                            <Text style={styles.Doller}>$</Text> {price}
                          </Text>
                        </Pressable>
                        <Icon name="share" style={styles.ShareIcon} />
                      </View>
                    </View>
                  </View>
                )
              }
            }}
          />
      }
      {/* <FlatList
       data={data}
        renderItem={({ item }) => (
          <NewDumyDataItems
            image={item.image}
            name={item.name}
            price={item.price}
          />
        )}
        numColumns={2}
        keyExtractor={item => item.id}
      /> */}
    </ScrollView>
  );
}
