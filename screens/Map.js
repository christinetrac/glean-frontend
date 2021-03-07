import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, Linking} from 'react-native';
import {Icon} from "react-native-elements";
import MapView, {Marker, Callout, CalloutSubview} from 'react-native-maps';

export const Map = ({navigation, route}) => {
    //const profile = route?.params?.profile;

    return(
        <View>
            <MapContainer>
            
            </MapContainer>
            <TouchableOpacity style={styles.back} onPress={() => {navigation.pop()}}>
                <Icon name='chevron-back-outline' type='ionicon' color={'#000'} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={[styles.button, { borderWidth: 1, borderColor: '#9D9D9D',right: 60}]}>
                <Icon name='person-outline' type='ionicon' color={'#9D9D9D'} size={15}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {border:'none', right: 20, backgroundColor:'#4DFFB4'}]}>
                <Icon name='location-outline' type='ionicon' color={'#051034'} size={16}/>
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
        top: 80,
        zIndex: 0
    },
    button: {
        height: 27,
        width: 27,
        borderRadius: 5,
        position: 'absolute',
        top: 60,
        justifyContent: 'center',
        zIndex: 0
    },
    bubble: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15
      },
      name: {
        fontSize: 24,
        marginBottom: 5,
        flexDirection: 'column'
      },
      center: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      callout: {
        flexDirection: 'column'
      },
      calloutButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      directions: {
        color: '#4287f5',
        fontSize: 16,
        marginBottom: 10
      },
      follow: {
        color: '#4287f5',
        fontSize: 16
      },
      absoluteFillObject: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: -1
      },
      underline: {textDecorationLine: 'underline'},
      calloutHighlight: {
          backgroundColor: '#4DFFB4',
          borderRadius: 5,
          padding: 5,
          alignSelf: 'flex-start'
      }
});

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 41.675438;
const LONGITUDE = -91.513312;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const center = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  };

class MapContainer extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <MapView
          style = {styles.absoluteFillObject}
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion = {center}
          >
            {markers.map(marker => (
              <Marker
                key = {marker.title}
                coordinate = {marker.coordinate}
                pinColor = {marker.color}
                title = {marker.title}
              >
                <CustomCallout title = {marker.title} query = {marker.query} placeId = {marker.placeId} address1 = {marker.address1} address2 = {marker.address2}>
  
                </CustomCallout>
              </Marker>
            ))}
          </MapView>
        </View>
      );
    }
  }

class CustomCallout extends React.Component {
    constructor(props) {
      super(props);
      this.title = props.title;
      this.query = props.query;
      this.placeId = props.placeId;
      this.address1 = props.address1;
      this.address2 = props.address2;
    }
  
    render() {
      return (
        <Callout tooltip>
            <View style = {styles.bubble}>
                <View style = {styles.callout}>
                    <Text style = {styles.name}>
                        {this.title}
                    </Text>
                    <Text>
                        {this.address1}
                    </Text>
                    <Text style = {{marginBottom: 3}}>
                        {this.address2}
                    </Text>
                    <CalloutSubview
                    onPress = {() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + this.query + '&query_place_id=' + this.placeId)}>
                    <Text style = {[styles.directions, styles.underline]}>View on Maps</Text>
                    </CalloutSubview>
                    <View style = {styles.calloutHighlight}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='star-outline' type='ionicon' size={16}/>
                            <Text>
                                2 tonnes harvested
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Callout>
      );
    }
  }


function randomColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  
const markers = [
    {
      coordinate: {
        latitude: 41.631087,
        longitude:-91.571399
      },
      title: 'Lucky Star Farms',
      query: 'lucky+star+farms',
      placeId: 'ChIJ---GfHdH5IcRbsdgM8j32so',
      address1: '2625 Hwy 1 SW, Iowa City, IA',
      address2: '52240, United States'
    },
    {
      coordinate: {
        latitude: 41.675438,
        longitude: -91.513312
      },
      title: 'Calico Farm',
      query: 'calico+farm',
      placeId: 'ChIJSyR-c_lp5IcRPw1xizXHlu0',
      address1: '1380 N Dodge St Ct, Iowa City, IA',
      address2: '52245, United States'
    },
    {
      coordinate: {
        latitude: 41.7180398,
        longitude: -91.4630386
      },
      title: 'Wilson\'s Orchard & Farm',
      query: 'wilsons+orchard+farm',
      placeId: 'ChIJy94QyN1o5IcRrw1e7gEl5Ns',
      address1: '4823 Dingleberry Rd NE #1, Iowa City, IA',
      address2: '52240, United States'
    }
  ]