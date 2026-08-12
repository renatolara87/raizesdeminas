# Raízes de Minas — Catálogo de Pedidos

Site simples de pedidos, feito para funcionar 100% no celular. O cliente escolhe
os produtos, revisa o pedido e envia tudo pronto pelo WhatsApp — sem precisar
de servidor, banco de dados ou mensalidade.

## Como publicar de graça no GitHub Pages

1. Crie uma conta no [github.com](https://github.com) (se ainda não tiver).
2. Crie um repositório novo (pode ser público), por exemplo `raizes-de-minas`.
3. Envie estes arquivos para o repositório (pela interface do GitHub mesmo,
   arrastando e soltando os arquivos, ou usando o Git no computador).
4. No repositório, vá em **Settings → Pages**.
5. Em "Source", selecione a branch `main` e a pasta `/ (root)`. Salve.
6. Em alguns minutos, o site estará no ar em um endereço como:
   `https://seu-usuario.github.io/raizes-de-minas/`

## Como adicionar ou editar produtos

Abra o arquivo **`produtos.js`** — é o único arquivo que você precisa mexer no
dia a dia. Cada produto é um bloco assim:

```js
{
  id: 5,
  nome: "Nome do produto",
  descricao: "Descrição curta.",
  preco: 29.90,
  foto: "assets/produtos/nome-do-arquivo.jpg"
}
```

- Para **adicionar** um produto: copie um bloco inteiro, cole antes do `];`
  final e mude os dados (use um `id` que ainda não existe).
- Para **remover**: apague o bloco inteiro do produto.
- Para trocar uma **foto**: coloque o arquivo de imagem dentro da pasta
  `assets/produtos/` e escreva o nome exato no campo `foto`.
  Se deixar `foto: ""`, aparece um espaço reservado no lugar da imagem.

## Como trocar o número de WhatsApp

Abra o arquivo **`app.js`** e edite esta linha, no topo do arquivo:

```js
const NUMERO_WHATSAPP = "5535999031427"; // 55 + DDD + número, só dígitos
```

## Como trocar o logotipo

Substitua o arquivo `assets/logo.jpg` por outra imagem **com o mesmo nome**
(`logo.jpg`). Se preferir usar outro nome ou formato (`.png`), atualize as
duas menções a `assets/logo.jpg` dentro de `index.html`.

## Estrutura dos arquivos

```
index.html          → estrutura da página
style.css            → cores, fontes e layout
app.js                → lógica do carrinho e envio pelo WhatsApp
produtos.js            → lista de produtos (edite este arquivo)
assets/logo.jpg         → logotipo da loja
assets/produtos/         → coloque aqui as fotos dos produtos
```
