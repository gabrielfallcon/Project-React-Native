import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

import CardList from '../../components/CardList'

import styles from './styles';


const ListServices = () => {
    const [services, setServices] = useState([
        'teste',
        'teste'
    ])

    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.TitleServices}>Serviços de Manutenção</Text>
            <View style={styles.box}>
                <View style={styles.ContainerImage} >
                </View>
                <Text style={styles.TextTitle}>Pisos danificados</Text>
                <Text style={styles.TextDesc}>5 dias uteis</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.ContainerImage} >
                </View>
                <Text style={styles.TextTitle}>Pisos danificados</Text>
                <Text style={styles.TextDesc}>5 dias uteis</Text>
            </View>
            {/* {services.map(service => <CardList key={service} service={service}/>)} */}
        </SafeAreaView>
    );
}

export default ListServices