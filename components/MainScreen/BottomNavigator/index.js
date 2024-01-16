import { View, StyleSheet } from 'react-native'

import CreateTab from './CreateTab'
import SearchTab from './SearchTab'
import ProfileTab from './ProfileTab'

const BottomNavigator = ({handleCreateTabClick, isProfileModalOn, setIsProfileModalOn, isSearchModalOn, setIsSearchModalOn, isPostOccurrenceModalOn, setIsPostOccurrenceModalOn}) => {
  return (
    <View style={styles.bottomNavigator}>
      <SearchTab styles={styles} isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn}/>
      <CreateTab styles={styles} handleCreateTabClick={handleCreateTabClick} isPostOccurrenceModalOn={isPostOccurrenceModalOn} setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn}/>
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
