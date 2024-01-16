import { View, Text, TextInput, Button, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const RegisterScreen = ({route, navigation}) => {
  const {
    EmailIcon,
    PersonIcon,
    CelphoneIcon,
    CepIcon,
    CityIcon,
    PasswordIcon
  }=route.params
  const handleRegister = () => {
    // console.log('Email:', email)
    // console.log('Password:', password)
    // console.log('Celphone:', celphone)
    // console.log('cityName:', cityName)
    // console.log('userName:', userName)
    // console.log('cep:', cep)
    navigation.navigate("Main")
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Infrareport</Text>
      <Text style={styles.subHeading}>Bem vindo! Registre-se para iniciar!</Text>
      <View style={styles.inputView}>
        <Image source={PersonIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          //onChangeText={text => setUserName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Image source={EmailIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          //onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.CepAndCelphoneView}>
        <View style={styles.littleInputView}>
          <Image source={CepIcon} style={{ width: 20, height: 20 }} />
          <TextInput
            style={styles.littleInput}
            placeholder="CEP"
            //onChangeText={text => setCep(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.littleInputView}>
          <Image source={CelphoneIcon} style={{ width: 20, height: 20 }} />
          <TextInput
            style={styles.littleInput}
            placeholder="Celular"
            //onChangeText={text => setCelphone(text)}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.inputView}>
        <Image source={CityIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          placeholder="Nome da cidade"
          //onChangeText={text => setCityName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Image source={PasswordIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          //onChangeText={text => setPassword(text)}
        />
      </View>

      <Button title="Sign in" onPress={handleRegister} />

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Já tem conta? </Text>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Login")}}><Text style={styles.signupLink}>Conecte-se!</Text></TouchableWithoutFeedback>
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
  littleInput: {
    height: 40,
    width: '100%',
    padding: 10,
  },
  littleInputView: {
    height: 40,
    width: '45%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
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
  CepAndCelphoneView:{
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  }
})

export default RegisterScreen
