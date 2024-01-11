import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const SearchTab = ({isSearchModalOn, setIsSearchModalOn}) => {
  return (
      <TouchableOpacity onPress={()=>{setIsSearchModalOn(true)}}>
        <View style={styles.bottomTab}>
          <Ionicons style={styles.bottomIcon} name="search" size={20} color={isSearchModalOn ? "#0096FF": "gray"} />
          <Text style={isSearchModalOn ? {color:"#0096FF"}: {color:"gray"}}>Pesquisar</Text>
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
export default SearchTab
