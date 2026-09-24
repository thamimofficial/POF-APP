import color from '@/constants/color';
import { useModalStore } from '@/store/ModalState';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import styles from './CarListModal.styles';


const CarListModal = ({ visible, onClose, onSelectCar, carsData, locationDetails }) => {
  

  //zustand store 
    const isVisible = useModalStore((state) => state.isCarModalOpen);
  const closeModal = useModalStore((state) => state.closeCarModal);
  const openModal = useModalStore((state) => state.openCarModal);

console.log("Modal", isVisible, closeModal)

  const renderCarCard = ({ item }) => (
    <TouchableOpacity style={styles.card}  activeOpacity={0.9}  onPress={() => {
        if (onSelectCar){
            onSelectCar(item);
        } 
        // onClose();
      }}
    >
      <Image source={item.image} style={styles.carImage} resizeMode="cover" />
      
      <View style={styles.cardContent}>
        <View style={styles.titleRow}>
          <Text style={styles.brandText}>{item.brand} <Text style={styles.modelText}>{item.model}</Text></Text>
        </View>

        <Text style={styles.descriptionText} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.horsepower}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.engineSize}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}> {item.acceleration}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.priceRow}>
          <Text style={styles.priceValue}>AED {item.price.toLocaleString()}<Text style={styles.perDay}>/day</Text></Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
           <FontAwesome style={styles.closeButtonText} name="close" size={30} color={color.BgColor} />
            {/* <Text style={styles.closeButtonText}>✕</Text> */}
          </TouchableOpacity>
        </View>

<TouchableOpacity style={styles.filterContainer} activeOpacity={0.9}  onPress={openModal}>
          
          <View >
          <Text style={styles.headerTitle}>{locationDetails?.location}</Text>
           <Text style={styles.headerSubtitle}>{locationDetails?.date}</Text>
        </View>
        <View style={{justifyContent:'flex-end'}}>
                   <FontAwesome name="filter-outline" size={20} color={{color:'#ccff00'}} />

        </View>

</TouchableOpacity>


        <FlatList
          data={carsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCarCard}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>

    </View>
  );
};



export default CarListModal;
