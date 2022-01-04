import logo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";
import amor from "../../assets/frutas/pessego.png";

const cesta = {
  topo: {
    titulo: "Detalhe Cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jhack Farm",
    descricao:
      "Uma cesta com produtos selecionadoscuidadosamente da fazenda direto parasua cozinha",
    price: "R$ 30,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Iten da cesta ",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
      {
        nome: "Amor",
        imagem: amor,
      },
    ],
  },
};

export default cesta;
