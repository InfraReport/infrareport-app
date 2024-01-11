import { View, StyleSheet } from 'react-native'
import Map from './Map'
import SearchModal from './Modals/SearchModal'
import FilterModal from './Modals/FilterModal'
import AnalyseModal from './Modals/AnalyseModal'
import ProfileModal from './Modals/ProfileModal'
import ChangeNumberModal from './Modals/ChangeNumberModal'
import ChangePasswordModal from './Modals/ChangePasswordModal'
import PostOccurrenceModal from './Modals/PostOccurrenceModal'
import BottomNavigator from './BottomNavigator'

const MainScreen=({
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
    isFilterModalOn,
    setIsFilterModalOn,
    isAnalysisModalOn,
    setIsAnalysisModalOn,
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
  })=>{
    return (
        <View style={styles.container}>
            <Map markerPoints={markerPoints} setMarkerPoints={setMarkerPoints} handleMapClick={handleMapClick} currentPoint={currentPoint} setCurrentPoint={setCurrentPoint} setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn} setIsProfileModalOn={setIsProfileModalOn} AvatarIcon={AvatarIcon}/>
            <BottomNavigator isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn} isFilterModalOn={isFilterModalOn} setIsFilterModalOn={setIsFilterModalOn} isAnalysisModalOn={isAnalysisModalOn} setIsAnalysisModalOn={setIsAnalysisModalOn} />
            <SearchModal startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} selectedOption={selectedOption} setSelectedOption={setSelectedOption} occurrenceList={occurrenceList} isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn} />
            <FilterModal startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} selectedOption={selectedOption} setSelectedOption={setSelectedOption} occurrenceList={occurrenceList} isFilterModalOn={isFilterModalOn} setIsFilterModalOn={setIsFilterModalOn}/>
            <AnalyseModal isAnalysisModalOn={isAnalysisModalOn} setIsAnalysisModalOn={setIsAnalysisModalOn} reportsLabels={reportsLabels} reportsCount={reportsCount} typeLabels={typeLabels} typeCount={typeCount} />
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