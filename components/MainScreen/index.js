import { View, StyleSheet, Text } from 'react-native'
import Map from './Map'
import SearchModal from './Modals/SearchModal'
import ProfileModal from './Modals/ProfileModal'
import ChangeNumberModal from './Modals/ChangeNumberModal'
import ChangePasswordModal from './Modals/ChangePasswordModal'
import PostOccurrenceModal from './Modals/PostOccurrenceModal'
import BottomNavigator from './BottomNavigator'

const MainScreen=({
    loadingMap,
    setLoadingMap,
    userPosition,
    setUserPosition,
    handleMapClick,
    occurrenceList,
    profileMedal,
    postOccurrence,
    cep,
    setCep,
    cityName,
    setCityName,
    email,
    setEmail,
    password,
    setPassword,
    celphone,
    setCelphone,
    currentPoint,
    setCurrentPoint,
    endDate,
    setEndDate,
    reportsCount,
    setReportsCount,
    reportsLabels,
    setReportsLabels,
    typeCount,
    setTypeCount,
    points,
    setPoints,
    userName,
    setUserName,
    userComment,
    setUserComment,
    selectedOption,
    setSelectedOption,
    typeLabels,
    setTypeLabels,
    markerPoints,
    setMarkerPoints,
    profileCategory,
    setProfileCategory,
    isSearchModalOn,
    setIsSearchModalOn,
    isPostOccurrenceModalOn,
    setIsPostOccurrenceModalOn,
    startDate,
    setStartDate,
    isChangePasswordModalOn,
    setIsChangePasswordModalOn,
    isChangeNumberModalOn,
    setIsChangeNumberModalOn,
    ProfileMedal,
    PasswordIcon,
    EmailIcon,
    CelphoneIcon,
    AvatarIcon,
    isProfileModalOn,
    setIsProfileModalOn,
    handleCreateTabClick,
  })=>{
    return (
        <View style={styles.container}>
            <Map loadingMap={loadingMap} setLoadingMap={setLoadingMap} userPosition={userPosition} setUserPosition={setUserPosition} markerPoints={markerPoints} setMarkerPoints={setMarkerPoints} handleMapClick={handleMapClick} currentPoint={currentPoint} setCurrentPoint={setCurrentPoint} setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn} setIsProfileModalOn={setIsProfileModalOn} AvatarIcon={AvatarIcon}/>
            <BottomNavigator handleCreateTabClick={handleCreateTabClick} isProfileModalOn={isProfileModalOn} setIsProfileModalOn={setIsProfileModalOn} isPostOccurrenceModalOn={isPostOccurrenceModalOn} setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn} isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn} />
            <SearchModal startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} selectedOption={selectedOption} setSelectedOption={setSelectedOption} occurrenceList={occurrenceList} isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn} />
            <ProfileModal isChangePasswordModalOn={isChangePasswordModalOn} setIsChangePasswordModalOn={setIsChangePasswordModalOn} isChangeNumberModalOn={isChangeNumberModalOn} setIsChangeNumberModalOn={setIsChangeNumberModalOn} ProfileMedal={profileMedal} profileCategory={profileCategory} points={points} celphone={celphone} email={email} password={password} PasswordIcon={PasswordIcon} EmailIcon={EmailIcon} CelphoneIcon={CelphoneIcon} userName={userName} AvatarIcon={AvatarIcon} isProfileModalOn={isProfileModalOn} setIsProfileModalOn={setIsProfileModalOn} />
            <ChangeNumberModal isChangeNumberModalOn={isChangeNumberModalOn} setIsChangeNumberModalOn={setIsChangeNumberModalOn} CelphoneIcon={CelphoneIcon} PasswordIcon={PasswordIcon} setCelphone={setCelphone} setPassword={setPassword} celphone={celphone} setIsProfileModalOn={setIsProfileModalOn}/>
            <ChangePasswordModal isChangePasswordModalOn={isChangePasswordModalOn} setIsChangePasswordModalOn={setIsChangePasswordModalOn} PasswordIcon={PasswordIcon} setPassword={setPassword} celphone={celphone} setIsProfileModalOn={setIsProfileModalOn} />
            <PostOccurrenceModal postOccurrence={postOccurrence} userComment={userComment} setUserComment={setUserComment} selectedOption={selectedOption} setSelectedOption={setSelectedOption} occurrenceList={occurrenceList} isPostOccurrenceModalOn={isPostOccurrenceModalOn} setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn}/>
        </View>
      )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default MainScreen