import React, {useReducer } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { getHeaderTitle } from '@react-navigation/elements';

import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home'

const Drawer = createDrawerNavigator();
export const AppContext = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state,dispatch}}>
    <View style={styles.container}>
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" screenOptions={{showHeader: false}} >
      <Drawer.Screen name="Home" component={Home}/>
    </Drawer.Navigator>
    </NavigationContainer>
    </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9.5,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    //borderColor: 'maroon',
    //borderWidth: 3,
  },
});
