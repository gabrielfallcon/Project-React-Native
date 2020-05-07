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
        backgroundColor: colors.secondary,
        borderRadius: 14,
        position: 'relative',
        marginLeft: 10
    },

})

export default CardHistoryService