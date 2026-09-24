import color from "@/constants/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    Title: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgrounImage: {
        width: '100%',
        height: 450,

    },
    bookingContainer: {
        alignItems: 'center',
        top: 0,
        width: '95%',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(59, 57, 57, 10)',
        padding: 25,
        borderRadius: 10,
        marginTop: -100,
        margin: 20
    },


        carsLabel: {
        marginVertical: 5,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical:5,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Inter-Bold',
        backgroundColor:color.white,
        color:color.black,
        width:'15%'

    },

    searchCarInput: {
        borderBottomWidth: 1,
        borderColor: 'white',
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
        marginBottom: 20,
        fontFamily: 'Inter-Bold'

    },
    datePickerButton: {
        borderColor: 'white',
        borderRadius: 5,
        padding: 12,
        width: '100%',
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    datePickerText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Inter-Bold'

    },
    bookNowButton: {
        borderWidth: 1,
        borderColor: '#ffcf2e',
        backgroundColor: '#ffcf2e',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10
    },
    bookNowLabel: {
        padding: 10,
        fontFamily: 'Inter-Bold'
    },

    dropdown: {
        width: "100%",
        height: 50,
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        zIndex: 1000,
        marginBottom: 20,
    },

    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: 'white'

    },
    placeholderStyle: {
        fontSize: 16,
        color: 'white'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: "yellow"
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

    modalContainer: {
        flex: 1,
        backgroundColor: "black",
        padding: 10
    },

    modalSearchCarInput: {
        borderWidth: 3,
        borderColor: '#ffcf2e',
        marginVertical: 5,
        borderRadius: 10,
        padding: 12,
        color: 'white',
        fontSize: 14,
        fontFamily: 'Inter-SemiBold',
        width: '100%',
        marginBottom: 2
    },

    modelHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        width: '100%',
        marginBottom: 30


    },
    modelCloseButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight: 20

    },
    modelHeaderText: {
        color: '#ffffff',
        fontSize: 20,
        marginHorizontal: 'auto',
        fontFamily: 'Inter-Bold'
    },
    modelSubHeading: {
        color: 'white',
        marginBottom: 10,
        fontFamily: 'Inter-Bold'

    },
    modelRenderingContainer: {
        width: 'auto',
        margin: 5
    },
    modelListText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Inter-Regular'

    },
    modelListClicker: {

    }
})