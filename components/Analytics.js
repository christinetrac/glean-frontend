import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export const Analytics = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Achievement</Text>
            <View style={styles.achievementBox}>
                <Text style={[styles.smallText, {alignSelf:'center', top:16}]}>Harvested</Text>
                <View style={styles.circle}><Text style={styles.num}>113</Text><Text style={styles.lbs}>LBS</Text></View>
                <ProgressBar
                    progress={0.35}
                    width={312}
                    color={'#4DFFB4'}
                    unfilledColor={'#3A3A3A'}
                    borderWidth={0}
                    height={12}
                    style={styles.bar}
                />
                <View style={{flexDirection:'row', justifyContent:'space-between', width:312, position:'absolute', alignSelf:'center', bottom:20}}>
                    <Text style={styles.smallText}>Intermediate</Text>
                    <Text style={styles.smallText}>Expert</Text>
                </View>
            </View>
            <Text style={styles.label}>Gleaning Statistics</Text>
            <View style={styles.statisticsBox}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop:20
    },
    label: {
        marginLeft: 4,
        color: '#051034',
        fontSize: 15,
        paddingBottom: 12
    },
    achievementBox: {
        width: 100 + '%',
        height: 176,
        borderRadius: 5,
        backgroundColor: '#EAFFF6',
        marginBottom: 30
    },
    smallText: {
        fontSize: 10,
    },
    circle: {
        width: 71,
        height: 71,
        borderRadius: 71,
        backgroundColor: 'transparent',
        borderColor: '#4DFFB4',
        borderWidth: 3,
        alignSelf: 'center',
        top:25,
        justifyContent: 'center'
    },
    num: {
        fontWeight: '500',
        fontSize:25,
        color: '#333333',
        alignSelf: 'center',
    },
    lbs: {
        color: '#333333',
        fontWeight: '500',
        fontSize:12,
        alignSelf: 'center'
    },
    bar: {
        position:'absolute',
        alignSelf:'center',
        bottom:40
    },
    statisticsBox: {
        width: 100 + '%',
        height: 240,
        borderRadius: 5,
        backgroundColor: '#EAFFF6',
    }
});
