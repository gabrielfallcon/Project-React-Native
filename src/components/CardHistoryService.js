import React from 'react'
import { View, Text, StyleSheet,  } from 'react-native'

import colors from '../assets/var/colors'

const CardHistoryService = (props) => {

    return(
        <View style={{...styles.BoxHistory, ...props.styles}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    BoxHistory: {
        width: 300,
        paddingVertical: 25,
        paddingHorizontal: 20,
        backgroundColor: colors.purpleLight,
        borderRadius: 15,
        position: 'relative',
        marginLeft: 10,  
        borderStyle: 'solid',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.purpleDark,
        borderBottomEndRadius : 8,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        borderBottomStartRadius: 8,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        elevation: 1,
    },

})

export default CardHistoryService