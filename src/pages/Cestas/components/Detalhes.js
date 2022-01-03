import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Texto  from '../../../componentes/Texto';


export default function Detalhes({nome, price, logoFazenda, nomeFazenda, descricao}) {
    return <>
    <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.row}>
                <Image source={logoFazenda} style={estilos.image} />
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>
                {descricao}
            </Texto>
            <Texto style={estilos.preco}>{price}</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    image: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
     },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2A9F85',
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 42,
        marginTop: 8,
    },
})