import { View, StyleSheet } from 'react-native'
import {useState, useEffect} from 'react'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import MainScreen from './components/MainScreen'


import AvatarIcon from "./assets/AvatarIcon.png"
import EmailIcon from "./assets/Register_Login_Icons/EmailIcon.png"
import PersonIcon from "./assets/Register_Login_Icons/PersonIcon.png"
import CelphoneIcon from "./assets/Register_Login_Icons/CelphoneIcon.png"
import CepIcon from "./assets/Register_Login_Icons/CepIcon.png"
import CityIcon from "./assets/Register_Login_Icons/CityIcon.png"
import PasswordIcon from "./assets/Register_Login_Icons/PasswordIcon.png"
import BronzeMedalIcon from "./assets/Medals/BronzeMedalIcon.png"
import SilverMedalIcon from "./assets/Medals/SilverMedalIcon.png"
import GoldMedalIcon from "./assets/Medals/GoldMedalIcon.png"
import logoImage from './assets/logo.jpeg'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
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
  // Login/Register page useStates
  const [email, setEmail] = useState('teste@teste.com')
  const [password, setPassword] = useState('senhaTeste')
  const [celphone, setCelphone] = useState('35999999999')
  const [currentPoint, setCurrentPoint] = useState({})
  const [markerPoints, setMarkerPoints] = useState([{position: {lat: 37.78825, lng: -122.4324}, occurrenceType: "Postes Danificados", comment: "User Comment"}])
  const [cep, setCep] = useState('')
  const [cityName, setCityName] = useState('')
  const [points, setPoints] = useState(900)
  const [profileCategory, setProfileCategory] = useState("")
  const [profileMedal, setProfileMedal] = useState(null)
  const [userName, setUserName] = useState('Kauã Moreira Batista')
  //Modals useStates
  const [isProfileModalOn, setIsProfileModalOn] = useState(false)
  const [isChangeNumberModalOn, setIsChangeNumberModalOn] = useState(false)
  const [isChangePasswordModalOn, setIsChangePasswordModalOn] = useState(false)
  const [isSearchModalOn, setIsSearchModalOn] = useState(false)
  const [isFilterModalOn, setIsFilterModalOn] = useState(false)
  const [isPostOccurrenceModalOn, setIsPostOccurrenceModalOn] = useState(false)
  const [userComment, setUserComment] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Postes Danificados")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [reportsCount, setReportsCount] = useState([10, 20, 5, 15])
  const [reportsLabels, setReportsLabels] = useState(['Category A', 'Category B', 'Category C', 'Category D'])
  const [typeLabels, setTypeLabels] = useState(['Type X', 'Type Y', 'Type Z'])
  const [typeCount, setTypeCount] = useState([30, 25, 40])
  const handleMapClick=(event)=>{
    const { latitude, longitude } = event.nativeEvent.coordinate
    const currentCordenate = { position: { lat: latitude, lng: longitude }, occurrenceType: "", comment: "" }
    setCurrentPoint(currentCordenate)
    setIsPostOccurrenceModalOn(true)
  }
  const postOccurrence=()=>{
    currentPoint.occurrenceType=selectedOption
    currentPoint.comment=userComment
    const newMarkers = [...markerPoints, currentPoint]
    setMarkerPoints(newMarkers)
    setIsPostOccurrenceModalOn(false)
  }
  //<RegisterScreen EmailIcon={EmailIcon} PersonIcon={PersonIcon} CelphoneIcon={CelphoneIcon} CepIcon={CepIcon} CityIcon={CityIcon} PasswordIcon={PasswordIcon} setEmail={setEmail} email={email} password={password} setPassword={setPassword} celphone={celphone} setCelphone={setCelphone} cityName={cityName} setCityName={setCityName} userName={userName} setUserName={setUserName} cep={cep} setCep={setCep} />
  //<LoginScreen logoImage={logoImage} PasswordIcon={PasswordIcon} EmailIcon={EmailIcon} setEmail={setEmail} email={email} password={password} setPassword={setPassword} />
  useEffect(()=>{
    const loadProfileCategory=()=>{
      if((points>=0)&&(points<600)){
        setProfileCategory("Bronze")
        setProfileMedal(BronzeMedalIcon)
      } else if((points>=600)&&(points<900)){
        setProfileCategory("Prata")
        setProfileMedal(SilverMedalIcon)
      } else if((points>=900)&&(points<=1000)){
        setProfileCategory("Ouro")
        setProfileMedal(GoldMedalIcon)
      }
    }
    loadProfileCategory()
  },[points])
  return (
    <MainScreen
    profileMedal={profileMedal} postOccurrence={postOccurrence} handleMapClick={handleMapClick} occurrenceList={occurrenceList} cep={cep} setCep={setCep} cityName={cityName} setCityName={setCityName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} celphone={celphone} setCelphone={setCelphone} currentPoint={currentPoint} setCurrentPoint={setCurrentPoint}
    endDate={endDate} setEndDate={setEndDate} reportsCount={reportsCount} setReportsCount={setReportsCount} reportsLabels={reportsLabels} setReportsLabels={setReportsLabels} typeCount={typeCount} setTypeCount={setTypeCount} points={points} setPoints={setPoints} userName={userName} setUserName={setUserName}
    userComment={userComment} setUserComment={setUserComment} selectedOption={selectedOption} setSelectedOption={setSelectedOption} typeLabels={typeLabels} setTypeLabels={setTypeLabels} markerPoints={markerPoints} setMarkerPoints={setMarkerPoints} profileCategory={profileCategory} setProfileCategory={setProfileCategory}
    isSearchModalOn={isSearchModalOn} setIsSearchModalOn={setIsSearchModalOn} isFilterModalOn={isFilterModalOn} setIsFilterModalOn={setIsFilterModalOn} isPostOccurrenceModalOn={isPostOccurrenceModalOn} setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn} startDate={startDate} setStartDate={setStartDate}
    isChangePasswordModalOn={isChangePasswordModalOn} setIsChangePasswordModalOn={setIsChangePasswordModalOn} isChangeNumberModalOn={isChangeNumberModalOn} setIsChangeNumberModalOn={setIsChangeNumberModalOn} ProfileMedal={profileMedal}  PasswordIcon={PasswordIcon} EmailIcon={EmailIcon} CelphoneIcon={CelphoneIcon} AvatarIcon={AvatarIcon} isProfileModalOn={isProfileModalOn} setIsProfileModalOn={setIsProfileModalOn}/>
  )
}

export default App
