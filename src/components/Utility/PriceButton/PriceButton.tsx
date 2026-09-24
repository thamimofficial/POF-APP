import color from '@/constants/color';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


interface modalParms {
    modalVisible : boolean;
     setModalVisible: (value: boolean) => void; 
}
export const PriceDetailsModal = ({modalVisible, setModalVisible}:modalParms) => {
return(
        <Modal  visible={modalVisible} animationType="slide" transparent={true} onRequestClose={() => setModalVisible(false)} >
        <View style={styles.modalOverlay}>
          
          <View style={styles.modalContent}>
            <SafeAreaView>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Price Detailes</Text>
                <TouchableOpacity 
                  style={styles.closeButton} 
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <Text style={styles.rowLabel}>Rental Charges</Text>
                <Text style={styles.rowValue}>$12345</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.rowLabel}>Taxes and fees</Text>
                <Text style={styles.rowValue}>$123</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.rowLabel}>Total (inc.tax)</Text>
                <Text style={styles.rowValue}>$123</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.row}>
                <Text style={[styles.rowLabel, styles.totalText]}>Total Amount</Text>
                <Text style={[styles.rowValue, styles.totalText]}>$1234</Text>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </Modal>
)
}

interface DataParms {
    onPress : ()=>void
}
const PriceButton = ({onPress}:DataParms) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
    <View style={styles.wrapper}>
  

      <View style={styles.bottomButtonMainContainer}>
        <TouchableOpacity 
          style={styles.bottomButtonPriceTextContainer}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.bottomButtonPriceText}>$5656</Text>
           <FontAwesome name="arrow-down-outline" size={20} color={color.white} />
        </TouchableOpacity>

        <TouchableOpacity  style={styles.bottomButtonContainer}  onPress={onPress} >
          <Text style={styles.bottomButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>

    <PriceDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
};

export default PriceButton;

const styles = StyleSheet.create({
  wrapper: { 
    bottom: 0, 
    width: '100%', 
    backgroundColor: color.BgColor, 
    margin: 0, 
    padding: 16 
  },
  bottomButtonMainContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottomButtonContainer: { 
    backgroundColor: color.primary, 
    borderRadius: 10, 
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  bottomButtonPriceTextContainer: { 
    flex: 2 ,
    flexDirection:'row',
    alignItems:'center',
  },
  bottomButtonPriceText: { 
    color: color.white,
    fontSize: 18,
    fontFamily:'Inter-Bold'
  },
  viewDetailsText: {
    color: color.primary,
    fontSize: 12,
    marginTop: 2
  },
  bottomButtonText: { 
    color: color.white, 
    fontSize: 18,
    fontFamily:'Inter-ExtraBold'
  },

  
  modalOverlay: {
    flex: 1,
    backgroundColor: color.BgColor, 
  },
  modalContent: {
    backgroundColor: color.BgColor, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    color: color.white,
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold',
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    color: color.white,
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  rowLabel: {
    color: color.white,
    opacity: 0.7,
    fontSize: 15,
    fontFamily:'Inter-Bold'
  },
  rowValue: {
    color: color.white,
    fontSize: 15,
    fontFamily:'Inter-SemiBold'
  },
  divider: {
    height: 1,
    backgroundColor: color.white,
    opacity: 0.1,
    marginVertical: 15,
  },
  totalText: {
    opacity: 1,
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },

});
