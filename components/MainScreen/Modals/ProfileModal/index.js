import { View, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import FooterButtons from './FooterButtons'
import Header from './Header'
import UserInfo from './UserInfo'
import UserPicture from './UserPicture'

const ProfileModal = ({isChangePasswordModalOn, setIsChangePasswordModalOn, isChangeNumberModalOn, setIsChangeNumberModalOn, ProfileMedal, profileCategory, points, celphone, email, password, CelphoneIcon, EmailIcon, PasswordIcon, userName, AvatarIcon, isProfileModalOn, setIsProfileModalOn}) => {
  const showChangeNumberModal=()=>{
    setIsProfileModalOn(false)
    setIsChangeNumberModalOn(true)
  }
  const showChangePasswordModal=()=>{
    setIsProfileModalOn(false)
    setIsChangePasswordModalOn(true)
  }
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isProfileModalOn}
        onRequestClose={() => {
          setIsProfileModalOn(!isProfileModalOn)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Header setIsProfileModalOn={setIsProfileModalOn} />
            <View style={styles.modalContent}>
              <UserPicture ProfileMedal={ProfileMedal} profileCategory={profileCategory} points={points} userName={userName} AvatarIcon={AvatarIcon} />
              <UserInfo celphone={celphone} email={email} password={password} CelphoneIcon={CelphoneIcon} EmailIcon={EmailIcon} PasswordIcon={PasswordIcon}/>
              <FooterButtons showChangePasswordModal={showChangePasswordModal} showChangeNumberModal={showChangeNumberModal} setIsProfileModalOn={setIsProfileModalOn} />
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: "100%",
    height: 550,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'center',
    shadowColor: '#000',//IOS Shadow color command
    shadowOffset: {width: 0,height: 2,},//IOS shadow offset command
    shadowOpacity: 0.25,//IOS shadow opacity color
    shadowRadius: 4,//IOS shadow radius
    elevation: 5,//Android shadow
  },
  modalContent:{
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  }
})

export default ProfileModal