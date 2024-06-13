import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import cTheme from "../cTheme.json";
import { Children } from "react/cjs/react.production.min";

export function NavBar(props) {
  // ttl
  // onPress

  return (
    <View style={navbar.cnt}>
      <StatusBar backgroundColor={cTheme.bgColor} barStyle="dark-content" />
      <Text style={navbar.navttl}>{props.ttl}</Text>

      <TouchableOpacity style={navbar.back} onPress={props.onPress}>
        <Image source={require("../assets/arrow.png")} />
      </TouchableOpacity>
    </View>
  );
}

const navbar = StyleSheet.create({
  cnt: {
    // backgroundColor: `${cTheme.bgColor}`,
    backgroundColor: `${cTheme.bgColor}90`,
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  navttl: {
    fontWeight: "700",
    fontSize: 15,
  },
  back: {
    position: "absolute",
    left: 40,
    // backgroundColor: '#f0f',
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
  },
});

export function NameTag(props) {
  // name
  // keterangan

  return (
    <View style={{zIndex: 0, alignItems: 'center', height: 140, position: 'absolute', top: 600}}>
      {/* Name Tag */}
      <View style={[detail.cnt,]}>
        <View style={detail.border}>
          <Text style={detail.ttlName}>{props.name}</Text>
        </View>
      </View>

      {/* Keterangan */}
      <View style={[detail.cnt, {position: 'abolute', bottom: -50, zIndex: 1, width: 260, }]}>
        <View style={detail.border}>
          <Text style={[detail.ttlName, {fontSize: 13, position: 'absolute', bottom: 15}]}>{props.keterangan}</Text>
        </View>
      </View>

      {/* Shadow */}
      <View style={[detail.box1]}></View>
      <View style={[detail.box2]}></View>
    </View>
  );
}

const detail = StyleSheet.create({
  cnt: {
    backgroundColor: cTheme.lightColor,
    width: 330,
    height: 90,
    borderRadius: 20,
    padding: 6,
    zIndex: 10,
    position: 'absolute',
  },
  border: {
    width: "100%",
    height: "100%",
    borderWidth: 3,
    borderColor: cTheme.themeColor,
    borderStyle: "dashed",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ttlName: {
    color: cTheme.darkFont,
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.8,
  },
  box1: {
    width: 50,
    height: 20,
    backgroundColor: cTheme.darkFont,
    position: 'absolute',
    zIndex: 0,
    left: -6,
    transform: [
      {rotate: '15deg'}, 
      {translateY: 76},
      // {translateX: -10}
    ],
  },
  box2: {
    width: 50,
    height: 20,
    backgroundColor: cTheme.darkFont,
    position: 'absolute',
    zIndex: 0,
    right: -6,
    transform: [
      {rotate: '-15deg'}, 
      {translateY: 76},
      // {translateX: -10}
    ]
  }
});

export function Desk(props) {
  // nameBox

  return (
    <View style={{zIndex: 0, alignItems: 'center'}}>
      {/* Name Tag */}
      <View style={[nametag.cnt, {}]}>
        <View style={nametag.border}>
          <Text style={nametag.ttlBox}>{props.nameBox}</Text>

          {props.children}
        </View>
      </View>
    </View>
  );
}

const nametag = StyleSheet.create({
  cnt: {
    backgroundColor: cTheme.lightColor,
    width: 330,
    // height: 90,
    borderRadius: 20,
    padding: 6,
    zIndex: 10
  },
  border: {
    width: "100%",
    // height: "100%",
    borderWidth: 3,
    borderColor: cTheme.themeColor,
    borderStyle: "dashed",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    
  },
  ttlBox: {
    color: cTheme.darkFont,
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.8,
    paddingVertical: 30
  },
  box1: {
    width: 50,
    height: 20,
    backgroundColor: cTheme.darkFont,
    position: 'absolute',
    zIndex: 0,
    left: 30,
    transform: [
      {rotate: '15deg'}, 
      {translateY: 76},
      // {translateX: -10}
    ]
  },
  box2: {
    width: 50,
    height: 20,
    backgroundColor: cTheme.darkFont,
    position: 'absolute',
    zIndex: 0,
    right: 30,
    transform: [
      {rotate: '-15deg'}, 
      {translateY: 76},
      // {translateX: -10}
    ]
  }
});
