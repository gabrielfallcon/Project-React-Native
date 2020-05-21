import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
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
    if(buttonText === 'Aceitar') {
      const response = await api.put(`/chamado/${ticket._id}`, {
        status: "Em Andamento"
      });
      
    }
    navigation.navigate('Mapa', {
      lat: lat,
      lon: lon
    })
  }

  const getTicket = async () => {
    const tck = await api.get(`/chamado/${id}`);
    const svc = await api.get(`/services/${tck.data.servico}`);
    setTicket(tck.data);
    setService(svc.data);
  }

  useEffect(() => {
    getTicket();
  })

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
                source={require('../../assets/images/PisosDanificados.jpg')}
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
          <Text style={styles.DescricaoText}>
            {ticket.descricao}
          </Text>
        </View>
        <View style={styles.EnderecoLabelContainer}>
          <Text style={styles.EnderecoLabel}>
            Endereço:
          </Text>
        </View>
        <View style={styles.EnderecoTextContainer}>
          <Text style={styles.EnderecoText}>
            {ticket.endereco}
          </Text>
        </View>
        <View style={styles.AnexoLabelContainer}>
          <Text style={styles.AnexoLabel}>
            Anexos:
          </Text>
        </View>
        <View style={styles.AnexoItensContainer}>
          <TouchableOpacity
            onPress={() => handleShowImage('../../assets/images/PisosDanificados.jpg')}
          >
            <FileCard styles={styles.FileCard}> 
              <Image 
                source={require('../../assets/images/PisosDanificados.jpg')}
                style={styles.FileCardImage}
                resizeMode='center'
              />
            </FileCard>   
          </TouchableOpacity>
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