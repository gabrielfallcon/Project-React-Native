import { StyleSheet } from 'react-native' 
import colors from '../../assets/var/colors'
import {Dimensions} from 'react-native'

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  Container: {
    flexDirection: 'column',
    height: 900,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 30,
  },
  TipoLabelContainer: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  TipoLabel: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: colors.purpleDark,
  },
  TipoTextContainer: {
    width: '90%',
    height: '6%',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 10,
  },
  TipoText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: colors.purpleLight
  },
  TituloLabelContainer: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  TituloLabel: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: colors.purpleDark,
  },
  TituloTextContainer: {
    width: '90%',
    height: '6%',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 10,
  },
  TituloText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: colors.purpleLight
  },
  DescricaoLabelContainer: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  DescricaoLabel: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: colors.purpleDark,
  },
  DescricaoTextContainer: {
    width: '90%',
    height: '16%',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 10,
  },
  DescricaoText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: colors.purpleLight
  },
  AnexoLabelContainer: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  AnexoLabel: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: colors.purpleDark,
  },
  AnexoItensContainer: {
    flexDirection: 'row',
    height: 108,
  },
  FileCard: {
    maxWidth: 80,
    maxHeight: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FileCardImage: {
    width: 65,
    height: 65,
  },
  EnderecoLabelContainer: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  EnderecoLabel: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: colors.purpleDark,
  },
  EnderecoTextContainer: {
    width: '90%',
    height: '6%',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 10,
  },
  EnderecoText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: colors.purpleLight
  },
  ButtonContainer: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  Button: {
    backgroundColor: colors.purpleLight,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  ButtonText: {
    fontFamily: 'Roboto',
    color: colors.white,
  },
  OverlayButtonContainer: {
    width: '100%',
    height: 20,
    marginBottom: 100,
  },
  OverlayButton: {
    width: width-20,
  },
  OverlayButtonText: {
    color: '#F00',
    fontFamily: 'Roboto',
    fontSize: 32,
  },
  OverlayImageContainer: {
    height: "85%",
    width: '90%',
    alignItems: 'center',
  },
  OverlayImage: {
    height: '100%',
    width: '80%',
  },
  
});