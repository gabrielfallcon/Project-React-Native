import { StyleSheet } from 'react-native' 
import colors from '../../assets/var/colors'

export default StyleSheet.create({
    Container:{
        backgroundColor: colors.primary,
        height: '100%'
    },
    boxLogo: {
        height: 80
    },
    logo: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: 80,
        height: 80,
        marginHorizontal: 10,
        marginTop: 10
    },
    TitleServices:{
        fontSize: 30,
        marginBottom: 30,
        marginTop: 40,
        color: colors.purpleLight,
        fontWeight: '300',
        marginLeft: 20
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
        marginBottom: 10,
    },
    TextDesc: {
        fontSize: 16,
        color: colors.purpleDark
    },
    ServicesContainer: {
        height: 550, 
        width: '100%', 
        justifyContent: 'center',
        backgroundColor: colors.secondary
    },
    HistoryContainer: {
        width: '100%', 
        height: 200, 
        justifyContent: 'center',
    },
    emptyHistoryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyHistoryTextDesc: {
        fontSize: 16,
        color: colors.purpleDark,
        textAlign: 'center',
        marginBottom: 10
    },
    ReloadBtn: {
        marginTop: 10,
        width: 120,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.purpleLight,
        color: colors.primary
    },
    ReloadTextBtn: {
        fontSize: 16,
        color: colors.primary,
        textAlign: 'center'
    },
})