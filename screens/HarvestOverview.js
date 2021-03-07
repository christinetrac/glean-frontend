import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {Icon} from "react-native-elements";

export const HarvestOverview = ({navigation, route}) => {
    const farm = route?.params?.farm;

    const veggies = [
        {
            name: 'Beetroot',
            amount: '5 lbs.',
            image: require('../assets/beetroot2.png')
        },
        {
            name: 'Carrots',
            amount: '10 lbs.',
            image: require('../assets/carrot2.png')
        },
        {
            name: 'Spinach',
            amount: '2 lbs.',
            image: require('../assets/spinach2.png')
        },
        {
            name: 'Tomatoes',
            amount: '3 lbs.',
            image: require('../assets/tomato2.png')
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
            <TouchableOpacity style={styles.back} onPress={() => {navigation.pop()}}>
                <Icon name='chevron-back-outline' type='ionicon' color={'#000'} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, {borderWidth: 1, borderColor: '#9D9D9D',right: 60}]}>
                <Icon name='person-outline' type='ionicon' color={'#9D9D9D'} size={15}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Map')} style={[styles.buttons, {borderWidth: 1, borderColor: '#9D9D9D',right: 20}]}>
                <Icon name='location-outline' type='ionicon' color={'#9D9D9D'} size={16}/>
            </TouchableOpacity>
            <Text style={styles.subtitle}>{farm.name}</Text>
            <Text style={styles.title}>Harvest Overview</Text>
            <Text style={{fontSize:15,marginLeft:25, marginTop:20, marginBottom:15}}>Logged Crops</Text>
            <View style={styles.cardsContainer}>
                {cards}
            </View>
            <Image source={require('../assets/harvestoverview.png')} style={styles.drawing}/>
            <Text style={styles.message}>
                You collected <Text style={{fontWeight:'700'}}>20lbs</Text> of food through gleaning this trip.
            </Text>
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
    title: {
        fontSize: 25,
        marginLeft: 25,
        marginTop: 6,
        color: '#051034',
    },
    subtitle: {
        fontSize: 11,
        marginLeft: 25,
        marginTop: 142,
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
    drawing: {
        position:'absolute',
        height:174,
        bottom:30,
        left:30,
        width:593,
        zIndex:99
    },
    message: {
        textAlign:'center',
        fontSize:15,
        color:'#3A3A3A',
        position:'absolute',
        bottom:90,
        left:150,
        width:215
    }
});
