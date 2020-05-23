import React, {useState, useEffect} from 'react'
import { View, StatusBar, Text, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import { AirbnbRating  } from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/native';

import profile from '../../assets/images/profile.jpg'
import Colors from '../../assets/var/colors'

import styles from './styles'
import api from '../../services/api';



const ProviderEvaluation = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { providerId, chamadoId } = route.params;
    const [provider, setProvider] = useState({});
    const [vote, setVote] = useState(1);

    const ratingFinished = (rating) => {
        setVote(rating);
    }

    const getProvider = async () => {
        const response = await api.get(`/users/${providerId}`);
        setProvider(response.data);
    }

    useEffect(() => {
        getProvider();
    }, []);

    const avaliarProvider = async () => {
        const user = await AsyncStorage.getItem('user');
        const response = await api.put('/users/avaliacao', {
            providerId: provider._id,
            clienteId: user,
            chamadoId: chamadoId,
            vote: vote,
        }).catch(err => console.log(err))

        navigation.navigate('Lista de Servicos');
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
                <Text style={styles.TextProvider}>{provider.name}</Text>
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
                        onPress={avaliarProvider}
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