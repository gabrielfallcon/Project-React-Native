import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'
import FileCard from '../../components/FileCard'
import Overlay from '../../components/Overlay'

const TicketDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {chave, titulo, tipo, endereco, anexo, desc, lat, lon, buttonText} = route.params;
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const navigateToMap = () => {
    navigation.navigate('Mapa', {
      lat: lat,
      lon: lon
    })
  }

  const deleteFile = () => {
    
  }

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
           {tipo}
          </Text>
        </View>
        <View style={styles.TituloLabelContainer}>
          <Text style={styles.TituloLabel}>
            Titulo:
          </Text>
        </View>
        <View style={styles.TituloTextContainer}>
          <Text style={styles.TituloText}>
            {titulo}
          </Text>
        </View>
        <View style={styles.DescricaoLabelContainer}>
          <Text style={styles.DescricaoLabel}>
            Descrição:
          </Text>
        </View>
        <View style={styles.DescricaoTextContainer}>
          <Text style={styles.DescricaoText}>
            {desc}
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
        <View style={styles.EnderecoLabelContainer}>
          <Text style={styles.EnderecoLabel}>
            Endereço:
          </Text>
        </View>
        <View style={styles.EnderecoTextContainer}>
          <Text style={styles.EnderecoText}>
            {endereco}
          </Text>
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