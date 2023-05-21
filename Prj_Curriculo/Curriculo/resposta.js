const urlParams = new URLSearchParams(window.location.search);

const nome = urlParams.get("nome") 
const idade = urlParams.get("idade")
const endereco = urlParams.get("endereco")
const cidade = urlParams.get("cidade")
const email = urlParams.get("email")
const telefone = urlParams.get("telefone")
const objProfissional = urlParams.get("objProfissional")
const formacao = urlParams.get("formacao")
const expProfissional = urlParams.get("expProfissional")
const infoComplementar = urlParams.get("infoComplementar")
const idiomas = urlParams.get("idiomas")
const foto = urlParams.get("foto")

let tags = ['div', 'div', 'h1', 'h2', 'h2','h2'
,'h2','h3','p','h3','p','h3','p','h3'
,'p','h3','p','h3','p', 'h3']
let listaTags = []
let body = document.querySelector('body')

tags.forEach(tag =>{
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});

console.log(listaTags)
listaTags[2].textContent = nome;
listaTags[3].textContent = endereco
listaTags[4].textContent = cidade
listaTags[5].textContent = email
listaTags[6].textContent = telefone
listaTags[7].textContent = '| Objetivo Profissional'
listaTags[8].textContent = objProfissional
listaTags[9].textContent = '| Formação'
listaTags[12].textContent = formacao
listaTags[11].textContent ='| Experiência Profissional'
listaTags[10].textContent = expProfissional
listaTags[13].textContent = '| Informações Complementares'
listaTags[14].textContent = infoComplementar
listaTags[15].textContent = '| Idiomas'
listaTags[16].textContent = idiomas

body.appendChild(listaTags[0])
listaTags[0].classList.add('base')

listaTags[0].appendChild(listaTags[1])
listaTags[1].classList.add('topo')

//Nome
listaTags[1].appendChild(listaTags[2])
listaTags[2].classList.add('titulo')

//Endereço
listaTags[1].appendChild(listaTags[3])
listaTags[3].classList.add('subt')

//Estado
listaTags[1].appendChild(listaTags[4])
listaTags[4].classList.add('subt')

//Email
listaTags[1].appendChild(listaTags[5])
listaTags[5].classList.add('subt')

//Telefone
listaTags[1].appendChild(listaTags[6])
listaTags[6].classList.add('subt')

//Objetivo Profisional
listaTags[0].appendChild(listaTags[7])
listaTags[7].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[8])
listaTags[8].classList.add('conteudo')

//Formação
listaTags[0].appendChild(listaTags[9])
listaTags[9].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[10])
listaTags[10].classList.add('conteudo')

//Experiencia Profissional
listaTags[0].appendChild(listaTags[11])
listaTags[11].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[12])
listaTags[12].classList.add('conteudo')

//Informações Complementares
listaTags[0].appendChild(listaTags[13])
listaTags[13].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[14])
listaTags[14].classList.add('conteudo')

//Idiomas
listaTags[0].appendChild(listaTags[15])
listaTags[15].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[16])
listaTags[16].classList.add('conteudo')


function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}

//Botão Imprimir
var botao = document.createElement('input')
botao.classList.add('btn')
botao.type = 'button'
botao.value = 'Imprimir'

botao.onclick =() => {
    botao.style.display = 'none'
    window.print()

}

body.appendChild(botao)