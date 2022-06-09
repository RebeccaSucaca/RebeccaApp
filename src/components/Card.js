import React from 'react';
import {View, StyleSheet} from 'react-native';
function Card({children, bgColor}) {
  return (
    <>
      {/* <View style={[styles.card,{backgroundColor: 'lightgray'}]}> */}
      <View style={[styles.card, {backgroundColor: bgColor}]}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    marginBottom: 5,
    padding: 20,
    borderRadius: 30,
  },
});
export default Card;
