import color from "@/constants/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: color.BgColor
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 30
    },
    header: {
        fontSize: 20,
        fontFamily: 'Inter-ExtraBold',
        color: color.white
    },
    mainCardContainer: {
        backgroundColor: '#3e3d3d',
        borderRadius: 10
    },
    cardContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        gap: 20,
        alignItems: 'center'
    },
    cardAccordionContainer: { margin: 10 },
    selectedCardImageContainer: {
        flex: 1
    },
    divider: {
        borderTopWidth: 1,
        borderColor: '#767676',
        width: '100%',
        marginVertical: 5
    },
    selectedCardImage: {
        width: '100%',
        height: 100,
        overflow: 'hidden',
        borderRadius: 10
    },

    cardTextContainer: {
        flex: 2
    },
    cardHeaderText: {
        fontFamily: 'Inter-Bold'
        , color: color.white

    },


    cardText: {
        color: color.white,
        fontFamily: 'Inter-Regular'
    },


    labelHeader: {
        fontSize: 20,
        fontFamily: 'Inter-ExtraBold',
        color: color.white,
        marginVertical: 20
    },

    InputField: {
        marginVertical: 5,
        borderRadius: 10,
        padding: 15,
        color: color.white,
        backgroundColor: '#3e3d3d'
    },
    textInputContainer: {
        margin: 10,
    },
    bookingHighlightsInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5
    },
    bookingHighlightsPriceDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'space-between',
        margin:10
    },
    bookmarkList: {
        fontFamily: 'Inter-SemiBold',
        color: color.white

    },
        bottomButtonContainer: { 
    backgroundColor: color.primary, 
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    padding:15
  },
  bottomButtonText: { 
    color: color.white, 
    fontSize: 18,
    fontFamily:'Inter-ExtraBold'
  },
})