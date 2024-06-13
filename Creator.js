import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import { NavTitle, Pocket } from "./components/Pocket";
import cTheme from "./cTheme.json";
import data_creator from "./data_creator.json";


const data =
[
  {
      "name": "Muhammad Al Farabi",
      "keterangan": "Captain",
      "ttl": "Jakarta, 8-4-2006",
      "jk": "Laki-Laki"
  },
  {
      "name": "Bryan Ivaniel Waruwu",
      "keterangan": "Member",
      "ttl": "Jakarta, 4-5-2007",
      "jk": "Laki-Laki"
  },
  {
      "name": "Chen Hi",
      "keterangan": "Member",
      "ttl": "Jakarta, 5-10-2007",
      "jk": "Laki-Laki"
  }
];

const imgPahlawan = [
  require("./assets/bfarabi.png"),
  require("./assets/bbryan.png"),
  require("./assets/bchenhi.png"),
];

export default function App({ navigation }) {
  const [pahlawanData, setPahlawanData] = useState(
    [
      {
          "name": "Muhammad Al Farabi",
          "keterangan": "Captain",
          "ttl": "Jakarta, 8-4-2006",
          "jk": "Laki-Laki"
      },
      {
          "name": "Bryan Ivaniel Waruwu",
          "keterangan": "Member",
          "ttl": "Jakarta, 4-5-2007",
          "jk": "Laki-Laki"
      },
      {
          "name": "Chen Hi",
          "keterangan": "Member",
          "ttl": "Jakarta, 5-10-2007",
          "jk": "Laki-Laki"
      }
  ]
  );

  return (
    <View style={chk.cnt}>
      <StatusBar
        // hidden
        // style={chk.sbar}
        backgroundColor={cTheme.bgColor}
        barStyle="dark-content"
      />

      {/* Navigasi */}
      <NavTitle
        title={"Daftar Creator"}
        source={require(`./assets/pahlawanPage.png`)}
        onPress={() => navigation.goBack()}
      />

      <FlatList
      key={2}
        contentContainerStyle={chk.scrl}
        data={pahlawanData}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Pocket
            img={imgPahlawan[index]}
            pahlawan={item.name}
            keterangan={item.keterangan}
            destination={() => navigation.navigate('Detail', { itemIndex: index, ket: true })}
          />
        )}
      />
    </View>
  );
}

const chk = StyleSheet.create({
  cnt: {
    backgroundColor: cTheme.bgColor,
    flex: 1,
    zIndex: 0,
  },
  // dck: {
  //   backgroundColor: "#afc0ff",
  //   // backgroundColor: cTheme.bgColor,
  //   zIndex: 0,
  //   paddingTop: 100,
  //   paddingBottom: 50,
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  //   rowGap: 80,
  //   columnGap: 60,
  // },
  sbar: {
    backgroundColor: cTheme.bgColor,
  },
  scrl: {
    // backgroundColor: "#0af",
    // flex: 1,
    width: "100%",
    paddingTop: 100,
    alignItems: 'center'
    // flexDirection: "column",
    // flexWrap: "wrap",
    // justifyContent: "center",
    // columnGap: 5,
    // fl
  },
  safee: {
    width: 155,
  },
  // dck: {
  //   backgroundColor: "#afc0ff90",
  //   backgroundColor: cTheme.bgColor,
  //   zIndex: 0,
  //   flex: 1,
  //   paddingTop: 130,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: "center",
  //   rowGap: 80,
  //   columnGap: 60,
  // }
});
