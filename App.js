import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import DisplayWeather from "./src/components/DisplayWeather";

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <DisplayWeather />
        <Button
          title="Get Weather"
          color="#00525b"
          onPress={() => 1 + 1}
          accessibilityLabel="Press to get weather"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212121"
  }
});
