import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import {Asset} from 'expo-asset'
import {useNavigation} from '@react-navigation/native'

import colors from '../assets/var/colors'

// import { Container } from './styles';

const CardService = (props) => {
  
  return (
    <View style={{...styles.box, ...props.cardStyles}}>
      <View style={{...styles.ContainerImage, ...props.imageStyles}}>
        <Image 
          source={require('../assets/images/PisosDanificados.jpg')}
          style={styles.image} 
          resizeMode='cover'
        />
      </View>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create(
  {
    box: {
      height: 420,
      width: 290,
      backgroundColor: '#121212',
      padding: 20,
    },
    ContainerImage: {
      width: 250,
      height: 400,
      backgroundColor: colors.secondary,
      borderRadius: 20,
    },
    image: {
      maxHeight: 400,
      maxWidth: 250,
      borderRadius: 20,
    }
  }
);

export default CardService;