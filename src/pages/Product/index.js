import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';

const Product = () =>  {
    const navigation = useNavigation();
    const route = useRoute();

    const {chave, titulo, descricao, imagem, tempo} = route.params;

    const navigatoToNewTicket = () => {
        navigation.navigate('Novo Chamado', {
            tipo: titulo
        })
    }
    
  return (
    <View style={styles.Container}>
        <View style={styles.imageContainer}>
            <Image 
                source={require('../../assets/images/PisosDanificados.jpg')}
                style={styles.image}
            />
        </View>
        <View style={styles.BoxModelPercusion}>
            <View style={styles.TextsFeedback}>
                <Text style={styles.TextTitle}>{titulo} - {tempo}</Text>
                <Text style={styles.TextDetail}>
                    {descricao}
                </Text> 
            </View>
            <TouchableOpacity
                        onPress={() => navigatoToNewTicket()}
            >
                <View style={styles.InputBtn}>
                    <Text style={styles.TextBtn}>Continuar</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default Product