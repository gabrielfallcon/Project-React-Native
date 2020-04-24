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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%'
    },
    BoxModelPercusion: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 32,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        position: 'absolute',
        bottom: 0
    },
    profile:{
        flex: 1,
        resizeMode: 'contain',
        justifyContent: "center",
        width: 120,
        height: 120,
        position: 'absolute',
        top: '-27%',
        borderRadius: 50
    },
    TextTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 28,
        color: colors.purpleLight,
        marginBottom: 10,
        color: "#FFF",
        textAlign: 'center',
        marginTop: 30
    },
    TextDetail:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        color: "#FFF",
        textAlign: 'center',
        marginBottom: 30
    },
    InputBtn: {
        width: 120,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
        marginTop: 10
    },
    TextBtn: {
        fontSize: 22,
        color: colors.purpleLight,
        textAlign: 'center'
    }
})