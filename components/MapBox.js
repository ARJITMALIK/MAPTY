import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import {MapView} from "react-native-maps";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiYXJqaXRtYWxpayIsImEiOiJja3U0enFvejg0d2Z0MzBtcG5iajlkdjNoIn0.xdrQjit-bqt70C95Fag9yg"
);

const MAP = (props) => {
     const [coordinates] = useState([78.9629, 20.5937]);

    return (
     <MapView style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.Camera
              zoomLevel={4}
              centerCoordinate={coordinates}
            />
            <MapboxGL.PointAnnotation coordinate={coordinates} />
          </MapboxGL.MapView>
        </View>
      </MapView>
    );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
  height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1
  }
});

export default MAP;