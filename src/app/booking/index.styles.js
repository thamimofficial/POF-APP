import color from '@/constants/color';
import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BgColor,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  carImage: {
    width: width,
    height: 300,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#494949'
  },
  brandText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Inter-Bold'
  },
  modelText: {
    fontSize: 16,
    color: '#aeaeae',
    marginBottom: 20,
    fontFamily: 'Inter-Bold'
  },
  priceText: {
    fontSize: 18,
    color: '#f8fbff',
    marginBottom: 12,
    flex: 1,
    fontFamily: 'Inter-Regular'

  },
  seatText: {
    fontSize: 18,
    color: '#ebe6e6',
    marginBottom: 12,
    flex: 1,
    fontFamily: 'Inter-SemiBold'

  },
  descText: {
    fontSize: 14,
    color: '#fffbfb',
    marginBottom: 12,
    flex: 1,
    fontFamily: 'Inter-Regular'
  },
  feelText: {
    fontSize: 14,
    color: '#f4f0f0',
    flex: 1
  },
  detailBoxSperater: {
    display: 'flex',
    flexDirection: 'row'
  },
  paymentOptionContainer: {
    padding: 10
  },
  paymenOptionsHeader: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
    fontFamily:'Inter-Bold'
  },
  paymentRadioButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10
  },
  fontContainer: {},
  paymentOptionTextContainer: {
    paddingHorizontal: 20
  },
  paymentOptionText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
    fontFamily:'Inter-Bold'
  },
  paymentOptionDescriptonText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
        fontFamily:'Inter-Regular'

  },
  paymentOptionInfo: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
        fontFamily:'Inter-Bold'


  },
  footerContainer: {

  },
  continueButton: {
    backgroundColor: color.primary,
    margin: 10,
    borderRadius: 10

  },
  continueButtonText: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center'
  }
});
