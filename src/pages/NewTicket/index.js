import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Picker} from '@react-native-community/picker';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import FileCard from '../../components/FileCard';


import colors from '../../assets/var/colors'

import styles from './styles';

const NewTicket = () => {
    const navigation = useNavigation('Confirmacao Chamado');

    const navigateToConfirmed = () => {
        navigation.navigate('Confirmacao Chamado')
    }

    const [address, setAddress] = useState({endereco: 'geolocalização',});
    const [files, setFiles] = useState([]);
    const [cont, setCont] = useState(0);

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status != 'granted') {
                alert('Desculpe para funcionar é necessaria a permissão para a camera');
            }
        }
    }

    useEffect(() => {
        getPermissionAsync();
    }, [])

    const getPhoto = async () => {
        try {
            let photo = await ImagePicker.launchImageLibraryAsync(
                    {
                        allowsMultipleSelection: true, 
                        mediaTypes: ImagePicker.MediaTypeOptions.All,
                        quality: 1,
                    }
                )
                if (!photo.cancelled) {
                    setCont((cont + 1));
                    setFiles([{
                        key: cont.toString(),
                        value: {photoUri: photo.uri}
                    }, ...files])
                }
        } catch (E) {
            console.log(E);
        }
    }

    const removePhoto = (keyToRemove) => {
        setFiles(files => {
            return files.filter(file => file.key !== keyToRemove);
        });
    }


  return (
    <View style={styles.Container}>
        <ScrollView 
            style={styles.BoxModelChamado} 
            contentContainerStyle={
                {
                    flexGrow: 1,
                    paddingTop: '20%',
                    alignItems: 'center',
                    alignContent: 'center',
                }
            }
        >
            <View >
                <Text style={styles.Textchamado}>Novo Chamado</Text>
            </View>
            <View style={styles.BoxModelInput}>
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Titulo"
                    placeholderTextColor={colors.purpleLight}
                />
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Tipo de serviço"
                    placeholderTextColor={colors.purpleLight}
                />
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Descrição"
                    placeholderTextColor={colors.purpleLight}
                />
                {/* <TextInput 
                    style={styles.TextInput}
                    placeholder="Selecione o Endereço"
                    placeholderTextColor={colors.purpleLight}
                /> */}
                <Picker
                    selectedValue={address.endereco}
                    style={styles.TextInput}
                    onValueChange={(itemValue, itemIndex) => 
                        setAddress({endereco: itemValue})}
                    prompt={'Selecione um Endereço'}
                    mode={'dropdown'}
                    
        
                >
                    <Picker.Item label="Selecione um Endereço" value="" color="grey"/>
                    <Picker.Item label="Geolocalização" value="geolocalizacao" />
                    <Picker.Item label="Endereço 1" value="endereco1" />
                    <Picker.Item label="Endereço 2" value="endereco2" />
                    <Picker.Item label="Endereço 3" value="endereco3" />

                </Picker>


                <TouchableOpacity
                    style={styles.TextInput}
                    onPress={getPhoto}
                >
                    <Text style={{color: colors.purpleLight}}>Anexar arquivo</Text>
                
                </TouchableOpacity>
                {/* <TextInput 
                    style={styles.TextInput}
                    placeholder="Anexar Arquivo"
                    placeholderTextColor={colors.purpleLight}
                />       */}

                <View style={styles.CardList}>
                    <FlatList
                        data={files}
                        horizontal={true}
                        renderItem={file => (
                            <FileCard 
                                photo={file.item.value}
                                chave={file.item.key}
                                onDelete={removePhoto}
                            />
                        )}
                    />
                </View>
            </View>
            <View style={styles.boxModelBtn}>
                <TouchableOpacity 
                    onPress={navigateToConfirmed}
                    style={styles.InputBtn}
                >
                    <Text style={styles.TextBtn}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  );
}

export default  NewTicket

