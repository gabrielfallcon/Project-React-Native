import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage, TextInput, 
    TouchableOpacity, Alert, StatusBar, ImageBackground, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../assets/var/colors'

import fundo from '../../assets/images/fundo-constructor.jpg'

import styles from './styles';
import api from '../../services/api';

const Login = () => {
    const navigation = useNavigation();

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const [hideCpf, setHideCpf] = useState(true);
    const [hideSenha, setHideSenha] = useState(true);

    const cpfPattern = /^([0-9]{3}?[\.]?[-]?[0-9]{3}?[\.]?[-]?[0-9]{3}?[-]?[0-9]{2})*$/g;

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user) {
                AsyncStorage.getItem('userType').then(userType => {
                    if(userType === 'prestador') return navigation.navigate('Lista Chamado');
                    if(userType === 'cliente') return navigation.navigate('Lista de Servicos');
                }) 
            }
        })
    }, []);

    const handleLogin = async () => {
        const response = await api.post('/loginApp', {
                cpf: cpf,
                password: senha
        });
        const {status, _id, typeUser} = response.data
        if(status === false) {
            return Alert.alert(
                'Erro ao Entrar',
                'Os campos digitados são invalidos, tente novamente.',
                [{
                    text: 'Ok',
                    style: 'default'
                }],
                { cancelable: false }
            );
        }
       
        AsyncStorage.setItem('user', _id);
        AsyncStorage.setItem('userType', typeUser);

        setCpf('');
        setSenha('');

        if(typeUser === 'prestador') return navigation.navigate('Lista Chamado');
        if(typeUser === 'cliente') return navigation.navigate('Lista de Servicos');
    }
    

    const capturarCpf = (textoDigitado) => {
        if (cpfPattern.test(textoDigitado) && textoDigitado !== '') setHideCpf(true);
        else setHideCpf(false);

        setCpf(textoDigitado);
    }
    const capturarSenha = (textoDigitado) => {
        if (textoDigitado !== '') setHideSenha(true);
        else setHideSenha(false);

        setSenha(textoDigitado);
    }

    return (
        <View style={styles.Container}>
            <StatusBar barStyle='default' backgroundColor={colors.purpleLight} /> 
            <View style={styles.BoxModelLogin}>

                <ImageBackground source={fundo} style={styles.logo}>

                <View >
                    <Text style={styles.TextLogin}>Login</Text>
                </View>
                <View style={styles.BoxModelInput}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="CPF"
                        placeholderTextColor={colors.purpleLight}
                        onChangeText={capturarCpf}
                        value={cpf}
                        keyboardType='numeric'
                    />
                    <View>
                        {

                            hideCpf ? <Text /> : <Text style={styles.ErrorText}>O Cpf Digitado é Invalido</Text>

                        }
                    </View>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Sua senha"
                        placeholderTextColor={colors.purpleLight}
                        secureTextEntry={true}
                        onChangeText={capturarSenha}
                        value={senha}
                        autoCapitalize='none'
                    />
                    <View>
                        {

                            hideSenha ? <Text /> : <Text style={styles.ErrorText}> A senha não pode estar vazia</Text>

                        }
                    </View>
                </View>
                <View style={styles.boxModelBtn}>
                    <TouchableOpacity
                        onPress={handleLogin}
                    >
                        <View style={styles.InputBtn}>
                            <Text style={styles.TextBtn}>Entrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        </View>
    );
}

export default Login

