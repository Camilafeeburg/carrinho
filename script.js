const ovos = [
    {
        nome: "Ovo do Snoopy com Charlie Brown",
        preco: 100,
        imagem: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw6e90bb6c/large/1003620_1.png",
    },
    {
        nome: "Ovo La Nut",
        preco: 60,
        imagem: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw7ea17042/large/1003507_1.png",
    },
    {
        nome: "Ovo do Garfield",
        preco: 100,
        imagem: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw2446b29f/large/1003259_1.png",
    },
    {
        nome: "Ovo das Super Poderosas",
        preco: 100,
        imagem: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw9713b34e/large/1003568_1.png",
    },
];

const listagem = document.getElementById("listagem");

ovos.forEach((ovo, index) => {
    const novaLista = document.createElement("li");
    novaLista.classList.add("box1");

    novaLista.innerHTML = `
        <img class="img1" src="${ovo.imagem}" alt="">
        <p class="tex1">${ovo.nome}</p>
        <div class="container-preco">
            <p class="preco">R$ ${ovo.preco.toFixed(2)}</p>
            <button class="botaoComprar">Comprar</button>
        </div>
    `;

    listagem.appendChild(novaLista);

    const botaoComprar = novaLista.querySelector(".botaoComprar");

    botaoComprar.addEventListener("click", () => {
        const listaCarrinho = document.getElementById("listaCarrinho");
        let itemCarrinho = listaCarrinho.querySelector(`.produto1[data-index="${index}"]`);

        if (itemCarrinho) {
            // Incrementar quantidade existente
            const qtdElemento = itemCarrinho.querySelector(".quantidade");
            let quantidadeAtual = parseInt(qtdElemento.textContent);
            qtdElemento.textContent = quantidadeAtual + 1;
        } else {
            // Adicionar novo item com quantidade 1
            itemCarrinho = document.createElement('li');
            itemCarrinho.classList.add("produto1");
            itemCarrinho.setAttribute("data-index", index);
            itemCarrinho.innerHTML = `
                <img src="${ovo.imagem}" alt="">
                <p>${ovo.nome} <span class="quantidade">1</span>x</p>
                <span>R$ ${ovo.preco.toFixed(2)}</span>
                <button class="remover">remover</button>
            `;

            listaCarrinho.appendChild(itemCarrinho);

            const botaoRemover = itemCarrinho.querySelector(".remover");
            botaoRemover.addEventListener("click", () => {
                const qtdElemento = itemCarrinho.querySelector(".quantidade");
                let quantidadeAtual = parseInt(qtdElemento.textContent);
                if (quantidadeAtual > 1) {
                    qtdElemento.textContent = quantidadeAtual - 1;
                } else {
                    itemCarrinho.remove();
                }
            });
        }
    });
});

const btnAbrirCarrinho = document.getElementById("btnAbrirCarrinho");
const carrinho = document.getElementById("carrinho");
const btnFecharCarrinho = document.getElementById("btnFecharCarrinho");

function AbrirCarrinho() {
    carrinho.style.right = "0";
    btnAbrirCarrinho.style.right = "450px";
}

function FecharCarrinho() {
    carrinho.style.right = "-450px";
    btnAbrirCarrinho.style.right = "0";
}

btnAbrirCarrinho.addEventListener('click', AbrirCarrinho);
btnFecharCarrinho.addEventListener('click', FecharCarrinho);
