import { StyleSheet } from 'react-native' 
import colors from '../../assets/var/colors'

export default StyleSheet.create({
    Container:{
        backgroundColor: colors.primary,
        height: '100%'
    },
    TitleServices:{
        fontSize: 30,
        marginBottom: 100,
        marginTop: 30,
        color: colors.purpleLight,
        fontWeight: '300'
    },
    box: {
        height: 500,
        backgroundColor: '#121212',
        padding: 20
    },
    list: {

    },
    ContainerImage: {
        height: '60%',
        width: 250,
        backgroundColor: colors.secondary,
        borderRadius: 20
    },
    TextTitle: {
        textAlign: "left",
        color: colors.purpleLight,
        fontSize: 20,
        fontWeight: '200',
        marginTop: 20,
        marginBottom: 10
    },
    TextDesc: {
        fontSize: 16,
        color: colors.purpleDark
    }
})