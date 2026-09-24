import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

interface CarsData {
  id: number;
  brand: string;
  model: string;
  image: any;
  price: number;
  engine: string;
  engineSize: string;
}

interface CarCardProps {
  cars: CarsData;
   onPress: () => void; 
}

const CarCard = ({ cars, onPress }: CarCardProps) => {
  return (
    <TouchableOpacity style={styles.cardContainer} activeOpacity={0.95} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={cars.image} style={styles.carImage} resizeMode="cover" />
      </View>

      <View style={styles.topInfoContainer}>
        <Text style={styles.titleText} numberOfLines={1}>
          {cars?.brand} <Text style={styles.modelText}>{cars?.model}</Text>
        </Text>
      </View>

      <View style={styles.bottomInfoContainer}>
        {/* <Text style={styles.specsText}>
          {cars.engine} • {cars.engineSize}
        </Text> */}
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>
            AED {cars.price.toLocaleString()}
            <Text style={styles.perDayText}> / Day</Text>
          </Text>
        </View>

        
      </View>
    </TouchableOpacity>
  );
};

export default CarCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 10,
    height: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
    width: width - 20,
    overflow: 'hidden',
  },
  imageContainer: {
  },
  carImage: {
    width: '100%',
    height: '100%',
  },
  topInfoContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
  },
  bottomInfoContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    gap: 4,
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#ffffff', 
    backgroundColor:'rgba(0 ,0 ,0 ,0.4)',
    width:'auto',
    padding:10, 
    borderRadius:10
  },
  modelText: {
    fontFamily: 'Inter-Regular',
    color: '#e0e0e0',
  },
  specsText: {
    fontSize: 13,
    color: '#dfdfdf',
    fontWeight: '500',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceText: {
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold',
    color:'#fff588',
    backgroundColor:'rgba(0, 0, 0, 0.2)',
    borderRadius:10,
    padding:10
  },
  perDayText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#dfdfdf',
  },
});
