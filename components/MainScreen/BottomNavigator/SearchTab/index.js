import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import GraySearchIcon from "./../../../../assets/BottomBarIcons/GrayIcons/Search.png"
import BlueSearchIcon from "./../../../../assets/BottomBarIcons/BlueIcons/Search.png"

const SearchTab = ({isSearchModalOn, setIsSearchModalOn}) => {
  return (
      <TouchableOpacity style={styles.touchable} onPress={()=>{setIsSearchModalOn(true)}}>
        <View style={styles.bottomTab}>
          {
            isSearchModalOn ?
            <Image source={BlueSearchIcon} style={{ width: 20, height: 20 }}  />
            :
            <Image source={GraySearchIcon} style={{ width: 20, height: 20 }}  />
          }
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
