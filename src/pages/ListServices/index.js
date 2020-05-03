import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView, FlatList, ScrollView, StyleSheet } from 'react-native';

import CardList from '../../components/CardList';
import CardService from '../../components/CardService';
import CardHistoryService from '../../components/CardHistoryService';
import { useNavigation } from '@react-navigation/native'

import logo from '../../assets/images/logo.png'

import styles from './styles';


const ListServices = () => {

    const navigation = useNavigation();

    const [services, setServices] = useState([
        {
            key: '1', titulo: 'Pisos Danificados', time: '5 dias uteis',
            img: '../assets/images/PisosDanificados.jpg',
            desc: 'Ao escolher ester serviços enviaremos um profissional para fazer a troca de seus pisos danificados'
        },
        {
            key: '2', titulo: 'Pisos Danificados', time: '5 dias uteis',
            img: '../assets/images/PisosDanificados.jpg',
            desc: 'Ao escolher ester serviços enviaremos um profissional para fazer a troca de seus pisos danificados'
        },
        {
            key: '3', titulo: 'Pisos Danificados', time: '5 dias uteis',
            img: '../assets/images/PisosDanificados.jpg',
            desc: 'Ao escolher ester serviços enviaremos um profissional para fazer a troca de seus pisos danificados'
        },
        {
            key: '4', titulo: 'Pisos Danificados', time: '5 dias uteis',
            img: '../assets/images/PisosDanificados.jpg',
            desc: 'Ao escolher ester serviços enviaremos um profissional para fazer a troca de seus pisos danificados'
        },

    ]);

    const navigateToProduct = (key, title, desc, img, time) => {
        navigation.navigate('Produto', {
            chave: key,
            titulo: title,
            descricao: desc,
            imagem: img,
            tempo: time,
        })
    }

    const [history, setHistory] = useState([
        { key: '1', type: 'Pisos danificados', titulo: 'Preciso que troquem o meu piso', status: 'Em andamento' },
        { key: '2', type: 'Pisos danificados', titulo: 'Preciso que troquem o meu piso', status: 'Em andamento' },
        { key: '3', type: 'Pisos danificados', titulo: 'Preciso que troquem o meu piso', status: 'Em andamento' },
        { key: '4', type: 'Pisos danificados', titulo: 'Preciso que troquem o meu piso', status: 'Em andamento' },
    ]);


    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.boxLogo}>
                <ImageBackground source={logo} style={styles.logo} />
            </View>
            <ScrollView>
                <Text style={styles.TitleServices}>Historico de serviços</Text>
                <View style={styles.HistoryContainer}>

                    <FlatList
                        data={history}
                        horizontal
                        renderItem={historico => (
                            <CardHistoryService
                                type={historico.item.type}
                                titulo={historico.item.titulo}
                                status={historico.item.status}
                            />
                        )}
                    />
                </View>
                <Text style={styles.TitleServices}>Serviços de Manutenção</Text>
                <View style={styles.ServicesContainer}>
                    <FlatList
                        data={services}
                        horizontal
                        renderItem={service => (
                            <TouchableOpacity onPress={() => {
                                navigateToProduct(
                                    service.item.key,
                                    service.item.titulo,
                                    service.item.desc,
                                    service.item.img,
                                    service.item.time
                                );
                            }}>
                                <CardService
                                    imgSource={service.item.img}
                                    key={service.item.key}
                                >
                                    <Text style={styles.TextTitle}>{service.item.titulo}</Text>
                                    <Text style={styles.TextDesc}>{service.item.time}</Text>
                                </CardService>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>

            {/* {services.map(service => <CardList key={service} service={service}/>)} */}
        </SafeAreaView>
    );
}

export default ListServices