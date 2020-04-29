import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Product = () =>  {
  return (
    <View style={styles.Container}>
        <View style={styles.BoxModelPercusion}>
            <View style={styles.TextsFeedback}>
                <Text style={styles.TextTitle}>Engrenagens - 5 dias úteis</Text>
                <Text style={styles.TextDetail}>
                Se sua casa esta com problemas de elétrica ou pisos quebrados esse é o serviço ideal para você 
                </Text> 
            </View>
            <TouchableOpacity>
                <View style={styles.InputBtn}>
                    <Text style={styles.TextBtn}>Continuar</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default Product