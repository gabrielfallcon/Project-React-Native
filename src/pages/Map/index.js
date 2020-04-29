import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Linking } from 'expo';

import styles from './styles';
import fundo from '../../assets/images/fundoMap.jpg';
import profile from '../../assets/images/profile.jpg'


const Map = () => {
    const navigation = useNavigation();
    
  return (
    <View style={styles.Container}>
        <ImageBackground source={fundo} style={styles.image}>
            <View style={styles.BoxModelPercusion}>
                <ImageBackground 
                    source={profile} 
                    style={styles.profile}
                    imageStyle = {{borderRadius :  60 }}>
                </ImageBackground>
                <View style={styles.TextsFeedback}>
                    <Text style={styles.TextTitle}>
                        Você está chegando na residência de Gabriel!
                    </Text>
                    <Text style={styles.TextDetail}>
                        previsão de chegada: 12:50
                    </Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.btnMaps}>
                        <Text style={styles.TextBtn}>Abrir no waze</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <View style={styles.InputBtn}>
                        <Text style={styles.TextBtn}>Finalizar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <View style={styles.InputBtn}>
                        <Text style={styles.TextBtn}>Voltar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  );
}
export default Map