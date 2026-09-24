import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, error] = useFonts({
    'Inter-Thin': require('@/assets/fonts/Inter_18pt-Thin.ttf'),             // 100
    'Inter-ExtraLight': require('@/assets/fonts/Inter_18pt-ExtraLight.ttf'), // 200
    'Inter-Light': require('@/assets/fonts/Inter_18pt-Light.ttf'),           // 300
    'Inter-Regular': require('@/assets/fonts/Inter_18pt-Regular.ttf'),       // 400
    'Inter-Medium': require('@/assets/fonts/Inter_18pt-Medium.ttf'),         // 500
    'Inter-SemiBold': require('@/assets/fonts/Inter_18pt-SemiBold.ttf'),     // 600
    'Inter-Bold': require('@/assets/fonts/Inter_18pt-Bold.ttf'),             // 700
    'Inter-ExtraBold': require('@/assets/fonts/Inter_18pt-ExtraBold.ttf'),   // 800
    'Inter-Black': require('@/assets/fonts/Inter_18pt-Black.ttf'),           // 900

  });

  useEffect(() => {

    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }


  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
