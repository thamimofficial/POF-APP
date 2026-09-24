import color from '@/constants/color';
import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import FontAwesome from '@expo/vector-icons/Ionicons';


interface AgeSelectorProps {
    visible: boolean;
    onClose: () => void;
    onSelectAge: (age: number) => void;
}

const AgeSelector = ({ visible, onClose, onSelectAge }: AgeSelectorProps) => {
    const ages = Array.from({ length: 13 }, (_, i) => 18 + i);

    const [selectedAge, SetSelectedAge] = useState(18)

    return (
        <Modal
            visible={visible}
            animationType="none"
            transparent={true}
            onRequestClose={onClose}
        >

            <Pressable style={styles.backdrop} onPress={onClose}>

                <View style={styles.modalContainer}>
                    <View style={styles.header}>
                        <FontAwesome name="close" size={20} style={{flex:1}} color={color.white}/>
                        <Text style={styles.headerText}>Select Your Age</Text>
                    </View>

                    <FlatList
                        data={ages}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.ageItem}
                                onPress={() => {
                                    onSelectAge(item);
                                    SetSelectedAge(item);
                                    onClose();
                                }}
                            >
                                <View style={styles.ageTextContainer}>
                                    <Text style={styles.ageText}>{item}{item === 30 && "+ older"}</Text>
                                    {selectedAge === item &&
                                        <FontAwesome name="bookmark" size={15} color={color.white} />
                                    }
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>

            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: color.BgColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '100%',
        paddingBottom: 20,
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection:'row',
        alignItems:'center'
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'Inter-Bold',
        color: color.white,
        flex:4,
        alignItems:'center'
    },
    ageItem: {
        paddingVertical: 15,
    },
    ageTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    ageText: {
        fontSize: 16,
        color: '#f5efef',
        fontFamily: 'Inter-Bold',
    },
});

export default AgeSelector;
