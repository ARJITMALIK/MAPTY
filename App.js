import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MAP from "./components/map";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"}/>
        <MAP />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 });

export default App;