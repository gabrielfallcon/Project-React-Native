import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../assets/var/colors';

const FileCard = (props) => {
  return (
    <View style={{...styles.card, ...props.styles}}>
        {props.children}
    </View>
  );
}

const styles = StyleSheet.create(
  {
    card: {
      flex: 1,
      // padding: '10%',
      borderRadius: 5,
      backgroundColor: Colors.secondary,
      width: 80,
      height: 105,
      maxHeight:105,
      marginRight: 15,
      alignItems: 'center',
      alignContent: 'center',
    },
    // pic: {
    //   width: 65,
    //   height: 65,
    // },
    // button: {
    //   color: Colors.purpleLight,
    // },
    // text: {
    //   color: Colors.purpleLight,
    // }

  }
);

export default FileCard;