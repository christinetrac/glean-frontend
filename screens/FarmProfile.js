import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Icon} from "react-native-elements";

export const FarmProfile = ({navigation, route}) => {
    const farm = route?.params?.farm;

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
            <Text style={styles.title}>{farm.name}</Text>

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
    title: {
        fontSize: 25,
        marginLeft: 25,
        marginTop: 142,
        color: '#051034',
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
