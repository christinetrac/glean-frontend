import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Icon} from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Analytics } from '../components/Analytics';
import { Schedule } from '../components/Schedule';

const Tab = createMaterialTopTabNavigator();

export const UserProfile = ({navigation, route}) => {
    //const profile = route?.params?.profile;

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => {navigation.pop()}}>
                <Icon name='chevron-back-outline' type='ionicon' color={'#000'} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {border:'none', right: 60,  backgroundColor:'#4DFFB4'}]}>
                <Icon name='person-outline' type='ionicon' color={'#051034'} size={15}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Map')} style={[styles.button, {borderWidth: 1, borderColor: '#9D9D9D',right: 20}]}>
                <Icon name='location-outline' type='ionicon' color={'#9D9D9D'} size={16}/>
            </TouchableOpacity>
            <Text style={styles.title}>Andrew's Profile</Text>
            <View style={styles.rankBox}>
                <Icon name='trophy-outline' type='ionicon' color={'#4DFFB4'} size={16}/>
                <Text style={styles.rank}>Intermediate Harvester</Text>
            </View>
            <NavigationContainer independent={true}>
                <Tab.Navigator tabBarOptions={{
                    style:{width: 190, marginLeft:10, shadowColor: 'transparent'},
                    indicatorStyle:{backgroundColor:'#4DFFB4', height:3, width:66, marginLeft:19},
                    tabStyle:{width: 103, height:40},
                    labelStyle:{fontSize:15, textTransform:'capitalize', fontWeight:'600', color:'#3A3A3A'},
                }}>
                    <Tab.Screen name="Analytics" component={Analytics} />
                    <Tab.Screen name="Schedule" component={Schedule} />
                </Tab.Navigator>
            </NavigationContainer>
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
    button: {
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
        marginTop: 142,
        color: '#051034',
    },
    rankBox: {
        flexDirection:'row',
        marginLeft: 25,
        paddingTop: 8,
        marginBottom: 26
    },
    rank: {
        fontSize: 12,
        paddingLeft: 7
    },
});
