import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'
import FileCard from '../../components/FileCard'

const TicketDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {chave, titulo, tipo, endereco, anexo, desc, lat, lon} = route.params;

  const navigateToMap = () => {
    navigation.navigate('Mapa', {
      lat: lat,
      lon: lon
    })
  }

  return (
    <ScrollView
      contentContainerStyle={styles.Container}
    >
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
        <View style={styles.AnexosItensContainer}>

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
              Aceitar
            </Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

export default TicketDetail;