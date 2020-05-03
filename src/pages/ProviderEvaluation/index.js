import React, {useState} from 'react'
import { View, StatusBar, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { AirbnbRating  } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import profile from '../../assets/images/profile.jpg'
import Colors from '../../assets/var/colors'

import styles from './styles'

const ProviderEvaluation = () => {
    const navigation = useNavigation();
    const [vote, setVote] = useState(1);

    const ratingFinished = (rating) => {
        setVote(rating);
    }

    return(
        <View style={styles.Container}>
            <StatusBar barStyle='dark-content' backgroundColor="#BB86FC" />
            <View style={styles.BoxModelLogin}>
                <ImageBackground 
                    source={profile} 
                    style={styles.profile}
                    imageStyle = {{borderRadius :  60 }} 
                />
                <Text style={styles.TextProvider}>Matheus Somota</Text>
                <Text style={styles.TextsubTitle}>Prestador de Serviços</Text>
                <View style={styles.containerRating}>
                    <AirbnbRating 
                        showRating={false}
                        defaultRating={vote}
                        size={50}
                        selectedColor={Colors.purpleLight}
                        onFinishRating={(number) => ratingFinished(number)}
                    />
                </View>
                <View style={styles.BoxModelInput}>
                    <Text style={styles.TextEvaluation}>Avalie o Serviço</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Lista de Servicos')}
                    >
                        <View style={styles.InputBtn}>
                            <Text style={styles.TextBtn}>Finalizar</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            
    </View>
    )
}

export default ProviderEvaluation