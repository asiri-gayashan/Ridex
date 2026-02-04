import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Dimensions,
  Pressable,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import style from "./style";
import { external } from "@/styles/external.style";

import { useState } from "react";
import { windowHeight } from "@/themes/app.constant";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

export default function RidePlanScreen() {
  const [places, setPlaces] = useState<any>([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<any>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState<any>(null);
  const [currentLocation, setCurrentLocation] = useState<any>(null);
  const [distance, setDistance] = useState<any>(null);
  const [locationSelected, setlocationSelected] = useState(false);
  const [selectedVehcile, setselectedVehcile] = useState("Car");

  const [travelTimes, setTravelTimes] = useState({
    driving: null,
    walking: null,
    bicycling: null,
    transit: null,
  });

  const [keyboardAvoidingHeight, setkeyboardAvoidingHeight] = useState(false);

  return (
    <KeyboardAvoidingView
      style={[external.fx_1]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <View
          style={{ height: windowHeight(!keyboardAvoidingHeight ? 500 : 300) }}
        >
          <MapView
            style={{ flex: 1 }}
            region={region}
            onRegionChangeComplete={(region) => setRegion(region)}
          ></MapView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
