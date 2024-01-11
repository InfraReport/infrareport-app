import {
  View,Text, StyleSheet, TextInput
} from 'react-native'
const Commentary = ({userComment, setUserComment}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputTextTitle}>Comentário:</Text>
        <TextInput
        multiline={true}
        numberOfLines={5}
        style={styles.textarea}
        onChangeText={(text)=>{setUserComment(text)}}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    marginBottom: 15,
  },
  textarea: {
    width: "100%",
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 5,
  },
  inputTextTitle:{
    fontSize: 20,
  }
})

export default Commentary
