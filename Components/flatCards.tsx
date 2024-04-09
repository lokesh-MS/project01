import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
function FlatCards() {
  return (
    <View>
        <Text style={styles.Title}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card3</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    Title:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'serif',
       paddingHorizontal:8
     
    },
  container: {
    flex:1,
    flexDirection:'row',
    padding:10,
    justifyContent:'space-between'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 6,
    margin: 6,
  },
  cardOne: {
    backgroundColor: '#e09b24',


  },
  cardTwo: {
    backgroundColor: '#327da8',
  },
  cardThree: {
    backgroundColor: '#4ecc86',
  },
});
export default FlatCards;
