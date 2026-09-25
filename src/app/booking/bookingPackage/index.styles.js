import color from '@/constants/color';
import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:color.BgColor,
    },
    header: {
        fontSize: 20,
        color: 'white',
        padding:10,
        fontFamily:'Inter-ExtraBold'
    }
    ,
    scrollContainer: {
        paddingBottom: 20,
    },
    detailsContainer: {
        padding: 16,
        backgroundColor: '#353434'
    },
    brandText: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        color: color.white,
    },
    modelText: {
        fontSize: 16,
         fontFamily: 'Inter-Bold',
        color: '#aeaeae',
        marginBottom: 10
    },
    priceText: {
        fontSize: 18,
        color: '#f8fbff',
        marginBottom: 12,
        flex: 1,
          fontFamily: 'Inter-Regular',
    },
    seatText: {
        fontSize: 18,
        color: '#ebe6e6',
        marginBottom: 12,
        flex: 1,
        fontFamily: 'Inter-Regular',
    },
    descText: {
        fontSize: 14,
        color: '#fffbfb',
        marginBottom: 12,
        flex: 1,
        fontFamily: 'Inter-Regular',
    },
    feelText: {
        fontSize: 14,
        color: '#f4f0f0',
        flex: 1,
        fontFamily: 'Inter-Regular',
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
        marginVertical: 10
    },
    CardContainerButton:{

  borderWidth: 2,
        borderRadius: 14,
        padding: 10,
        margin:10
    },
    
    paymentRadioButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    fontContainer: {
        
    },
    paymentOptionTextContainer: {
        paddingHorizontal: 20,
        flex:1
    },
    paymentOptionTextAccordionContainer:{
        flexDirection:'row',
        alignItems:'center',
         gap:10
    },
    paymentOptionText: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 5,
        fontFamily:'Inter-Regular'
    },
    paymentOptionDescriptonText: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 5,
                fontFamily:'Inter-Bold'


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
