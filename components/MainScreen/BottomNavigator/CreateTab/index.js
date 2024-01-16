import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const AddTab = ({handleCreateTabClick, isPostOccurrenceModalOn, setIsPostOccurrenceModalOn }) => {
  return (
      <TouchableOpacity style={styles.touchable} onPress={handleCreateTabClick}>
        <View style={styles.bottomTab}>
          <Ionicons name="add-circle" size={20} color={isPostOccurrenceModalOn ? "#0096FF": "gray"} />
          <Text style={isPostOccurrenceModalOn ? {color:"#0096FF"} : {color:"gray"}}>Criar</Text>
        </View>
       </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  bottomTab:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  touchable:{
    width: "30%"
  }
})
export default AddTab
