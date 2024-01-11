import {
  View,Text, StyleSheet, Pressable, TouchableOpacity
} from 'react-native'
const FooterButtons = ({postOccurrence, setIsPostOccurrenceModalOn, isPostOccurrenceModalOn}) => {
  return (
    <View style={[styles.contentDiv, styles.footerDiv]}>
      <Pressable
        style={[styles.buttonLittle, styles.buttonClose,{marginRight: 8}]}
        onPress={() => setIsPostOccurrenceModalOn(false)}>
        <Text style={{color: "gray"}}>Cancelar</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonLittle, styles.searchButton]}
        onPress={postOccurrence}>
        <Text style={{color: "white"}}>Publicar</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonLittle: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
  },
  searchButton:{
    backgroundColor: '#2196F3',
  },
  contentDiv:{
    width: "100%",
    marginBottom: 30,
  },
  footerDiv:{
    flexDirection: "row",
    justifyContent: "flex-end",
  }
})

export default FooterButtons