import { StyleSheet } from "react-native";
import color from "../../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: color.BgColor,
    },
    closeIcon: {
        marginTop: 50
    },
    loginText: {
        fontSize: 28,
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        marginTop: 26,
        color: 'white',
        fontWeight: '900',
        marginBottom: 10
    },
    subText: {
        color: 'white',
        marginVertical: 10
    },
    inputHeader: {
        color: 'white',
        marginVertical: 10,


    },

    inputField: {
        borderWidth: 3,
        borderColor: color.primary,
        borderRadius: 10,
        padding: 12,
        color: 'white',
        marginTop:10
    },
    inputContainer: {
        width: '100%',
    },
    continueButtonContainer: {
        width: '100%',
        marginVertical: 20
    },
    continueButton: {
        borderColor: color.primary,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: color.primary
    },
    continueButtonText: {
        color: 'black',
        textAlign: 'center',
        padding: 15,
        fontWeight: 'bold'
    },

    loginWithText: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 12,
        zIndex: 1,
        paddingHorizontal: 10,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: color.BgColor
    },
    loginButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 30,
        gap: 10,
    },
    googleButton: {
        backgroundColor: color.primary,
        padding: 15,
        borderRadius: 10,
        flex: 1
    },
    googleButtonText: {
        color: 'white',
        textAlign: 'center'
    },
    appleButton: {
        backgroundColor: color.primary,
        padding: 15,
        borderRadius: 10,
        flex: 1
    },
    appleButtonText: {
        color: 'white',
        textAlign: 'center'


    }
})