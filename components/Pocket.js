import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { BlurView } from "expo-blur";
import cTheme from "../cTheme.json";


export function Pocket(props) {
  // const na = props.img;
  // const prof = require(`../assets/${na}`);
  
  return (
    <View >
      <TouchableOpacity activeOpacity={1} style={pocket.container} onPress={props.destination}>
        <Image 
          source={props.img} 
          style={pocket.reImg} 
        />

        {/* Title */}
        <View style={pocket.tlPock}>
          {/* Nama pahlawan */}
          <Text style={pocket.ttlPock}>{props.pahlawan}</Text>
          {/* Keterangan */}
          <Text style={pocket.desPock}>{props.keterangan}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const pocket = StyleSheet.create({
  container: {
    // position: "relative",
    height: 170,
    // flex: 1,
    width: 155,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: `#AAAAAA3F`,
    overflow: "hidden",
    backgroundColor: '#fff',
    // transform: [{scale: 1.4}],
  },
  tlPock: {
    position: "absolute",
    top: 128,
    // backgroundColor: '#f0f',
    left: 13
  },
  ttlPock: {
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: -0.4,
    color: cTheme.pockColor
  },
  desPock: {
    width: 130,
    letterSpacing: -0.4,
    fontSize: 10,
    // backgroundColor: '#f0f'
    color: cTheme.pockColor
  },
  reImg: {
    // width: "100%",
    // height: '100%',
    // position: "absolute",
    // transform: [{scale: 0.99}],
    opacity: 1,
    // backgroundColor: cTheme.themeColor
  },
});

export function NavTitle({ onPress, title, ...props }) {
  // const imgTit = require("../assets/pahlawanPage.png");
  // const imgTit = require(`../assets/${img}`);

  return (
    <View style={navTitle.cnt}>
      <TouchableOpacity style={navTitle.naCtr} activeOpacity={.7} onPress={onPress} >
        {/* <Image/> */}
        <Text style={navTitle.naTitl}>{title}</Text>
        <Image {...props} style={navTitle.logo} />

        {/* Line */}
      </TouchableOpacity>
      <View style={navTitle.line}/>
    </View>
  );
}

const navTitle = StyleSheet.create({
  cnt: {
    width: "100%",
    height: 70,
    zIndex: 10,
    position: "absolute",
    top: 0,
    alignItems: 'center',

    // bgbgbgb
    // backgroundColor: '#f0f'
  },
  naCtr: {
    backgroundColor: "#ffffff70",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  naTitl: {
    color: cTheme.themeColor,
    fontSize: 18,
    fontWeight: "900",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  line: {
    height: 1.5,
    width: '90%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: cTheme.themeColor,
    alignSelf: 'center'
  }
});


// Styling for <ScrollView>


// dck: {
//   backgroundColor: "#afc0ff90",
//   // backgroundColor: cTheme.bgColor,
//   zIndex: 0,
//   paddingTop: 130,
//   paddingBottom: 50,
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   justifyContent: "center",
//   rowGap: 80,
//   columnGap: 60,
// }