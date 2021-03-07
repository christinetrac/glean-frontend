import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon} from "react-native-elements";

export const HarvestLog = ({navigation, route}) => {
    const farm = route?.params?.farm;

    const [logs, setLogs] = useState([]);

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
            <Text style={styles.title}>Harvest Log</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.list}>
                    <View style={styles.addBox}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddCrop', {farm:farm})}>
                                <View style={{marginLeft:2, marginTop:-1}}>
                                    <Icon name='add-outline' type='ionicon' color={'#4DFFB4'} size={30}/>
                                </View>
                            </TouchableOpacity>
                            <Text style={[styles.text, {marginLeft: 40, marginTop:7}]}>Add Crop</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
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
        marginTop: 6,
        color: '#051034',
    },
    subtitle: {
        fontSize: 11,
        marginLeft: 25,
        marginTop: 142,
    },
    list: {
        marginTop:20
    },
    addBox: {
        width:366,
        height:64,
        backgroundColor: '#E4F6EE',
        borderRadius: 8,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    addButton: {
        height:34,
        width:34,
        borderWidth: 2,
        borderColor: '#4DFFB4',
        borderRadius: 2,
        left:21,
    },
    text: {
        fontSize: 15,
        color: '#051034'
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
