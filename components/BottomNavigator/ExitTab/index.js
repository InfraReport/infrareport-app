import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const ExitTab = () => {
  return (
      <TouchableWithoutFeedback>
        <View style={styles.bottomTab}>
          <Ionicons style={styles.bottomIcon} name="exit" size={20} color="gray" />
          <Text style={{color: "gray"}}>Sair</Text>
        </View>
       </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  bottomTab:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomIcon:{
    marginRight: 5,
  }
})
export default ExitTab
