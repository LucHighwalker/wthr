import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DisplayWeather = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}> 72˚</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    justifyContent: "center",
    backgroundColor: "red"
  },
  temp: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff"
  }
});

export default DisplayWeather;
