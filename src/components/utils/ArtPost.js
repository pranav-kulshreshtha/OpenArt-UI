import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import {Card} from 'react-native-elements';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function ArtPost(props){
    const [liked, setLiked] = useState(props && props.liked || false)

    const buttonRipple = {
        color: 'gray',
        radius: 50,
        borderless: true,
      };

    return (
       <Card containerStyle={styles.artCardContainer} >
        <Image style={styles.artworkImage} source={require('../../../assets/my_artwork_1.png')}/>
        <Text style={styles.titleArtText} >{props && props.artTitle || 'Silent Wave' }</Text>
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.artistImage} source={ require('../../../assets/artist_1.png') }/>
            <View style={{marginHorizontal: 10}}>
                <Text style={styles.nameArtistText} >{props && props.artistName || 'Pawel Czerwinski'}</Text>
                <Text style={styles.titleArtistText}>{props && props.artistTitle || 'Creator'}</Text>
            </View>
            <Pressable  onPress={()=>{setLiked(!liked);}} 
                android_ripple={buttonRipple} style={styles.heartIcon}>
                <Ionicon name={liked ? 'heart' : 'heart-outline'} size={34} 
                    color={liked ? 'red' : 'black'}/></Pressable>
        </View>
       </Card> 
    );
}

const styles = StyleSheet.create({
    artCardContainer: {
        height: 525,
        width: 342,
        borderRadius: 32,
    },
    artworkImage: {
        height: 385,
        width: 312,
        borderRadius: 24,
    },
    titleArtText: {
        fontFamily: 'epilogue-medium',
        marginVertical: 10,
        fontSize: 25,
        fontWeight: 'bold'
    },
    artistImage: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    nameArtistText: {
        fontFamily: 'epilogue-medium',
        fontWeight: 'bold',
        fontSize: 18,
    },
    titleArtistText: {
        fontFamily: 'epilogue-medium',
        color: 'gray',
    },
    heartIcon: {
        position: 'absolute',
        right: 10,
        top: 6,
    }
});