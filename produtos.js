/*
  ==========================================================
  CATÁLOGO DE PRODUTOS — Raízes de Minas
  ==========================================================

  Para ADICIONAR um produto nesta lista, copie um bloco { ... }
  inteiro, cole abaixo do último e ajuste os valores.

  Para REMOVER um produto, apague o bloco { ... } dele.

  Campos:
    id          -> um número único para cada produto (não repita)
    nome        -> nome do produto
    descricao   -> descrição curta que aparece embaixo do nome
    preco       -> preço em reais, use ponto (não vírgula). Ex: 32.90
    foto        -> caminho da imagem. Coloque o arquivo da foto dentro
                   da pasta "assets/produtos/" e escreva o nome aqui.
                   Se não tiver foto ainda, deixe "" (vazio) que aparece
                   um espaço reservado no lugar.
  ==========================================================
*/

const PRODUTOS = [
  {
    id: 1,
    nome: "Café Fino Sabor Superior",
    descricao: "Café torrado e moído, vácuo puro. Pacote de 500g.",
    preco: 42.00,
    foto: "assets/produtos/cafe-fino-sabor.jpg"
  },
  {
    id: 2,
    nome: "Queijo Minas Padrão",
    descricao: "Queijo Minas padrão Capobe. Peça de meio quilo (500g).",
    preco: 39.00,
    foto: "assets/produtos/queijo-minas.jpg"
  },
  {
    id: 3,
    nome: "Doce de Leite",
    descricao: "Doce de leite Mombó, cremoso. Pote de 500g.",
    preco: 19.90,
    foto: "assets/produtos/doce-de-leite.jpg"
  }
];
