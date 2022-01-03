import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topo from './components/Topo';
import Detalhes from './components/Detalhes';



const Cesta = ({topo, detalhes}) => {
    return <>
        <Topo {...topo}/>
        <View style={estilos.padding}>
            <Detalhes {...detalhes} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    padding: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default Cesta;