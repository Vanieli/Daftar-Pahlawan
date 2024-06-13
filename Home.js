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
import data_pahlawan from "./data_pahlawan.json";

const imgPahlawan = [
  require("./assets/Soekarno.png"),
  require("./assets/Hatta.png"),
  require("./assets/Kartini.png"),
  require("./assets/Ki_Hadjar_Dewantara.png"),
  require("./assets/Jendral_Soedirman.png"),
  require("./assets/Cak_Nyut_Dien.png"),
  require("./assets/Tjokroaminoto.png"),
  require("./assets/Malaka.png"),
  require("./assets/Diponegoro.png"),
  require("./assets/Teuku_Umar.png"),
  require("./assets/Mohammad_Natsir.png"),
  require("./assets/Agus_Salim.png"),
  require("./assets/Sutan_Syahrir.png"),
  require("./assets/Abdurrahman_Wahid.png"),
  require("./assets/Bung_Tomo.png"),
  require("./assets/Otto_Iskandardinata.png"),
  require("./assets/Soepomo.png"),
  require("./assets/Soetomo.png"),
  require("./assets/Sayuti_Melik.png"),
  require("./assets/Sukarni_Kartodiwirjo.png"),
];

const dst = [
  "DetailSoekarno",
  "DetailHatta",
  "DetailKartini"
];

export default function App({ navigation }) {
  const [pahlawanData, setPahlawanData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPahlawanData(data_pahlawan);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        title={"Daftar Pahlawan"}
        source={require(`./assets/pahlawanPage.png`)}
        onPress={() => navigation.navigate('Creator')}
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
            destination={() => navigation.navigate(dst[index], {itemIndex: index})}
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
