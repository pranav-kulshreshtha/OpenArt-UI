import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, 
    ScrollView, Pressable, TextInput,Image } from 'react-native';
import Constants from 'expo-constants';
import Logo from '../Logo';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { artData } from '../../../artData';
import ArtPost from '../utils/ArtPost';
import LiveAuctions from './LiveAuctions';
import Collection from './Collection';
import {Divider} from 'react-native-elements';


export default function Home({navigation, route}){

    return (
        <View style={styles.userHomeContainer} >
            <ScrollView scrollContainerStyle={{justifyContent: 'center'}}>
            <View style={styles.header}>
                <Text style={styles.headerTitleSmall}>Discover, collect, and sell</Text>
                <Text style={styles.headerTitleLarge}>Your Digital Art</Text>
                <View style={styles.searchBox} >
                <Pressable style={styles.searchIcon} >
                    <Ionicon name="search-outline" size={22} color={'black'}/>
                </Pressable>
                <TextInput style={{flex:8.4}}  placeholder="Search items, collections and accounts" 
                placeholderTextColor='gray'>
                </TextInput>
                <Pressable ><SimpleLineIcon name="microphone" size={22} color={'black'}/></Pressable>
                </View>
            </View>

            <View style={styles.body}>
                {
                    artData.map((item)=>{
                        return (
                            <View key={item.id}>
                            <View style={{alignItems: 'center'}} >
                            <ArtPost artistImageURL={item.artistImageURL} artTitle={item.artwork} 
                                artImageURL={item.artImageURL} artistName={item.artist} 
                                artistTitle={item.artistTitle} liked={item.liked} />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}} >
                                <Text style={{fontFamily:'epilogue-light', 
                                fontSize:16, textAlignVertical: 'center'}}>Reserve Price</Text>
                                <Text style={{fontFamily:'epilogue-black', fontSize:28,
                                textAlignVertical: 'center'}}>{item.ethPrice} ETH</Text>
                                <Text style={{textAlignVertical: 'center', fontFamily: 'epilogue-black',
                                color: 'gray', fontSize: 14}} >$ {item.priceDollars}</Text>
                            </View>
                            <View>
                                <TouchableOpacity><Text style={styles.bidButton}>Place a bid</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.viewArtworkBtn}>View artwork</Text></TouchableOpacity>
                            </View>
                            </View>
                        );
                    })
                }
                <LiveAuctions/>
                <Collection/>
                <View style={{marginHorizontal: 10, marginBottom: 80}} >
                    <Divider orientation="horizontal" width={1} />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../../assets/imageedit_4_3249652613.png')}/>
                </View>
                <TouchableOpacity>
                    <Text style={styles.bidButton}>Earn now</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.viewArtworkBtn}>Discover more</Text>
                </TouchableOpacity>

                <View style={styles.homeFooter}>    
                    <View style={{flexDirection:'row', padding: 20, justifyContent:'space-between'}}>
                        <View>
                            <Pressable><Text style={{color:'white',marginVertical:4}}>Instagram</Text></Pressable>
                            <Pressable><Text style={{color:'white',marginVertical:4}}>Twitter</Text></Pressable>
                            <Pressable><Text style={{color:'white',marginVertical:4}}>Discord</Text></Pressable>
                            <Pressable><Text style={{color:'white',marginVertical:4}}>Blog</Text></Pressable>
                        </View>
                        <View>
                            <Pressable><Text style={{color:'white',marginVertical:4}}>About</Text></Pressable>
                            <Pressable><Text style={{color:'white',marginVertical:4}}>Community Guidelines</Text></Pressable>
                            <Pressable><Text style={{color:'white',marginVertical:4}}>Terms of Services</Text></Pressable> 
                            <Pressable><Text style={{color:'white',marginVertical:4}}>Privacy</Text></Pressable> 
                            <Pressable><Text style={{color:'white',marginVertical:4}}>Careers</Text></Pressable> 
                            <Pressable><Text style={{color:'white',marginVertical:4}}>Help</Text></Pressable>
                        </View>
                    </View>
                    <Divider orientation="horizontal" width={1} color={"white"}/>
                    <Text style={{color:'white', padding: 20}}>Ⓒ2021 Openart</Text>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    userHomeContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        //borderColor: 'red',
        //borderWidth: 2,
    },
    headerTitleSmall: {
        fontFamily: 'epilogue-black',
        fontSize: 17,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20
    },
    headerTitleLarge: {
        fontFamily: 'epilogue-medium',
        fontWeight: 'bold',
        fontSize: 34,
        textAlign: 'center'
    },
    searchBox: {
        backgroundColor: '#F0F0F0',
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 12,
        borderRadius: 8,
        flexDirection: 'row',
    },
    mic: {
        flex:0.8, 
        //borderWidth: 1,
        //marginLeft: 5,
    },
    searchIcon: {
        flex: 0.8,
    },
    bidButton: {
        backgroundColor: '#7111fb',
        fontWeight: 'bold',
        color: 'white',
        padding: 16,
        textAlign: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        fontFamily: 'epilogue-medium',
        fontSize: 22,
        marginBottom: 15,
    },
    viewArtworkBtn: {
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
        marginBottom: 120,
    },
    homeFooter: {
        backgroundColor: 'black'
    },
});