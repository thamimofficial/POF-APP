import FontAwesome from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import color from '../../constants/color';
import styles from './index.styles';

const index = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.closeIcon} onPress={() => router.back()}>
        <FontAwesome name="close" size={30} color={color.primary} />
      </TouchableOpacity>

      <View>
        <Text style={styles.loginText}>
          Welcome Back
        </Text>
        <Text style={styles.subText}>Enter your email to enjoy the best experiecne</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHeader}>Your email address</Text>
          <TextInput
            placeholder='Username'
            style={styles.inputField}
            placeholderTextColor={'white'}
          />

        <TextInput
            placeholder='Password'
            style={styles.inputField}
            placeholderTextColor={'white'}
          />
        </View>
      </View>

      <View style={styles.continueButtonContainer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: 'center' }}>
        <View style={{ borderBlockColor: '#4b4b4b', borderTopWidth: 1, width: '100%', position: 'absolute' }}></View>
        <Text style={styles.loginWithText}>Or Login with</Text>
      </View>

      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>G</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.appleButton}>
          <Text style={styles.appleButtonText}>G</Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: 'center' }}>
        <View style={{ borderBlockColor: '#4b4b4b', borderTopWidth: 1, width: '100%', position: 'absolute' }}></View>
        <Text style={styles.loginWithText}>Don't have an account?</Text>
      </View>

    </View>
  )
}

export default index

