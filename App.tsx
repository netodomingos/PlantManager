import React from 'react';
import Wellcome from './src/Pages/Wellcome/Wellcome'
import Apploading  from 'expo-app-loading'
import { 
  useFonts, 
  Roboto_700Bold,
  Roboto_300Light
} from '@expo-google-fonts/roboto'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Bold': Roboto_700Bold,
    'Light': Roboto_300Light
  });
  if(!fontsLoaded){
    return <Apploading/>
  } else {
    return (
      <Wellcome/>
     );
  }
}

