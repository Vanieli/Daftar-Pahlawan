import React from "react";
import {
  TouchableOpacity,
  View,
  backgroundColor,
  Text,
  Image,
  lineHeight,
  StyleSheet,
} from "react-native";
import cTheme from './cTheme.json';

// layar home
const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Image */}
      <View
        style={{
          flex: 4,
          backgroundColor: cTheme.lightColor,
          width: "92%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
          marginTop: 40,
        }}
      >
        <Image
          source={require("./assets/explan.png")}
          style={{
            height: "80%",
            width: "90%",
            // marginTop: 73,
          }}
        />
      </View>

      {/* Text Judul */}
      <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <Text
          style={{
            color: "#8F584D",
            textAlign: "center",
            fontSize: 25,
            fontStyle: "normal",
            fontWeight: 900,
            width: "80%",
            // backgroundColor: '#0ff',
            top: 50,
            color: cTheme.themeColor
          }}
        >
          Kenali Pahlawanmu Disini Kawan!
        </Text>
      </View>

      {/* Text Deskripsi */}
      <View style={{ flex: 1, width: '74%' }}>
        <Text
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 400,
            top: 20,
            color: `${cTheme.themeColor}d0`,
            // backgroundColor: '#f0f'
          }}
        >
          Kemerdekaan yang kita raih saat ini adalah hasil perjuangan dan
          pengorbanan dari para pahlawan yang telah gugur di medan perang
        </Text>
      </View>

      {/* Tombol */}
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: cTheme.themeColor,
            flexDirection: "row",
            width: "75%",
            height: 50,
            borderRadius: 15,
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={.8}
            style={{
              backgroundColor: cTheme.lightColor,
              width: "50%",
              //   height: 60,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress = {() => navigation.navigate('Register')}
          >
            <Text style={[styles.typeFont]}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={.8}
            style={{
              //   backgroundColor: "#8FF84D",
              width: "50%",
              height: "100%",
              borderRadius: 15,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress = {() => navigation.navigate('Login')}
          >
            <Text style={styles.typeFont}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  titDes: {},
  typeFont: {
    color: cTheme.lightFont,
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.7,
  },
});
