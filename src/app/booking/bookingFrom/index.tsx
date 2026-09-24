import Accordion from '@/components/Utility/Accordion/Accordion';
import { PriceDetailsModal } from '@/components/Utility/PriceButton/PriceButton';
import color from '@/constants/color';
import cars from '@/data/cars';
import { useSelectedDateAndTimeState, useSelectedLocationState } from '@/store/ModalState';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.styles';


import { CountryPicker } from "react-native-country-codes-picker";
import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';



interface DateSelectorModalProps {
  isDateSelectorVisible: boolean;
  setIsDateSelectorVisible: (visible: boolean) => void;
  onDateSelect: (date: any) => void;
}

const DateSelectorModal = ({
  isDateSelectorVisible,
  setIsDateSelectorVisible,
  onDateSelect
}: DateSelectorModalProps) => {
  const defaultStyles = useDefaultStyles();

  const [selected, setSelected] = useState<DateType>();

  const handleDateChange = ({ date }: { date: DateType }) => {
    setSelected(date);
  };

  const handleConfirmSelection = () => {
    if (selected) {
      onDateSelect(selected);
    }
    setIsDateSelectorVisible(false);
  };

  const handleClose = () => {
    setIsDateSelectorVisible(false);
  };

  return (
    <Modal visible={isDateSelectorVisible} animationType="fade" transparent={true}>
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ backgroundColor: '#2e2b2b', padding: 20, margin: 20, borderRadius: 10 }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 , marginBottom:20}}>
            <Text style={styles.header}>Date Of Birth</Text>
            <TouchableOpacity onPress={handleClose}>
              <FontAwesome name="close" size={30} color={color.white} />
            </TouchableOpacity>
          </View>


          <DateTimePicker
            mode="single"
            date={selected}
            onChange={handleDateChange}
            styles={{
              ...defaultStyles,
              today: { borderColor: color.primary, borderWidth: 1 },
              selected: { backgroundColor: color.primary },
              selected_label: { backgroundColor: color.primary },
              day_label: { color: 'white' },
            }}
          />

          <TouchableOpacity
            style={styles.bottomButtonContainer}
            onPress={handleConfirmSelection}
          >
            <Text style={styles.bottomButtonText}>Select</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bottomButtonContainer, { backgroundColor: color.BgColor, marginTop: 10 }]}
            onPress={handleClose}
          >
            <Text style={[styles.bottomButtonText, { color: color.white }]}>Cancel</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};


const index = () => {

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>('+971');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedDate, setSavedDate] = useState(new Date());


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


  const options = { month: 'short', day: 'numeric' } as const;

  const startStr = selectedRange.SelectedStartDateState.toLocaleDateString('en-US', options);
  // console.log("Testing the date data",selectedRange?.endDate.toLocaleDateString('en-US', options))
  const endStr = selectedRange.SelectedEndDateState
    ? selectedRange.SelectedEndDateState.toLocaleDateString('en-US', options)
    : startStr;

  const selectedTime = selectedRange.SelectedStartTimeState
  const slectedEndTime = selectedRange.SelectedEndTimeState

  let pickup: string;
  let retrun: string;


  pickup = `${startStr} | ${selectedTime}`;
  retrun = `${endStr} | ${slectedEndTime}`;

  const [userDetails, setUserDetails] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    country: "",
    street: "",
    city: ""
  });

