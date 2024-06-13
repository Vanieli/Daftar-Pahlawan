import React from "react";
import {
  TouchableOpacity,
  View,
  backgroundColor,
  Text,
  Image,
  lineHeight,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// page profil pahlawan
const Detail = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={{ flex: 1, width: "100%", alignItems: "center" }}
    >
      <View style={{ flex: 1, width: "100%" }}>
        <View
          style={{
            backgroundColor: "white",
            flexShrink: 0,
            width: "100%",
            height: 106,
            justifyContent: "flex-end",
            zIndex: 1,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 50 }}>
            <Image
              source={require("./assets/arrow.png")}
              style={{ marginBottom: 25, marginLeft: 30 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontStyle: "normal",
                fontWeight: 700,
                alignItems: "center",
                marginBottom: 25,
                marginLeft: 58,
              }}
            >
              Profil Pahlawan
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                height: 2,
                flex: 1,
                backgroundColor: "#AC5300",
                alignSelf: "flex-end",
              }}
            ></View>
          </View>
        </View>
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <View style={{ flex: 1, width: "100%", height: 4000, top: 43 }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("./assets/detailSoekarno.png")}
                style={{ width: 309, height: 413 }}
              />
              {/* ini view front layer */}
              <View
                style={{
                  backgroundColor: "#C39A74",
                  width: 341,
                  height: 90,
                  flexShrink: 0,
                  borderRadius: 14,
                  zIndex: 1,
                }}
              >
                <View
                  style={{
                    width: 331,
                    height: 79,
                    borderWidth: 4,
                    borderColor: "#0000009E",
                    borderStyle: "dashed",
                    borderRadius: 14,
                    marginHorizontal: 5,
                    marginVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#414141",
                      textAlign: "center",
                      fontSize: 23,
                      fontStyle: "normal",
                      fontWeight: 600,
                      marginVertical: 20,
                    }}
                  >
                    Dr. Ir. H. Soekarno
                  </Text>
                </View>
              </View>
              {/* ini view back layer */}
              <View style={{ position: "relative" }}>
                <View
                  style={{
                    backgroundColor: "#C39A74",
                    width: 291,
                    height: 165,
                    borderRadius: 14,
                    zIndex: 0,
                    marginVertical: -90,
                  }}
                >
                  <View
                    style={{
                      width: 281,
                      height: 154,
                      borderWidth: 4,
                      borderColor: "#0000009E",
                      borderStyle: "dashed",
                      borderRadius: 14,
                      marginHorizontal: 5,
                      marginVertical: 5,
                      zIndex: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: "#414141",
                        textAlign: "center",
                        fontSize: 17,
                        fontStyle: "normal",
                        fontWeight: "800",
                        top: 100,
                        zIndex: 0,
                      }}
                    >
                      Pahlawan Kemerdekaan
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#C39A74",
                  width: 331,
                  height: 294,
                  top: 200,
                  borderRadius: 14,
                }}
              >
                <View
                  style={{
                    width: 321,
                    height: 283,
                    borderWidth: 4,
                    borderColor: "#0000009E",
                    borderStyle: "dashed",
                    borderRadius: 14,
                    marginHorizontal: 5,
                    marginVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#3A3B3B",
                      textAlign: "center",
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: 700,
                      top: 35,
                    }}
                  >
                    Detail
                  </Text>
                  <Text
                    style={{
                      color: "#3A3B3B",
                      textAlign: "center",
                      fontSize: 17,
                      fontStyle: "normal",
                      fontWeight: 500,
                      top: 80,
                    }}
                  >
                    Nama : Achmed Soekarno
                  </Text>
                  <Text
                    style={{
                      color: "#3A3B3B",
                      textAlign: "center",
                      fontSize: 17,
                      fontStyle: "normal",
                      fontWeight: 500,
                      top: 100,
                    }}
                  >
                    Lahir : 6 Juni 1901
                  </Text>
                  <Text
                    style={{
                      color: "#3A3B3B",
                      textAlign: "center",
                      fontSize: 17,
                      fontStyle: "normal",
                      fontWeight: 500,
                      top: 120,
                    }}
                  >
                    Wafat : 21 Juni 1970
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#C39A74",
                  width: 331,
                  height: 2700,
                  top: 300,
                  borderRadius: 14,
                }}
              >
                <View
                  style={{
                    width: 321,
                    height: 2689,
                    borderWidth: 4,
                    borderColor: "#0000009E",
                    borderStyle: "dashed",
                    borderRadius: 14,
                    marginHorizontal: 5,
                    marginVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#3A3B3B",
                      textAlign: "center",
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: 700,
                      top: 35,
                    }}
                  >
                    Riwayat Hidup
                  </Text>
                  <Text
                    style={{
                      color: "#3A3B3B",
                      width: 270,
                      textAlign: "justify",
                      left: 22,
                      fontSize: 17,
                      fontStyle: "normal",
                      fontWeight: 500,
                      height: 10000,
                      top: 80,
                    }}
                  >
                    {" "}
                    "Soekarno dilahirkan dengan seorang ayah yang bernama Raden
                    Soekemi Sosrodihardjo (1873=1945) dan ibunya yaitu Ida Ayu
                    Nyoman Rai (1881=1958). Keduanya bertemu ketika Raden
                    Soekemi yang merupakan seorang guru ditempatkan di Sekolah
                    Dasar Pribumi di Singaraja, Bali. Nyoman Rai merupakan
                    keturunan bangsawan dari Bali dan beragama Hindu, sedangkan
                    Raden Soekemi sendiri beragama Islam. Mereka telah memiliki
                    seorang putri yang bernama Sukarmini sebelum Soekarno
                    lahir.:4-6, 247-251 Ketika kecil Soekarno tinggal bersama
                    kakeknya, Raden Hardjokromo di Tulung Agung, Jawa Timur. Ia
                    bersekolah pertama kali di Tulung Agung hingga akhirnya ia
                    pindah ke Mojokerto, mengikuti orangtuanya yang ditugaskan
                    di kota tersebut. Di Mojokerto, ayahnya memasukkan Soekarno
                    ke Eerste Inlandse School, sekolah tempat ia bekerja.
                    Kemudian pada Juni 1911 Soekarno dipindahkan ke Europeesche
                    Lagere School (ELS) untuk memudahkannya diterima di Hogere
                    Burger School (HBS). Pada tahun 1915, Soekarno telah
                    menyelesaikan pendidikannya di ELS dan berhasil melanjutkan
                    ke HBS di Surabaya, Jawa Timur. Ia dapat diterima di HBS
                    atas bantuan seorang kawan bapaknya yang bernama H.O.S.
                    Tjokroaminoto. Tjokroaminoto bahkan memberi tempat tinggal
                    bagi Soekarno di pondokan kediamannya. Di Surabaya, Soekarno
                    banyak bertemu dengan para pemimpin Sarekat Islam,
                    organisasi yang dipimpin Tjokroaminoto saat itu, seperti
                    Alimin, Musso, Darsono, Haji Agus Salim, dan Abdul Muis.
                    Soekarno kemudian aktif dalam kegiatan organisasi pemuda Tri
                    Koro Dharmo yang dibentuk sebagai organisasi dari Budi
                    Utomo. Nama organisasi tersebut kemudian ia ganti menjadi
                    Jong Java (Pemuda Jawa) pada 1918. Selain itu, Soekarno juga
                    aktif menulis di harian Oetoesan Hindia yang dipimpin oleh
                    Tjokroaminoto. Soekarno sewaktu menjadi siswa HBS Soerabaja
                    Soekarno bersama mahasiswa pribumi TH Bandung tahun 1923.
                    Baris belakang dari kiri ke kanan: M. Anwari, Soetedjo,
                    Soetojo, Soekarno, R. Soemani, Soetono, R. M.
                    Koesoemaningrat, Djokoasmo, Marsito. Duduk di depan:
                    Soetoto, M. Hoedioro, Katamso. Tamat HBS Soerabaja bulan
                    Juli 1921, bersama Djoko Asmo rekan satu angkatan di HBS,
                    Soekarno melanjutkan ke Technische Hoogeschool te Bandoeng
                    (sekarang ITB) di Bandung dengan mengambil jurusan teknik
                    sipil pada tahun 1921,:38 setelah dua bulan dia meninggalkan
                    kuliah, tetapi pada tahun 1922 mendaftar kembali:38 dan
                    tamat pada tahun 1926. Soekarno dinyatakan lulus ujian
                    insinyur pada tanggal 25 Mei 1926 dan pada Dies Natalis ke-6
                    TH Bandung tanggal 3 Juli 1926 dia diwisuda bersama delapan
                    belas insinyur lainnya.:37 Prof. Jacob Clay selaku ketua
                    fakultas pada saat itu menyatakan Terutama penting peristiwa
                    itu bagi kita karena ada di antaranya 3 orang insinyur orang
                    Jawa.[3]:37 Mereka adalah Soekarno, Anwari, dan
                    Soetedjo,[16]:167 selain itu ada seorang lagi dari Minahasa
                    yaitu Johannes Alexander Henricus Ondang.[16]:167 Saat di
                    Bandung, Soekarno tinggal di kediaman Haji Sanusi yang
                    merupakan anggota Sarekat Islam dan sahabat karib
                    Tjokroaminoto. Di sana ia berinteraksi dengan Ki Hajar
                    Dewantara, Tjipto Mangunkusumo, dan Dr. Douwes Dekker, yang
                    saat itu merupakan pemimpin organisasi National Indische
                    Partij."{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View></View>
          <View></View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default Detail;
