import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.img1}/>
            <Image source={require('../assets/glean.png')} style={styles.img2}/>
            <View style={[styles.inputBox, {bottom:400}]}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={[styles.input]}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    keyboardType={'email-address'}
                />
            </View>
            <View style={[styles.inputBox, {bottom:300}]}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={[styles.input]}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.signInLabel}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.upBox}>
                <Text style={styles.quest}>Don't have an account?</Text>
                <Text style={styles.link}>Sign up</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%'
    },
    img1: {
        position:'absolute',
        width:207,
        height:223,
        top:90,
        alignSelf:'center'
    },
    img2: {
        position:'absolute',
        width:240,
        height:72,
        top:270,
        alignSelf:'center'
    },
    inputBox: {
        position: 'absolute',
    },
    input: {
        width: 355,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingLeft: 10,
        left: 27,
        fontSize: 12,
        borderColor: '#5C5C5C',
        borderWidth: 1
    },
    label: {
        left: 27,
        fontSize: 12,
        fontWeight: '400',
        paddingBottom: 12
    },
    signInButton: {
        backgroundColor: '#4DFFB4',
        borderRadius: 8,
        padding: 12,
        width: 177,
        height: 50,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 180,
        justifyContent: 'center'
    },
    signInLabel: {
        fontSize: 18,
        color: '#3A3A3A',
        textAlign: 'center'
    },
    upBox: {
        alignSelf: 'center',
        textAlign: 'center',
        position: 'absolute',
        bottom: 120,
    },
    quest: {
        fontSize: 14,
        color: '#3A3A3A'
    },
    link: {
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 4,
        textDecorationLine: 'underline',
        color: '#3A3A3A'
    }
});
