import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../assets/var/colors';

const FileCard = (props) => {
  return (
    <View style={styles.card}>
      <Image 
        source={{uri: props.photo.photoUri}}
        style={styles.pic}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={props.onDelete.bind(this, props.chave)}
      >
        <Text
          style={styles.text}
        >
          Remover
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    card: {
      flex: 1,
      padding: '10%',
      borderRadius: 5,
      backgroundColor: Colors.secondary,
      width: 80,
      height: 105,
      marginRight: 15,
      alignItems: 'center',
      alignContent: 'center',
    },
    pic: {
      width: 65,
      height: 65,
    },
    button: {
      color: Colors.purpleLight,
    },
    text: {
      color: Colors.purpleLight,
    }
  }
);

export default FileCard;