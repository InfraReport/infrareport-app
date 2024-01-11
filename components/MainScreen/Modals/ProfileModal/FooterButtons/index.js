import {
  View,Text, StyleSheet, Pressable
} from 'react-native'
const FooterButtons = ({showChangePasswordModal, showChangeNumberModal, setIsProfileModalOn}) => {
  return (
    <View style={[styles.contentDiv, styles.footerDiv]}>
      <Pressable
        style={[styles.buttonLittle, styles.buttonClose]}
        onPress={() => setIsProfileModalOn(false)}>
        <Text style={{color: "gray"}}>Voltar</Text>
      </Pressable>
      <View style={styles.blueButtonsView}>
        <Pressable
          style={[styles.buttonLittle, styles.searchButton]}
          onPress={showChangeNumberModal}>
          <Text style={{color: "white"}}>Redefinir número</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonLittle, styles.searchButton]}
          onPress={showChangePasswordModal}>
          <Text style={{color: "white"}}>Redefinir senha</Text>
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonLittle: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginRight: 8,
    justifyContent: "center",
  },
  buttonClose: {
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
  },
  searchButton:{
    backgroundColor: '#2196F3'
  },
  contentDiv:{
    width: "100%",
    height: 100,
    marginBottom: 30,
  },
  footerDiv:{
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  blueButtonsView:{
    flexDirection: "column",
    justifyContent: "space-between",
  }
})

export default FooterButtons
