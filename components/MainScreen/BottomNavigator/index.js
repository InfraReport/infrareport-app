import { View, StyleSheet } from 'react-native'

import AddTab from './AddTab'
import SearchTab from './SearchTab'
import ProfileTab from './ProfileTab'

const BottomNavigator = ({isProfileModalOn, setIsProfileModalOn, isSearchModalOn, setIsSearchModalOn, isPostOccurrenceModalOn, setIsPostOccurrenceModalOn}) => {
  return (
    <View style={styles.bottomNavigator}>
      <SearchTab styles={styles} isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn}/>
      <AddTab styles={styles} isPostOccurrenceModalOn={isPostOccurrenceModalOn} setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn}/>
      <ProfileTab styles={styles} isProfileModalOn={isProfileModalOn} setIsProfileModalOn={setIsProfileModalOn}/>
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
