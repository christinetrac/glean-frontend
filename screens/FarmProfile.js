import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {Icon} from "react-native-elements";

export const FarmProfile = ({navigation, route}) => {
    const farm = route?.params?.farm;

    const veggies = [
        {
            name: 'Beetroot',
            amount: '10 yards',
            image: require('../assets/beetroot.png')
        },
        {
            name: 'Carrots',
            amount: '6 acres',
            image: require('../assets/carrot.png')
        },
        {
            name: 'Spinach',
            amount: '1 acre',
            image: require('../assets/spinach.png')
        },
        {
            name: 'Tomatoes',
            amount: '3 acres',
            image: require('../assets/tomato.png')
        },
    ];

    const cards = veggies.map( veggie => (
            <View style={{zIndex:10}} key={veggie.name}>
                <View style={{marginLeft:17, marginBottom:17}}>
                    <View style={styles.card}>
                        <ImageBackground source={veggie.image} style={styles.image}>
                            <View style={styles.timeBadge}><Text style={styles.timeLabel}>{veggie.amount}</Text></View>
                        </ImageBackground>
                        <View style={styles.cardName}><Text style={styles.farmName}>{veggie.name}</Text></View>
                    </View>
                </View>
            </View>
        )
    );

    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.buttons, {borderWidth: 1, borderColor: '#9D9D9D',right: 100}]} onPress={() => navigation.navigate('Dashboard')}>
                <Icon name='home-outline' type='ionicon' color={'#9D9D9D'} size={15}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, {borderWidth: 1, borderColor: '#9D9D9D',right: 60}]}>
                <Icon name='person-outline' type='ionicon' color={'#9D9D9D'} size={15}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Map')} style={[styles.buttons, {borderWidth: 1, borderColor: '#9D9D9D',right: 20}]}>
                <Icon name='location-outline' type='ionicon' color={'#9D9D9D'} size={16}/>
            </TouchableOpacity>
            <View style={styles.attendTag}>
                <Text style={styles.attendText}>12 attending</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.title}>{farm.name}</Text>
                <Icon name='information-circle-outline' type='ionicon' color={'#051034'} size={16}/>
            </View>
            <View style={{flexDirection:'row', marginLeft:25, marginTop:8}}>
                <View style={{flexDirection:'row'}}>
                    <Icon name='calendar-outline' type='ionicon' color={'#4DFFB4'} size={21}/>
                    <Text style={styles.details}>March 7, 2021</Text>
                </View>
                <View style={{flexDirection:'row', marginLeft:30}}>
                    <Icon name='time-outline' type='ionicon' color={'#4DFFB4'} size={23}/>
                    <Text style={styles.details}>12:00 PM</Text>
                </View>
            </View>
            <Text style={[styles.label, {marginLeft:25, marginTop:20, marginBottom:15}]}>Crops at {farm.name}</Text>
            <View style={styles.cardsContainer}>
                {cards}
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HarvestLog', {farm:farm})}>
                <Text style={styles.buttonText}>Log Harvest</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%'
    },
    back: {
        position: 'absolute',
        left: 21,
        top: 80
    },
    buttons: {
        height: 27,
        width: 27,
        borderRadius: 5,
        position: 'absolute',
        top: 60,
        justifyContent: 'center'
    },
    attendTag: {
        marginTop: 142,
        marginLeft: 25,
        width:81,
        height:22,
        backgroundColor:'#EFEFEF',
        borderRadius: 5,
        justifyContent:'center'
    },
    attendText:{
        fontSize:11,
        textAlign:'center'
    },
    title: {
        fontSize: 25,
        marginLeft: 25,
        marginTop: 10,
        color: '#051034',
    },
    details: {
       fontSize:12,
       fontWeight:'500',
        marginLeft:6,
        marginTop:4
    },
    label:{
        fontSize:15
    },
    cardsContainer: {
        marginLeft:10,
        marginRight:12,
        flexDirection:'row',
        flexWrap: 'wrap',
        flexBasis: 40 + '%',
        width: 100 + '%'
    },
    card: {
        width: 172,
        height: 212,
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        zIndex: 2,
    },
    cardName: {
        position: 'absolute',
        width: 100 + '%',
        height: 50,
        backgroundColor: '#E4F3EC',
        bottom: 0,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        height: 192,
        width: 'auto',
        justifyContent: "center"
    },
    farmName: {
        fontSize: 14,
        marginLeft: 13,
    },
    timeBadge: {
        width: 73,
        height: 22,
        backgroundColor: '#4DFFB4',
        borderRadius:5,
        justifyContent: 'center',
        position: 'absolute',
        right: 6,
        top: 7
    },
    timeLabel: {
        color: '#051034',
        fontSize: 11,
        fontWeight: '500',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#051034',
        borderRadius: 5,
        width:155,
        height:35,
        alignSelf:'center',
        position:'absolute',
        justifyContent: 'center',
        bottom:65,
        zIndex: 99
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 15,
        color: '#4DFFB4',
        textAlign: 'center'
    },
});
