import { View, Text, TextInput, Button, Image , StyleSheet, TouchableWithoutFeedback } from 'react-native'

const LoginScreen = ({ route, navigation }) => {
  const { logoImage, PasswordIcon, EmailIcon } = route.params
  const handleLogin = () => {
    // console.log('Email:', email)
    // console.log('Password:', password)
    navigation.navigate('Main')
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
          //value={email}
          //onChangeText={text => setEmailCallBack(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Image source={PasswordIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          //value={password}
          secureTextEntry
          //onChangeText={text => setPasswordCallBack(text)}
        />
      </View>

      <Button title="Sign in" onPress={handleLogin} />

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem conta? </Text>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Register")}}><Text style={styles.signupLink}>Cadastre-se!</Text></TouchableWithoutFeedback>
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
