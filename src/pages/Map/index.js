import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import { Linking } from 'expo';

import styles from './styles';
import fundo from '../../assets/images/fundoMap.jpg';
import profile from '../../assets/images/profile.jpg'
import api from '../../services/api';


const Map = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {lat, lon, id, endereco} = route.params;

    const openWaze = () => {
        let zoom = '6';
        let navigate = 'yes';
        const latitude = lat;
        const longitude = lon;

        let url = 'waze://?ll=' + latitude + ',' + longitude +
        '&navigate=' + navigate + '&z=' + zoom

        Linking.openURL(url);
    }

    const navigateToFinished = async () => {
        const response = await api.put(`/chamado/${id}`, {
            status: "Fechado"
          });
        navigation.navigate('Chamado Finalizado');
    }
    
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
                        Abra a rota no waze
                    </Text>
                    <Text style={styles.TextDetail}>
                        para ir até o cliente!
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={openWaze}
                >
                    <View style={styles.btnMaps}>
                        <Text style={styles.WazeTextBtn}>Abrir no waze</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={navigateToFinished}
                >
                    <View style={styles.InputBtn}>
                        <Text style={styles.TextBtn}>Finalizar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
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