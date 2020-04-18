import { StyleSheet } from 'react-native' 
import colors from '../../assets/var/colors'

export default StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    BoxModelLogin: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 32,
    },
    TextLogin: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 48,
        color: colors.purpleLight,
        marginBottom: 40
    },
    BoxModelInput: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        height: 60,
        width: '80%',
        padding: 15,
        backgroundColor: colors.secondary,
        borderRadius: 6,
        marginBottom: 20,
        color: colors.purpleLight
    },

    boxModelBtn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ModelBtn:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputBtn: {
        width: 120,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.purpleLight,
        color: colors.primary
    },
    TextBtn: {
        fontSize: 22,
        color: colors.primary,
        textAlign: 'center'
    }
})