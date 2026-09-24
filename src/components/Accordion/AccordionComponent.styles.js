import color from "@/constants/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
       paymentRadioButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 14,
        padding: 10,
        margin:10
    },
    fontContainer: {},
    paymentOptionTextContainer: {
        paddingHorizontal: 20
    },
    paymentOptionText: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 5
    },
    paymentOptionDescriptonText: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 5

    },
    paymentOptionInfo: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 5

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
})