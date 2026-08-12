/* ==========================================================
   Raízes de Minas — lógica da loja
   ========================================================== */

// >>> Configurações da loja <<<
const NUMERO_WHATSAPP = "5535999031427"; // 55 + DDD + número, só dígitos
const NOME_LOJA = "Raízes de Minas";

// Estado do carrinho: { [id]: quantidade }
const carrinho = {};

const formatarPreco = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function renderizarCatalogo() {
  const catalogo = document.getElementById("catalog");
  const vazio = document.getElementById("empty-state");

  if (!PRODUTOS || PRODUTOS.length === 0) {
    vazio.hidden = false;
    return;
  }

  PRODUTOS.forEach((produto) => {
    carrinho[produto.id] = 0;

    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = produto.id;

    const fotoHtml = produto.foto
      ? `<img class="product-photo" src="${produto.foto}" alt="${produto.nome}" onerror="this.outerHTML='<div class=&quot;product-photo placeholder&quot;>🌾</div>'">`
      : `<div class="product-photo placeholder">🌾</div>`;

    card.innerHTML = `
      ${fotoHtml}
      <div class="product-info">
        <p class="product-name">${produto.nome}</p>
        <p class="product-desc">${produto.descricao}</p>
        <div class="product-bottom">
          <span class="product-price">${formatarPreco(produto.preco)}</span>
          <div class="stepper">
            <button type="button" class="menos" aria-label="Diminuir quantidade">–</button>
            <span class="qty">0</span>
            <button type="button" class="mais" aria-label="Aumentar quantidade">+</button>
          </div>
        </div>
      </div>
    `;

    const qtyEl = card.querySelector(".qty");
    card.querySelector(".mais").addEventListener("click", () => {
      carrinho[produto.id]++;
      qtyEl.textContent = carrinho[produto.id];
      atualizarBarraCarrinho();
    });
    card.querySelector(".menos").addEventListener("click", () => {
      if (carrinho[produto.id] > 0) {
        carrinho[produto.id]--;
        qtyEl.textContent = carrinho[produto.id];
        atualizarBarraCarrinho();
      }
    });

    catalogo.appendChild(card);
  });
}

function itensNoCarrinho() {
  return PRODUTOS.filter((p) => carrinho[p.id] > 0).map((p) => ({
    ...p,
    quantidade: carrinho[p.id],
    subtotal: p.preco * carrinho[p.id],
  }));
}

function totalCarrinho() {
  return itensNoCarrinho().reduce((soma, item) => soma + item.subtotal, 0);
}

function atualizarBarraCarrinho() {
  const itens = itensNoCarrinho();
  const barra = document.getElementById("cart-bar");
  const totalItens = itens.reduce((soma, i) => soma + i.quantidade, 0);

  if (totalItens === 0) {
    barra.hidden = true;
    return;
  }

  barra.hidden = false;
  document.getElementById("cart-count").textContent =
    totalItens === 1 ? "1 item" : `${totalItens} itens`;
  document.getElementById("cart-total").textContent = formatarPreco(totalCarrinho());
}

function abrirRevisao() {
  const itens = itensNoCarrinho();
  const lista = document.getElementById("review-items");
  lista.innerHTML = "";

  itens.forEach((item) => {
    const linha = document.createElement("div");
    linha.className = "review-item";
    linha.innerHTML = `
      <div>
        <div class="review-item-name">${item.nome}</div>
        <div class="review-item-qty">${item.quantidade} × ${formatarPreco(item.preco)}</div>
      </div>
      <div class="review-item-subtotal">${formatarPreco(item.subtotal)}</div>
    `;
    lista.appendChild(linha);
  });

  document.getElementById("review-total").textContent = formatarPreco(totalCarrinho());
  document.getElementById("review-overlay").hidden = false;
  document.body.style.overflow = "hidden";
}

function fecharRevisao() {
  document.getElementById("review-overlay").hidden = true;
  document.body.style.overflow = "";
}

function montarMensagemWhatsApp() {
  const itens = itensNoCarrinho();
  const nome = document.getElementById("customer-name").value.trim();
  const obs = document.getElementById("customer-note").value.trim();

  let msg = `Olá, *${NOME_LOJA}*! Gostaria de fazer o seguinte pedido:\n\n`;

  itens.forEach((item) => {
    msg += `• ${item.quantidade}x ${item.nome} — ${formatarPreco(item.subtotal)}\n`;
  });

  msg += `\n*Total: ${formatarPreco(totalCarrinho())}*\n`;

  if (nome) msg += `\nNome: ${nome}`;
  if (obs) msg += `\nObservações: ${obs}`;

  return msg;
}

function enviarPedidoWhatsApp() {
  const mensagem = encodeURIComponent(montarMensagemWhatsApp());
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`;
  window.open(url, "_blank");
}

// ---------- Inicialização ----------
document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo();

  document.getElementById("cart-bar").addEventListener("click", abrirRevisao);
  document.getElementById("review-close").addEventListener("click", fecharRevisao);
  document.getElementById("review-overlay").addEventListener("click", (e) => {
    if (e.target.id === "review-overlay") fecharRevisao();
  });
  document.getElementById("send-whatsapp").addEventListener("click", enviarPedidoWhatsApp);
});
