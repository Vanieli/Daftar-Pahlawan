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

const assetPahlawan = [
    require("./assets/detailSoekarno.png"),
    require("./assets/detailHatta.png"),
    require("./assets/detailKartini.png")
];

const assetCreator = [
    require("./assets/faraboy.png"),
    require("./assets/bryan.png"),
    require("./assets/chenhi.png")
];

const DetailSoekarno = ({ route, navigation }) => {
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
        name="R.A. Kartini"
        keterangan="Pahlawan Emansipasi Indonesia" 
        />

        {/* Desk (2) */}
        <Desk nameBox={`Detail ${itemIndex}`}>
            <View style={{marginBottom: 60, gap: 20}}>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Nama</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 80}]}>Raden Ajeng Kartini</Text>
                </View>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Lahir</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 80}]}>21 April 1879</Text>
                </View>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Wafat</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 80}]}>17 September 1904</Text>
                </View>
            </View>
        </Desk>

        {/* Riwayat Hidup (3) */}
        <Desk nameBox='Riwayat Hidup' >
            <Text style={{textAlign: 'justify'}}>Raden Adjeng Kartini berasal dari kalangan priayi atau kelas bangsawan Jawa. Ia merupakan putri dari Raden Mas Adipati Ario Sosroningrat, seorang patih yang diangkat menjadi bupati Jepara segera setelah Kartini lahir. Kartini adalah putri dari istri pertama, tetapi bukan istri utama. Ibunya bernama M.A. Ngasirah, putri dari Nyai Haji Siti Aminah dan Kyai Haji Madirono, seorang guru agama di Telukawur, Jepara. Dari sisi ayahnya, silsilah Kartini dapat dilacak hingga Hamengkubuwana VI. Garis keturunan Bupati Sosroningrat bahkan dapat ditilik kembali ke istana Kerajaan Majapahit. Semenjak Pangeran Dangirin menjadi bupati Surabaya pada abad ke-18, nenek moyang Sosroningrat mengisi banyak posisi penting di Pangreh Praja. Ayah Kartini pada mulanya adalah seorang wedana di Mayong. Peraturan kolonial waktu itu mengharuskan seorang bupati beristerikan seorang bangsawan. Karena M.A. Ngasirah bukanlah bangsawan tinggi, maka ayahnya menikah lagi dengan Raden Adjeng Woerjan (Moerjam), keturunan langsung Raja Madura. Setelah perkawinan itu, ayah Kartini diangkat menjadi bupati di Jepara menggantikan kedudukan ayah kandung R.A. Woerjan, R.A.A. Tjitrowikromo. Kartini adalah anak ke-5 dari 11 bersaudara kandung dan tiri. Dari semua saudara sekandung, Kartini adalah anak perempuan tertua. Kakeknya, Pangeran Ario Tjondronegoro IV, diangkat bupati dalam usia 25 tahun dan dikenal pada pertengahan abad ke-19 sebagai salah satu bupati pertama yang memberi pendidikan Barat kepada anak-anaknya. Kakak Kartini, Sosrokartono, adalah seorang yang pintar dalam bidang bahasa. Sampai usia 12 tahun, Kartini diperbolehkan bersekolah di Europeesche Lagere School (ELS). Di sini Kartini belajar bahasa Belanda. Namun, setelah usia 12 tahun, ia harus tinggal di rumah karena harus dipingit. Surat Kartini - Rosa Abendanon (fragmen) Karena Kartini bisa berbahasa Belanda, di rumah ia mulai belajar sendiri dan menulis surat kepada teman-teman korespondensi yang berasal dari Belanda. Salah satunya adalah Rosa Abendanon yang banyak mendukungnya. Dari buku-buku, koran, dan majalah Eropa, Kartini tertarik pada kemajuan berpikir perempuan Eropa. Timbul keinginannya untuk memajukan perempuan pribumi karena ia melihat bahwa perempuan pribumi berada pada status sosial yang rendah.</Text>
        </Desk>
      </ScrollView>
    </ImageBackground>
  );
};

export default DetailSoekarno;

const styles = StyleSheet.create({
  cnt: {
    flex: 1,
    // backgroundColor: "#0f0f",
    zIndex: 0,
    alignItems: "center",
  },
  scrl: {
    width: '100%',
  },
  scrls: {
    alignItems: 'center',
    gap: 60
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
