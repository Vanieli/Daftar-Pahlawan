import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  BackHandler,
} from "react-native";
import { CheckBox, Input, Button } from "./components/Form";
import cTheme from "./cTheme.json";

export default function Register({ navigation }) {
  const [select, isSelected] = useState(false);
  const [input, isInputSelected] = useState(false);
  const [secure, setSecure] = useState(false);
  const [next, setNext] = useState(false);

  function timeout () {
    setTimeout(() => {
      navigation.navigate("Login");
      }, 2000);
  }

  useEffect(() => {
    const handleBackPress = () => {
      console.log("Tombol back ditekan!");
      input ? isInputSelected(false) : navigation.goBack();
      // if (input == true) {isInputSelected(false);}
      return true;
    };

    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        console.log("Keyboard muncul!");
        isInputSelected(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        console.log("Keyboard disembunyikan!");
        isInputSelected(false);
      }
    );

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    
    // const timeout = setTimeout(() => {
    //   navigation.navigate("Login");
    // }, 4000);

    return () => {
      backHandler.remove();
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        // {backgroundColor: input? '#ff0' : '#fff'}
      ]}
    >
      {/* Judul */}
      <Text
        style={[styles.ttl, { color: input ? "#ffffff00" : cTheme.themeColor }]}
      >
        Create Account
      </Text>

      {/* Form */}
      <View
        style={[
          styles.form,
          styles.paddingHorizontal,
          { paddingTop: input ? 30 : 0 },
        ]}
      >
        <Input ttl={"Name"} />
        <Input ttl={"Email"} />
        <Input ttl={"Phone Number"} />
        <Input
          ttl={"Password"}
          secure={true}
          onPress={() => {
            isInputSelected(true);
          }}
        />
        <Input
          ttl={"Confirm Password"}
          secure={true}
          onPress={() => {
            isInputSelected(true);
          }}
        />

        {/* Bawah form */}
        <View style={styles.btmForm}>
          <CheckBox
            title={"Agree with"}
            onPress={() => isSelected(!select)}
            isChecked={select}
          />

          <TouchableOpacity
            onPress={() => isSelected(!select)}
            activeOpacity={1}
          >
            <Text style={styles.terms}>Term & Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tombol Login */}
      <View style={[styles.btn, styles.paddingHorizontal]}>
        {!input && (
          <>
            <Button onPress={timeout}>
              Create Account
            </Button>

            <View style={[styles.login, { transform: [{ scale: 0.8 }] }]}>
              <Text
                style={[
                  styles.fgtPass,
                  { letterSpacing: 0, fontWeight: "600" },
                ]}
              >
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.fgtPass}>Login</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

// Style Untuk Mengatur CheckBox
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: cTheme.bgColor,
    justifyContent: "center",
    zIndex: 0,
  },
  paddingHorizontal: {
    paddingHorizontal: "7%",
    zIndex: 0,
  },
  ttl: {
    // backgroundColor: '#ff0',
    fontWeight: "900",
    fontSize: 28,
    position: "absolute",
    top: 100,
    // bottom: 600,
    // letterSpacing: 1,
    // color: cTheme.themeColor,
    letterSpacing: 2.5,
    width: "100%",
    textAlign: "center",
  },
  form: {
    // backgroundColor: "#f0f",
    width: "100%",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 100,
  },
  btn: {
    position: "absolute",
    width: "100%",
    position: "absolute",
    bottom: "5%",
    alignItems: "center",
    gap: -2,
    zIndex: 0,
  },
  btmForm: {
    flexDirection: "row",
    justifyContent: "start",
    width: "88%",
    // position: 'absolute',
    // bottom: -18,
    // backgroundColor: '#0ff',
    transform: [{ scale: 0.8 }, { translateX: -30 }, { translateY: -10 }],
    left: 0,
  },
  terms: {
    fontWeight: "900",
    letterSpacing: 1.5,
    color: cTheme.lightColor,
    fontSize: 16,
    transform: [{ scale: 0.85 }],
    left: "-9%",
  },
  login: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    gap: 0,
  },
  fgtPass: {
    fontWeight: "900",
    letterSpacing: 1.5,
    color: cTheme.lightColor,
    fontSize: 16,
    transform: [{ scale: 0.9 }],
  },
});
