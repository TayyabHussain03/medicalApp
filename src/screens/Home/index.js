import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../../assets/heartlogo.png"

export default function Home() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(42,42,192,0.8)', 'transparent']}
                style={styles.background}
            />
            <Image source={Logo} style={{ width: 100, height: 85 }} />
            <View style={{flexDirection:"row", justifyContent:"space-evenly",marginVertical:12}}>

            <Text style={styles.text}>Medical</Text>
            <Text style={styles.text2}> App</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#181461',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
    },
    text: {
        fontSize: 26,
        fontWeight: 500,
        color: '#fff',
    },
    text2: {
        fontSize: 26,
        color: '#fff',
        fontWeight:200,
    },
});
