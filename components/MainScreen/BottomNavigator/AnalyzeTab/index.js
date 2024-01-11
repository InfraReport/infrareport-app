import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const AnalyzeTab = ({isAnalysisModalOn, setIsAnalysisModalOn}) => {
  return (
      <TouchableOpacity onPress={()=>setIsAnalysisModalOn(true)}>
        <View style={styles.bottomTab}>
          <Ionicons style={styles.bottomIcon} name="analytics" size={20} color={isAnalysisModalOn ? "#0096FF": "gray"} />
          <Text style={isAnalysisModalOn ? {color:"#0096FF"}: {color:"gray"}}>Análise</Text>
        </View>
       </TouchableOpacity>
  );
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
export default AnalyzeTab