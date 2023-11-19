import React, { useState } from 'react'
import { View, Text, TextInput, Button, Image , StyleSheet } from 'react-native'
import logoImage from './../../assets/logo.jpeg'
import EmailIcon from "./../../assets/Register_Login_Icons/EmailIcon.png"
import PasswordIcon from "./../../assets/Register_Login_Icons/PasswordIcon.png"

const LoginScreen = ({setEmail, email, password, setPassword}) => {
  const handleLogin = () => {
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={{ width: 160, height: 160 }} />
      <Text style={styles.heading}>Infrareport</Text>
      <Text style={styles.subHeading}>Bem vindo! Conecte-se para iniciar!</Text>
      <View style={styles.inputView}>
        <Image source={EmailIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Image source={PasswordIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
      </View>

      <Button title="Sign in" onPress={handleLogin} />

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem conta? </Text>
        <Text style={styles.signupLink}>Cadastre-se!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 5,
  },
  inputView: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
    color: 'gray',
  },
  signupLink: {
    fontSize: 14,
    color: 'blue',
    marginLeft: 5,
    fontWeight: "600",
  },
})

export default LoginScreen
