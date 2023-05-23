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

let tags = ['div', 'div', 'h1', 'img','h2', 'h2','img','h2',
'img','h2','img','h3','p','img','h3','p','img','h3','p','img','h3'
,'p','img','h3','p','img','h3','p', 'h3']
let listaTags = []
let body = document.querySelector('body')

tags.forEach(tag =>{
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});

console.log(listaTags)

listaTags[2].textContent = nome;
listaTags[3].src="../Img/imgEnd.png"
listaTags[4].textContent = endereco
listaTags[5].textContent = cidade
listaTags[6].src="../Img/imgWpp.png"
listaTags[7].textContent = email
listaTags[8].src="../Img/imgEmail.png"
listaTags[9].textContent = telefone
listaTags[10].src="../Img/imgPonto.png"
listaTags[11].textContent = ' Objetivo Profissional'
listaTags[12].textContent = objProfissional
listaTags[13].src="../Img/imgPonto.png"
listaTags[14].textContent = ' Formação'
listaTags[18].textContent = formacao
listaTags[16].src="../Img/imgPonto.png"
listaTags[17].textContent =' Experiência Profissional'
listaTags[15].textContent = expProfissional
listaTags[19].src="../Img/imgPonto.png"
listaTags[20].textContent = 'Informações Complementares'
listaTags[24].textContent = infoComplementar
listaTags[22].src="../Img/imgIdioma.png"
listaTags[23].textContent = ' Idiomas'
listaTags[21].textContent = idiomas

body.appendChild(listaTags[0])
listaTags[0].classList.add('base')

listaTags[0].appendChild(listaTags[1])
listaTags[1].classList.add('topo')

//Nome
listaTags[1].appendChild(listaTags[2])
listaTags[2].classList.add('titulo')

//Icone Endereço
listaTags[1].appendChild(listaTags[3])
listaTags[3].classList.add('icone')

//Endereço
listaTags[1].appendChild(listaTags[4])
listaTags[4].classList.add('subt')

//Estado
listaTags[1].appendChild(listaTags[5])
listaTags[5].classList.add('subt')

//Icone Email
listaTags[1].appendChild(listaTags[6])
listaTags[6].classList.add('iconeTelefone')

//Email
listaTags[1].appendChild(listaTags[7])
listaTags[7].classList.add('subt')

// Icone Wpp
listaTags[1].appendChild(listaTags[8])
listaTags[8].classList.add('iconeEmail')

//Telefone
listaTags[1].appendChild(listaTags[9])
listaTags[9].classList.add('subt')

//Objetivo Profisional
listaTags[0].appendChild(listaTags[10])
listaTags[10].classList.add('iconeInfos')

listaTags[0].appendChild(listaTags[11])
listaTags[11].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[12])
listaTags[12].classList.add('conteudo')

//Formação
listaTags[0].appendChild(listaTags[13])
listaTags[13].classList.add('iconeInfos')

listaTags[0].appendChild(listaTags[14])
listaTags[14].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[15])
listaTags[15].classList.add('conteudo')

//Experiencia Profissional
listaTags[0].appendChild(listaTags[16])
listaTags[16].classList.add('iconeInfos')

listaTags[0].appendChild(listaTags[17])
listaTags[17].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[18])
listaTags[18].classList.add('conteudo')

//Informações Complementares
listaTags[0].appendChild(listaTags[19])
listaTags[19].classList.add('iconeInfos')

listaTags[0].appendChild(listaTags[20])
listaTags[20].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[21])
listaTags[21].classList.add('conteudo')

//Idiomas

listaTags[0].appendChild(listaTags[22])
listaTags[22].classList.add('iconeIdioma')

listaTags[0].appendChild(listaTags[23])
listaTags[23].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[24])
listaTags[24].classList.add('conteudo')


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