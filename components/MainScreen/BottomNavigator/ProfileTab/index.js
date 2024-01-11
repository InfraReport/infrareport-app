import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const ProfileTab = ({setIsProfileModalOn}) => {
  return (
      <TouchableOpacity style={styles.touchable} onPress={()=>{setIsProfileModalOn(true)}}>
        <View style={styles.bottomTab}>
          <Ionicons name="person" size={20} color="gray" />
          <Text style={{color: "gray"}}>Perfil</Text>
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
