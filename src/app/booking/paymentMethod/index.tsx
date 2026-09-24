import color from '@/constants/color';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.styles';




const index = () => {

    const [paymentDetails, setPaymentDetails] = useState({
        cardholderName: "",
        cardNumber: "",
        expires: "",
        securtiyCode: ""
    });

    

    const handleInputChange = (key: string, value: string) => {
        setPaymentDetails(prev => ({ ...prev, [key]: value }));
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome name="arrow-back" size={20} color={color.white} />
                </TouchableOpacity>
                <Text style={styles.header}>Add credit card</Text>
            </View>

            <Text style={styles.cardHeaderText}>Not all our vehicles can be rented with a debit card. To access our full
                fleet, add a credit card.
            </Text>
            <View style={{marginVertical:0, justifyContent:'flex-start'}}>
                <Image source={require('@/assets/images/icons/credit-card-icons.png')}
                    style={{ width: '60%', height: 40 }}
                />
            </View>
            <ScrollView>
                <KeyboardAvoidingView>





                    <View style={styles.textInputContainer}>
                        <Text style={styles.cardHeaderText}>Cardholder name</Text>
                        <TextInput
                            style={styles.InputField}
                            placeholderTextColor={color.black}
                            value={paymentDetails.cardholderName}
                            onChangeText={(text) => handleInputChange("cardholderName", text)}
                        />
                        <Text style={[styles.cardHeaderText, { color: '#978f8f' }]}>The credit card myst be issued in the driver's name.</Text>

                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.cardHeaderText}>Card number</Text>
                        <TextInput
                            style={styles.InputField}
                            placeholderTextColor={color.black}
                            value={paymentDetails.cardNumber}
                            onChangeText={(text) => handleInputChange("cardNumber", text)}
                            keyboardType='number-pad'
                            
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <View style={[styles.textInputContainer, { flex: 1 }]}>
                            <Text style={styles.cardHeaderText}>Card number</Text>
                            <TextInput
                                style={styles.InputField}
                                placeholderTextColor={color.black}
                                value={paymentDetails.expires}
                            onChangeText={(text) => handleInputChange("expires", text)}
                            keyboardType='number-pad'                            />
                        </View>

                        <View style={[styles.textInputContainer, { flex: 1 }]}>
                            <Text style={styles.cardHeaderText}>Card number</Text>
                            <TextInput
                                style={styles.InputField}
                                placeholderTextColor={color.black}
                                value={paymentDetails.securtiyCode}
                            onChangeText={(text) => handleInputChange("securtiyCode", text)}
                            keyboardType='number-pad'                            />
                        </View>
                    </View>




                </KeyboardAvoidingView>
            </ScrollView>

                       <TouchableOpacity  style={styles.bottomButtonContainer}  onPress={()=> router.back()}  >
                          <Text style={styles.bottomButtonText}>Save</Text>
                        </TouchableOpacity>

        </SafeAreaView>
    )
}

export default index;