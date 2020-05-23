import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, 
  Image, AsyncStorage, FlatList, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'
import FileCard from '../../components/FileCard'
import Overlay from '../../components/Overlay'
import api from '../../services/api';

const TicketDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id, buttonText} = route.params;
  const [ticket, setTicket] = useState({});
  const [service, setService] = useState({});
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const navigateToMap = async () => {
    const providerId = await AsyncStorage.getItem('user');

    if(buttonText === 'Aceitar') {
      const response = await api.put(`/chamado/${ticket._id}`, {
        provider: providerId,
        status: "Em Andamento"
      });
    }
    let obj = {};

    if(ticket.lat && ticket.lon) {
      obj = {
        lat: ticket.lat,
        lon: ticket.lon,
        id: ticket._id
      }
    } else {
      obj = {
        endereco: ticket.endereco,
        id: ticket._id
      }
    }

    navigation.navigate('Mapa', obj);
  }

  const getTicket = async () => {
    const tck = await api.get(`/chamado/${id}`);
    const svc = await api.get(`/services/${tck.data.servico}`);
    setTicket(tck.data);
    setService(svc.data);
  }

  useEffect(() => {
      getTicket();
  }, [])

  const handleShowImage = (image) => {
    setShowImage(true);
    setImageUrl(image);
  }

  const handleCloseImage = () => {
    setShowImage(false);
    setImageUrl('');
  }

  return (
   
    <ScrollView
      contentContainerStyle={styles.Container}
      nestedScrollEnabled={true}
    >
       {
          showImage ? 
          <Overlay>
            <View style={styles.OverlayButtonContainer}>
              <TouchableOpacity 
                style={styles.OverlayButton}
                onPress={handleCloseImage}
              >
                <Text style={styles.OverlayButtonText}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.OverlayImageContainer}>
              <Image 
                source={{uri: imageUrl}}
                style={styles.OverlayImage}
                resizeMode='contain'
              />
            </View>
          </Overlay>
          : null
      }
        <View style={styles.TipoLabelContainer}>
          <Text style={styles.TipoLabel}>
            Tipo:
          </Text>
        </View>
        <View style={styles.TipoTextContainer}>
          <Text style={styles.TipoText}>
           {service.name}
          </Text>
        </View>
        <View style={styles.TituloLabelContainer}>
          <Text style={styles.TituloLabel}>
            Titulo:
          </Text>
        </View>
        <View style={styles.TituloTextContainer}>
          <Text style={styles.TituloText}>
            {ticket.titulo}
          </Text>
        </View>
        <View style={styles.DescricaoLabelContainer}>
          <Text style={styles.DescricaoLabel}>
            Descrição:
          </Text>
        </View>
        <View style={styles.DescricaoTextContainer}>
          <ScrollView style={styles.DescricaoTextScroll} nestedScrollEnabled={true} >
            <Text style={styles.DescricaoText}>
              {ticket.descricao}
            </Text>
          </ScrollView>
        </View>
        <View style={styles.EnderecoLabelContainer}>
          <Text style={styles.EnderecoLabel}>
            Endereço:
          </Text>
        </View>
        <View style={styles.EnderecoTextContainer}>
          <Text style={styles.EnderecoText}>
            {
              ticket.endereco ? ticket.endereco : "Nao foi definido endereço"
            }
          </Text>
        </View>
        <View style={styles.AnexoLabelContainer}>
          <Text style={styles.AnexoLabel}>
            Anexos:
          </Text>
        </View>
        <View style={styles.AnexoItensContainer}>
          
            <FlatList 
              data={ticket.anexoUrl}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={anexo => anexo}
              renderItem={anexo => (
                <TouchableOpacity
                  onPress={() => handleShowImage(anexo.item)}
                >
                <FileCard styles={styles.FileCard}> 
                  <Image 
                    source={{ uri: anexo.item }}
                    style={styles.FileCardImage}
                    resizeMode='center'
                  />
                </FileCard> 
                </TouchableOpacity>
              )}
            />
             
         
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity 
            style={styles.Button}
            onPress={navigateToMap}
          >
            <Text style={styles.ButtonText}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

export default TicketDetail;