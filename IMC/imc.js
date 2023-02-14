var aluno01 = {
    nome: "Gabriel",
    idade: 23,
    peso: '52',
    altura: '1.64',
    imc: 0
}

var aluno02 = {
    nome: "Aline",
    idade: 17,
    peso: '61',
    altura: '1.59',
    imc: 0
}

var aluno03 = {
    nome: "Antonio",
    idade: 13,
    peso: '5',
    altura: '1.60',
    imc: 0
}

var aluno04 = {
    nome: "Livia",
    idade: 14,
    peso: '45',
    altura: '1.55',
    imc: 0
}

var aluno05 = {
    nome: "Virgilio",
    idade: 17,
    peso: '58',
    altura: '1.67',
    imc: 0
}

 function calculaIMC(aluno){
    return aluno.imc = (aluno.peso/(aluno.altura*aluno.altura)).toFixed(2)

}

calculaIMC(aluno01)
calculaIMC(aluno02)
calculaIMC(aluno03)
calculaIMC(aluno04)
calculaIMC(aluno05)

function apresentaIMC(aluno){
    var {nome, imc} = aluno

console.log( nome + " |  IMC:  " + imc)
}

apresentaIMC(aluno01)
apresentaIMC(aluno02)
apresentaIMC(aluno03)
apresentaIMC(aluno04)
apresentaIMC(aluno05)
