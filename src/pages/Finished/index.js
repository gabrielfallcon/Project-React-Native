import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'

import styles from './styles';

// import LottieView from "lottie-react-native";

// import success from '../../assets/animations/sucess.json'

const Finished = () => {
    const navigation = useNavigation();

    const navigateToListTicket = () => {
        navigation.navigate('Lista Chamado');
    }

  return (
    <View style={styles.Container}>
        <View style={styles.BoxModelConfirmed}>
            <View >
                <Text style={styles.TextConfirmed}>
                    Chamado
                    Finalizado!
                </Text>
                <Text style={styles.TextInformation}>
                    Este chamado foi
                    encerrado com sucesso!
                </Text>
            </View>
            <View style={styles.boxModelBtn}>
                <TouchableOpacity
                    onPress={navigateToListTicket}
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
export default Finished