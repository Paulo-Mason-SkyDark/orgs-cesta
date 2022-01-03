import React from 'react';
import {StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/pages/Cestas';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mocks from './src/mocks/cesta';
import Apploadings from 'expo-app-loading';


export default function App() {
  const [fonteCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  });

  if(!fonteCarregada) return <Apploadings/>

  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta {...mocks}/>
    </SafeAreaView>
  );
}