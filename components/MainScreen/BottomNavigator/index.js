import { View, StyleSheet, Text, TouchableWithoutFeedback, Image } from 'react-native'

import AnalyzeTab from './AnalyzeTab'
import FilterTab from './FilterTab'
import SearchTab from './SearchTab'
import ExitTab from './ExitTab'

const BottomNavigator = ({isSearchModalOn, setIsSearchModalOn, isFilterModalOn, setIsFilterModalOn, isAnalysisModalOn, setIsAnalysisModalOn}) => {
  return (
    <View style={styles.bottomNavigator}>
      <SearchTab styles={styles} isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn}/>
      <FilterTab styles={styles} isFilterModalOn={isFilterModalOn} setIsFilterModalOn={setIsFilterModalOn}/>
      <AnalyzeTab styles={styles} isAnalysisModalOn={isAnalysisModalOn} setIsAnalysisModalOn={setIsAnalysisModalOn}/>
      <ExitTab styles={styles}/>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomNavigator:{
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: 'white',
    borderTopColor: "gray",
    borderTopWidth: 0.5,
  }
})

export default BottomNavigator
