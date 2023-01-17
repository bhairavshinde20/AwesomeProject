import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>
         </View>
  )
}
















// import {View, Text} from 'react-native';
// import React from 'react';
// import {SliderBox} from 'react-native-image-slider-box';
// export default function Home() {
  // const image = [
  //   require('../../assets/slide1.jpg'),
  //   require('../../assets/slide3.jpg'),
  //   require('../../assets/slide2.jpg'),
  //   require('../../assets/slide4.jpg'),
  // ];
  // return (
  //   <View>
      {/* <SliderBox
        images={image}
        dotColor="white"
        inactiverDotColor="black"
        dotStyle={{height: 20, width: 20, borderRadius: 50}}
        imageLoadingColor="black"
        autoplay={true}
        autoplayInterval={2000}
        circleLoops={true}
        ></SliderBox> */}
//     </View>
//   );
// }














// import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
// import React, {useState} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { ScrollView } from 'react-native-gesture-handler'

// export default function Home({navigation}) {
// const img = [
//   'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/8/n/r/-original-imaghrbyhy5aehyg.jpeg?q=70',
//   'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/r/a/n/8-dc8992-003nike-9-nike-black-white-iron-grey-original-imaghq2qektf65ww.jpeg?q=70',
//   'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/f/o/3/8-dc8992-003nike-9-nike-black-white-iron-grey-original-imaghq2qt8sw2vcc.jpeg?q=70'
// ]
// // const width = Dimensions.get('window').width
// // const height = Dimensions.get('window').height

// const [imgactive, setImgActive] = useState(0)
// onchange = (nativeEvent) => {
//   if(nativeEvent){
//     const slide = Math.ceil(nativeEvent.containerOffset.x / nativeEvent.layoutMeasurement.width);
//     if(slide!= imgactive){
//       setImgActive(slide)
//     }
//   }

// }
// return (
// <SafeAreaView style={styles.container}>
//   <View style={styles.wrap}>
//     <ScrollView
//       onScroll={({ nativeEvent }) => onchange(nativeEvent)}
//       showsHorizontalScrollIndicator={false}
//       pagingEnabled
//       horizontal
//       style={styles.wrap}
//     >
//       {
//         img.map((e, index) =>
//           <Image
//             key={e}
//             resizeMode='stretch'
//             style={styles.wrap}
//             source={{ uri: e }}
//           />
//         )
//       }
//     </ScrollView>
//     <View style={styles.wrapDot}>
//       {
//         img.map((e, index) =>
//           <Text
//             key={e}
//             style={imgactive == index ? styles.dotActive : styles.dot}
//           >
//             ●
//           </Text>
//         )
//       }
//     </View>
//   </View>
// </SafeAreaView>

// <SafeAreaView style={styles.container}>
//   <View style={styles.box}>
//     <Text style={styles.NewAra}>New Arrivals</Text>
//     <Text style={styles.Summ}>Summer 2023</Text>
//   </View>
// </SafeAreaView>
//     <View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// wrap: {
//   width: 'auto',
//   height: 240,
// },
// wrapDot: {
//   position: 'absolute',
//   bottom: 0,
//   flexDirection: 'row',
//   alignSelf: 'center',
// },
// dotActive: {
//   margin: 3,
//   color: 'black',
// },
// dot: {
//   margin: 3,
//   color: 'white',
// },
//   box: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '70%',
//     height: 400,
//     borderColor: '#FFBF00',
//     borderRadius:25,

//   },
//   NewAra:{
//     fontSize:20,
//     fontFamily:'Gill Sans',
//   },
//   Summ:{
//     fontSize:30,
//     fontWeight:'bold'
//   }
// });
