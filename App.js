import { View, StyleSheet } from 'react-native'
import {useState, useEffect} from 'react'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import MainScreen from './components/MainScreen'
import * as Location from 'expo-location'
import AvatarIcon from "./assets/AvatarIcon.png"
import EmailIcon from "./assets/Register_Login_Icons/EmailIcon.png"
import PersonIcon from "./assets/Register_Login_Icons/PersonIcon.png"
import CelphoneIcon from "./assets/Register_Login_Icons/CelphoneIcon.png"
import CepIcon from "./assets/Register_Login_Icons/CityIcon.png"
import CityIcon from "./assets/Register_Login_Icons/CityIcon.png"
import PasswordIcon from "./assets/Register_Login_Icons/PasswordIcon.png"
import BronzeMedalIcon from "./assets/Medals/BronzeMedalIcon.png"
import SilverMedalIcon from "./assets/Medals/SilverMedalIcon.png"
import GoldMedalIcon from "./assets/Medals/GoldMedalIcon.png"
import logoImage from './assets/logo.jpeg'

import { loginUser, logoutUser } from './Redux/UserReducer/Actions'
import { connect } from 'react-redux'
import { Provider } from "react-redux"
import store from './Redux/store'
import { setUserName } from './Redux/UserReducer/Actions'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const App = ({ userName, setUserName }) => {
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
  const [email, setEmail] = useState('teste@teste.com')//User
  const [password, setPassword] = useState('senhaTeste')//User
  const [celphone, setCelphone] = useState('35999999999')//User
  const [currentPoint, setCurrentPoint] = useState({})//User
  const [markerPoints, setMarkerPoints] = useState([{position: {lat: 37.78825, lng: -122.4324}, occurrenceType: "Postes Danificados", comment: "User Comment"}])//Report
  const [cep, setCep] = useState('')//User
  const [cityName, setCityName] = useState('')//User
  const [points, setPoints] = useState(900)//User
  const [profileCategory, setProfileCategory] = useState("")//User
  const [profileMedal, setProfileMedal] = useState(null)//User
  const [loadingMap, setLoadingMap]= useState(null)//Map
  const [userPosition, setUserPosition]=useState(null)//User

  //Modals useStates
  const [isProfileModalOn, setIsProfileModalOn] = useState(false)
  const [isChangeNumberModalOn, setIsChangeNumberModalOn] = useState(false)
  const [isChangePasswordModalOn, setIsChangePasswordModalOn] = useState(false)
  const [isSearchModalOn, setIsSearchModalOn] = useState(false)
  const [isPostOccurrenceModalOn, setIsPostOccurrenceModalOn] = useState(false)

  //reports useStates
  const [userComment, setUserComment] = useState("")//Reports
  const [selectedOption, setSelectedOption] = useState("Postes Danificados")//Reports
  const [startDate, setStartDate] = useState(new Date())//Reports
  const [endDate, setEndDate] = useState(new Date())//Reports
  const handleMapClick=(event)=>{
    const { latitude, longitude } = event.nativeEvent.coordinate
    const currentCordenate = { position: { lat: latitude, lng: longitude }, occurrenceType: "", comment: "" }
    setCurrentPoint(currentCordenate)
    setIsPostOccurrenceModalOn(true)
  }
  const handleCreateTabClick=()=>{
    const { latitude, longitude } = userPosition
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
    setUserComment("")
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
    const getCurrentPosition=()=>{
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()//Request permission to the user to allow use the location
        if (status !== 'granted') {//If the location was denied
          console.log('Permission to access location was denied')
          return
        }
        let location = await Location.getCurrentPositionAsync({})//Try get the current position
        setUserPosition({latitude: location.coords.latitude, longitude: location.coords.longitude})//Update the user data
        setLoadingMap(false)//Update the loading data
      })()
    }
    const loadUserInfo=()=>{
      setUserName()
    }
    loadProfileCategory()
    getCurrentPosition()
    
  },[points])
  
  return (
      <MainScreen
      profileMedal={profileMedal} postOccurrence={postOccurrence} handleMapClick={handleMapClick} occurrenceList={occurrenceList} cep={cep} setCep={setCep} cityName={cityName} setCityName={setCityName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} celphone={celphone} setCelphone={setCelphone} currentPoint={currentPoint} setCurrentPoint={setCurrentPoint}
      endDate={endDate} setEndDate={setEndDate} points={points} setPoints={setPoints} userName={userName}
      userComment={userComment} loadingMap={loadingMap} userPosition={userPosition} setUserComment={setUserComment} selectedOption={selectedOption} setSelectedOption={setSelectedOption} markerPoints={markerPoints} setMarkerPoints={setMarkerPoints} profileCategory={profileCategory} setProfileCategory={setProfileCategory}
      isSearchModalOn={isSearchModalOn} handleCreateTabClick={handleCreateTabClick} setIsSearchModalOn={setIsSearchModalOn} isPostOccurrenceModalOn={isPostOccurrenceModalOn} setIsPostOccurrenceModalOn={setIsPostOccurrenceModalOn} startDate={startDate} setStartDate={setStartDate}
      isChangePasswordModalOn={isChangePasswordModalOn} setIsChangePasswordModalOn={setIsChangePasswordModalOn} isChangeNumberModalOn={isChangeNumberModalOn} setIsChangeNumberModalOn={setIsChangeNumberModalOn} ProfileMedal={profileMedal}  PasswordIcon={PasswordIcon} EmailIcon={EmailIcon} CelphoneIcon={CelphoneIcon} AvatarIcon={AvatarIcon} isProfileModalOn={isProfileModalOn} setIsProfileModalOn={setIsProfileModalOn}/>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.name,
  }
}
const mapDispatchToProps={
  setUserName
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
