import { View, StyleSheet } from 'react-native'
import {useState} from 'react'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import Map from './components/Map'
import SearchModal from './components/Modals/SearchModal'
import FilterModal from './components/Modals/FilterModal'
import AnalyseModal from './components/Modals/AnalyseModal'
import BottomNavigator from './components/BottomNavigator'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [celphone, setCelphone] = useState('')
  const [cep, setCep] = useState('')
  const [cityName, setCityName] = useState('')
  const [userName, setUserName] = useState('')
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
      <RegisterScreen setEmail={setEmail} email={email} password={password} setPassword={setPassword} celphone={celphone} setCelphone={setCelphone} cityName={cityName} setCityName={setCityName} userName={userName} setUserName={setUserName} cep={cep} setCep={setCep} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App
