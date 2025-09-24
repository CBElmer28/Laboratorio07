import React from "react";
import {View, Text,StyleSheet} from "react-native";

export const ProductRow = React.memo(function ProductRow({item}) {
  return (
    <View style ={styles.row}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.meta}>{item.category} . S/ {item.price}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  row: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#eee"},
  name:{fontSize:16,fontWeight:"600"},
  meta: {color:"#6b7280"},
});