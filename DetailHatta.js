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
        name="Drs. H. Mohammad Hatta"
        keterangan="Pejuang Kemerdekaan Indonesia" 
        />

        {/* Desk (2) */}
        <Desk nameBox={`Detail ${itemIndex}`}>
            <View style={{marginBottom: 60, gap: 20}}>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Nama</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 80}]}>Mohammad Hatta</Text>
                </View>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Lahir</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 80}]}>12 Agustus 1902</Text>
                </View>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Wafat</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 80}]}>4 Maret 1980</Text>
                </View>
            </View>
        </Desk>

        {/* Riwayat Hidup (3) */}
        <Desk nameBox='Riwayat Hidup' >
            <Text style={{textAlign: 'justify'}}>Mohammad Hatta lahir dari pasangan Muhammad Djamil dan Siti Saleha yang berasal dari Minangkabau. Ayahnya merupakan seorang keturunan ulama Naqsyabandiyah di Batuhampar, dekat Payakumbuh, Sumatera Barat dan ibunya berasal dari keluarga pedagang di Bukittinggi. Ia lahir dengan nama Muhammad Athar pada tanggal 12 Agustus 1902. Namanya, Athar berasal dari bahasa Arab, yang berarti harum. Athar lahir sebagai anak kedua, setelah Rafiah yang lahir pada tahun 1900. Sejak kecil, ia telah dididik dan dibesarkan dalam lingkungan keluarga yang taat melaksanakan ajaran agama Islam. Kakeknya dari pihak ayah, Abdurrahman Batuhampar dikenal sebagai ulama pendiri Surau Batuhampar, sedikit dari surau yang bertahan pasca-Perang Padri. Sementara itu, ibunya berasal dari keturunan pedagang. Beberapa orang mamaknya adalah pengusaha besar di Jakarta. Ayahnya meninggal pada saat ia masih berumur tujuh bulan. Setelah kematian ayahnya, ibunya menikah dengan Agus Haji Ning, seorang pedagang dari Palembang. Haji Ning sering berhubungan dagang dengan Ilyas Bagindo Marah, kakeknya dari pihak ibu. Perkawinan Siti Saleha dengan Haji Ning melahirkan empat orang anak, yang semuanya adalah perempuan. Mohammad Hatta pertama kali mengenyam pendidikan formal di sekolah swasta. Setelah enam bulan, ia pindah ke sekolah rakyat dan sekelas dengan Rafiah, kakaknya. Namun, pelajarannya berhenti pada pertengahan semester kelas tiga. Ia lalu pindah ke ELS di Padang (kini SMA Negeri 1 Padang) sampai tahun 1913, dan melanjutkan ke MULO sampai tahun 1917. Di luar pendidikan formal, ia pernah belajar agama kepada Muhammad Jamil Jambek, Abdullah Ahmad, dan beberapa ulama lainnya. Selain keluarga, perdagangan memengaruhi perhatian Hatta terhadap perekonomian. Di Padang, ia mengenal pedagang-pedagang yang masuk anggota Serikat Oesaha dan aktif dalam Jong Sumatranen Bond sebagai bendahara. Kegiatannya ini tetap dilanjutkannya ketika ia bersekolah di Prins Hendrik School. Mohammad Hatta tetap menjadi bendahara di Jakarta. Kakeknya bermaksud akan ke Mekkah, dan pada kesempatan tersebut, ia dapat membawa Mohammad Hatta melanjutkan pelajaran di bidang agama, yakni ke Mesir (Al-Azhar). Ini dilakukan untuk meningkatkan kualitas surau di Batuhmpar yang memang sudah menurun sejak meninggalnya Abdurrahman. Namun, hal ini diprotes dan mengusulkan pamannya, Idris untuk menggantikannya. Menurut catatan Amrin Imran, Pak Gaeknya kecewa dan Syekh Arsyad pada akhirnya menyerahkan kepada Tuhan.</Text>
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
