import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import colors from '../../assets/var/colors'

import styles from './styles';

const NewTicket = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.Container}>
        <View style={styles.BoxModelChamado}>
            <View >
                <Text style={styles.Textchamado}>Novo Chamado</Text>
            </View>
            <View style={styles.BoxModelInput}>
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Titulo"
                    placeholderTextColor={colors.purpleLight}
                />
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Tipo de serviço"
                    placeholderTextColor={colors.purpleLight}
                />
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Descrição"
                    placeholderTextColor={colors.purpleLight}
                />
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Selecione o Endereço"
                    placeholderTextColor={colors.purpleLight}
                />



                <TextInput 
                    style={styles.TextInput}
                    placeholder="Anexar Arquivo"
                    placeholderTextColor={colors.purpleLight}
                />      

            </View>
            <View style={styles.boxModelBtn}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Confirmacao Chamado')}
                >
                    <View style={styles.InputBtn}>
                        <Text style={styles.TextBtn}>Cadastrar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

export default  NewTicket

