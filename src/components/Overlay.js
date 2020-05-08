import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../assets/var/colors';

const Overlay = (props) => {
  return (
    <View style={{...styles.OverlayBackground, ...props.styles}}>
        {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  OverlayBackground: {
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default Overlay;