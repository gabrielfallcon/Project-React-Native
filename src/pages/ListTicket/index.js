import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, 
    SafeAreaView, FlatList, ScrollView, StyleSheet, AsyncStorage, TouchableHighlight } from 'react-native';
import CardList from '../../components/CardList';
import CardService from '../../components/CardService';
import CardHistoryService from '../../components/CardHistoryService';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import logo from '../../assets/images/logo.png'

import styles from './styles';

const ListTicket = () => {

    const navigation = useNavigation();

    const [tickets, setTickets] = useState([]);
    const [acceptedTickets, setAcceptedTickets] = useState([]);
    const [closedTickets, setClosedTickets] = useState([]);

    const getTickets = async () => {
        const providerId = await AsyncStorage.getItem('user');
        const tcks = await api.get('/chamados');
        let newTcks = [...tcks.data];
        let openTcks = newTcks.filter(function(obj) {
            return obj.status === 'Aberto';
        });
        setTickets(openTcks);
        let providerTickets = await api.get(`/chamados/provider/${providerId}`);
        providerTickets = [...providerTickets.data];
        // console.log(providerTickets);

        const accTickets = providerTickets.filter(function(obj) {
            return obj.status === 'Em Andamento';
        });
        
        setAcceptedTickets(accTickets);
        
        const clsTickets = providerTickets.filter(function(obj) {
            return obj.status === 'Fechado';
        });

        setClosedTickets(clsTickets);
        
    }

    useEffect(() => {
        let mounted = true
        if(mounted) {
            getTickets();
        }
        return () => mounted = false;
        
    }, [])

    const navigateToTicketDetail = (id, buttonText) => {
        navigation.navigate('DetalhesChamado', {
            id: id,
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
                    { 
                        (tickets.length === 0) ? 
                            <View style={{alignItems: 'center'}}>
                                <Text style={{color: '#000'}}>Não há nenhum chamado em aberto</Text>
                            </View> 
                            :
                            <FlatList
                                data={tickets}
                                horizontal
                                keyExtractor={aberto => aberto._id}
                                showsHorizontalScrollIndicator={false}
                                renderItem={aberto => (
                                    <TouchableOpacity
                                        onPress={() => navigateToTicketDetail(
                                            aberto.item._id,
                                            'Aceitar'
                                        )}
                                    >
                                        <CardHistoryService>
                                            <View style={styles.Types}>
                                                <Text style={styles.TypesText}>Titulo:</Text>
                                                <Text style={styles.TypesDesc}>{aberto.item.titulo}</Text>
                                            </View> 
                                            <View style={styles.Types}>
                                                <Text style={styles.TypesText}>Descrição:</Text>
                                                <Text style={styles.TypesDesc}>{aberto.item.descricao}</Text>
                                            </View> 
                                        </CardHistoryService>
                                    </TouchableOpacity>
                                )}
                            />
                    }
                </View>
                <Text style={styles.TitleServices}>Chamados Aceitos</Text>
                <View style={styles.HistoryContainer}>
                {
                    (acceptedTickets.length === 0) ? 
                        <View style={{alignItems: 'center'}}>
                            <Text style={{color: '#000'}}>Não há nenhum chamado aceito</Text>
                        </View> 
                    :
                        <FlatList
                            data={acceptedTickets}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={aberto => (
                                <TouchableOpacity
                                    onPress={() => navigateToTicketDetail(
                                        aberto.item._id,
                                        'Endereço'
                                    )}
                                >
                                    <CardHistoryService>
                                        <View style={styles.Types}>
                                            <Text style={styles.TypesText}>Titulo:</Text>
                                            <Text style={styles.TypesDesc}>{aberto.item.titulo}</Text>
                                        </View>
                                        <View style={styles.Types}>
                                            <Text style={styles.TypesText}>Descrição:</Text>
                                            <Text style={styles.TypesDesc}>{aberto.item.descricao}</Text>
                                        </View> 
                                    </CardHistoryService>
                                </TouchableOpacity>
                            )}
                        />
                }
                </View>
                <Text style={styles.TitleServices}>Chamados Finalizado</Text>
                <View style={styles.HistoryContainer}>
                {
                    (closedTickets.length === 0) ? 
                        <View style={{alignItems: 'center'}}>
                            <Text style={{color: '#000'}}>Não há nenhum chamado fechado</Text>
                        </View> 
                    :
                        <FlatList
                            data={closedTickets}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={aberto => (
                                <CardHistoryService style={styles.CardHistoryService}>
                                    <View style={styles.Types}>
                                        <Text style={styles.TypesText}>Titulo:</Text>
                                        <Text style={styles.TypesDesc}>{aberto.item.titulo}</Text>
                                    </View>
                                    <View style={styles.Types}>
                                        <Text style={styles.TypesText}>Descrição:</Text>
                                        <Text style={styles.TypesDesc}>{aberto.item.descricao}</Text>
                                    </View> 
                                </CardHistoryService>
                            )}
                        />
                }
                </View>
               
            </ScrollView>

            {/* {services.map(service => <CardList key={service} service={service}/>)} */}
        </SafeAreaView>
    );
}

export default ListTicket