import CarCard from '@/components/CarCard';
import { useCallback, useState } from 'react';
import { FlatList, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePickerModal from '../../components/DatePickerModal';
import cars from '../../data/cars';
import Location from '../../data/Locations';

//stylesheet imported
import color from '@/constants/color';
import { router } from 'expo-router';
import styles from './index.styles';

import FontAwesome from '@expo/vector-icons/Ionicons';

import AgeSelector from '@/components/AgeSelector/AgeSelector';
import LocationDateModal from '@/components/LocationAndDateModal/LocationAndDateModel';
import { useDateSelectionModal, useModalStore, usePickupSelectionModal, useSelectedDateAndTimeState, useSelectedLocationState } from '@/store/ModalState';
import CarListModal from '../../components/CarListModal';


const index = () => {

  //This is Zustand Store for Pickup Location Model to open state only have true or false
  const isPickupLocationModalVisible = usePickupSelectionModal((state: any) => state.isPickupLocationModalOpen);
  const closePickupSelectionModal = usePickupSelectionModal((state: any) => state.closePickupLocationModal);
  const openPickupSelectionModal = usePickupSelectionModal((state: any) => state.openPickupLocationModal);
  //This is Zustand Store for Pickup Location Model to open state only have true or false

  //This is Zustand Store for Date Selection Model to open state only have true or false
  const isDateSelectionModalVisible = useDateSelectionModal((state: any) => state.isDateSelectionModalOpen);
  const closeDateSelectionModal = useDateSelectionModal((state: any) => state.closeDateSelectionModal);
  const openDateSelectionModal = useDateSelectionModal((state: any) => state.openDateSelectionModal);
  //This is Zustand Store forDate Selection Modelto open state only have true or false


  //Testing the pickup Location Data
  // console.log("Location",isPickupLocationModalVisible , "-" ,closePickupSelectionModal , "-" , openPickupSelectionModal)

  // const [date, setDate] = useState(new Date());
  // const [ShowDate, setShowDate] = useState(false)

  // const [dateModalVisible, setDateModalVisible] = useState(false);
  // const [pickupModalVisible, setPickupModalVisible] = useState(false);


  // const [value, setValue] = useState(null);
  // const [isFocus, setIsFocus] = useState(false);

  const [pickUpSearch, setPickUpSearch] = useState("")

  //Selected Location State Global State from Zustand
  const SelectedLocationState = useSelectedLocationState((state: any) => state.SelectedLocationState);
  const setSelectedLocation = useSelectedLocationState((state: any) => state.setSelectedLocation);
  // const [selectedLocation, setSelectedLocation] = useState<string>("Al Quoz");


  const SelectedStartDateState = useSelectedDateAndTimeState((state: any) => state.SelectedStartDateState);
  const SelectedEndDateState = useSelectedDateAndTimeState((state: any) => state.SelectedEndDateState);
  const SelectedStartTimeState = useSelectedDateAndTimeState((state: any) => state.SelectedStartTimeState);
  const SelectedEndTimeState = useSelectedDateAndTimeState((state: any) => state.SelectedEndTimeState); // Fixed typo from 'SelectedEndtTimeState'

  const selectedRange = {
    SelectedStartDateState,
    SelectedEndDateState,
    SelectedStartTimeState,
    SelectedEndTimeState
  };

  const setSelectedRange = useSelectedDateAndTimeState((state) => state.setSelectedRange);

  const handleRangeChange = useCallback((newRange: any) => {
    setSelectedRange({
      startDate: newRange.startDate,
      endDate: newRange.endDate,
      startTime: newRange.startTime,
      endTime: newRange.endTime
    });
  }, []);

  // const [HI, setSelectedRange] = useState({ startDate: new Date(), endDate: new Date(), startTime: "10:00 AM", endTime: "01:00 PM" });
  // console.log(selectedRange)


  const [carModalVisible, setCarModalVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);


  const [ageModalVisible, setAgeModalVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState<number>(18);


  const isVisible = useModalStore((state: any) => state.isCarModalOpen);
  const closeModal = useModalStore((state: any) => state.closeCarModal);



  const handleBookingConfirm = (bookingData: any) => {
    console.log('Car:', selectedCar);
    console.log('Selected Location:', bookingData.location);
    console.log('Selected Date:', bookingData.bookingDate);

  };

  const options = { month: 'short', day: 'numeric' } as const;

  const startStr = selectedRange.SelectedStartDateState.toLocaleDateString('en-US', options);

  const endStr = selectedRange.SelectedEndDateState
    ? selectedRange.SelectedEndDateState.toLocaleDateString('en-US', options)
    : startStr;

  const selectedTime = selectedRange.SelectedStartTimeState
  const slectedEndTime = selectedRange.SelectedEndTimeState

  let result: string;

  result = `${startStr} | ${selectedTime} - ${endStr} | ${slectedEndTime}`;


  type ItemData = {
    id: string;
    location: string;
  };


  const filteredData = Location.filter(item =>
    item.location.toLowerCase().includes(pickUpSearch.toLowerCase())
  );

  const renderItem = ({ item }: { item: ItemData }) => {

    return (
      <View style={styles.modelRenderingContainer}>
        <TouchableOpacity style={styles.modelListClicker}
          onPress={() => {
            setSelectedLocation(item.location)
            closePickupSelectionModal();
          }}>
          <Text style={styles.modelListText}>{item.location}</Text>
        </TouchableOpacity>
      </View>
    );
  };



  return (
    <ScrollView style={styles.container}>

      <View>
        <Image
          source={require('@/assets/images/pofrentalhomeimage.webp')}
          style={styles.backgrounImage}
          alt='POF Rental'
        />


        <View style={styles.bookingContainer}>
          <View style={{ width: '100%', alignSelf: 'flex-start' }}>
            <Text style={styles.carsLabel}>Cars</Text>
          </View>

          <TouchableOpacity onPress={openPickupSelectionModal} style={{ width: '100%' }}>
            <Text style={styles.searchCarInput}>{SelectedLocationState}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={openDateSelectionModal}
          >
            <FontAwesome name="calendar-clear-outline" size={15} color={color.primary} />
            <Text style={styles.datePickerText}>
              {result}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookNowButton} onPress={() => setCarModalVisible(true)}>
            <Text style={styles.bookNowLabel}>Book Now!</Text>
          </TouchableOpacity>

          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <TouchableOpacity onPress={() => setAgeModalVisible(true)} style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }} >
              <Text style={{ fontFamily: 'Inter-Bold', color: color.white }}>Age:{selectedAge}</Text>
              <FontAwesome name="chevron-down" size={15} color={color.white} />
            </TouchableOpacity>

            <TouchableOpacity style={{ margin: 10 }} onPress={() => router.push('/login')}>
              <Text style={{ color: 'white', textAlign: 'right', textDecorationLine: 'underline', fontFamily: 'Inter-Bold' }}>Login or register</Text>
            </TouchableOpacity>



          </View>

        </View>
      </View>

      <Text style={{ fontSize: 16, marginLeft: 20, marginBottom: 2, fontFamily: 'Inter-Bold' }}>Recommended</Text>
      <View>

        <FlatList
          horizontal={true}
          data={cars}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CarCard key={item.id} cars={item} onPress={() => setCarModalVisible(true)} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ marginVertical: 20, alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Inter-ExtraBold', fontSize: 16 }}>Experience Luxury Car Rental in Dubai with POF Rental</Text>
        <Text style={{ fontFamily: 'Inter-Regular', fontSize: 14 }}>Experience Luxury Mobility Designed Around Your Journey in Dubai</Text>
      </View>



      {/* Location Modal */}
      <Modal
        animationType="slide"
        visible={isPickupLocationModalVisible}
        onRequestClose={() => {
          if (!isPickupLocationModalVisible) {
            closePickupSelectionModal
          }

        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modelHeaderContainer}>
            <Text style={styles.modelHeaderText}>Pickup Location</Text>
            <TouchableOpacity onPress={closePickupSelectionModal}>
              <Text style={styles.modelCloseButton}>X</Text>
            </TouchableOpacity>
          </View>


          <TextInput
            placeholder='Airport, city, hotel, or address'
            placeholderTextColor={'white'}
            style={styles.modalSearchCarInput}
            value={pickUpSearch}
            onChangeText={(text) => setPickUpSearch(text)}
          />
          <Text style={styles.modelSubHeading}>Type at least 3 characters to search</Text>


          <FlatList
            data={filteredData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
      </Modal>


      <DatePickerModal
        visible={isDateSelectionModalVisible}
        onClose={closeDateSelectionModal}
        onSave={handleRangeChange}
        initialRange={selectedRange}
      />

      <CarListModal
        visible={carModalVisible}
        onClose={() => setCarModalVisible(false)}
        onSelectCar={(car: any) => {
          setSelectedCar(car);
          router.push({
            pathname: '/booking',
            params: { carId: car.id }
          });
        }}
        carsData={cars}
        locationDetails={{ location: SelectedLocationState, date: result }}
      />


      <LocationDateModal
        isVisible={isVisible}
        onClose={closeModal}
        onConfirm={handleBookingConfirm}
        LocationData={{ locationData: SelectedLocationState, bookingDateData: result }}
      />


      <AgeSelector
        visible={ageModalVisible}
        onClose={() => setAgeModalVisible(false)}
        onSelectAge={(age) => setSelectedAge(age)}
      />

    </ScrollView>
  )
}

export default index


