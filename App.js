import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Logo from './src/components/Logo'
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import Home from './src/components/User Components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/components/Welcome';

const fetchFonts = () => {
  return Font.loadAsync({
  'epilogue-black': require('./assets/Fonts/Epilogue-Black.ttf'),
  'epilogue-light': require('./assets/Fonts/Epilogue-Light.ttf'),
  'epilogue-medium': require('./assets/Fonts/Epilogue-Medium.ttf'),
  });
  };
  
const Stack = createStackNavigator()

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
      <NavigationContainer>
        <Stack.Navigator>  
        <Stack.Screen name={"Welcome"} component={Welcome}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  
});
