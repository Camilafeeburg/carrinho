const ovos = [
    {
        nome: "Ovo do Snoopy com Charlie Brown",
        preco:  100,
        imagem: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw6e90bb6c/large/1003620_1.png",
    },
    {
        nome: "Ovo La Nut",
        preco:  60,
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
]

ovos.forEach(ovos =>{
    const novaLista = document.createElement("li");
    novaLista.classList.add("box1");
    
    novaLista.innerHTML =`
        <img class="img1" src="${ovos.imagem}" alt="">
            <p class="tex1">${ovos.nome}</p>
            <div class="container-preco">
                <p class="preco">R$ ${ovos.preco.toFixed(2)}</p>
                <button class="botao">Comprar</button>
            </div> `;
            listagem.appendChild(novaLista);
});

const btnAbrirCarrinho = document.getElementById("btnAbrirCarrinho");
const carrinho = document.getElementById("carrinho");
const btnFecharCarrinho = document.getElementById("btnFecharCarrinho")

function AbrirCarrinho() {
    carrinho.style.right = "0"
    btnAbrirCarrinho.style.right = "450px"
}
function FecharCarrinho() {
    carrinho.style.right = "-450px"
    btnAbrirCarrinho.style.right = "0"
}

btnAbrirCarrinho.addEventListener('click', AbrirCarrinho)
btnFecharCarrinho.addEventListener('click', FecharCarrinho)