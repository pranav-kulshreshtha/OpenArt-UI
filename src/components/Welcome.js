import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Logo from './Logo';

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo/>
      <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} ><Text style={styles.forUserButton}>For user</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.forCreatorButton}>For creator</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  forUserButton: {
    fontFamily: 'epilogue-medium',
    fontSize: 30,
    backgroundColor: 'white',
    paddingHorizontal: 70,
    paddingVertical: 5,
    borderRadius: 100,
    marginTop: 100
  },
  forCreatorButton: {
    fontFamily: 'epilogue-medium',
    fontSize: 30,
    backgroundColor: 'orange',
    color: 'white',
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderRadius: 100,
    marginVertical: 30
  },
});
