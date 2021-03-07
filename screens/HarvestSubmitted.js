import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Icon} from "react-native-elements";

export const HarvestSubmitted = ({navigation, route}) => {
    const farm = route?.params?.farm;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Harvest Submitted!</Text>
            <Text style={styles.text}>
                Thanks for gleaning! Make sure you donate the crops you’ve collected today to a nearby food bank.
            </Text>
            <Image source={require('../assets/basket.png')} style={styles.img}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HarvestOverview', {farm:farm})}>
                <Text style={styles.buttonText}>View Overview</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%'
    },
    title: {
        fontSize: 25,
        marginLeft: 28,
        marginTop: 310,
        color: '#051034',
    },
    text:{
        fontSize: 14,
        marginLeft: 28,
        marginTop: 20,
        color: '#3A3A3A',
        width:250
    },
    img: {
        position:'absolute',
        width:266,
        height:202,
        top:120,
        left:-10
    },
    button: {
        backgroundColor: '#051034',
        borderRadius: 5,
        width:155,
        height:35,
        position:'absolute',
        justifyContent: 'center',
        top:450,
        zIndex: 99,
        marginLeft:28
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 15,
        color: '#4DFFB4',
        textAlign: 'center'
    },
});
