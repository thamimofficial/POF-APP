import color from '@/constants/color';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Accordion from '../Utility/Accordion/Accordion';
import styles from './AccordionComponent.styles';

// interface AccordionParms {
//     expanded: boolean;
//     children: React.ReactNode;
// }

interface AccordionComponentParms {
    AccordionHeader:string;
    AccordionSubheader:string;
    AccordionPrice:string;
    AccordionWasPrice:string;
    ExpendedText1?:string;
    ExpendedText2?:string;
    ExpendedText3?:string;
    ExpendedText4?:string;
    ExpendedText5?:string;
    ExpendedText6?:string;

}

interface AccordionComponentProps {
    DataParams : AccordionComponentParms
}

//     const Accordion = ({ expanded, children, }: AccordionParms) => {
//     const height = useSharedValue(0);
//     const opacity = useSharedValue(0);

//     const animatedStyle = useAnimatedStyle(() => ({
//         height: height.value,
//         opacity: opacity.value,
//         overflow: 'hidden'
//     }));

//     useEffect(() => {
//         if (expanded) {
//             height.value = withTiming(180, { duration: 300, });
//             opacity.value = withTiming(1, { duration: 250, });
//         } else {
//             height.value = withTiming(0, { duration: 250 });
//             opacity.value = withTiming(0, { duration: 150, });
//         }
//     }, [expanded]);

//     return (
//         <Animated.View style={animatedStyle}>
//             {children}
//         </Animated.View>
//     );
// };


const AccordionComponent = ( {DataParams}:AccordionComponentProps ) => {
    const [selectedOption, setSelectedOption] = useState('one');
    const [selectedOptionExpanded, setSelectedOptionExpanded] = useState('one');



  return (
    <View>
                   <TouchableOpacity activeOpacity={0.9} style={[styles.paymentRadioButtonContainer, {
                            borderColor: selectedOption === 'one' ? '#fff' : '#474646', borderWidth: selectedOption === 'one' ? 2 : 1,
                        },]}
                            onPress={() => {
                                setSelectedOption('one');
                                setSelectedOptionExpanded('one');
                            }}
                        >
                            <View style={styles.fontContainer}>
                                {selectedOption === 'one' ? (
                                    <FontAwesome name="radio-button-on" size={20} color={color.primary} />
                                ) : (
                                    <FontAwesome name="radio-button-off" size={20} color={color.primary} />
                                )}
                            </View>

                            <View style={styles.paymentOptionTextContainer}>
                                <Text style={styles.paymentOptionText}>{DataParams.AccordionHeader}</Text>

                                <Text style={styles.paymentOptionDescriptonText}>{DataParams.AccordionHeader}</Text>

                                <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 10, alignItems: 'center', }} >
                                    <Text style={styles.paymentOptionInfo}>{DataParams.AccordionPrice}</Text>

                                    <Text style={[styles.paymentOptionInfo, { textDecorationLine: 'line-through', fontSize: 10, color: 'grey', },]}>{DataParams.AccordionWasPrice}</Text>
                                </View>

                                <Accordion expanded={selectedOptionExpanded === 'one'} heightParms={180}>
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={styles.paymentOptionText}>{DataParams.ExpendedText1}</Text>
                                        <Text style={styles.paymentOptionText}>{DataParams.ExpendedText2}</Text>
                                        <Text style={styles.paymentOptionText}>{DataParams.ExpendedText3}</Text>
                                        <Text style={styles.paymentOptionText}>{DataParams.ExpendedText4}</Text>
                                        <Text style={styles.paymentOptionText}>{DataParams.ExpendedText5}</Text>
                                        <Text style={styles.paymentOptionText}>{DataParams.ExpendedText6}</Text>
                                    </View>
                                </Accordion>
                            </View>

                            <TouchableOpacity onPress={() => selectedOptionExpanded === 'one' ? setSelectedOptionExpanded('none') : setSelectedOptionExpanded('one')}
                                style={{ marginTop: 10 }} >
                                <FontAwesome name={selectedOptionExpanded === 'one' ? 'chevron-up' : 'chevron-down'}
                                    size={16}
                                    color={color.primary} />
                            </TouchableOpacity>
                        </TouchableOpacity>
    </View>
  )
}

export default AccordionComponent;