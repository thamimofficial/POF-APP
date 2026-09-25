import PriceButton from '@/components/Utility/PriceButton/PriceButton';
import color from '@/constants/color';
import cars from '@/data/cars';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.styles';

const index = (route: number) => {
    const { carId } = useLocalSearchParams<{ carId: string }>();

    console.log("CarData", carId)

    const [selectedPayment, setSelectedPayment] = useState('bestPrice');
    const [selectedMileage, setSelectedMileage] = useState('limited');

    const car = cars.find((item) => item.id === Number(carId));

    if (!car) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Car not found</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <TouchableOpacity style={{ position: 'absolute', zIndex: 1, margin: 10 }} onPress={() => router.back()}>
                    <FontAwesome name="arrow-back" size={30} color={color.BgColor} />
                </TouchableOpacity>


                <Image source={car.image} style={styles.carImage} resizeMode="cover" />

                <View style={styles.detailsContainer}>
                    <Text style={styles.brandText}>{car.brand}</Text>
                    <Text style={styles.modelText}>{car.model}</Text>

                    <View style={styles.detailBoxSperater}>
                        <Text style={styles.seatText}>{car.seats} People</Text>
                        <Text style={styles.seatText}>{car.color}</Text>
                    </View>

                    <View style={styles.detailBoxSperater}>
                        <Text style={styles.seatText}>{car.engineType}</Text>
                        <Text style={styles.seatText}>{car.engine}</Text>
                    </View >

                    <View style={styles.detailBoxSperater}>
                        <Text style={styles.seatText}>{car.horsepower}</Text>
                        <Text style={styles.seatText}>{car.topSpeed}</Text>
                    </View>

                    <View style={styles.detailBoxSperater}>
                        <Text style={styles.seatText}>{car.year}</Text>
                        <Text style={styles.seatText}>{car.acceleration}</Text>
                    </View>
                </View>

                <View style={styles.paymentOptionContainer}>
                    <Text style={styles.paymenOptionsHeader}>Payment Option</Text>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={[
                                styles.paymentRadioButtonContainer,
                                {
                                    borderColor: selectedPayment === 'bestPrice' ? '#fff' : '#474646',
                                    borderBottomEndRadius: 0, borderBottomLeftRadius: 0
                                }
                            ]}
                            onPress={() => setSelectedPayment('bestPrice')}
                        >
                            <View style={styles.fontContainer}>
                                {selectedPayment === 'bestPrice' ? (
                                    <FontAwesome name="radio-button-on" size={20} color={color.primary} />
                                ) : (
                                    <FontAwesome name="radio-button-off" size={20} color={color.primary} />
                                )}
                            </View>
                            <View style={styles.paymentOptionTextContainer}>
                                <Text style={styles.paymentOptionText}>Our best price</Text>
                                <Text style={styles.paymentOptionDescriptonText}>Free cancellation and rebooking within 24h.</Text>
                                <Text style={styles.paymentOptionInfo}>Included</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={[
                                styles.paymentRadioButtonContainer,
                                {
                                    borderColor: selectedPayment === 'flexible' ? '#fff' : '#474646',
                                    borderTopEndRadius: 0, borderTopLeftRadius: 0
                                }
                            ]} onPress={() => setSelectedPayment('flexible')}
                        >
                            <View style={styles.fontContainer}>
                                {selectedPayment === 'flexible' ? (
                                    <FontAwesome name="radio-button-on" size={20} color={color.primary} />
                                ) : (
                                    <FontAwesome name="radio-button-off" size={20} color={color.primary} />
                                )}
                            </View>

                            <View style={styles.paymentOptionTextContainer}>
                                <Text style={styles.paymentOptionText}>Stay Flexible</Text>
                                <Text style={styles.paymentOptionDescriptonText}>Free cancellation and rebooking within 24h.</Text>
                                <Text style={styles.paymentOptionInfo}>+ $7.32/ day</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.paymentOptionContainer}>
                    <Text style={styles.paymenOptionsHeader}>Millage Package</Text>
                    <View>
                        <TouchableOpacity activeOpacity={0.9}
                            style={[
                                styles.paymentRadioButtonContainer,
                                {
                                    borderColor: selectedMileage === 'limited' ? '#fff' : '#474646',
                                    borderBottomEndRadius: 0, borderBottomLeftRadius: 0
                                }
                            ]} onPress={() => setSelectedMileage('limited')}>
                            <View style={styles.fontContainer}>
                                {selectedMileage === 'limited' ? (
                                    <FontAwesome name="radio-button-on" size={20} color={color.primary} />
                                ) : (
                                    <FontAwesome name="radio-button-off" size={20} color={color.primary} />
                                )}
                            </View>

                            <View style={styles.paymentOptionTextContainer}>
                                <Text style={styles.paymentOptionText}>600 km</Text>
                                <Text style={styles.paymentOptionDescriptonText}>+$0.33 for every addional km</Text>
                                <Text style={styles.paymentOptionInfo}>Included</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={[
                                styles.paymentRadioButtonContainer,
                                {
                                    borderColor: selectedMileage === 'unlimited' ? '#fff' : '#474646',
                                    borderTopEndRadius: 0, borderTopLeftRadius: 0
                                }
                            ]}
                            onPress={() => setSelectedMileage('unlimited')}
                        >
                            <View style={styles.fontContainer}>
                                {selectedMileage === 'unlimited' ? (
                                    <FontAwesome name="radio-button-on" size={20} color={color.primary} />
                                ) : (
                                    <FontAwesome name="radio-button-off" size={20} color={color.primary} />
                                )}
                            </View>

                            <View style={styles.paymentOptionTextContainer}>
                                <Text style={styles.paymentOptionText}>Unlimited kilometers</Text>
                                <Text style={styles.paymentOptionDescriptonText}>All kilometers are included in the price</Text>
                                <Text style={styles.paymentOptionInfo}>+$9.31/ day</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
            {/* <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.continueButton} onPress={()=>router.push('/bookingPackage')}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View> */}
            <PriceButton onPress={() => router.push('/booking/bookingPackage')} />
        </SafeAreaView>
    );
};

export default index;
