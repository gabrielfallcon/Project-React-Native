import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import styles from './styles';

// import LottieView from "lottie-react-native";

// import success from '../../assets/animations/sucess.json'

const Confirmed = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.Container}>
        <View style={styles.BoxModelConfirmed}>
            <View >
                <Text style={styles.TextConfirmed}>
                    Serviço
                    Contratado!
                </Text>
                <Text style={styles.TextInformation}>
                    Aguarde até o prestador do 
                    serviço chegar na sua residência.
                </Text>
            </View>

            {/* <View style={styles.animation}>
                <LottieView 
                    source={success} 
                    autoPlay 
                    resizeMode="contain"
                    loop/>
            </View>
             */}
            <View style={styles.boxModelBtn}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Mapa')}
                >
                    <View style={styles.InputBtn}>
                        <Text style={styles.TextBtn}>Voltar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}
export default Confirmed