var listaTags = []
var form = document.querySelector('form')

export default function construirTela(){

    incluirNaTela()
    listaTags[0].classList.add('base_Form');
    listaTags[1].textContent = "Formulário de Currículo";
    listaTags[3].textContent = 'Nome Completo:';
    listaTags[4].name = 'nome';
    listaTags[6].textContent = 'Endereço:';
    listaTags[7].name = 'endereco';
    listaTags[8].textContent = 'Cidade:';
    listaTags[9].name = 'cidade:';
    listaTags[10].textContent = 'Telefone:  ';
    listaTags[11].name = 'telefone:';
    listaTags[12].textContent = 'E-mail: ';
    listaTags[13].name = 'email:';
    listaTags[14].textContent = 'Informações Profissionais'
    listaTags[16].textContent = 'Objetivo Profissional: '
    listaTags[17].name = 'objProfissional'
    listaTags[20].textContent = 'Formação:'
    listaTags[21].name = 'formacao'
    listaTags[18].textContent = 'Experiência Profissional: '
    listaTags[19].name = 'expProfissional'
    listaTags[22].textContent = ' Idiomas:'
    listaTags[23].name = 'idiomas'
    listaTags[24].textContent = ' Informações Complementares:'
    listaTags[25].name = 'infoComplementar'

    //botão
    listaTags[26].textContent = 'Gerar Currículo'


    listaTags[0].appendChild(listaTags[1])
    listaTags[1].classList.add('titulo_Form')

    listaTags[0].appendChild(listaTags[2])
    listaTags[2].classList.add('div_Nome')

    listaTags[2].appendChild(listaTags[3])
    listaTags[3].classList.add('label')

    listaTags[2].appendChild(listaTags[4])
    listaTags[4].classList.add('input')

    listaTags[0].appendChild(listaTags[5])
    listaTags[5].classList.add('div_Dados')

    listaTags[5].appendChild(listaTags[6])
    listaTags[6].classList.add('label_Dados')

    listaTags[5].appendChild(listaTags[7])
    listaTags[7].classList.add('input_Dados')

    listaTags[5].appendChild(listaTags[8])
    listaTags[8].classList.add('label_Dados')

    listaTags[5].appendChild(listaTags[9])
    listaTags[9].classList.add('input_Dados')

    listaTags[5].appendChild(listaTags[10])
    listaTags[10].classList.add('label_Dados')

    listaTags[5].appendChild(listaTags[11])
    listaTags[11].classList.add('input_Dados')

    listaTags[5].appendChild(listaTags[12])
    listaTags[12].classList.add('label_Dados')

    listaTags[5].appendChild(listaTags[13])
    listaTags[13].classList.add('input_Dados')

    listaTags[0].appendChild(listaTags[14])
    listaTags[14].classList.add('h2')

    listaTags[0].appendChild(listaTags[15])
    listaTags[15].classList.add('div_DadosProf')

    listaTags[15].appendChild(listaTags[16])
    listaTags[16].classList.add('label_Dados')

    listaTags[15].appendChild(listaTags[17])
    listaTags[17].classList.add('txt_Dados')

    listaTags[15].appendChild(listaTags[18])
    listaTags[18].classList.add('label_DadosExp')

    listaTags[15].appendChild(listaTags[19])
    listaTags[19].classList.add('txt_Dados')

    listaTags[15].appendChild(listaTags[20])
    listaTags[20].classList.add('label_Dados')

    listaTags[15].appendChild(listaTags[21])
    listaTags[21].classList.add('input_DadosFormacao')

    listaTags[15].appendChild(listaTags[22])
    listaTags[22].classList.add('label_Dados')

    listaTags[15].appendChild(listaTags[23])
    listaTags[23].classList.add('input_Dados')

    listaTags[15].appendChild(listaTags[24])
    listaTags[24].classList.add('label_Dados')

    listaTags[15].appendChild(listaTags[25])
    listaTags[25].classList.add('txt_DadosInfo')

    listaTags[15].appendChild(listaTags[26])
    listaTags[26].classList.add('btn_Enviar')

    return listaTags 

    return listaTags
}

function incluirNaTela(){
    let tag = ['div','h1', 'div', 'label', 'input', 'div', 'label', 'input', 'label', 'input', 'label', 'input', 
    'label', 'input', 'h2', 'div', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input',
    'button']
    tag.forEach(t => {
        listaTags = criarTags(t)
    });
    console.log(listaTags)

}

function criarTags(tag){

    let novaTag = document.createElement(tag)
    listaTags.push(novaTag)
    form.appendChild(novaTag)

    return listaTags
}