import {
  View,Text, StyleSheet, Pressable
} from 'react-native'
import { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const DateTimeDiv = ({setDatePickerVisible, datePickerVisible, startDate, endDate, handleDateEndConfirm, handleDateStartConfirm}) => {
  const [pressedStartDate,setPressedStartDate]=useState(null)
  const showStartDateModal=()=>{
    setPressedStartDate(true)
    setDatePickerVisible(true)
  }
  const showEndDateModal=()=>{
    setPressedStartDate(false)
    setDatePickerVisible(true)
  }
  const confirmDateChange=(date)=>{
    if(pressedStartDate){//Verify if the StartDateTime pressable was the one who was clicked
      handleDateStartConfirm(date)
    }else{//If it wasnt...
      handleDateEndConfirm(date) 
    }
    setPressedStartDate(null)
  }
  return (
    <View style={styles.dataAndTimeDiv}>
      <DateTimePickerModal
          date={startDate}
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={confirmDateChange}
          onCancel={()=>{setDatePickerVisible(false)}}
      />
      <Text style={{ fontSize: 24}}>Intervalo de datas: </Text>
      <View  style={styles.dataAndTimePicker}>
        <Pressable style={styles.btnStyle} onPress={showStartDateModal}><Text style={styles.dataTextFormat}>{startDate ? startDate.toLocaleDateString() : 'No date selected'}</Text></Pressable>
        <Text style={styles.smallText}>Data inicial</Text>
        </View>
      <View  style={styles.dataAndTimePicker}>
        <Pressable style={styles.btnStyle} onPress={showEndDateModal}><Text style={styles.dataTextFormat}>{endDate ? endDate.toLocaleDateString() : 'No date selected'}</Text></Pressable>
        <Text style={styles.smallText}>Data final</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  btnStyle:{
    width: "100%",
    height: 45, 
    backgroundColor: "white",
    borderColor: "gray",
    borderRadius: 20,
    shadowColor: '#000',//IOS Shadow color command
    shadowOffset: { width: 0, height: 2 },//IOS shadow offset command
    shadowOpacity: 0.5,//IOS shadow opacity command
    shadowRadius: 6,//IOS shadow radius command
    elevation: 2, // Android shadow
  },
  dataAndTimeDiv:{
    width: "100%",
  },
  dataTextFormat:{
    fontSize:20,
    height: "100%",
    marginVertical: 10,
    marginLeft: 5,
  },
  smallText:{
    color: "gray",
  },
  dataAndTimePicker:{
    marginBottom: 20,
  },
})

export default DateTimeDiv
