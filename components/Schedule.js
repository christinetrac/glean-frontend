import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Icon, Overlay} from "react-native-elements";
import SwitchSelector from "react-native-switch-selector";

export const Schedule = ({navigation}) => {
    const [date, setDate] = useState('');
    const [bottomPopupVisible, setBottomPopupVisible] = useState(false);
    const [availabilityPopupVisible, setAvailabilityPopupVisible] = useState(false);

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [amPm, setAmPm] = useState(0);

    const activeDays = [16, 2, 21, 20];
    const options = [
        { label: "AM", value: 0 },
        { label: "PM", value: 1 },
    ];

    const handleDatePress = (date) => {
        setDate(date);
        setBottomPopupVisible(!bottomPopupVisible);
    };

    const handleSetAvailability = () => {
        setBottomPopupVisible(!bottomPopupVisible);
        setAvailabilityPopupVisible(!availabilityPopupVisible);
    };

    const handleSave = () => {
        setAvailabilityPopupVisible(!availabilityPopupVisible);
        setStartTime('');
        setEndTime('');
    };

    const onChangeStart = (input) => {
        const formattedValue = formatInputStart(input);
        if (formattedValue.length < 6) {
            setStartTime(formattedValue);
        }
    };

    const onChangeEnd = (input) => {
        const formattedValue = formatInputEnd(input);
        if (formattedValue.length < 6) {
            setEndTime(formattedValue);
        }
    };

    const formatInputStart = (input) => {
        if (input.length > 2 && input[2] !== ":") {
            return input.substring(0, 2) + ":" + input.slice(2);
        }
        return input;
    };

    const formatInputEnd = (input) => {
        if (input.length > 1 && input[1] !== ":") {
            return input.substring(0, 1) + ":" + input.slice(1);
        }
        return input;
    };

    const availabilityPopup = () => {
        return (
            <View style={styles.centeredView}>
                <Overlay
                    animationType="fade"
                    transparent={true}
                    isVisible={availabilityPopupVisible}
                    fullScreen={true}
                    overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={styles.close} onPress={() => setAvailabilityPopupVisible(!availabilityPopupVisible)}>
                                <Icon name='close-outline' type='ionicon' color={'#000'} size={28}/>
                            </TouchableOpacity>
                            <View style={{flexDirection:'row', width:190, justifyContent:'space-between', marginTop:30, marginBottom:15, marginLeft:22}}>
                                <Text style={{fontSize:15, fontWeight:'600'}}>Set Availability</Text>
                                <View style={{height:5, width:5, marginTop:6, backgroundColor:'#4DFFB4'}}/>
                                <Text style={{fontWeight:'400', fontSize:15}}>March {date.day}</Text>
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'space-between', margin:22}}>
                                <Text style={styles.popupLabel}>From</Text>
                                <TextInput
                                    style={[styles.input]}
                                    onChangeText={text => onChangeStart(text)}
                                    value={startTime}
                                    keyboardType={'number-pad'}
                                />
                                <SwitchSelector
                                    initial={0}
                                    onPress={value => setAmPm(value)}
                                    options={options}
                                    style={{
                                        width:77,
                                        marginTop:10
                                    }}
                                    borderRadius={5}
                                    height={22}
                                    backgroundColor={'#D3D3D3'}
                                    buttonColor={'#3F9E81'}
                                    textStyle={{color: '#8E8E8E'}}
                                    fontSize={12}
                                />
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:22, marginTop:10, marginRight:22}}>
                                <Text style={styles.popupLabel}>Until </Text>
                                <TextInput
                                    style={[styles.input]}
                                    onChangeText={text => onChangeEnd(text)}
                                    value={endTime}
                                    keyboardType={'number-pad'}
                                />
                                <SwitchSelector
                                    initial={0}
                                    onPress={value => setAmPm(value)}
                                    options={options}
                                    style={{
                                        width:77,
                                        marginTop:10
                                    }}
                                    borderRadius={5}
                                    height={22}
                                    backgroundColor={'#D3D3D3'}
                                    buttonColor={'#3F9E81'}
                                    textStyle={{color: '#8E8E8E'}}
                                    fontSize={12}
                                />
                            </View>
                            <TouchableOpacity style={[styles.button, {position:'absolute',width:136, top:255}]} onPress={() => handleSave()}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Overlay>
            </View>
        )
    };

    const availability = (day) => {
        if(!activeDays.includes(day)) {
            return (
                <View style={styles.availability}>
                    <Text style={styles.notSetText}>You have not set an availability.</Text>
                    <TouchableOpacity style={[styles.button, {flexDirection:'row'}]} onPress={() => handleSetAvailability()}>
                        <View style={{ height:18,
                            width:18,
                            borderWidth: 2,
                            borderColor: '#4DFFB4',
                            borderRadius: 2, marginRight:8, marginTop:8}}>
                            <Icon name='add-outline' type='ionicon' color={'#4DFFB4'} size={12}/>
                        </View>
                        <Text style={[styles.buttonText, {marginTop:8}]}>Set Availability</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={styles.availability}>
                    <Text style={{fontWeight:'500', fontSize:15, marginBottom:10}}>From</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{height:11, width:11, borderRadius:11, marginTop:2, marginRight:10, backgroundColor:'#4DFFB4'}}/>
                        <Text style={{fontSize:15, marginBottom:10}}>10:30 AM</Text>
                    </View>
                    <View style={{marginLeft: 3, height: 25, borderLeftColor: '#000', borderLeftWidth: '1'}}/>
                    <Text style={{fontSize:15,fontWeight:'500', marginBottom:10, marginTop:10}}>Until</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{height:11, width:11, borderRadius:11, marginTop:2, marginRight:10, backgroundColor:'#FF4545'}}/>
                        <Text style={{fontSize:15}}>5:00 PM</Text>
                    </View>
                    <TouchableOpacity style={[styles.button, {right:20, top:100, flexDirection:'row'}]}>
                        <View style={{
                           marginRight:8, marginTop:8}}>
                            <Icon name='edit' color={'#4DFFB4'} size={16}/>
                        </View>
                        <Text style={[styles.buttonText, {marginTop:8}]}>Edit Availability</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    };

    const bottomPopup = () => {
        return (
            bottomPopupVisible ? (
                <View style={styles.bottomPopup}>
                    <TouchableOpacity style={styles.close} onPress={() => setBottomPopupVisible(!bottomPopupVisible)}>
                        <Icon name='close-outline' type='ionicon' color={'#000'} size={28}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row', width:170, justifyContent:'space-between', marginTop:30, marginLeft:22}}>
                        <Text style={{fontSize:15, fontWeight:'600'}}>Availability</Text>
                        <View style={{height:5, width:5, marginTop:6, backgroundColor:'#4DFFB4'}}/>
                        <Text style={{fontWeight:'400', fontSize:15}}>March {date.day}</Text>
                        {availability(date.day)}
                    </View>
                </View>
            ) : (<View/>)
        )
    };

    return(
        <View style={styles.container}>
            <Calendar
                hideExtraDays
                current={'2021-03-06'}
                onDayPress={(date) => handleDatePress(date)}
                monthFormat={'MMMM'}
                markedDates={{
                    '2021-03-16': {selected: true, marked: true, selectedColor: '#4DFFB4'},
                    '2021-03-02': {selected: true, marked: true, selectedColor: '#4DFFB4'},
                    '2021-03-21': {selected: true, marked: true, selectedColor: '#4DFFB4'},
                    '2021-03-20': {selected: true, marked: true, selectedColor: '#4DFFB4'},
                }}
                markingType={'multi-dot'}
                theme={{
                    textSectionTitleColor: '#000000',
                    dayTextColor: '#000000',
                    todayTextColor: '#000000',
                    selectedDayTextColor: '#000000',
                    monthTextColor: '#000000',
                    indicatorColor: '#000000',
                    selectedDayBackgroundColor: '#4DFFB4',
                    arrowColor: '#000000',
                    selectedColor: '#4DFFB4',
                    'stylesheet.calendar.header': {
                        week: {
                            marginTop: 30,
                            marginHorizontal: 12,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }
                }}
            />
            {bottomPopup()}
            {availabilityPopup()}
            <Image source={require('../assets/profile.png')} style={styles.img}/>
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
    bottomPopup: {
        position:'absolute',
        width: 113 + '%',
        height: 255,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -6
        },
        shadowOpacity: 0.1,
        bottom:0,
        left: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        zIndex : 1
    },
    close: {
        position: 'absolute',
        right: 15,
        top: 15
    },
    availability: {
        position:'absolute',
        top:40,
        width: 375,
        alignSelf: 'center'
    },
    notSetText: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#949494',
        position: 'absolute',
        top:30
    },
    button: {
        backgroundColor: '#051034',
        borderRadius: 5,
        width:155,
        height:35,
        alignSelf:'center',
        position:'absolute',
        justifyContent: 'center',
        top:75,
        zIndex: 99
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 15,
        color: '#4DFFB4',
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        position: "relative",
        height: 324,
        width: 334,
    },
    input: {
        width: 96,
        height: 43,
        borderRadius: 8,
        backgroundColor: '#fff',
        padding: 12,
        fontSize: 20,
        fontWeight: '500',
        borderColor: '#4DFFB4',
        borderWidth: 1,
        alignSelf:'center',
        textAlign:'center',
    },
    popupLabel: {
        marginTop:10,
        fontSize: 15
    },
    img:{
        position:'absolute',
        bottom:-55,
        width:490,
        height:280,
        left:-35
    }
});
