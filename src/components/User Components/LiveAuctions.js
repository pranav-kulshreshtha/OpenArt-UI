import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { auctionArtworks } from '../../../LiveAuctionData';
import ArtPost from '../utils/ArtPost';

export default function LiveAuctions(){
    const showSoldStatus = (soldFor) => {
        return (
            <View style={styles.auctionItemStatusContainer} >
                <Text style={{textAlign: 'center', fontFamily: 'epilogue-medium', 
                    fontSize: 19, marginHorizontal: 8, textAlignVertical: 'center'}}>Sold for</Text>
                <Text style={{textAlign: 'center', fontFamily: 'epilogue-medium', 
                fontSize:26, fontWeight: 'bold',textAlignVertical: 'center'}}>
                {soldFor} ETH</Text>
            </View>
        );
    }

    const showCurrentStatus = (currentBid, endingMins, endingSec) => {
        return (
            <View style={styles.currentBidStatusContainer}>
                <View>
                <Text style={styles.currentBidLabels} >Current bid</Text>
                <Text style={styles.currentBidValues} >{currentBid} ETH</Text>
                </View>
               <View>
               <Text style={styles.currentBidLabels}>Ending in</Text>
               <Text style={styles.currentBidValues}>{endingMins+"m "+endingSec+"s"}</Text>
               </View>
            </View>
        );
    }

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
                    <View key={item.id} style={{marginBottom: 20}} >
                    <ArtPost artistImageURL={item.artistImageURL} artTitle={item.artwork} 
                                artImageURL={item.artImageURL} artistName={item.artist} 
                                artistTitle={item.artistTitle} liked={item.liked} />
                    { item.sold ? showSoldStatus(item.soldFor) : showCurrentStatus(item.currentBid, 
                        item.remainingTimeMinutes, item.remainingTimeSeconds) }
                    </View>
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
    auctionItemStatusContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 20,
        //borderWidth: 1,
        marginHorizontal: 16,
        marginVertical: 10,
        elevation: 6,
        borderRadius: 50,
        paddingLeft: 65,
        marginTop: 15,
    },
    currentBidStatusContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 20,
        //borderWidth: 1,
        marginHorizontal: 16,
        marginVertical: 15,
        elevation: 6,
        borderRadius: 50,
        justifyContent: 'space-between',
        paddingHorizontal: 40,
    },
    currentBidLabels: {
        fontFamily: 'epilogue-medium',
        fontSize: 18,
        color: 'gray',
    },
    currentBidValues: {
        fontFamily: 'epilogue-black',
        fontSize: 22,
        color: 'black',
    },
});