import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
  } from 'react-native'
import {Icon} from "react-native-elements";
import * as tf from '@tensorflow/tfjs'
import { fetch, bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

export const AddCrop = ({navigation, route}) => {
    const farm = route?.params?.farm;

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('HarvestLog')}>
                <Icon name='chevron-back-outline' type='ionicon' color={'#000'} size={30}/>
            </TouchableOpacity>
            <Text style={styles.subtitle}>{farm.name}</Text>
            <Text style={styles.title}>Add a Crop</Text>

            <ML></ML>
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
    loadingContainer: {
        marginTop: 80,
        justifyContent: 'center'
      },
      text: {
        color: '#3A3A3A',
        fontSize: 16
      },
      loadingModelContainer: {
        flexDirection: 'row',
        marginTop: 10
      },
      imageWrapper: {
        width: 400,
        height: 400,
        padding: 10,
        borderColor: '#3A3A3A',
        borderWidth: 2,
        borderStyle: 'solid',
        marginTop: 40,
        marginBottom: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      },
      imageContainer: {
        width: 350,
        height: 350,
        position: 'absolute',
        top: 10,
        left: 10,
        bottom: 10,
        right: 10
      },
      predictionWrapper: {
        height: 100,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
      },
      footer: {
        marginTop: 40
      },
      imagePickerAndButtons: {
          justifyContent: 'center',
          alignItems: 'stretch'
      },
      inputBox: {
          borderStyle: 'solid',
          borderRadius: 5,
          borderWidth: 2,
          borderColor: '#3A3A3A'
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
    }
});

class ML extends React.Component {
    state = {
      isTfReady: false,
      isModelReady: false,
      image: null
    }
  
    async componentDidMount() {
      await tf.ready()
      this.setState({
        isTfReady: true
      })
      
      const model = require("../assets/model/model.json");
      const weights = require("../assets/model/group1-shard1of1.bin");
      const loadedModel = await tf.loadLayersModel (
        bundleResourceIO(model, weights)
      );
      this.model = loadedModel;
      
  
      this.setState({ isModelReady: true })
      this.getPermissionAsync()
    }
  
    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    }
  
    imageToTensor(rawImageData) {
      const imageData = new Uint8Array(rawImageData);
      const image = decodeJpeg(imageData);
      const resized = tf.image.resizeBilinear(image, [64, 64]);
      const scaled = resized.div(255.0);
      const expanded = scaled.expandDims();
  
      return expanded;
    }
  
    convertProbsToClasses(probs) {
      const classNames = ['apple', 'banana', 'beetroot', 'bell pepper', 'cabbage', 'capsicum', 'carrot', 'cauliflower', 'chilli pepper', 'corn', 'cucumber', 'eggplant', 'garlic', 'ginger', 'grapes', 'jalepeno', 'kiwi', 'lemon', 'lettuce', 'mango', 'onion', 'orange', 'paprika', 'pear', 'peas', 'pineapple', 'pomegranate', 'potato', 'raddish', 'soy beans', 'spinach', 'sweetcorn', 'sweetpotato', 'tomato', 'turnip', 'watermelon'];
      let res = []
      let prob1 = -1;
      let prob2 = -1;
      let prob3 = -1;
      let max1 = 0;
      let max2 = 0;
      let max3 = 0;
  
      for(let i = 0; i < classNames.length; i++) {
        if (probs[i] > prob1) {
          prob1 = probs[i];
          max1 = i;
        }
      }
  
      for(let i = 0; i < classNames.length; i++) {
        if (probs[i] > prob2 && i != max1) {
          prob2 = probs[i];
          max2 = i;
        }
      }
  
      for(let i = 0; i < classNames.length; i++) {
        if (probs[i] > prob3 && i != max1 && i != max2) {
          prob3 = probs[i];
          max3 = i;
        }
      }
  
      res.push({
        className: classNames[max1],
        probability: probs[max1]
      });
  
      res.push({
        className: classNames[max2],
        probability: probs[max2]
      });
  
      res.push({
        className: classNames[max3],
        probability: probs[max3]
      });
  
      return res;
    }
  
    classifyImage = async () => {
      try {
        const imageAssetPath = Image.resolveAssetSource(this.state.image)
        const response = await fetch(imageAssetPath.uri, {}, { isBinary: true })
        const rawImageData = await response.arrayBuffer()
        const imageTensor = this.imageToTensor(rawImageData)
        const probs = await this.model.predict(imageTensor);
        probs.print();
        probs.softmax().print();
        const probTensor = await probs.softmax().data();
        const predictions = this.convertProbsToClasses(probTensor);
        console.log(predictions);
        this.setState({ cropPrediction: predictions[0].className })
      } catch (error) {
        console.log(error)
      }
    }
  
    selectImage = async () => {
      try {
        let response = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3]
        })
  
        if (!response.cancelled) {
          const source = { uri: response.uri }
          this.setState({ image: source })
          this.classifyImage()
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    renderPrediction = prediction => {
      return (
        
        <Text key={prediction.className} style={styles.text}>
          {prediction.className}
        </Text>
      )
    }
  
    render() {
      const { isTfReady, isModelReady, predictions, image } = this.state
  
      return (
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <View style = {styles.imagePickerAndButtons}>
            <TouchableOpacity
                style={styles.imageWrapper}
                onPress={isModelReady ? this.selectImage : undefined}>
                {image && <Image source={image} style={styles.imageContainer} />}
    
                {isModelReady && !image && (
                <View>
                    <Text style={styles.text}>Add a photo of your crop!</Text>
                    <Text style={{}}>Glean will automatically detect the crop name</Text>
                </View>
                )}
            </TouchableOpacity>
            <Text>Crop Name</Text>
            <TextInput style={styles.inputBox}>{this.state.cropPrediction}</TextInput>
            <Text>Yield</Text>
            <TextInput style={styles.inputBox}></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }