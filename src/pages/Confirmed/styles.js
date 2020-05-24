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
    BoxModelConfirmed: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 32,
        padding: 20
    },
    TextConfirmed: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 48,
        color: colors.purpleLight,
        marginBottom: 40
    },
    TextInformation:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        color: colors.purpleLight,
        marginBottom: '50%'
    },
    animation:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxModelBtn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ModelBtn:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputBtn: {
        width: 120,
        height: 50,
        padding: 5,
        borderRadius: 10,
        backgroundColor: colors.purpleLight,

    },
    TextBtn: {
        fontSize: 22,
        color: colors.white,
        textAlign: 'center',
    }
})