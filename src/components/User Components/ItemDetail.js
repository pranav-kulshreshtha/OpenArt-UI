import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, 
    ScrollView, Pressable, TextInput,Image } from 'react-native';
import Logo from '../Logo';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { artData } from '../../../artData';
import ArtPost from '../utils/ArtPost';
import LiveAuctions from './LiveAuctions';
import Collection from './Collection';
import {Divider} from 'react-native-elements';


export default function Home(){

    return (
        <View style={styles.itemDetailContainer} >
            <View style={styles.artDetail}>
                <Image source={require('../../../assets/my_artwork_1.png')} style={{width:'100%', height:'100%'}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   itemDetailContainer: {
       backgroundColor: '#ecf0f1'
   },
});