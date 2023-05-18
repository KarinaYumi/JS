import construirTela from "./objeto.js";

let listaTags = construirTela()

listaTags[26].addEventListener('click', function(event){
    event.preventDefault()
    let inputs = document.querySelectorAll('input')

    let inputNome = inputs[0].value
    let inputEndereco = inputs[1].value
    let inputCidade = inputs[2].value
    let inputEmail = inputs[3].value
    let inputTelefone = inputs[4].value
    let inputObjProfissional = inputs[5].value
    let inputFormacao = inputs[6].value
    let inputExpProfissional = inputs[7].value
    let inputInfo = inputs[8].value
    let inputIdiomas = inputs[9].value


    let ps = document.querySelectorAll('p')

    window.location.href = `../Curriculo/resposta.html?nome=${inputNome}&endereco=${inputEndereco}
    &cidade=${inputCidade}&email=${inputEmail}&telefone=${inputTelefone}&objProfissional=${inputObjProfissional}
    &formacao=${inputFormacao}&expProfissional=${inputExpProfissional}&infoComplementar=${inputInfo}&idiomas=${inputIdiomas}`

})










