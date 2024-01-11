import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import BathroomIcon from "./../../../assets/reportIcons/Bathroom.png"
import BridgeIcon from "./../../../assets/reportIcons/Bridge.png"
import BuildIcon from "./../../../assets/reportIcons/Build.png"
import ForestIcon from "./../../../assets/reportIcons/Forest.png"
import GrafittiIcon from "./../../../assets/reportIcons/Grafitti.png"
import HoleIcon from "./../../../assets/reportIcons/Hole.png"
import ParkIcon from "./../../../assets/reportIcons/Park.png"
import WaterIcon from "./../../../assets/reportIcons/Water.png"
import PersonSignIcon from "./../../../assets/reportIcons/PersonSign.png"
import SewageIcon from "./../../../assets/reportIcons/Sewage.png"
import StreetIcon from "./../../../assets/reportIcons/Street.png"
import StreetLampOffIcon from "./../../../assets/reportIcons/StreetLampOff.png"
import StreetLampOnIcon from "./../../../assets/reportIcons/StreetLampOn.png"
import TrafficLightIcon from "./../../../assets/reportIcons/TrafficLight.png"
import TrashIcon from "./../../../assets/reportIcons/Trash.png"
import VandalismIcon from "./../../../assets/reportIcons/Vandalism.png"
import ConcludedIcon from "./../../../assets/reportIcons/Concluded.png"
import WithoutLightIcon from "./../../../assets/reportIcons/WithoutLight.png"

const Map = ({markerPoints, setMarkerPoints, handleMapClick, currentPoint, setCurrentPoint, setIsPostOccurrenceModalOn, setIsProfileModalOn, AvatarIcon}) => {
  const hashTableImage = {
    "Postes Danificados": StreetLampOnIcon,
    "Buracos nas Ruas": HoleIcon,
    "Calçadas Quebradas": StreetIcon,
    "Esgotos e Calhas Transbordando ou Bloqueados": SewageIcon,
    "Placas de Trânsito Quebradas ou Ausentes": PersonSignIcon,
    "Edifícios Abandonados ou Deteriorados": BuildIcon,
    "Problemas na Manutenção de Parques Públicos": ParkIcon,
    "Pichações e Atos de Vandalismo": GrafittiIcon,
    "Descarte Ilegal de Lixo": TrashIcon,
    "Semáforos com Mau Funcionamento": TrafficLightIcon,
    "Sinalização Insuficiente nas Ruas": StreetLampOffIcon,
    "Banheiros Públicos Mal Conservados": BathroomIcon,
    "Pontes ou Viadutos Danificados": BridgeIcon,
    "Corpos d'água Poluídos": WaterIcon,
    "Bancos ou Abrigos Públicos Danificados": VandalismIcon,
    "Vegetação Excessiva Bloqueando Estradas": ForestIcon,
    "Apagões": WithoutLightIcon
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapClick}
      >
        {
          markerPoints.map((markerPoint, index)=>(
            <Marker
              key={index}
              coordinate={{
                latitude: markerPoint.position.lat,
                longitude: markerPoint.position.lng,
              }}
              title={markerPoint.occurrenceType}
              description={markerPoint.comment}
            >
              <Image
                source={hashTableImage[markerPoint.occurrenceType]}
                style={{ width: 40, height: 40 }} // Adjust image size as needed
              />
            </Marker>
          ))
        }
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  circle: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'white', // Red with 50% opacity
    borderRadius: 25,
    top: 25, // Adjust this value to position the circle from the top
    right: 20, // Adjust this value to position the circle from the right
    zIndex: 10, // Ensure the circle appears above the map
  },
  avatarIcon:{
    width: "100%",
    height: "100%",
    borderRadius: 25,
  }
})

export default Map
