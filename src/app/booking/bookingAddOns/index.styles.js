import color from "@/constants/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: color.BgColor
    },
    mainHeader: {
        fontSize: 30
        , color: color.white,
        fontFamily:'Inter-ExtraBold'
    },
    alertContainer: {
        width: '100%',
        backgroundColor: 'grey',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 20,
        marginVertical: 20
    },
    alertText: {
        color: '#efe8e8',
        fontFamily:'Inter-SemiBold', paddingHorizontal:10
    },
    switchCardContainer: {
        padding: 20,
        flexDirection: 'row',
        gap: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center', 
    },
    switchBoxIcon: {
    },
    switchCardLablelContainer: {
        flex: 1,
         justifyContent: 'center',
    },
    switchCardHeaderText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        fontFamily:'Inter-ExtraBold'

    },
    switchCardPriceText: {
        color: '#fff',
        fontFamily:'Inter-SemiBold'
    },
    switchDescriptionText: {
        padding: 10,
        backgroundColor: '#656060',
        borderRadius: 10,
        color: 'white',
        margin: 5,
        fontFamily:'Inter-Regular'
    },
    switchCardDetailButton: {
        paddingVertical:10
    },
    bottomButtonMainContainer: {
        flexDirection:'row',
        alignItems:'center'
    },
    bottomButtonContainer: {
        backgroundColor: color.primary,
        padding: 10,
        borderRadius:10,
        flex:3
    },
    bottomButtonPriceTextContainer: {
 flex:2
    },
    bottomButtonPriceText: {
        color: color.white,

    },
    bottomButtonText:
    {
        color: color.white,
        textAlign: 'center'
    }
});