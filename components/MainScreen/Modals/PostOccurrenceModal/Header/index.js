import {
  View,Text, StyleSheet, Pressable
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
const Header = ({setIsPostOccurrenceModalOn}) => {
  return (
    <View style={styles.modalTop}>
      <View>
        <Text style={styles.modalTopText}>Filtre as ocorrências</Text>
      </View>
      <Pressable onPress={()=>{setIsPostOccurrenceModalOn(false)}}>
        <AntDesign name="close" size={24} color="#115" />
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  modalTopText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalTop:{
    backgroundColor: "#007bff",
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  }
})

export default Header
