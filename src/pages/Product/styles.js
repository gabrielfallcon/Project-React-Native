import { StyleSheet } from 'react-native' 
import colors from '../../assets/var/colors'

export default StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '100%',
        height: 400,
        alignItems: 'center',
    },
    BoxModelPercusion: {
        width: '100%',
        height: '55%',
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
        fontSize: 22,
        color: colors.purpleLight,
        marginBottom: 30,
        textAlign: 'center',
        marginTop: 30
    },
    TextDetail:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        color: colors.purpleDark,
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20
    },
    InputBtn: {
        width: 150,
        padding: 10,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.purpleLight,
        marginTop: 10
    },
    TextBtn: {
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center'
    },
    

})