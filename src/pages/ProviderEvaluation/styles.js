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
    profile:{
        flex: 1,
        resizeMode: 'contain',
        justifyContent: "center",
        width: 140,
        height: 140,
        position: 'absolute',
        top: '-15%',
        borderRadius: 50
    },
    TextProvider: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 36,
        color: colors.purpleLight,
        marginBottom: 10,
        alignItems: 'center',
        
    },
    TextsubTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        color: colors.purpleLight,
        marginBottom: 20,
        alignItems: 'center',
        
    },
    TextEvaluation: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        color: colors.purpleLight,
        marginBottom: 20,
        alignItems: 'center',
        
    },
    BoxModelInput: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '-25%'
    },
    TextInput: {
        height: 60,
        width: '80%',
        padding: 15,
        backgroundColor: colors.secondary,
        borderRadius: 6,
        color: colors.purpleLight
    },
    ErrorText: {
        marginBottom: 20,
        color: '#851010',
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