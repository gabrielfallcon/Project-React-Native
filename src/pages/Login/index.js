import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../assets/var/colors'

import styles from './styles';

const Login = () => {
    const navigation = useNavigation();

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const [hideCpf, setHideCpf] = useState(true);
    const [hideSenha, setHideSenha] = useState(true);

    const cpfPattern = /^([0-9]{3}?[\.]?[-]?[0-9]{3}?[\.]?[-]?[0-9]{3}?[-]?[0-9]{2})*$/g;

    const capturarCpf = (textoDigitado) => {
        if(cpfPattern.test(textoDigitado) && textoDigitado !== '') setHideCpf(true);
        else setHideCpf(false);

        setCpf(textoDigitado);
    }
    const capturarSenha = (textoDigitado) => {
        if(textoDigitado !== '') setHideSenha(true);
        else setHideSenha(false);
        
        setSenha(textoDigitado);
    }

  return (
    <View style={styles.Container}>
        <StatusBar barStyle='dark-content' backgroundColor="#BB86FC" />
        <View style={styles.BoxModelLogin}>
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
                />
                <View>
                    {

                        hideCpf ?  <Text /> : <Text style={styles.ErrorText}>O Cpf Digitado é Invalido</Text>
                    
                    }
                </View>
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Sua senha"
                    placeholderTextColor={colors.purpleLight}
                    secureTextEntry={true}
                    onChangeText={capturarSenha}
                    value={senha}
                />
                <View>
                    {

                        hideSenha ? <Text /> : <Text style={styles.ErrorText}> A senha não pode estar vazia</Text>
                    
                    }
                </View>
            </View>
            <View style={styles.boxModelBtn}>
                <TouchableOpacity
                    onPress={() => {
                        if(hideCpf && hideSenha && cpf != '' && senha != '') navigation.navigate('Lista de Servicos');
                        else Alert.alert(
                            'Erro ao Entrar',
                            'Os campos digitados são invalidos, tente novamente.',
                            [{
                                text: 'Ok',
                                style: 'default'
                            }],
                            {cancelable: false}
                        );
                    }}
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

