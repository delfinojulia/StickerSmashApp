import { Pressable, View, Text } from 'react-native'
import React from 'react'

export default function Button({ label }) {
  return (
    <View style={StyleSheet.buttonContainer}>
        <Pressable
         style={style.button}
         onPress= {() =>alert ("Você pressionou um botão")}
         >
      <Text style= {styles.buttonLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})