const [validateAlert, setValidateAlert] = useState({
    firstName: false,
    lastName:false,
    email:false,
    phoneNumber:false,
    dateOfBirth: false,
  });

  const handleValidationChange = (key: string, value: boolean) => {
    setValidateAlert(prev => ({ ...prev, [key]: value }));
  };
  const handleBook=()=>{
     if(!userDetails.firstName){
    () => handleValidationChange("firstName",true)
    Alert.alert("Validation error", "First name is requird")
  }
  }
 

  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const carId = 1;

  const SelectedLocationState = useSelectedLocationState((state: any) => state.SelectedLocationState);



  const handleInputChange = (key: string, value: string) => {
    setUserDetails(prev => ({ ...prev, [key]: value }));
  };


  const SelectedCarDetails = cars.find((item) => item.id === Number(carId))
  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="arrow-back" size={20} color={color.white} />
        </TouchableOpacity>
        <Text style={styles.header}>Review and book</Text>

      </View>

      <ScrollView>
        <View style={styles.mainCardContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.selectedCardImageContainer}>
              <Image
                source={SelectedCarDetails?.image}
                style={styles.selectedCardImage}
              />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardHeaderText}>{SelectedCarDetails?.brand}</Text>
              <Text style={styles.cardText}>{SelectedCarDetails?.model}</Text>
              <Text style={styles.cardHeaderText}>{SelectedCarDetails?.year}</Text>
            </View>
            <TouchableOpacity onPress={() => isExpanded ? setIsExpanded(false) : setIsExpanded(true)}>
              <FontAwesome name={isExpanded ? "chevron-up" : "chevron-down"} size={30} color={color.white} />
            </TouchableOpacity>
          </View>


          <Accordion heightParms={450} expanded={isExpanded}>
            <View style={{ padding: 10, }}>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="home-sharp" size={20} color={color.white} />

                <View style={styles.cardAccordionContainer}>
                  <Text style={[styles.cardHeaderText, { color: '#837e7e' }]}>Pickup</Text>
                  <Text style={styles.cardHeaderText}>{SelectedLocationState}</Text>
                  <Text style={styles.cardHeaderText}>{pickup}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="home-sharp" size={20} color={color.white} />

                <View style={styles.cardAccordionContainer}>
                  <Text style={[styles.cardHeaderText, { color: '#837e7e' }]}>Retrun</Text>
                  <Text style={styles.cardHeaderText}>{SelectedLocationState}</Text>
                  <Text style={styles.cardHeaderText}>{retrun}</Text>
                </View>
              </View>





              <View style={styles.cardAccordionContainer}>
                <Text style={styles.cardHeaderText}>Payment Option</Text>
                <Text style={styles.cardText}>Booking option: Our best price - Free Cancellation and rebooking within 24.</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.cardAccordionContainer}>
                <Text style={styles.cardHeaderText}>Included as standered</Text>
                <Text style={styles.cardText}>Third party insurance</Text>
              </View>

              <View style={styles.divider} />


              <View style={styles.cardAccordionContainer}>
                <Text style={styles.cardHeaderText}>Mileage</Text>
                <Text style={styles.cardText}>600 km are included, each additional kilometer costs $0.33</Text>
              </View>

              <View style={styles.divider} />


              <View style={styles.cardAccordionContainer}>
                <Text style={styles.cardHeaderText}>Protechtion</Text>
                <Text style={styles.cardText}>Smart Protection (Minimum age 25) - No deducticable</Text>
              </View>


            </View>

          </Accordion>
        </View>


        <View>

          <View style={styles.textInputContainer}>

            <View>
              <Text style={styles.labelHeader}>Driver Details</Text>
            </View>

            <Text style={styles.cardHeaderText}>Company name (optional)</Text>
            <TextInput
              style={styles.InputField}
              placeholderTextColor={color.black}
              value={userDetails.companyName}
              onChangeText={(text) => handleInputChange("companyName", text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <Text style={styles.cardHeaderText}>First name</Text>
            <TextInput
              style={[styles.InputField,
                validateAlert.firstName ? {backgroundColor:'red'} : {}
              ]}
              placeholderTextColor={color.black}
              value={userDetails.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <Text style={styles.cardHeaderText}>Last name</Text>
            <TextInput
              style={styles.InputField}
              placeholderTextColor={color.black}
              value={userDetails.lastName}
              onChangeText={(text) => handleInputChange("lastName", text)}
            />
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <Text style={styles.cardHeaderText}>email</Text>
          <TextInput
            style={styles.InputField}
            placeholderTextColor={color.black}
            value={userDetails.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />
        </View>


        <View style={styles.textInputContainer}>
          <Text style={styles.cardHeaderText}>Phone</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity onPress={() => setShow(true)}>
              <Text
                style={[styles.InputField, { flex: 1 }]}
              >{countryCode}</Text>
            </TouchableOpacity>

            <TextInput
              style={[styles.InputField, { flex: 4 }]}
              placeholderTextColor={color.black}
              value={userDetails.phoneNumber}
              onChangeText={(text) => handleInputChange("phoneNumber", text)}
              keyboardType='number-pad'
            />
          </View>


          <CountryPicker
            show={show}
            lang="en" // 
            pickerButtonOnPress={(item): void => {
              console.log(item)
              setCountryCode(item.dial_code);
              setShow(false);
            }}
            searchMessage='Hi'

          />


        </View>

        <View style={styles.textInputContainer}>
          <View>
            <Text style={styles.labelHeader}>What's your birthday?</Text>
          </View>
          <Text style={styles.cardHeaderText}>Date of birth (MM/DD/YYY)</Text>
          <TouchableOpacity onPress={() => setIsModalOpen(true)}>


            <Text style={styles.InputField}>
              {savedDate ? savedDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Select Date'}
            </Text>

          </TouchableOpacity>

        </View>


        <DateSelectorModal
          isDateSelectorVisible={isModalOpen}
          setIsDateSelectorVisible={setIsModalOpen}
          onDateSelect={(date) => setSavedDate(date)}
        />
        {/* <DateTimePicker
          mode="single"
          date={selected}
          onChange={({ date }) => setSelected(date)}
          styles={defaultStyles}
        /> */}



        <View style={styles.textInputContainer}>
          <View>
            <Text style={styles.labelHeader}>What payment method would you like to use?</Text>
          </View>
          <TouchableOpacity style={[styles.InputField, { flexDirection: 'row', alignItems: 'center', gap: 10 }]} onPress={() => router.push('/booking/paymentMethod')}>
            <FontAwesome name="card" size={20} color={color.white} />
            <Text style={styles.cardHeaderText}>Add Payment method</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.textInputContainer}>
          <View>
            <Text style={styles.labelHeader}>Invoicing address</Text>
          </View>
          <Text style={styles.cardHeaderText}>Country</Text>
          <TextInput
            style={styles.InputField}
            placeholderTextColor={color.black}
            value={userDetails.country}
            onChangeText={(text) => handleInputChange("country", text)}
          />
        </View>

        <View style={styles.textInputContainer}>
          <Text style={styles.cardHeaderText}>Street address</Text>
          <TextInput
            style={styles.InputField}
            placeholderTextColor={color.black}
            value={userDetails.street}
            onChangeText={(text) => handleInputChange("street", text)}
          />
        </View>

        <View style={styles.textInputContainer}>
          <Text style={styles.cardHeaderText}>City</Text>
          <TextInput
            style={styles.InputField}
            placeholderTextColor={color.black}
            value={userDetails.city}
            onChangeText={(text) => handleInputChange("city", text)}
          />
        </View>




        <View style={styles.divider} />


        <View>
          <Text style={styles.labelHeader}>Your booking highlights</Text>
        </View>
        <View style={styles.bookingHighlightsInfoContainer}>
          <FontAwesome name="bookmark" size={20} color={'#19b901'} />
          <Text style={[styles.bookmarkList, { color: '#19b901' }]}>Best price when you pay today</Text>
        </View>
        <View style={styles.bookingHighlightsInfoContainer}>
          <FontAwesome name="bookmark" size={20} color={'#19b901'} />
          <Text style={[styles.bookmarkList, { color: '#19b901' }]}>Smart protection with zero deductioble</Text>
        </View>
        <View style={styles.bookingHighlightsInfoContainer}>
          <FontAwesome name="bookmark" size={20} color={'#19b901'} />
          <Text style={[styles.bookmarkList, { color: '#19b901' }]}>24/7 customer support</Text>
        </View>

        <View style={styles.divider} />

        <View style={{}}>
          <View style={styles.bookingHighlightsPriceDetails}>
            <Text style={[styles.cardHeaderText]}>Subtotal</Text>
            <Text style={[styles.cardHeaderText]}>$256.44</Text>
          </View>

          <View style={styles.bookingHighlightsPriceDetails}>
            <Text style={[styles.cardHeaderText, { color: '#19b901' }]}>You save</Text>
            <Text style={[styles.cardHeaderText, { color: '#19b901', backgroundColor: '#50644d', borderRadius: 10, padding: 2, paddingHorizontal: 10 }]}>$7.44</Text>
          </View>

          <View style={styles.bookingHighlightsPriceDetails}>
            <Text style={[styles.cardHeaderText]}>Total</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }} onPress={() => setModalVisible(true)}>
              <Text style={[styles.cardHeaderText, { textDecorationLine: 'underline' }]}>$256.44</Text>
              <FontAwesome name='chevron-down' size={20} color={color.white} />
            </TouchableOpacity>
          </View>

          <PriceDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

          <View style={styles.bookingHighlightsPriceDetails}>
            <Text style={[styles.cardHeaderText]}>Amount you will pay</Text>
            <Text style={[styles.cardHeaderText]}>$256.44</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bottomButtonContainer} onPress={handleBook}  >
          <Text style={styles.bottomButtonText}>Pay and Book</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* <PriceButton onPress={() => Alert.alert("Thank You", "hi")} /> */}

    </SafeAreaView>

  )
}

export default index;