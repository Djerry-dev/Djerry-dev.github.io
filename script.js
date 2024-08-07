const menuS = document.getElementById ('menuS')
const testm = document.getElementById ('testm')
const numPtod = document.getElementById ('tpItProd').firstChild
const vtotal = document.getElementById ('vtotal')
const tpItProd = document.querySelector ('.tpItProd')
const buy = document.getElementById ('buy')
const but = document.getElementById ('but')
const carinho = document.getElementById ('carinho')
const prodt = document.getElementById ('prodt')



const adicionar = ()=>{
  const p_prpprio = document.createElement ('div');
  const imProd = document.createElement ('img');
  const nmp = document.createElement ('label');
  const prec = document.createElement ('div');
  const anteg = document.createElement ('span');
  const depoisi = document.createElement ('div');
  const vdeposi = document.createElement ('span');
  const coddeposi = document.createElement ('span');
  const add = document.createElement ('div');
  const i = document.createElement ('i');
  const adicio5 = document.createElement ('button');
  p_prpprio.setAttribute ('class', 'p_prpprio')
  imProd.setAttribute ('class', 'imProd')
  imProd.setAttribute ('src', 'Imagens/produto1.jpg')
  nmp.setAttribute ('class', 'nmp')
  nmp.innerHTML = "Nome do Produto"
  prec.setAttribute ('class', 'preco')
  anteg.setAttribute ('class', 'antes')
  anteg.innerHTML = '42006MZN'
  depoisi.setAttribute ('class', 'depois')
  vdeposi.innerHTML = 3500;
  coddeposi.innerHTML = 'MZN'
  add.setAttribute ('class', 'add')
  i.setAttribute ('class', 'fas fa-shopping-cart fa-4x mb-3 des')
  i.setAttribute ('style', 'color: #eee ! important')
  adicio5.setAttribute ('class', 'adicione')
  adicio5.innerHTML = 'Add Carinho'
  p_prpprio.appendChild (imProd)
  p_prpprio.appendChild (nmp)
  p_prpprio.appendChild (prec)
  prec.appendChild (anteg)
  prec.appendChild (depoisi)
  depoisi.appendChild (vdeposi)
  depoisi.appendChild (coddeposi)
  p_prpprio.appendChild (add)
  add.appendChild (i)
  add.appendChild (adicio5)
  prodt.appendChild (p_prpprio)

}

adicionar ()
adicionar ()
adicionar ()
adicionar ()



menuS.addEventListener ('click', ()=>{
  testm.classList.toggle ('testmv')
  menuS.classList.toggle ('ativo')
})

window.addEventListener ('scroll', (evt)=>{
  testm.classList.remove('testmv')
  menuS.classList.remove('ativo')
  if (window.scrollY > 461){
    document.querySelector('.bxi').style.position = 'absolute';
    document.querySelector('.bxi').style.top = '80px';
    document.querySelector('.bxi').style.zIndex = 'initial';
    
  }else {
    document.querySelector('.bxi').style.position = 'fixed';
    document.querySelector('.bxi').style.top = '80px';
    document.querySelector('.bxi').style.zIndex = '84757477477';
  }
  
  
})

let numero = 0;
let produtos = [];
let prod = [];

function contarProdutos(produtos) {
  const contagem = {};

  produtos.forEach(produto => {
    if (contagem[produto]) {
      contagem[produto]++;
    } else {
      contagem[produto] = 1;}
    });
    const resultado = [];
    for (const produto in contagem) {
      resultado.push(`${contagem[produto]} - ${produto}`);
      
    }

    return resultado;
}

const adicione = [... document.querySelectorAll ('.adicione')]


adicione.map ((ele, ind)=>{
  ele.addEventListener ('click', (evt)=>{

    nome = (evt.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML)
    
    const preco = (evt.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild.innerText)
    numero++
    numPtod.innerHTML = numero
    vtotal.innerHTML = parseInt(vtotal.innerText) + parseInt(preco);
    produtos.push (nome + ' - ' + preco + 'MZN')
    prod = contarProdutos (produtos)
    tpItProd.style.animation = 'anima';
    tpItProd.style.animationDuration= '3s';
    tpItProd.style.animationDelay= '0s';
    tpItProd.style.animationPlayState='running';
    tpItProd.style.animationIterationCount= 1;
    tpItProd.style.animationDirection='alternate';
    carinho.classList.add ('vercarinho')


    
  })
})

const fechar =()=>{
  carinho.classList.remove ('vercarinho')
  vtotal.innerHTML = '0.00'
  numPtod.innerHTML = 0
}

const escolher =()=>{
  carinho.classList.remove ('vercarinho')
}

const carrinhoCompra =()=>{
  carinho.classList.toggle ('vercarinho')
}


buy.addEventListener ('click', ()=>{
  let mensagem = "Olá, gostaria de mais informações sobre os seguintes produtos: ";

 let listaProdutos = prod.map(prod => encodeURIComponent(prod)).join('%2C%20');

  let mensagemCompleta = `${'https://wa.me/258871586297?text='}${mensagem}
  *[${listaProdutos}]*.
  Por favor, me informe sobre _disponibilidade_, _tamanhos_, e _formas de pagamento_. Visto que o total deu *_${vtotal.innerHTML}MZN_*. Obrigado!`;
  but.setAttribute ('href', mensagemCompleta)
  but.click ()

})

