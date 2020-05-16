import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, 
    SafeAreaView, FlatList, ScrollView, StyleSheet, Alert, Button, 
    AsyncStorage } from 'react-native';

import CardList from '../../components/CardList';
import CardService from '../../components/CardService';
import CardHistoryService from '../../components/CardHistoryService';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import logo from '../../assets/images/logo.png'

import styles from './styles';


const ListServices = () => {

    const navigation = useNavigation();

    const [services, setServices] = useState([]);

    const loadServices = async () => {
        const response = await api.get('/services');
        setServices(response.data);
    }

    useEffect(() => {
        loadServices();
    }, [])

    const navigateToProduct = (key, title, desc, img) => {
        navigation.navigate('Produto', {
            chave: key,
            titulo: title,
            descricao: desc,
            imagem: img,
        })
    }
    const initialState = [{ key: '1', type: 'Pisos danificados', titulo: 'Preciso que troquem o meu piso', status: 'Em andamento' },
    { key: '2', type: 'Pisos danificados', titulo: 'Preciso que troquem o meu piso', status: 'Em andamento' },
    { key: '3', type: 'Pisos danificados', titulo: 'Preciso que troquem o meu piso', status: 'Em andamento' },
    { key: '4', type: 'Pisos danificados', titulo: 'Preciso que troquem o meu piso', status: 'Em andamento' },]

    const [history, setHistory] = useState(initialState);

    const removeHistory = (keyToRemove) => {
        setHistory(historicos => {
            return historicos.filter(historico => historico.key !== keyToRemove);
        });
    }
    const reloadHistory = () => {
        setHistory(initialState);
    }

    let viewEmptyHistory
    if (history.length === 0) {
        viewEmptyHistory =
            <View style={styles.emptyHistoryContainer}>
                <Text style={styles.emptyHistoryTextDesc}>
                    A lista de historico está vazia, 
                </Text>
                <Text style={styles.emptyHistoryTextDesc}>
                    clique em recarregar para carregar a lista novamente!
                </Text>
                <TouchableOpacity 
                    style={styles.ReloadBtn}
                    onPress={reloadHistory}
                >
                    <Text style={styles.ReloadTextBtn}>Recarregar</Text>
                </TouchableOpacity>
            </View>
    }
    if (history.length > 0) {
        viewEmptyHistory =
            <FlatList
                data={history}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={historico => (
                    <CardHistoryService
                        onDelete={removeHistory}
                    > 
                        <TouchableOpacity 
                            style={styles.Close}
                            onPress={() => deleteAlert(historico.item.key)}
                        >
                            <Text style={styles.CloseText}>X</Text>
                        </TouchableOpacity>
                        <View style={styles.Types}>
                            <Text style={styles.TypesText}>Tipos:</Text>
                            <Text style={styles.TypesDesc}>{historico.item.type}</Text>
                        </View>
                        <View style={styles.Types}>
                            <Text style={styles.TypesText}>Titulo:</Text>
                            <Text style={styles.TypesDesc}>{historico.item.titulo}</Text>
                        </View>
                        <Text style={styles.Status}>{historico.item.status}</Text>
                    </CardHistoryService>
                )}
            />
    }

    const deleteAlert = (keyToRemove) => Alert.alert(
        'Excluir historico',
        'Você realmente deseja excluir este historico?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: removeHistory.bind(this, keyToRemove)
            }
        ],
        {cancelable: false}
    );

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
                <Text style={styles.TitleServices}>Historico de serviços</Text>
                <View style={styles.HistoryContainer}>
                    {viewEmptyHistory}
                </View>
                    
                <Text style={styles.TitleServices}>Serviços de Manutenção</Text>
                <View style={styles.ServicesContainer}>
                    <FlatList
                        data={services}
                        horizontal
                        keyExtractor={service => service._id}
                        showsHorizontalScrollIndicator={false}
                        renderItem={service => (
                            <TouchableOpacity onPress={() => {
                                navigateToProduct(
                                    service.item._id,
                                    service.item.name,
                                    service.item.description,
                                    service.item.imageService_url
                                );
                            }}>
                                <CardService
                                    imgSource={service.item.imageService_url}
                                    key={service.item._id}
                                >
                                    <Text style={styles.TextTitle}>{service.item.name}</Text>
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