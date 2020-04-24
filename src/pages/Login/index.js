import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../assets/var/colors'

import styles from './styles';

const Login = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.Container}>
        <View style={styles.BoxModelLogin}>
            <View >
                <Text style={styles.TextLogin}>Login</Text>
            </View>
            <View style={styles.BoxModelInput}>
                <TextInput 
                    style={styles.TextInput}
                    placeholder="CPF"
                    placeholderTextColor={colors.purpleLight}
                />
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Sua senha"
                    placeholderTextColor={colors.purpleLight}
                />
            </View>
            <View style={styles.boxModelBtn}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Novo Chamado')}
                >
                    <View style={styles.InputBtn}>
                        <Text style={styles.TextBtn}>Entrar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

export default  Login

