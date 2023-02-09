import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, } from 'react-native';
import { Stack, Button, FAB } from "@react-native-material/core";
import { useSelector } from 'react-redux';
import { addToCart } from '../redux/reducer/Reducers';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
// import { ImageSlider } from 'react-native-image-slider-banner';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from '../styles/SingleProductStyle'
import axios from 'axios';
import { fetchDataById, selectDataById } from '../redux/reducer/Product';

export default function SingleProduct({ navigation, route }) {
  // const dispatch = useDispatch();
  // const { id } = route.params;

  // const data = useSelector((state) => selectDataById(state, id));

  // useEffect(() => {
  //   dispatch(fetchDataById(id));
  // }, [dispatch, id]);
  // console.log(data);

  const newData = useSelector(state => state.data.data);
  // console.log(newData);
  let myKeysArr = [];
  myKeysArr.push(newData);

  const dispatch = useDispatch();

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };
  return (

    // <View>
    //   <Text style={{ color: 'black' }}>hii </Text>
    // </View>
    <ScrollView>
      <FlatList
        data={myKeysArr}
        renderItem={({ item }) => {
          let price = parseFloat(item.price).toFixed(2);

          return (

            <View style={styles.container}>
              <View style={styles.ImgContainer}>
                <Image
                  style={styles.mainImg}
                  source={{ uri: item.images[0].original_image_url }}
                />
              </View>
              <View style={styles.Img4Container}>
                <View style={styles.Img1Container}>
                  <Image
                    style={styles.ImagView}
                    source={{ uri: item.base_image.small_image_url }}
                  />
                </View>
                <View style={styles.Img1Container}>
                  <Image
                    style={styles.ImagView}
                    source={{ uri: item.base_image.medium_image_url }}
                  />
                </View>
                <View style={styles.Img1Container}>
                  <Image
                    style={styles.ImagView}
                    source={{ uri: item.base_image.large_image_url }}
                  />
                </View>
                <View style={styles.Img1Container}>
                  <Image
                    style={[styles.ImagView, styles.Img4view]}
                    source={{ uri: item.base_image.original_image_url }}
                  />
                </View>
              </View>
              <View style={styles.TitleContainer}>
                <Text style={styles.ImgTitle}>{item.name}</Text>
                <View style={styles.PriceView}>
                  <Text style={styles.Price}>${price}</Text>
                </View>
              </View>
              <View style={styles.StarIconContainer}>
                <AirbnbRating
                  count={5}
                  reviews={["Terrible", "Bad", "OK", "Good", , "Very Good",]}
                  defaultRating={4}
                  size={20}
                />
              </View>
              {
                item.variants ? <View>
                  <Text style={styles.AvailableSize}>Available Size</Text>
                  <View style={styles.MainSizeBox}>
                    <View style={styles.SizeBox}>
                      <Text style={styles.SizeNumber}>US {item.variants[0].size}</Text>
                    </View>
                    <View style={styles.SizeBox}>
                      <Text style={styles.SizeNumber}>US {item.variants[1].size}</Text>
                    </View>
                    <View style={styles.SizeBox}>
                      <Text style={styles.SizeNumber}>US {item.variants[2].size}</Text>
                    </View>
                    <View style={[styles.SizeBox, styles.US9]}>
                      <Text style={styles.SizeNumber}>US {item.variants[3].size}</Text>
                    </View>
                  </View>
                </View> :
                  <Text>Color</Text>
              }

              <Text style={styles.AvailableSize}>Color</Text>
              <View style={styles.ColorBox}>
                <View style={styles.ColorBox2}>
                  <View style={[styles.CBox, styles.CBox1]}></View>
                  <View style={[styles.CBox, styles.CBox2]}></View>
                  <View style={[styles.CBox, styles.CBox3]}></View>
                  <View style={[styles.CBox, styles.CBox4]}></View>
                </View>
                <View style={styles.IconStyles}>
                  <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonTitle}
                     onPress={() => addItemToCart(item)}
                    >
                      <Icon name="add-shopping-cart"
                      size={25}
                      color="black"
                    />
                    </Text>
                  </TouchableOpacity>
                  {/* <Stack fill center>
                    <FAB icon={props => <Icon name="add-shopping-cart" {...props}
                      size={25}
                      color="black"
                    />}
                      color="#f8d300f6"
                    onPress={() => addItemToCart(item)}
                    />
                  </Stack> */}
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
    </ScrollView>
  );
}



{/* <View style={{ backgroundColor: "white" }}>
        <View style={styles.SilderContainer}>
          <ImageSlider
            caroselImageContainerStyle={styles.caroselImgContainer}
            previewImageStyle={styles.caroselImgStyle}
            inActiveIndicatorStyle={styles.IndStyle}
            activeIndicatorStyle={styles.ActiviInd}
            // autoPlay={true}
            data={[
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
              { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
              { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
            ]}

          />
        </View>
        <View style={styles.TitleContainer}>
          <Text style={styles.ImgTitle}>hii</Text>
          <View style={styles.PriceView}>
            <Text style={styles.Price}>$200</Text>
          </View>
        </View>
        <View style={styles.StarIconContainer}>
          <Icon name="star-rate" size={30} color="#ecca08" />
          <Icon name="star-rate" size={30} color="#ecca08" />
          <Icon name="star-rate" size={30} color="#ecca08" />
          <Icon name="star-half" size={30} color="#ecca08" />
        </View>
        <Text style={styles.AvailableSize}>Despriction</Text>
        <Text style={styles.Description}>
          A shoe is an item of footwear intended to protect and comfort
          the human foot. They are often worn with a sock. Shoes are also
          used as an item of decoration and fashion.
          A shoe is an item of footwear intended to protect and comfort
          the human foot. They are often worn with a sock. Shoes are also
          used as an item of decoration and fashion.
        </Text>
        <View style={styles.IconStyles}>
          <Stack>
            <Button
            style={{alignSelf:'center',justifyContent:"center",alignContent:"center",  width:200,height:42, marginRight:80,fontSize:30,fontWeight:"bold" }}
              variant="outlined"
              title="Add To Cart"
              leading={props => <Icon name="add-shopping-cart" color="blue" {...props} />}
            />
          </Stack>
        </View>
      </View> */}