import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CollectionImages, {collectionImages} from '../../../CollectionImages';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function Collection(){
    return (
        <View style={styles.collectionContainer} >
            <View style={styles.collectionHeader}>
                <MaterialCommunityIcons name="star-four-points" size={30} color={'gold'}/>   
                <Text style={styles.headerText}>Hot Collection</Text>
            </View>
            <View style={styles.collectionBody}>
                <Image  style={styles.collectionImg} source={collectionImages.image1}/>
                <Image  style={styles.collectionImg} source={collectionImages.image2}/>
                <Image  style={styles.collectionImg} source={collectionImages.image3}/>
                <Image  style={styles.collectionImg} source={collectionImages.image4}/>
            </View>
            <View style={styles.collectionTitle}>
                <Text style={{fontFamily: 'epilogue-black', fontSize: 18}} >Water and sunflower</Text>
                <TouchableOpacity style={{position: 'absolute', right: 5}} >
                <Text style={styles.allItemsBtn}>30 items</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.collectionOwnerInfoContainer}>
                <Image source={require('../../../assets/artist_2.png')} style={styles.collectionArtistImg}/>
                <Text style={{fontFamily:'epilogue-black',fontSize: 14,textAlignVertical: 'center'}}>
                    By Rodion Kutsaev</Text>
                <TouchableOpacity style={styles.followBtn} >
                    <Ionicon name='heart-outline' size={26} color={'gray'}/>
                    <Text style={{fontFamily:'epilogue-light',fontSize: 20, color:'gray'}}>Follow</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity><Text style={styles.viewCollection}>View more collection</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    collectionContainer: {
        marginTop: 70,
    },
    collectionHeader: {
        flexDirection: 'row',
        marginBottom: 60,
        //borderWidth: 1,
    },
    headerText: {
        textAlignVertical: 'center',
        fontFamily: 'epilogue-black',
        fontSize: 24,
    },
    collectionBody: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

    },
    collectionImg: {
        height: 200,
        width: '44%',
        margin: 8,
        borderRadius: 24,
    },
    collectionTitle: {
        flexDirection: 'row',
        margin: 10,
    },
    allItemsBtn: {
        fontFamily: 'epilogue-black', 
        fontSize: 14,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 7,
        borderRadius: 20,
    },
    collectionOwnerInfoContainer: {
        margin: 10,
        //borderWidth: 1,
        flexDirection: 'row',
    },
    collectionArtistImg: {
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 5,
    },
    followBtn: {
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: 2,
        padding: 10,
        borderRadius: 10,
    },
    viewCollection: {
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        padding: 16,
        color: 'black',
        fontFamily: 'epilogue-medium',
        fontWeight: 'bold',
        fontSize: 22,
        marginHorizontal: 10,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});