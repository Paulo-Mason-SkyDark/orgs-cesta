import React from "react";
import Texto from "../../../componentes/Texto";
import { View, Image, StyleSheet, FlatList } from "react-native";

const Item = ({ item: { imagem, nome } }) => {
  return (
    <View key={nome} style={estilos.item}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  );
};

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    marginLeft: 11,
    color: "#464646",
    lineHeight: 26,
  },
});

export default Item;
