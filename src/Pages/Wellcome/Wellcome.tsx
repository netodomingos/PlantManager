import React from 'react'
import { Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';

import wateringImg from '../../../assets/watering.png'
import colors from '../../styles/colors'

export default function Wellcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image 
        style={styles.image}
        source={wateringImg}
      />

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. {'\n'}
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
      >
        <SimpleLineIcons name="arrow-right" size={20} color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 38,
    textAlign: 'center',
    color: colors.heading,
    marginBottom: 38,
    fontFamily: 'Bold'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 17,
    marginVertical: 20,
    color: colors.heading,
    fontFamily: 'Light'
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  image: {
    width: 292,
    height: 284
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
    marginBottom: 3,
  }
})