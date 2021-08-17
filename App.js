import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Logo from './src/components/Logo'
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
  'epilogue-black': require('./assets/Fonts/Epilogue-Black.ttf'),
  'epilogue-light': require('./assets/Fonts/Epilogue-Light.ttf'),
  'epilogue-medium': require('./assets/Fonts/Epilogue-Medium.ttf'),
  });
  };
  
  

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if( !dataLoaded ){
    return (
      <AppLoading startAsync={fetchFonts}
      onFinish={() => {setDataLoaded(true);
        return (<Text>Loading done!</Text>)
      } }
      onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo/>
      <TouchableOpacity><Text style={styles.forUserButton}>For user</Text></TouchableOpacity>
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
