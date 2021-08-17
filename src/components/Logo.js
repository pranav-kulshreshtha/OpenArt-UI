import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Logo() {
  return (
      <Image style={{width: 210, height: '7%', borderWidth: 3, borderColor: 'rgba(0, 0,0,0)'}} source={ require('../../assets/imageedit_4_3249652613.png') } />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
