import { View, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import Dropdown from './Dropdown'
import FooterButtons from './FooterButtons'
import Header from './Header'
import Commentary from './Commentary'
import FileInput from './FileInput'

const PostOccurrenceModal = ({postOccurrence, userComment, setUserComment, selectedOption, setSelectedOption, occurrenceList, isPostOccurrenceModalOn, setIsPostOccurrenceModalOn}) => {
  const handleValueChange=(itemValue, itemIndex) =>{setSelectedOption(itemValue)}
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPostOccurrenceModalOn}
        onRequestClose={() => {
          setIsPostOccurrenceModalOn(false)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Header setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn}/>
            <View style={styles.modalContent}>
              <Dropdown selectedOption={selectedOption} handleValueChange={handleValueChange} occurrenceList={occurrenceList}/>
              <Commentary userComment={userComment} setUserComment={setUserComment} />
              <FileInput />
              <FooterButtons postOccurrence={postOccurrence} setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn} isPostOccurrenceModalOn={isPostOccurrenceModalOn}/>
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
    height: 480,
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
  },
})

export default PostOccurrenceModal