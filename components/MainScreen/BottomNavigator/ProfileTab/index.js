import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import GrayProfileIcon from "./../../../../assets/BottomBarIcons/GrayIcons/Profile.png"
import BlueProfileIcon from "./../../../../assets/BottomBarIcons/BlueIcons/Profile.png"
const ProfileTab = ({isProfileModalOn, setIsProfileModalOn}) => {
  return (
      <TouchableOpacity style={styles.touchable} onPress={()=>{setIsProfileModalOn(true)}}>
        <View style={styles.bottomTab}>
          {
            isProfileModalOn ?
            <Image source={BlueProfileIcon} style={{ width: 20, height: 20 }}  />
            :
            <Image source={GrayProfileIcon} style={{ width: 20, height: 20 }}  />
          }
          <Text style={isProfileModalOn ? {color:"#0096FF"} : {color:"gray"}}>Perfil</Text>
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
export default ProfileTab
