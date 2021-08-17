import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, 
    ScrollView, Pressable, TextInput } from 'react-native';
import { auctionArtworks } from '../../../LiveAuctionData';
import ArtPost from '../utils/ArtPost';

export default function LiveAuctions(){
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}} >
        <View style={{flexDirection: 'row'}} >
            <View style={{paddingTop: 16}} >
                <View style={{borderColor: 'red', marginHorizontal: 12, borderRadius: 100,
                    width: 12, height: 12, backgroundColor: 'red'}}/></View>
                <Text style={styles.auctionsTitle} >Live auctions</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllBtn} >View all</Text>
                </TouchableOpacity>
        </View>
        {
            auctionArtworks.map((item)=>{
                return (
                    <ArtPost artistImageURL={item.artistImageURL} artTitle={item.artwork} 
                                artImageURL={item.artImageURL} artistName={item.artist} 
                                artistTitle={item.artistTitle} liked={item.liked} />
                );
            })
        }
        </View>
    );
}

const styles = StyleSheet.create({
    auctionsTitle: {
        fontFamily: 'epilogue-medium',
        fontSize: 26,
        fontWeight: 'bold',
        textAlignVertical: 'center',
    },
    viewAllBtn: {
        fontFamily: 'epilogue-medium',
        color: 'gray',
        borderColor: 'gray',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 10,
        fontSize: 14,
        marginLeft: 30,
    },
});