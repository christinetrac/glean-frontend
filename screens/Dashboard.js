import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import {Icon} from "react-native-elements";

export const Dashboard = ({navigation, route}) => {
    //const profile = route?.params?.profile;
    const scheduledHarvests = [
        {
            name: 'Merryl’s Farm',
            time: 'In >1 hour',
            image: require('../assets/merryl.png')
        },
        {
            name: 'Willow Barn',
            time: 'In 1 week',
            image: require('../assets/willow.png')
        },
        {
            name: 'Hickory Acres',
            time: 'In 2 weeks',
            image: require('../assets/hickory.png')
        }
    ];

    const scheduledCards = scheduledHarvests.map( farm => (
        <TouchableOpacity style={{zIndex:10}} key={farm.name}>
            <View style={{marginRight:10, marginLeft:15}}>
                <View style={styles.card}>
                    <ImageBackground source={farm.image} style={styles.image}>
                        <View style={styles.timeBadge}><Text style={styles.timeLabel}>{farm.time}</Text></View>
                    </ImageBackground>
                    <View style={styles.cardName}><Text style={styles.farmName}>{farm.name}</Text></View>
                </View>
            </View>
        </TouchableOpacity>
        )
    );

    const pastHarvests = [
        {
            name: 'Cherry Greenhouse',
            image: require('../assets/cherry.png')
        },
        {
            name: 'Walnut Farm',
            image: require('../assets/walnut.png')
        },
    ];

    const pastCards = pastHarvests.map( farm => (
            <TouchableOpacity style={{zIndex:10}} key={farm.name}>
                <View style={{marginRight:10, marginLeft:15}}>
                    <View style={styles.card}>
                        <ImageBackground source={farm.image} style={styles.image}>
                        </ImageBackground>
                        <View style={styles.cardName}><Text style={styles.farmName}>{farm.name}</Text></View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    );

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={[styles.button, {right: 60}]}>
                <Icon name='person-outline' type='ionicon' color={'#000'} size={15}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Map')} style={[styles.button, {right: 20}]}>
                <Icon name='location-outline' type='ionicon' color={'#000'} size={16}/>
            </TouchableOpacity>
            <View style={styles.box}>
                <Text style={styles.title}>Andrew's Dashboard</Text>
                <View style={styles.rankBox}>
                    <Icon name='trophy-outline' type='ionicon' color={'#4DFFB4'} size={12}/>
                    <Text style={styles.rank}>Intermediate Harvester</Text>
                </View>
                <View style={{height: 150, width:400, paddingLeft:0, paddingRight:0, alignSelf:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.label}>Scheduled Harvests</Text>
                        <Text style={styles.seeAll}>See All</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {scheduledCards}
                    </ScrollView>
                </View>
                <View style={{height: 150, width:400, paddingLeft:0, paddingRight:0, marginTop: 30, alignSelf:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.label}>Past Harvests</Text>
                        <Text style={styles.seeAll}>See All</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {pastCards}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%'
    },
    button: {
        height: 27,
        width: 27,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#5C5C5C',
        position: 'absolute',
        top: 60,
        justifyContent: 'center'
    },
    box: {
        position: 'absolute',
        bottom: 0,
        width: 100 + '%',
        backgroundColor: '#F9F9F9',
        height: 500
    },
    title: {
        fontSize: 25,
        marginLeft: 21,
        marginTop: 35
    },
    rankBox: {
        flexDirection:'row',
        marginLeft: 21,
        paddingTop: 8,
        marginBottom: 26
    },
    rank: {
        fontSize: 12,
        paddingLeft: 7
    },
    label: {
        marginLeft: 14,
        color: '#051034',
        fontSize: 15,
        paddingBottom: 12
    },
    card: {
        width: 176,
        height: 116,
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        zIndex: 2,
    },
    cardName: {
        position: 'absolute',
        width: 100 + '%',
        height: 30,
        backgroundColor: '#E4F6EE',
        bottom: 0,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        height: 96,
        width: 'auto',
        justifyContent: "center"
    },
    farmName: {
        fontSize: 12,
        marginLeft: 13,
    },
    timeBadge: {
        width: 77,
        height: 22,
        backgroundColor: '#4DFFB4',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 10
    },
    timeLabel: {
        color: '#051034',
        fontSize: 11,
        fontWeight: '500',
        textAlign: 'center'
    },
    seeAll: {
        fontSize: 12,
        fontWeight: '600',
        color: '#9D9D9D',
        right: 20,
        position: 'absolute',
        paddingTop: 3.5
    }
});
