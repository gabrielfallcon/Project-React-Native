import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, 
    SafeAreaView, FlatList, ScrollView, StyleSheet, AsyncStorage, TouchableHighlight } from 'react-native';

import CardList from '../../components/CardList';
import CardService from '../../components/CardService';
import CardHistoryService from '../../components/CardHistoryService';
import { useNavigation } from '@react-navigation/native'

import logo from '../../assets/images/logo.png'

import styles from './styles';

const ListTicket = () => {
    const navigation = useNavigation();

    const [tickets, setTickets] = useState([
        {
            key: '1', titulo: 'Meus pisos estão danificados', 
            tipo: 'Pisos Danificados',
            endereco: 'Rua Taquari, 546 - Mooca',
            lat: '-23.551320', lon: '-46.597740',
            anexo: '../assets/images/PisosDanificados.jpg',
            desc: 'Preciso que seja trocados os meus pisos que estão danificados.'
        },
        {
            key: '2', titulo: 'Meus pisos estão danificados', 
            tipo: 'Pisos Danificados',
            endereco: 'Rua Taquari, 546 - Mooca',
            lat: '-23.551320', lon: '-46.597740',
            anexo: '../assets/images/PisosDanificados.jpg',
            desc: 'Preciso que seja trocados os meus pisos que estão danificados.'
        },
        {
            key: '3', titulo: 'Meus pisos estão danificados', 
            tipo: 'Pisos Danificados',
            endereco: 'Rua Taquari, 546 - Mooca',
            lat: '-23.551320', lon: '-46.597740',
            anexo: '../assets/images/PisosDanificados.jpg',
            desc: 'Preciso que seja trocados os meus pisos que estão danificados.'
        },
        {
            key: '4', titulo: 'Meus pisos estão danificados', 
            tipo: 'Pisos Danificados',
            endereco: 'Rua Taquari, 546 - Mooca',
            lat: '-23.551320', lon: '-46.597740',
            anexo: '../assets/images/PisosDanificados.jpg',
            desc: 'Preciso que seja trocados os meus pisos que estão danificados.'
        },
       

    ]);

    const navigateToTicketDetail = (key, titulos, tipo, endereco, anexo, desc, lat, lon, buttonText) => {
        navigation.navigate('DetalhesChamado', {
            chave: key,
            titulo: titulos,
            tipo: tipo,
            endereco: endereco,
            anexo: anexo,
            desc: desc,
            lat: lat,
            lon: lon,
            buttonText: buttonText
        });
    }

    const handleLogOut = async () => {
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('userType');

        navigation.navigate('Login');
    }
    
    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.boxLogo}>
                <ImageBackground source={logo} style={styles.logo} />
                <TouchableOpacity 
                    style={styles.headerButton}
                    onPress={handleLogOut}    
                >
                    <Text style={styles.headerButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Text style={styles.TitleServices}>Chamados em Aberto</Text>
                <View style={styles.HistoryContainer}>
                    <FlatList
                        data={tickets}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={aberto => (
                            <TouchableOpacity
                                onPress={() => navigateToTicketDetail(
                                    aberto.item.key,
                                    aberto.item.titulo,
                                    aberto.item.tipo,
                                    aberto.item.endereco,
                                    aberto.item.anexo,
                                    aberto.item.desc,
                                    aberto.item.lat,
                                    aberto.item.lon,
                                    'Aceitar'
                                )}
                            >
                                <CardHistoryService>
                                    <View style={styles.Types}>
                                        <Text style={styles.TypesText}>Tipos:</Text>
                                        <Text style={styles.TypesDesc}>{aberto.item.tipo}</Text>
                                    </View>
                                    <View style={styles.Types}>
                                        <Text style={styles.TypesText}>Descrição:</Text>
                                        <Text style={styles.TypesDesc}>{aberto.item.desc}</Text>
                                    </View> 
                                </CardHistoryService>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <Text style={styles.TitleServices}>Chamados Aceitos</Text>
                <View style={styles.HistoryContainer}>
                    <FlatList
                        data={tickets}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={aberto => (
                            <TouchableOpacity
                                onPress={() => navigateToTicketDetail(
                                    aberto.item.key,
                                    aberto.item.titulo,
                                    aberto.item.tipo,
                                    aberto.item.endereco,
                                    aberto.item.anexo,
                                    aberto.item.desc,
                                    aberto.item.lat,
                                    aberto.item.lon,
                                    'Endereço'
                                )}
                            >
                                <CardHistoryService>
                                    <View style={styles.Types}>
                                        <Text style={styles.TypesText}>Tipos:</Text>
                                        <Text style={styles.TypesDesc}>{aberto.item.tipo}</Text>
                                    </View>
                                    <View style={styles.Types}>
                                        <Text style={styles.TypesText}>Descrição:</Text>
                                        <Text style={styles.TypesDesc}>{aberto.item.desc}</Text>
                                    </View> 
                                </CardHistoryService>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                {/* <Text style={styles.TitleServices}>Chamados em Aceitos</Text>
                <View style={styles.HistoryContainer}>
                    <FlatList
                        data={tickets}
                        horizontal
                        renderItem={aberto => (
                            <CardHistoryService>
                                <View style={styles.Types}>
                                    <Text style={styles.TypesText}>Tipos:</Text>
                                    <Text style={styles.TypesDesc}>{aberto.item.tipo}</Text>
                                </View>
                                <View style={styles.Types}>
                                    <Text style={styles.TypesText}>Descrição:</Text>
                                    <Text style={styles.TypesDesc}>{aberto.item.desc}</Text>
                                </View> 
                            </CardHistoryService>
                        )}
                    />
                </View> */}
                <Text style={styles.TitleServices}>Chamados Finalizado</Text>
                <View style={styles.HistoryContainer}>
                    <FlatList
                        data={tickets}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={aberto => (
                            <CardHistoryService style={styles.CardHistoryService}>
                                <View style={styles.Types}>
                                    <Text style={styles.TypesText}>Tipos:</Text>
                                    <Text style={styles.TypesDesc}>{aberto.item.tipo}</Text>
                                </View>
                                <View style={styles.Types}>
                                    <Text style={styles.TypesText}>Descrição:</Text>
                                    <Text style={styles.TypesDesc}>{aberto.item.desc}</Text>
                                </View> 
                            </CardHistoryService>
                        )}
                    />
                </View>
               
            </ScrollView>

            {/* {services.map(service => <CardList key={service} service={service}/>)} */}
        </SafeAreaView>
    );
}

export default ListTicket