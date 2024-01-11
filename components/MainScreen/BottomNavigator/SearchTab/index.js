import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const SearchTab = ({isSearchModalOn, setIsSearchModalOn}) => {
  return (
      <TouchableOpacity style={styles.touchable} onPress={()=>{setIsSearchModalOn(true)}}>
        <View style={styles.bottomTab}>
          <Ionicons name="search" size={20} color={isSearchModalOn ? "#0096FF": "gray"} />
          <Text style={isSearchModalOn ? {color:"#0096FF"}: {color:"gray"}}>Pesquisar</Text>
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
export default SearchTab
