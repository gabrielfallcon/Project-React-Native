import { StyleSheet } from 'react-native' 
import colors from '../../assets/var/colors'

export default StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    BoxModelChamado: {
        width: '100%',
        height: '60%',
        lineHeight: 32,
    },
    TituloContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Textchamado: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        color: colors.purpleLight,
    },
    TextTipoChamado: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 32,
        color: colors.purpleLight,
    },
    BoxModelInput: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    TextInput: {
        height: 50,
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
        alignItems: 'center',
    },
    ModelBtn:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputBtn: {
        width: 200,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.purpleLight,
        color: colors.primary
    },
    TextBtn: {
        fontSize: 22,
        color: colors.primary,
        textAlign: 'center'
    },
    CardList: {
        height: '25%',
        width: '80%',
    },
    ErrorText: {
        marginBottom: 20,
        color: '#851010',

    },
    OverlayContainer: {
        backgroundColor: '#FFF',
        height: '15%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    OverlayText: {
        color: colors.primary,
        fontFamily: 'Roboto'
    },
    FileCard: {
        padding: '10%',
    },
    pic: {
        width: 65,
        height: 65,
    },
    button: {
        color: colors.purpleLight,
    },
    textFileCard: {
        color: colors.purpleLight,
    }
})