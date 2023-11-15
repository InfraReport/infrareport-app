import { View, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import {useState} from 'react'
import Dropdown from './Dropdown'
import DateTime from './DateTime'
import FooterButtons from './FooterButtons'
import Header from './Header'

const SearchModal = ({startDate, setStartDate, endDate, setEndDate, selectedOption, setSelectedOption, occurrenceList, isSearchModalOn, setIsSearchModalOn}) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false)
  const handleValueChange=(itemValue, itemIndex) =>{setSelectedOption(itemValue)}
  const handleDateEndConfirm = (date) => {
    setEndDate(date)
    setDatePickerVisible(false)
  }
  const handleDateStartConfirm = (date) => {
    setStartDate(date)
    setDatePickerVisible(false)
  }
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSearchModalOn}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsSearchModalOn(!isSearchModalOn);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Header setIsSearchModalOn={setIsSearchModalOn} />
            <View style={styles.modalContent}>
              <Dropdown selectedOption={selectedOption} handleValueChange={handleValueChange} occurrenceList={occurrenceList} />
              <DateTime datePickerVisible={datePickerVisible} setDatePickerVisible={setDatePickerVisible} startDate={startDate} endDate={endDate} handleDateEndConfirm={handleDateEndConfirm} handleDateStartConfirm={handleDateStartConfirm} />
              <FooterButtons setIsSearchModalOn={setIsSearchModalOn} isSearchModalOn={isSearchModalOn}/>
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
    height: "65%",
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

export default SearchModal