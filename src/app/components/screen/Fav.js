import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Fav({navigation}) {
  return (
    <View style={styles.container_Fav}>
      <Text style={styles.fav}>Fav</Text>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container_Fav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fav: {
    alignSelf: 'center',
  },
});
