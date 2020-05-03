import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../assets/var/colors'

const CardHistoryService = (props) => {
    return(
        <View style={styles.BoxHistory}>
            <TouchableOpacity style={styles.Close}>
                <Text style={styles.CloseText}>X</Text>
            </TouchableOpacity>
            <View style={styles.Types}>
                <Text style={styles.TypesText}>Tipos:</Text>
                <Text style={styles.TypesDesc}>{props.type}</Text>
            </View>

            <View style={styles.Types}>
                <Text style={styles.TypesText}>Titulo:</Text>
                <Text style={styles.TypesDesc}>{props.titulo}</Text>
            </View>
            
            <Text style={styles.Status}>{props.status}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    BoxHistory: {
        width: 300,
        paddingVertical: 25,
        paddingHorizontal: 20,
        backgroundColor: colors.secondary,
        borderRadius: 14,
        position: 'relative',
        marginLeft: 10
    },
    Close: {
        width: 30,
        height: 30,
        backgroundColor: '#c53030',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        position: 'absolute',
        right: 0,
        top: 0
    },
    CloseText:{
        color: colors.primary
    },
    Types: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    TypesText: {
        width: '50%',
        fontSize: 20,
        color: colors.purpleDark
    },
    TypesDesc: {
        width: '50%',
        fontSize: 14,
        color: colors.purpleLight
    },
    Status: {
        textAlign: 'center',
        fontSize: 22,
        color: colors.purpleDark,
    }

})

export default CardHistoryService