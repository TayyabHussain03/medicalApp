import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from "../../../assets/heartlogo.png"
// import Doc from "../../../assets/doc3.png"
// import dot from "../../../assets/dot3.png"

export default function Intro3() {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.text}>Discuss in the Forum</Text>
            {/* <Image source={Doc} style={styles.doc} />
            <View style={styles.footer}>
                <Text style={styles.btn}>Skip</Text>
                <Image source={dot} style={styles.dot} />
                <Text style={styles.btn}>Next</Text>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF1FA',
    },
    logo: {
        width: 100,
        height: 85,
        alignItems: "center",
        marginTop: "20%",
        marginHorizontal: "auto",
    },
    doc: {
        width: 199,
        height: 183,
        marginTop: 50,
        marginHorizontal: "auto",
    },
    text: {
        width:200,
        fontSize: 25,
        textAlign:"center",
        fontWeight: 700,
        color: '#181461',
        marginTop: 20,
        marginHorizontal: "auto",

    },
    btn: {
        color: '#2A2AC0',
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
