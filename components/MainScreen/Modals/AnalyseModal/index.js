import { View, Text, Modal, StyleSheet } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import Header from './Header'

const AnalyzeModal = ({ isAnalysisModalOn, setIsAnalysisModalOn, reportsLabels, reportsCount, typeLabels, typeCount }) => {
  const reportsData = {
    labels: reportsLabels,
    datasets: [
      {
        data: reportsCount,
      },
    ],
  };
  const typeData = {
    labels: typeLabels,
    datasets: [
      {
        data: typeCount,
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
  };
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isAnalysisModalOn}
        onRequestClose={() => {
          setIsAnalysisModalOn(!isAnalysisModalOn)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Header setIsAnalysisModalOn={setIsAnalysisModalOn}/>
            <View style={styles.modalContent}>
              <View style={{backgroundColor: 'white', height: '80%' }}>
                <View style={{marginTop: 10}}>
                  <View>
                    <Text style={styles.text}>Ocorrências mais frequentes:</Text>
                    <BarChart
                      data={typeData}
                      width={325}
                      height={200}
                      yAxisSuffix=""
                      chartConfig={chartConfig}
                    />
                  </View>
                  <View>
                    <Text style={styles.text}>Ruas com mais ocorrências:</Text>
                    <BarChart
                      data={reportsData}
                      width={325}
                      height={200}
                      yAxisSuffix=""
                      chartConfig={chartConfig}
                    />
                  </View>
                </View>
              </View>
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
    margin: 12,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: "100%",
    height: 550,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center',
    shadowColor: '#000',//IOS Shadow color command
    shadowOffset: {width: 0,height: 2,},//IOS shadow offset command
    shadowOpacity: 0.25,//IOS shadow opacity color
    shadowRadius: 4,//IOS shadow radius
    elevation: 5,//Android shadow
  },
  text:{
    fontSize: 22,
  }
})

export default AnalyzeModal

