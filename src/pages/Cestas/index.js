import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";

const Cesta = ({ topo, detalhes, itens }) => {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.padding}>
                <Detalhes {...detalhes} />
              </View>
            </>
          );
        }}
      />
    </>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    color: "#464646",
    fontWeight: "bold",
    lineHeight: 32,
    marginTop: 32,
    marginBottom: 8,
  },
  padding: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Cesta;
