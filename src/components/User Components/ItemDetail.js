import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, 
    ScrollView, Pressable, TextInput,Image } from 'react-native';
import Logo from '../Logo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { artData } from '../../../artData';
import ArtPost from '../utils/ArtPost';
import LiveAuctions from './LiveAuctions';
import Collection from './Collection';
import {Divider} from 'react-native-elements';


export default function Home({route}){
    const [liked,setLiked] = useState(route && route.params && route.params.liked || false);

    const buttonRipple = {
        color: 'gray',
        radius: 50,
        borderless: true,
      };

    return (
        <View style={styles.itemDetailContainer} >
            <View style={styles.artDetail}>
                <Image source={require('../../../assets/my_artwork_1.png')} style={styles.artworkImage}/>
                <View style={{flexDirection: 'row', marginHorizontal: 30, marginVertical: 10}}>
                <Text style={styles.titleArtText} >{route && route.params && route.params.artTitle 
                    || 'Silent Wave' }</Text>
                <View style={{backgroundColor:'white',borderRadius:100,position:'absolute',right:60,
                    elevation:5,height:50, width:50,alignItems:'center',justifyContent:'center'}}>
                    <Pressable onPress={()=>{setLiked(!liked);}} 
                        android_ripple={buttonRipple} style={styles.heartIcon}>
                        <Ionicon name={liked?'heart':'heart-outline'} size={30} color={liked?'red':'black'}/>
                    </Pressable>
                </View>
                <View style={{backgroundColor:'white',borderRadius:100, position:'absolute',right:5,
                    elevation:5,height:50, width:50,alignItems:'center',justifyContent:'center'}}>
                    <Pressable onPress={()=>{setLiked(!liked);}} 
                        android_ripple={buttonRipple} style={styles.heartIcon}>
                        <AntDesign name={'upload'} size={30} color={'black'}/>
                    </Pressable>
                </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   itemDetailContainer: {
       backgroundColor: '#ecf0f1',
       //borderWidth: 1,
       flex: 1,
   },
   artworkImage: {
    width:'92%', 
    height: 500,
    marginHorizontal:15,
    marginTop: 50,
    borderRadius: 24,
   },
   titleArtText: {
    fontFamily: 'epilogue-medium',
    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold'
},
});