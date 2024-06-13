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
        name="Dr. (H.C.) Ir. H. Soekarno"
        keterangan="Mantan Presiden Indonesia" 
        />

        {/* Desk (2) */}
        <Desk nameBox={`Detail ${itemIndex}`}>
            <View style={{marginBottom: 60, gap: 20}}>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Nama</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 80}]}>Koesno Sosrodihardjo</Text>
                </View>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Lahir</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 80}]}>6 Juni 1901</Text>
                </View>
                <View style={styles.rows}>
                    <Text style = {styles.font}>Wafat</Text>
                    <Text style={[styles.font, {position: 'absolute', left: 80}]}>21 Juni 1970</Text>
                </View>
            </View>
        </Desk>

        {/* Riwayat Hidup (3) */}
        <Desk nameBox='Riwayat Hidup' >
            <Text style={{textAlign: 'justify'}}>Soekarno dilahirkan dengan seorang ayah yang bernama Raden Soekemi Sosrodihardjo (1873–1945) dan ibunya yaitu Ida Ayu Nyoman Rai (1881–1958). Keduanya bertemu ketika Raden Soekemi yang merupakan seorang guru ditempatkan di Sekolah Dasar Pribumi di Singaraja, Bali. Nyoman Rai merupakan keturunan bangsawan dari Bali dan beragama Hindu, sedangkan Raden Soekemi sendiri beragama Islam. Mereka telah memiliki seorang putri yang bernama Sukarmini sebelum Soekarno lahir.:4-6, 247-251 Ketika kecil Soekarno tinggal bersama kakeknya, Raden Hardjokromo di Tulung Agung, Jawa Timur. Ia bersekolah pertama kali di Tulung Agung hingga akhirnya ia pindah ke Mojokerto, mengikuti orangtuanya yang ditugaskan di kota tersebut. Di Mojokerto, ayahnya memasukkan Soekarno ke Eerste Inlandse School, sekolah tempat ia bekerja. Kemudian pada Juni 1911 Soekarno dipindahkan ke Europeesche Lagere School (ELS) untuk memudahkannya diterima di Hogere Burger School (HBS). Pada tahun 1915, Soekarno telah menyelesaikan pendidikannya di ELS dan berhasil melanjutkan ke HBS di Surabaya, Jawa Timur. Ia dapat diterima di HBS atas bantuan seorang kawan bapaknya yang bernama H.O.S. Tjokroaminoto. Tjokroaminoto bahkan memberi tempat tinggal bagi Soekarno di pondokan kediamannya. Di Surabaya, Soekarno banyak bertemu dengan para pemimpin Sarekat Islam, organisasi yang dipimpin Tjokroaminoto saat itu, seperti Alimin, Musso, Darsono, Haji Agus Salim, dan Abdul Muis. Soekarno kemudian aktif dalam kegiatan organisasi pemuda Tri Koro Dharmo yang dibentuk sebagai organisasi dari Budi Utomo. Nama organisasi tersebut kemudian ia ganti menjadi Jong Java (Pemuda Jawa) pada 1918. Selain itu, Soekarno juga aktif menulis di harian Oetoesan Hindia yang dipimpin oleh Tjokroaminoto. Soekarno sewaktu menjadi siswa HBS Soerabaja Soekarno bersama mahasiswa pribumi TH Bandung tahun 1923. Baris belakang dari kiri ke kanan: M. Anwari, Soetedjo, Soetojo, Soekarno, R. Soemani, Soetono, R. M. Koesoemaningrat, Djokoasmo, Marsito. Duduk di depan: Soetoto, M. Hoedioro, Katamso. Tamat HBS Soerabaja bulan Juli 1921, bersama Djoko Asmo rekan satu angkatan di HBS, Soekarno melanjutkan ke Technische Hoogeschool te Bandoeng (sekarang ITB) di Bandung dengan mengambil jurusan teknik sipil pada tahun 1921,:38 setelah dua bulan dia meninggalkan kuliah, tetapi pada tahun 1922 mendaftar kembali:38 dan tamat pada tahun 1926. Soekarno dinyatakan lulus ujian insinyur pada tanggal 25 Mei 1926 dan pada Dies Natalis ke-6 TH Bandung tanggal 3 Juli 1926 dia diwisuda bersama delapan belas insinyur lainnya.:37 Prof. Jacob Clay selaku ketua fakultas pada saat itu menyatakan Terutama penting peristiwa itu bagi kita karena ada di antaranya 3 orang insinyur orang Jawa.[3]:37 Mereka adalah Soekarno, Anwari, dan Soetedjo,[16]:167 selain itu ada seorang lagi dari Minahasa yaitu Johannes Alexander Henricus Ondang.[16]:167 Saat di Bandung, Soekarno tinggal di kediaman Haji Sanusi yang merupakan anggota Sarekat Islam dan sahabat karib Tjokroaminoto. Di sana ia berinteraksi dengan Ki Hajar Dewantara, Tjipto Mangunkusumo, dan Dr. Douwes Dekker, yang saat itu merupakan pemimpin organisasi National Indische Partij.</Text>
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
