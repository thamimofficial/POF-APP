import Accordion from '@/components/Utility/Accordion/Accordion';
import PriceButton from '@/components/Utility/PriceButton/PriceButton';
import color from '@/constants/color';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.styles';

interface switchCardData {
  dataId: number;
  header: string;
  price: number;
  description: string;
  isCustomizable?: boolean;
}

interface switchCardParms {
  isEnabled: boolean;
  toggleSwitch: () => void;
  CardData: switchCardData;
  quantity: number;
  setQuantity: (num: number) => void;
}

const SwitchCard = ({ isEnabled, toggleSwitch, CardData, quantity, setQuantity }: switchCardParms) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(prev => !prev);

  const increaseCount = () => {
    setQuantity(quantity + 1);
  };

  const decreaseCount = () => {
    if (quantity - 1 === 0) {
      toggleSwitch(); 
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <TouchableOpacity style={styles.switchCardContainer} activeOpacity={0.9} onPress={toggleSwitch}>
      <View style={styles.switchBoxIcon}>
        <FontAwesome name="accessibility-outline" size={20} color={color.white} />
      </View>

      <View style={styles.switchCardLablelContainer}>
        <Text style={styles.switchCardHeaderText}>{CardData.header}</Text>
        <Text style={styles.switchCardPriceText}>{CardData.price}</Text>
        
        <Accordion expanded={isExpanded} heightParms={70}>
          <Text style={styles.switchDescriptionText}>{CardData.description}</Text>
        </Accordion>
        
        <TouchableOpacity style={styles.switchCardDetailButton} onPress={toggleExpand}>
          <Text style={{ textDecorationLine: 'underline', color: '#fff' }}>
            {isExpanded ? 'Close Details' : 'Details'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {isEnabled && CardData.isCustomizable ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity onPress={decreaseCount}>
              <FontAwesome name="remove-circle-outline" size={24} color={color.white} />
            </TouchableOpacity>
            <Text style={{ color: color.white }}>{quantity}</Text>
            <TouchableOpacity onPress={increaseCount}>
              <FontAwesome name="add-circle-outline" size={24} color={color.white} />
            </TouchableOpacity>
          </View>
        ) : (
          <Switch
            trackColor={{ false: '#767577', true: '#908484' }}
            thumbColor={isEnabled ? '#000000' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const index = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const swithDataObj = [
  {
    dataId: 1,
    header: 'Additional driver',
    price: 10.88,
    description: 'Enjoy a more comfortable and flexible journey.',
    isCustomizable: true,
  },
  {
    dataId: 2,
    header: 'Refuelling/recharging service',
    price: 7.77,
    description: 'Enjoy a more comfortable and flexible journey.',
  },
  {
    dataId: 3,
    header: 'GPS Navigation System',
    price: 15.50,
    description: 'Never lose your way with up-to-date offline maps.',
  },
  {
    dataId: 4,
    header: 'Child Safety Seat',
    price: 12.00,
    description: 'Keep your little ones safe and secure throughout the drive.',
    isCustomizable: true,
  },
  {
    dataId: 5,
    header: 'Full Cover Insurance',
    price: 25.99,
    description: 'Drive with total peace of mind against damages and theft.',
  },
  {
    dataId: 6,
    header: 'Roadside Assistance Plus',
    price: 5.49,
    description: 'Instant help for flat tires, lost keys, or towing needs.',
  },
  {
    dataId: 7,
    header: 'Roof Rack',
    price: 18.25,
    description: 'Extra space for your surfboards, skis, or bulky luggage.',
  },

];


  const handleToggle = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(cardId => cardId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
      updateQuantity(id, 1);
    }
  };

  const updateQuantity = (id: number, newCount: number) => {
    setQuantities({ ...quantities, [id]: newCount });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainHeader}>Which add-ons do you need?</Text>
      
      <View style={styles.alertContainer}>
        <FontAwesome name="alert-circle" size={20} color={'#fff'} />
        <Text style={styles.alertText}>For this vehicle you must have had a driving license for at least 1 year</Text>
      </View>
      
      <View style={{flex: 1}}>
        <FlatList
          data={swithDataObj}
          keyExtractor={item => item.dataId.toString()}
          renderItem={({ item }) => (
            <SwitchCard
              isEnabled={selectedIds.includes(item.dataId)}
              toggleSwitch={() => handleToggle(item.dataId)}
              CardData={item}
              quantity={quantities[item.dataId] || 0}
              setQuantity={(num) => updateQuantity(item.dataId, num)}
            />
          )}
        />
      </View>
      
      {/* <View style={styles.bottomButtonMainContainer}>
        <View style={styles.bottomButtonPriceTextContainer}>
            <Text style={styles.bottomButtonPriceText}>$5656</Text>
        </View>
        <TouchableOpacity style={styles.bottomButtonContainer}>
          <Text style={styles.bottomButtonText}> Continue </Text>
        </TouchableOpacity>
    </View> */}

        <PriceButton onPress={()=>router.push('/booking/bookingFrom')}/>
    </SafeAreaView>
  );
};

export default index;
