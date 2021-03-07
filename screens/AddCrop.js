import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Icon} from "react-native-elements";

export const AddCrop = ({navigation, route}) => {
    const farm = route?.params?.farm;

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('HarvestLog')}>
                <Icon name='chevron-back-outline' type='ionicon' color={'#000'} size={30}/>
            </TouchableOpacity>
            <Text style={styles.subtitle}>{farm.name}</Text>
            <Text style={styles.title}>Add a Crop</Text>
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
});
