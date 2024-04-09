import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.Title}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>@</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif',
        paddingHorizontal: 8

    },
    container: { padding: 8 },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        alignItems:'center',
        justifyContent:'center',borderRadius:4,
        margin:8
    },
    cardElevated: {
        backgroundColor: "#32a852",
        color:'white',
elevation:4,
shadowOffset:{
    width:1,
    height:1
},
textShadowColor:'#a8329b'
    },
  
})