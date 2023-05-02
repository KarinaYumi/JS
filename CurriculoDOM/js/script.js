let tags = ['div', 'div', 'h1', 'h2', 'h2','h2'
,'h2','h3','p','h3','p','h3','p','h3'
,'p','p','h3','p','p', 'p']
let listaTags = []
let body = document.querySelector('body')

tags.forEach(tag =>{
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});

console.log(listaTags)
listaTags[2].textContent = 'Karina Yumi Ferreira Pinto';
listaTags[3].textContent = 'Rua Aviação dos Mares, 12'
listaTags[4].textContent = 'São Paulo, SP'
listaTags[5].textContent = 'yumisz@hotmail.com'
listaTags[6].textContent = '(11)98653-2781'
listaTags[7].textContent = '| Objetivo Profissional'
listaTags[8].textContent = 'Busco uma primeira oportunidade de emprego onde eu possa aprender a ser um bom profissional, estando disposto a usar minha flexibilidade a meu favor.'
listaTags[9].textContent = '| Formação'
listaTags[10].textContent = 'Pós-Graduação em Odontologia | UFMG (2019)'
listaTags[11].textContent ='| Experiência Profissional'
listaTags[12].textContent ='Auxiliar de telemarketing (2015-2017)'
listaTags[13].textContent = '| Informações Complementares'
listaTags[14].textContent = 'Certificado Olimpíada de Matemática - 2012'
listaTags[15].textContent = 'Curso Excel Avançado - QBCCursos'
listaTags[16].textContent = '| Idiomas'
listaTags[17].textContent = 'Inglês | Intermediário'
listaTags[18].textContent = 'Francês | Básico'
listaTags[19].textContent = '30 de Agosto de 2023'

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
listaTags[0].appendChild(listaTags[15])
listaTags[15].classList.add('conteudo')

//Idiomas
listaTags[0].appendChild(listaTags[16])
listaTags[16].classList.add('titulo_conteudo')

//Resposta
listaTags[0].appendChild(listaTags[17])
listaTags[17].classList.add('conteudo')
listaTags[0].appendChild(listaTags[18])
listaTags[18].classList.add('conteudo')

//Data
listaTags[0].appendChild(listaTags[19])
listaTags[19].classList.add('data')

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
