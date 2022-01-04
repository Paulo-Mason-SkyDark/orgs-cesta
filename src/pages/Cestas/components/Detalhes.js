import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Texto  from '../../../componentes/Texto';


export default function Detalhes({nome, price, logoFazenda, nomeFazenda, descricao, botao}) {
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
            <TouchableOpacity style={estilos.botao}>
                <Texto style={estilos.textoBotao}>{botao}</Texto>
            </TouchableOpacity>
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
    botao:{
        marginTop: 16,
        backgroundColor: '#2A9f86',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 26,
    },
})