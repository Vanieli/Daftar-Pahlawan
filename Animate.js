import React, { useEffect } from "react";
import { View, StyleSheet, Image, BackHandler, Text } from "react-native";
// import Svg, { Path } from "react-native-svg";
import cTheme from "./cTheme.json";

export default function Animated({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  });

  return (
    <View style={styles.cnt}>
      <Image source={require("./assets/logoapk.png")} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  cnt: {
    backgroundColor: "#f0f",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: cTheme.bgColor,
  },
  img: {
    transform: [{scale: .6}]
  }
});
