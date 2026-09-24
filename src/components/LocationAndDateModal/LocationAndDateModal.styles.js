const { StyleSheet } = require("react-native");

export default StyleSheet.create({
    backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end', 
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#1c1b1b',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
        fontFamily: 'Inter-Bold',

  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    color: '#aaa',
    marginBottom: 5,
    fontSize: 14,
    fontFamily:'Inter-SemiBold'
  },
  modalInput: {
    borderWidth: 3,
    borderColor: '#ffcf2e',
    marginVertical: 5,
    borderRadius: 10,
    padding: 12,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    width: '100%',
    marginBottom: 2
  },
  bookNowButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: "#ffcc00" 
  },
  bookNowButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
     color:  "#070404"
  },
});