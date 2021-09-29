import React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";

const MAP = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          pinColor="green"
          //   image={require("../assets/myassets/icon.png")}
        >
          <Callout>
            <Text>Hey I'm Arjit Malik</Text>
          </Callout>
        </Marker>
          <Circle
            center={{ latitude: 37.78825, longitude: -122.4324 }}
            radius={100}
            strokeWidth={2}
            strokeColor={"#02f72f"}
            fillColor={"rgba(10,247,2,0.2)"}
          />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MAP;
