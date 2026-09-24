import color from '@/constants/color'
import cars from '@/data/cars'
import FontAwesome from '@expo/vector-icons/Ionicons'
import { useState } from 'react'
import { FlatList, Image, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './ride.styles'

interface Cars {
    id:number;
    brand:string,
    model:string,
    price: number,
    year: number,
    engine: string,
    engineSize:string
    engineType: string
    acceleration: string
    seats: number,
    color:string,
    image: string,
}


const ride = () => {
    const [search, setSearch] = useState("")

const renderItem = ({ item }: { item: Cars }) => {
    return <Text>{item.brand}</Text>;
};


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('@/assets/images/pofrentalhomeimage.webp')}
                        style={styles.backgrounImage}
                        alt='POF Rental'
                    />
                    <Text style={styles.HeaderText}>EXCEPTIONAL CHAUFFER RIDES AT AFFORDABLE RATES</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={'black'}
                        value={search}
                        style={styles.searchInput}
                        onChangeText={(text) => setSearch(text)}
                    />
                </View>


                <View style={styles.exploreCardContainer}>
                    <Text style={styles.exploreCardHeader}>Explore our service</Text>

                    <View style={styles.exploreCard}>
                        <View style={styles.exploreCardBox}>
                            <FontAwesome style={styles.exploreCardIcon} name="airplane-sharp" size={20} color={color.primary} />
                            <Text style={styles.exploreCardText}>Airport Transfers</Text>
                        </View>
                        <View style={styles.exploreCardBox}>
                            <FontAwesome style={styles.exploreCardIcon} name="diamond" size={20} color={color.primary} />
                            <Text style={styles.exploreCardText}>Limousin Services</Text>
                        </View>
                        <View style={styles.exploreCardBox}>
                            <FontAwesome style={styles.exploreCardIcon} name="time" size={20} color={color.primary} />
                            <Text style={styles.exploreCardText}>Hourly Rides</Text>
                        </View>
                    </View>
                </View>

                <TouchableHighlight style={styles.rideNowContainer}>
                    <View style={styles.rideNowBox}>
                        <Text style={styles.riderNowBoxText}>Ride Now</Text>
                        <Text style={styles.riderNowBoxText}>Trun on location services for pickup</Text>
                    </View>
                </TouchableHighlight>

                <View style={styles.carCardContainer}>
                    <FlatList
                        horizontal={true}
                        data={cars}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ride