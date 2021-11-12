import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from "../../../assets/logo1.png"

export default function Intro4() {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.text}>Sign in to continue</Text>
            <TouchableOpacity 
                onPress={() => alert('Hello, world!')}
                style={{ backgroundColor:'#2A2AC0', paddingVertical:10,width: "90%", marginHorizontal:"auto",marginTop:"29px",borderRadius:"10px"
               }}>
                <Text style={{ fontSize: 20, color: '#fff', textAlign:"center" }}>Sign in with mobile number</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>or</Text>
            <TouchableOpacity 
                onPress={() => alert('Hello, world!')}
                style={{ backgroundColor:'#5252ba', paddingVertical:10,width: "90%", marginHorizontal:"auto",marginTop:"20px",borderRadius:"10px"
               }}>
                <Text style={{ fontSize: 20, color: '#fff', textAlign:"center" }}>Sign in with Facebook</Text>
            </TouchableOpacity>
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
        marginTop: "10%",
        marginHorizontal: "auto",
    },
    doc: {
        width: 199,
        height: 183,
        marginTop: 50,
        marginHorizontal: "auto",
    },
    heading: {
        width: 200,
        fontSize: 25,
        textAlign: "center",
        fontWeight: 700,
        color: '#181461',
        marginTop: 50,
        marginHorizontal: "auto",

    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: 500,
        color: '#12111c',
    },
    text2: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: 500,
        color: '#12111c',
        marginVertical:15,
    },
});
