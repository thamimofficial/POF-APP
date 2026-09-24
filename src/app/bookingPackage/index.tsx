import Accordion from '@/components/Utility/Accordion/Accordion';
import PriceButton from '@/components/Utility/PriceButton/PriceButton';
import color from '@/constants/color';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.styles';


const AccordionComponentParms = [
  {
    AccordId: 1,
    AccordionHeader: "All Inclusive Protection (Minimum age 25)",
    AccordionSubheader: "No deductible",
    AccordionPrice: "$17.61",
    AccordionWasPrice: "$25.61",
    ExpendedText1: "Loss Damage Waiver (including theft protection)",
    ExpendedText2: "Tire and Windshield Protection",
    ExpendedText3: "Interior Protection",
    ExpendedText4: "Personal Accident Protection",
    ExpendedText5: "Roadside Protection",
    ExpendedText6: "Third-Party Liability Protection"
  },
  {
    AccordId: 2,
    AccordionHeader: "Smart Protection",
    AccordionSubheader: "Low deductible options",
    AccordionPrice: "$9.92",
    AccordionWasPrice: "$14.92",
    ExpendedText1: "Loss Damage Waiver (with excess)",
    ExpendedText2: "Tire and Windshield Protection",
    ExpendedText3: "Roadside Assistance Starter",
    ExpendedText4: "Standard Customer Support",
    ExpendedText5: "Basic Theft Coverage",
    ExpendedText6: "Excludes Interior Damages"
  },
  {
    AccordId: 3,
    AccordionHeader: "Basic Protection",
    AccordionSubheader: "Standard mandatory coverage",
    AccordionPrice: "$0.00",
    AccordionWasPrice: "$0.00",
    ExpendedText1: "Minimum Statutory Liability",
    ExpendedText2: "High Deductible Applies",
    ExpendedText3: "No Roadside Assistance",
    ExpendedText4: "No Tire/Windshield Coverage",
    ExpendedText5: "No Theft Protection",
    ExpendedText6: "All damages out-of-pocket up to excess"
  }
];


interface AccordionParms {
    AccordId: number;
    AccordionHeader: string;
    AccordionSubheader: string;
    AccordionPrice: string;
    AccordionWasPrice: string;
    ExpendedText1: string;
    ExpendedText2: string;
    ExpendedText3: string;
    ExpendedText4: string;
    ExpendedText5: string;
    ExpendedText6: string;
}

interface PackageComponentProps {
    data: AccordionParms;
    isSelected: boolean;
    onSelect: () => void;
}

const PackageComponent = ({ data, isSelected, onSelect }: PackageComponentProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View style={[styles.CardContainerButton, { borderColor: isSelected ? '#fff' : '#474646' }]}>
            <View style={[styles.paymentRadioButtonContainer, { flexDirection: 'row', alignItems: 'center' }]}>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
                    onPress={onSelect}
                >
                    <View style={styles.fontContainer}>
                        <FontAwesome name={isSelected ? "radio-button-on" : "radio-button-off"} size={20} color={color.white} />
                    </View>

                    <View style={styles.paymentOptionTextContainer}>
                        <Text style={styles.paymentOptionText}>{data.AccordionHeader}</Text>
                        <Text style={styles.paymentOptionDescriptonText}>{data.AccordionSubheader}</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Text style={styles.paymentOptionInfo}>${data.AccordionPrice} / day</Text>
                            <Text style={[styles.paymentOptionInfo, { textDecorationLine: 'line-through', fontSize: 10, color: 'grey' }]}>
                                ${data.AccordionWasPrice} / day
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setIsExpanded(!isExpanded)}
                    style={{ padding: 10 }}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <FontAwesome name={isExpanded ? 'chevron-up' : 'chevron-down'} size={16} color={color.primary} />
                </TouchableOpacity>
            </View>

            <Accordion expanded={isExpanded} heightParms={200}>
                <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                    <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>{data.ExpendedText1}</Text>
                    </View>
                    <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>{data.ExpendedText2}</Text>
                    </View>
                    <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>{data.ExpendedText3}</Text>
                    </View>
                    <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>{data.ExpendedText4}</Text>
                    </View>
                    <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>{data.ExpendedText5}</Text>
                    </View>
                    <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>{data.ExpendedText6}</Text>
                    </View>
                </View>
            </Accordion>
        </View>
    );
};


const PackageRenderComponent = () => {
    const [selectedId, setSelectedId] = useState<number>(1);

    return (
        <View>
            {AccordionComponentParms.map((item) => (
                <PackageComponent
                    key={item.AccordId}
                    data={item}
                    isSelected={selectedId === item.AccordId}
                    onSelect={() => setSelectedId(item.AccordId)}
                />
            ))}
        </View>
    );
};


const index = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <TouchableOpacity style={{ margin: 10 }} onPress={() => router.back()} >
                    <FontAwesome name="arrow-back" size={30} color={color.primary} />
                </TouchableOpacity>

                <View style={styles.paymentOptionContainer}>
                    <View>
                        <Text style={styles.header}>Which protection package do you need </Text>
                        <PackageRenderComponent />
                    </View>
                </View>


                <View style={styles.detailsContainer}>
                    <Text style={styles.brandText}>Your booking overview</Text>
                    

                    <Text style={styles.paymentOptionText}>SubHeading</Text>

                 <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>Third party insurance</Text>
                    </View>

                    
                 <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>Loss Damage Waiver (including theft protection) up to
                        AED 3,000.00 (approx. $816.88) financial responsibility</Text>
                    </View>

                    
                 <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>600 km are included , each additional kilometers costs $0.33</Text>
                    </View>

                    
                 <View style={styles.paymentOptionTextAccordionContainer}>
                    <FontAwesome name="arrow-forward" size={16} color={color.white} />
                    <Text style={styles.paymentOptionText}>Booking option: Our best price - Fee cancellation and rebooking within 24h.</Text>
                    </View>

    
                </View>
            </ScrollView>

            <PriceButton onPress={() => router.push('/bookingAddOns')} />

        </SafeAreaView>
    );
};

export default index;
