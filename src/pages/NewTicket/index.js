import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import {Picker} from '@react-native-community/picker';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import FileCard from '../../components/FileCard';
import * as Location from 'expo-location';


import colors from '../../assets/var/colors'
import styles from './styles';
import Overlay from '../../components/Overlay';

const NewTicket = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const {tipo} = route.params;

    const navigateToConfirmed = () => {
        navigation.navigate('Confirmacao Chamado', {
            geolocation: location,
        })
    }

    const patterWithOutEspecialCaracter = /[^ \nA-Za-z0-9À-ÖØ-öø-ÿ/]/g

    const [titulo, setTitulo] = useState(null);
    const [desc, setDesc] = useState(null)
    const [address, setAddress] = useState({endereco: 'select',});
    const [files, setFiles] = useState([]);
    const [cont, setCont] = useState(0);
    const [location, setLocation] = useState(null)
    const [hideTitulo, setHideTitulo] = useState(true);
    const [hideDesc, setHideDesc] = useState(true);
    const [overlayGeolocalization, setOverlayGeolocalization] = useState(false);

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status != 'granted') {
                alert('Desculpe para funcionar é necessaria a permissão para a camera');
            }
        }
    }

    const getGeolocationAsync = async () => {
        if(address.endereco === 'geolocalizacao'){
            let { status } = await Location.requestPermissionsAsync();
            if(status !== 'granted') {
                alert('Desculpe mas é necesseario que você permita o acesso a localização');
            }
            setOverlayGeolocalization(true);
            let location = await Location.getCurrentPositionAsync({});
            setOverlayGeolocalization(false);
            console.log(location);
            setLocation(location);
        }
    }


    
    useEffect(() => {
        getGeolocationAsync();
    }, [address]);

    const getPhoto = async () => {
        await getPermissionAsync();
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

    const getTitulo = (textoDigitado) => {
        if(!patterWithOutEspecialCaracter.test(textoDigitado) 
        && textoDigitado !== '') setHideTitulo(true);
        else setHideTitulo(false);

        setTitulo(textoDigitado);
    }
    const getDesc = (textoDigitado) => {
        if(!patterWithOutEspecialCaracter.test(textoDigitado) && 
        textoDigitado !== '') setHideDesc(true);
        else setHideDesc(false);

        setDesc(textoDigitado);
    }


  return (
    <View style={styles.Container}>
        {
            overlayGeolocalization ? 
            <Overlay>
                <View style={styles.OverlayContainer}>
                    <Text style={styles.OverlayText}>Obtendo sua localização</Text>
                </View>
            </Overlay> 
            : null
        }
        <ScrollView 
            style={styles.BoxModelChamado} 
            contentContainerStyle={
                {
                    flexGrow: 1,
                    paddingTop: '20%',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: 850,
                }
            }
        >
            
            <View style={styles.TituloContainer}>
                <Text style={styles.Textchamado}>Novo Chamado</Text>
            </View>
            <View style={styles.BoxModelInput}>
                {/* <TextInput 
                    style={styles.TextInput}
                    placeholder="Tipo de serviço"
                    placeholderTextColor={colors.purpleLight}
                    editable={false}
                    value={tipo}    
                /> */}
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Titulo"
                    placeholderTextColor={colors.purpleLight}
                    value={titulo}
                    onChangeText={getTitulo}
                />
              
                {
                    hideTitulo ? console.log('sem view') : 
                    <View>
                        <Text style={styles.ErrorText}>
                            O titulo não pode ser vazio ou ter caracteres especiais
                        </Text>
                    </View>
                }
            
                <TextInput 
                    style={styles.TextInput}
                    placeholder="Descrição"
                    placeholderTextColor={colors.purpleLight}
                    value={desc}
                    onChangeText={getDesc}
                />
                {
                    hideDesc ? null : 
                    <View>
                        <Text style={styles.ErrorText}>
                            A descrição não pode ser vazia ou ter caracteres especiais
                        </Text>
                    </View>
                }
        
                <Picker
                    selectedValue={address.endereco}
                    style={styles.TextInput}
                    onValueChange={(itemValue, itemIndex) => 
                        setAddress({endereco: itemValue})}
                    prompt={'Selecione um Endereço'}
                    mode={'dialog'}
                >
                    {/* <Picker.Item label="Selecione um Endereço" value="select" color="grey"/> */}
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

                <View style={styles.CardList}>
                    <FlatList
                        data={files}
                        horizontal={true}
                        renderItem={file => (
                            <FileCard styles={styles.FileCard}> 
                                <Image 
                                    source={{uri: file.item.value.photoUri}}
                                    style={styles.pic}
                                />
                                <TouchableOpacity
                                    style={styles.button}
                                >
                                    <Text
                                        style={styles.textFileCard}
                                        onPress={() => removePhoto(file.item.key)}
                                    >
                                        Remover
                                    </Text>
                                </TouchableOpacity>
                            </FileCard>
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

