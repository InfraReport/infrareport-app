import { View, StyleSheet, Image, TextInput } from 'react-native'

const UserInfo = ({celphone, email, password, CelphoneIcon, EmailIcon, PasswordIcon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Image source={EmailIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          editable={false}
          placeholder="Email"
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <Image source={PasswordIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          secureTextEntry
        />
      </View>
      <View style={styles.inputView}>
        <Image source={CelphoneIcon} style={{ width: 20, height: 20 }} />
        <TextInput
          style={styles.input}
          editable={false}
          placeholder="Celphone"
          value={celphone}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
  },
  input: {
    height: 40,
    width: '100%',
    padding: 5,
  },
  inputView: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  }
})

export default UserInfo