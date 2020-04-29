import React from 'react'
import { View, StatusBar, Text, TouchableOpacity, ImageBackground } from 'react-native'

import profile from '../../assets/images/profile.jpg'

import styles from './styles'

const ProviderEvaluation = () => {
    return(
        <View style={styles.Container}>
        <StatusBar barStyle='dark-content' backgroundColor="#BB86FC" />
        <View style={styles.BoxModelLogin}>
                <ImageBackground 
                    source={profile} 
                    style={styles.profile}
                    imageStyle = {{borderRadius :  60 }}>
                </ImageBackground>
                <Text style={styles.TextProvider}>Matheus Somota</Text>
                <Text style={styles.TextsubTitle}>Prestador de Serviços</Text>

            <View style={styles.BoxModelInput}>
                <Text style={styles.TextEvaluation}>Avalie o Serviço</Text>
                <TouchableOpacity>
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