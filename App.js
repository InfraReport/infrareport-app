import { View, StyleSheet } from 'react-native'
import {useState} from 'react'
import Map from './components/Map'
import SearchModal from './components/Modals/SearchModal'
import FilterModal from './components/Modals/FilterModal'
import AnalyseModal from './components/Modals/AnalyseModal'
import BottomNavigator from './components/BottomNavigator'

const App = () => {
  const occurrenceList = [
    "Postes Danificados",
    "Buracos nas Ruas",
    "Calçadas Quebradas",
    "Esgotos e Calhas Transbordando ou Bloqueados",
    "Placas de Trânsito Quebradas ou Ausentes",
    "Edifícios Abandonados ou Deteriorados",
    "Problemas na Manutenção de Parques Públicos",
    "Pichações e Atos de Vandalismo",
    "Descarte Ilegal de Lixo",
    "Semáforos com Mau Funcionamento",
    "Sinalização Insuficiente nas Ruas",
    "Banheiros Públicos Mal Conservados",
    "Pontes ou Viadutos Danificados",
    "Corpos d'água Poluídos",
    "Bancos ou Abrigos Públicos Danificados",
    "Vegetação Excessiva Bloqueando Estradas",
    "Apagões"
  ]
  const [isSearchModalOn, setIsSearchModalOn] = useState(false)
  const [isFilterModalOn, setIsFilterModalOn] = useState(false)
  const [isAnalysisModalOn, setIsAnalysisModalOn] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Postes Danificados")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [reportsCount, setReportsCount] = useState([10, 20, 5, 15])
  const [reportsLabels, setReportsLabels] = useState(['Category A', 'Category B', 'Category C', 'Category D'])
  const [typeLabels, setTypeLabels] = useState(['Type X', 'Type Y', 'Type Z'])
  const [typeCount, setTypeCount] = useState([30, 25, 40])
  return (
    <View style={styles.container}>
      <Map/>
      <BottomNavigator isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn} isFilterModalOn={isFilterModalOn} setIsFilterModalOn={setIsFilterModalOn} isAnalysisModalOn={isAnalysisModalOn} setIsAnalysisModalOn={setIsAnalysisModalOn} />
      <SearchModal startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} selectedOption={selectedOption} setSelectedOption={setSelectedOption} occurrenceList={occurrenceList} isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn} />
      <FilterModal startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} selectedOption={selectedOption} setSelectedOption={setSelectedOption} occurrenceList={occurrenceList} isFilterModalOn={isFilterModalOn} setIsFilterModalOn={setIsFilterModalOn}/>
      <AnalyseModal isAnalysisModalOn={isAnalysisModalOn} setIsAnalysisModalOn={setIsAnalysisModalOn} reportsLabels={reportsLabels} reportsCount={reportsCount} typeLabels={typeLabels} typeCount={typeCount} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App
