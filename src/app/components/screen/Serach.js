import {Image, View, StyleSheet, Text, FlatList, TextInput} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icons from "react-native-ionicons"

export default function Serach({navigation}) {
  return (
    <ScrollView>
      <Text style={{color: 'black', fontSize: 50, marginLeft: 30}}>Our Product</Text>

      <TextInput
        placeholder="Search Your Product..."
        placeholderTextColor="black"
        style={styles.InputBox}></TextInput>

      <View style={styles.serContainer}>
        <View style={styles.ImageBox}>
          <Icon name="favorite" style={styles.IconStyles} />
          <Image
            style={styles.Image}
            source={require('../../assets/nike1.png')}
          />
          <Text style={styles.Name}>NK DOWNSHIFTER</Text>
          <View style={styles.PriceBox}>
            <Text style={styles.price}>
              <Text style={styles.Doller}>$</Text> 100
            </Text>
            <Icon name="share" style={styles.ShareIcon} />
          </View>
        </View>
        <View style={styles.ImageBox}>
          <Icon name="favorite" style={styles.IconStyles} />
          <Image
            style={styles.Image}
            source={require('../../assets/nike2.png')}
          />
          <Text style={styles.Name}>NK DOWNSHIFTER</Text>

          <View style={styles.PriceBox}>
            <Text style={styles.price}>
              {' '}
              <Text style={styles.Doller}>$</Text> 100
            </Text>
            <Icon name="share" style={styles.ShareIcon} />
          </View>
        </View>
      </View>

      <View style={styles.serContainer}>
        <View style={styles.ImageBox}>
          <Icon name="favorite" style={styles.IconStyles} />
          <Image
            style={styles.Image}
            source={require('../../assets/nike3.png')}
          />
          <Text style={styles.Name}>NK DOWNSHIFTER</Text>
          <View style={styles.PriceBox}>
            <Text style={styles.price}>
              <Text style={styles.Doller}>$</Text> 100
            </Text>
            <Icon name="share" style={styles.ShareIcon} />
          </View>
        </View>
        <View style={styles.ImageBox}>
          <Icon name="favorite" style={styles.IconStyles} />
          <Image
            style={styles.Image}
            source={require('../../assets/nike5.png')}
          />
          <Text style={styles.Name}>NK DOWNSHIFTER</Text>

          <View style={styles.PriceBox}>
            <Text style={styles.price}>
              <Text style={styles.Doller}>$</Text> 100
            </Text>
            <Icon name="share" style={styles.ShareIcon} />
          </View>
        </View>
      </View>

      <View style={styles.serContainer}>
        <View style={styles.ImageBox}>
          <Icon name="favorite" style={styles.IconStyles} />
          <Image
            style={styles.Image}
            source={require('../../assets/nike104.png')}
          />
          <Text style={styles.Name}>NK DOWNSHIFTER</Text>
          <View style={styles.PriceBox}>
            <Text style={styles.price}>
              <Text style={styles.Doller}>$</Text> 100
            </Text>
            <Icon name="share" style={styles.ShareIcon} />
          </View>
        </View>
        <View style={styles.ImageBox}>
          <Icon name="favorite" style={styles.IconStyles} />
          <Image
            style={styles.Image}
            source={require('../../assets/nike105.png')}
          />
          <Text style={styles.Name}>NK DOWNSHIFTER</Text>

          <View style={styles.PriceBox}>
            <Text style={styles.price}>
              <Text style={styles.Doller}>$</Text> 100
            </Text>
            <Icon name="share" style={styles.ShareIcon} />
          </View>
        </View>
      </View>

      <View style={styles.serContainer}>
        <View style={styles.ImageBox}>
          <Icon name="favorite" style={styles.IconStyles} />
          <Image
            style={styles.Image}
            source={require('../../assets/nike106.png')}
          />
          <Text style={styles.Name}>NK DOWNSHIFTER</Text>
          <View style={styles.PriceBox}>
            <Text style={styles.price}>
              <Text style={styles.Doller}>$</Text> 100
            </Text>
            <Icon name="share" style={styles.ShareIcon} />
          </View>
        </View>
        <View style={styles.ImageBox}>
          <Icon name="favorite" style={styles.IconStyles} />
          <Image
            style={styles.Image}
            source={require('../../assets/nike1.png')}
          />
          <Text style={styles.Name}>NK DOWNSHIFTER</Text>

          <View style={styles.PriceBox}>
            <Text style={styles.price}>
              <Text style={styles.Doller}>$</Text> 100
            </Text>
            <Icon name="share" style={styles.ShareIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  serContainer: {
    // flex: 1,
    // backgroundColor: '#003f5c',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft:20
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
  },

  ImageBox: {
    width: 210,
    height: 300,
    borderWidth: 1,
    borderColor: '#808080',
    alignItems: 'flex-start',
    borderRadius: 20,
    marginTop: 40,
    padding: 10,
  },
  Name: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },
  IconStyles: {
    color: 'black',
    opacity: 0.3,
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
});
