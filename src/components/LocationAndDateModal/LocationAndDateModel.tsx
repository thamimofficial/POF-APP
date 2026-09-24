import { useDateSelectionModal, usePickupSelectionModal, useSelectedLocationState } from '@/store/ModalState';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from './LocationAndDateModal.styles';

interface LocationDateModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (bookingData: { setSelectedLocation: string; bookingDate: string }) => void;
  LocationData: { locationData: string, bookingDateData: any }
}



const LocationDateModal = ({ isVisible, onClose, onConfirm, LocationData }: LocationDateModalProps) => {
  const [location, setLocation] = useState(LocationData.locationData);
  const [bookingDate, setBookingDate] = useState(LocationData.bookingDateData);


  // const isPickupLocationModalVisible = usePickupSelectionModal((state: any) => state.isPickupLocationModalOpen);
  // const closePickupSelectionModal = usePickupSelectionModal((state: any) => state.closePickupLocationModal);
  const openPickupSelectionModal = usePickupSelectionModal((state: any) => state.openPickupLocationModal);

//This is Zustand Store for Date Selection Model to open state only have true or false
// const isDateSelectionModalVisible = useDateSelectionModal((state: any) => state.isDateSelectionModalOpen);
// const closeDateSelectionModal = useDateSelectionModal((state: any) => state.closeDateSelectionModal);
const openDateSelectionModal = useDateSelectionModal((state: any) => state.openDateSelectionModal);

   const SelectedLocationState = useSelectedLocationState((state: any) => state.SelectedLocationState);
    const setSelectedLocation = useSelectedLocationState((state: any) => state.setSelectedLocation);

    

  const handleSubmit = () => {
    if (!setSelectedLocation || !bookingDate) return; 
    onConfirm({ setSelectedLocation, bookingDate:LocationData.bookingDateData });
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >

      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Booking Information</Text>
            <TouchableOpacity onPress={onClose} accessibilityRole="button" accessibilityLabel="Close modal">
              <FontAwesome name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Pickup & Dropoff Location</Text>
            <TouchableOpacity onPress={openPickupSelectionModal}>
              {/* <TextInput
              style={styles.modalInput}
              placeholder="Enter city or airport"
              placeholderTextColor="#777"
              value={location}
              onChangeText={setLocation}
            /> */}
              <Text style={styles.modalInput}>{SelectedLocationState}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Select Date</Text>
            <TouchableOpacity onPress={openDateSelectionModal}>
              <Text style={styles.modalInput}>{LocationData.bookingDateData}</Text>
            </TouchableOpacity>
            {/* <TextInput
              style={styles.modalInput}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#777"
              value={bookingDate}
              onChangeText={setBookingDate}
            /> */}
          </View>

          <TouchableOpacity
            style={styles.bookNowButton}
            onPress={handleSubmit}
          >
            <Text style={styles.bookNowButtonText}>
              Confirm Booking
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};



export default LocationDateModal;
