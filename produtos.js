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
    nome: "Café Torrado e Moído",
    descricao: "Café 100% arábica, torra média, moagem para coador. Pacote de 500g.",
    preco: 32.90,
    foto: "assets/produtos/cafe.jpg"
  },
  {
    id: 2,
    nome: "Queijo Minas Artesanal",
    descricao: "Queijo curado, produzido na fazenda. Peça de aproximadamente 1kg.",
    preco: 45.00,
    foto: "assets/produtos/queijo.jpg"
  },
  {
    id: 3,
    nome: "Doce de Leite",
    descricao: "Doce de leite cremoso, feito em tacho de cobre. Pote de 400g.",
    preco: 22.50,
    foto: "assets/produtos/doce-de-leite.jpg"
  },
  {
    id: 4,
    nome: "Rapadura",
    descricao: "Rapadura artesanal de cana, sem conservantes. Pacote com 4 unidades.",
    preco: 18.00,
    foto: "assets/produtos/rapadura.jpg"
  }
];
