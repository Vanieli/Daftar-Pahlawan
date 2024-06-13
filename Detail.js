import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  backgroundColor,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import data_pahlawan from "./data_pahlawan.json";
import { Desk, NameTag, NavBar } from "./components/Detail";
import cTheme from "./cTheme.json";


const tytys = [
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

const assetCreator = [
    require("./assets/faraboy.png"),
    require("./assets/bryan.png"),
    require("./assets/chenhi.png")
];

const DetailScreen = ({ route, navigation }) => {
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

  const {itemIndex, ket} = route.params;
  const data = pahlawanData[itemIndex];

  return (
    <ImageBackground
      source={require("./assets/background.png")}
      resizeMode="cover"
      style={styles.cnt}
    >
      <NavBar
        ttl = 'Detail Profile'
        onPress={() => navigation.goBack()}
      />

      <ScrollView 
      style={styles.scrl}
      contentContainerStyle={styles.scrls}
      >
        {/* Gambar Character */}
        <Image
          source={ket? assetCreator[itemIndex] : assetPahlawan[itemIndex]}
          style={styles.character}
        />

        {/* Nametag Nama (1) */}
        <NameTag 
        name={tytys[itemIndex].name}
        keterangan={tytys[itemIndex].keterangan} 
        />

        {/* Desk (2) */}
        <Desk nameBox={`Detail`}>
            <View style={{marginBottom: 60, gap: 20}}>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Nama</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 100}]}>{tytys[itemIndex].name}</Text>
                </View>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Lahir</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 100}]}>{tytys[itemIndex].ttl}</Text>
                </View>
                <View style={styles.rows}>
                    <Text style = {styles.font}>JK</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 100}]}>{tytys[itemIndex].name}</Text>
                </View>
            </View>
        </Desk>
      </ScrollView>
    </ImageBackground>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  cnt: {
    flex: 1,
    backgroundColor: "#0f0f",
    zIndex: 0,
    alignItems: "center",
  },
  scrl: {
    width: '100%',
  },
  scrls: {
    alignItems: 'center',
    gap: 60,
    paddingBottom: 60
  },
  scrl: {
    width: '100%',
  },
  character: {
    zIndex: 0,
    top: 40,
    transform: [{scale: .9}],
    marginBottom: 130
  },
  rows: {
    // backgroundColor: '#F0F',
    width: 200,
    flexDirection: 'row',
    paddingLeft: 10
  },
  font: {
    color: cTheme.darkFont,
    fontWeight: '500'
  }
});
