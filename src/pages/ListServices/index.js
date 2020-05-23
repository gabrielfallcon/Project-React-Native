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
    const [history, setHistory] = useState([]);

    const loadServices = async () => {
        const response = await api.get('/services');
        setServices(response.data);
    }

    const loadChamadosByUser = async () => {
        const id = await AsyncStorage.getItem('user');
        // const id = '5ec1cdb883757d5be1c78fed';
        const chamado = await api.get(`/chamados/user/${id}`);

        const dataChamado = await Promise.all(
            chamado.data.map(async (obj) => {
                    const services = await api.get(`/services/${obj.servico}`)
                    return {...obj, serviceName: services.data.name}
                }
            )
        );
        setHistory(dataChamado);
    }

    useEffect(() => {
        loadServices();
        loadChamadosByUser();
    }, [])

    const navigateToProduct = (key, title, desc, img) => {
        navigation.navigate('Produto', {
            chave: key,
            titulo: title,
            descricao: desc,
            imagem: img,
        })
    }

    const navigateToProviderEvaluation = (providerId, chamadoId) => {
        navigation.navigate('Avaliacao', {
            providerId: providerId,
            chamadoId: chamadoId
        });
    }

    const removeHistory = async (keyToRemove) => {
        const response = await api.put(`/chamado/${keyToRemove}`, {status: "Fechado"});
        const arr = history;
        const index = arr.findIndex(obj => obj._id === keyToRemove);
        arr[index].status = "Fechado";

        setHistory([...arr]);
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
                    onPress={() => loadChamadosByUser()}
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
                keyExtractor={historico => historico._id}
                renderItem={historico => (
                    <CardHistoryService
                        onDelete={removeHistory}
                    > 
                        <TouchableOpacity 
                            style={styles.Close}
                            onPress={() => deleteAlert(historico.item._id)}
                        >
                            <Text style={styles.CloseText}>X</Text>
                        </TouchableOpacity>
                        <View style={styles.Types}>
                            <Text style={styles.TypesText}>Tipo:</Text>
                            <Text style={styles.TypesDesc}>{historico.item.serviceName}</Text>
                        </View>
                        <View style={styles.Types}>
                            <Text style={styles.TypesText}>Titulo:</Text>
                            <Text style={styles.TypesDesc}>{historico.item.titulo}</Text>
                        </View>
                        {
                            historico.item.status === 'Fechado' && !historico.item.avaliado ?
                            <TouchableOpacity
                                style={styles.avaliationBtn} 
                                onPress={() => navigateToProviderEvaluation(historico.item.prestador, historico.item._id)}   
                            >
                                <Text style={styles.avaliationBtnTxt}>Avaliar</Text>
                            </TouchableOpacity> : <View style={styles.blankView}></View>
                        }
                        <Text style={styles.Status}>{historico.item.status}</Text>
                    </CardHistoryService>
                )}
            />
    }

    const deleteAlert = (keyToRemove) => Alert.alert(
        'Fechar chamado',
        'Você realmente deseja fechar este chamado?',
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