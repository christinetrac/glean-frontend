import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Icon} from "react-native-elements";

export const Map = ({navigation, route}) => {
    //const profile = route?.params?.profile;

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => {navigation.pop()}}>
                <Icon name='chevron-back-outline' type='ionicon' color={'#000'} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={[styles.button, {right: 60}]}>
                <Icon name='person-outline' type='ionicon' color={'#000'} size={15}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Map')} style={[styles.button, {right: 20}]}>
                <Icon name='location-outline' type='ionicon' color={'#000'} size={16}/>
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
        left: 20,
        top: 60
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
});
