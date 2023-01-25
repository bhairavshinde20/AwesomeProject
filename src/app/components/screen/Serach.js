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
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Share from "react-native-share"

export default function Serach({navigation}) {

  Share.open(options)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err && console.log(err);
  });

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
      image: require('../../assets/nike1.jpg'),
    },
    {
      id: 7,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      image: require('../../assets/nike2.jpg'),
    },
    {
      id: 8,
      name: 'Nk Downshifter',
      title: 'Tranding',
      price: 120,
      image: require('../../assets/nike3.jpg'),
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
      image: require('../../assets/nike1.png'),
    },
    {
      id: 11,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      image: require('../../assets/nike2.png'),
    },
    {
      id: 12,
      name: 'Nk Downshifter',
      title: 'Best Selling',
      price: 120,
      image: require('../../assets/nike3.png'),
    },
  ];

  const NewDumyDataItems = ({name, price, image}) => (
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
            <Icon onPress={()=>Share()} name="share" style={styles.ShareIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <ScrollView>
      <Text style={{color: 'black', fontSize: 50, marginLeft: 30}}>
        Our Product
      </Text>
      <TextInput
        placeholder="Search Your Product..."
        placeholderTextColor="black"
        style={styles.InputBox}></TextInput>

      <FlatList
        // horizontal

        data={data}
        renderItem={({item}) => (
          <NewDumyDataItems
            image={item.image}
            name={item.name}
            price={item.price}
          />
        )}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  serContainer: {
    // flex: 1,
    // backgroundColor: '#003f5c',
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 12,
    marginBottom: 20,
  },
  InputBox: {
    marginTop: 50,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 30,
    justifyContent: 'flex-start',
    padding: 20,
    alignSelf: 'center',
    borderRadius: 40,
    width: '90%',
    height: 70,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  ImageBox: {
    width: 210,
    height: 300,
    // borderWidth: 1,
    borderColor: '#808080',
    alignItems: 'flex-start',
    borderRadius: 20,
    marginTop: 40,
    padding: 10,
    backgroundColor: 'white',
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
  ShareIcon: {
    color: '#808080',
    opacity: 0.9,
    fontSize: 30,
  },

  //   box: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: '70%',
  //   height: 400,
  //   borderColor: '#FFBF00',
  //   borderRadius: 25,
  // },
  // NewAra: {
  //   fontSize: 20,
  //   fontFamily: 'Gill Sans',
  // },
  // Summ: {
  //   fontSize: 30,
  //   font,
  // },
});
