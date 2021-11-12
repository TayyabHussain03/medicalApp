import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Logo from "../../../assets/logo.png"
import Doc from "../../../assets/doc.png"
import dot from "../../../assets/dot1.png"
import Path from "../../../assets/Path_402.png"

export default function Intro1() {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.text}>Find your Doctor</Text>
            <ImageBackground source={Path} resizeMode="center" style={styles.image}>
                <Image source={Doc} style={styles.doc} />
            </ImageBackground>
            <View style={styles.footer}>
                <Text style={styles.btn}>Skip</Text>
                <Image source={dot} style={styles.dot} />
                <Text style={styles.btn}>Next</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECF1FA',
        height:"100vh"
    },
    image: {
        flex: 1,
        height: 500,
        width: 900,
        // alignItems: "center",
        // marginHorizontal:"auto"
        // justifyContent: "center"
    },
    logo: {
        width: 130,
        height: 115,
        alignItems: "center",
        marginTop: "16%",
        marginHorizontal: "auto",
        // justifyContent: "flex-start",
    },
    doc: {
        width: 286,
        height: 205,
        marginTop: 50,
        // alignItems:"flex-start",
        // justifyContent: "flex-start",
    },
    text: {
        fontSize: 28,
        fontWeight: 700,
        color: '#181461',
        marginTop: 20,
        marginHorizontal: "auto",

    },
    btn: {
        color: '#2A2AC0',
        fontWeight:"600",
        fontSize:20
    },
    dot: {
        width: 40,
        height: 10,

    },
    footer: {
        marginTop: "30%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline",
    },
});
