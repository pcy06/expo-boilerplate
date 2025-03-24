import { 
  DarkTheme as NativeDarkTheme,
  DefaultTheme as NativeDefaultTheme,
  ThemeProvider as NativeThemeProvider 
} from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '@/constants/theme';

import { useColorScheme } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const StyledTheme = colorScheme === 'dark' ? DarkTheme : LightTheme
  const NativeTheme = colorScheme === 'dark' ? NativeDarkTheme : NativeDefaultTheme

  const [loaded] = useFonts({
    'SUIT Variable': require('../assets/fonts/SUIT-Variable.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const isLoggedIn = false;

  return (
    <NativeThemeProvider value={NativeTheme}>
      <StyledThemeProvider theme={StyledTheme}>
        <Stack>
          {isLoggedIn ? (
            null
          ) : (
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          )}
        </Stack>
        <StatusBar style="auto" />
      </StyledThemeProvider>
    </NativeThemeProvider>
  );
}
