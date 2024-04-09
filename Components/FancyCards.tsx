import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.heading}>Fancy Cards</Text>
            <View style={[styles.card, styles.elevatedCards]}>
                <Image
                    source={require('./images/flower-729512_1280.jpg')}
                    style={styles.Image}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Flowe Card</Text>
                    <Text style={styles.cardLable}>Daisy</Text>
                    <Text style={styles.cardDescription}>Choose from our handpicked collection of royalty free flowers images & flower photos in HD.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        paddingHorizontal: 8,
        fontWeight: 'bold'
    },
    card: {
        width: 350,
        height: 360,
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 6
    },
    elevatedCards: {
        backgroundColor: "#FFFFFF",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    Image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
        marginBottom:8,
        borderRadius:6
    },
    cardBody: {},
    cardTitle: {},
    cardLable: {},
    cardDescription: {},
    cardFooter: {}
    ,
})