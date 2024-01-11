import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const FilterTab = ({isFilterModalOn, setIsFilterModalOn }) => {
  return (
      <TouchableOpacity onPress={()=>{setIsFilterModalOn(true)}}>
        <View style={styles.bottomTab}>
          <Ionicons style={styles.bottomIcon} name="filter" size={20} color={isFilterModalOn ? "#0096FF": "gray"} />
          <Text style={isFilterModalOn ? {color:"#0096FF"} : {color:"gray"}}>Filtrar</Text>
        </View>
       </TouchableOpacity>
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
export default FilterTab
