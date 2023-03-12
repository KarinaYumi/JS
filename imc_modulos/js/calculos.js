import RetornaAlunos from "./alunos.js";
var Alunos = RetornaAlunos();

export default function calcularIMC() {
    for (var i = 0; i < Alunos.length; i++) {
        var aluno = Alunos[i];
        
        aluno.IMC = aluno.Peso / (aluno.Altura * aluno.Altura);    
    
        if (aluno.IMC < 18.5) {
            aluno.CategoriaIMC = "Abaixo do peso";
        } else if (aluno.IMC >= 18.5 && aluno.IMC < 25) {
            aluno.CategoriaIMC = "Peso normal";
        } else if (aluno.IMC >= 25 && aluno.IMC < 30) {
            aluno.CategoriaIMC = "Sobrepeso";
        } else if (aluno.IMC >= 30 && aluno.IMC < 35) {
            aluno.CategoriaIMC = "Obesidade grau I";
        } else if (aluno.IMC >= 35 && aluno.IMC < 40) {
            aluno.CategoriaIMC = "Obesidade grau II";
        } else {
            aluno.CategoriaIMC = "Obesidade grau III";
        }
    }
};

export function separarCategoria(){

    var tabela = {
        "Abaixo do peso": 0,
        "Peso normal": 0,
        "Sobrepeso": 0,
        "Obesidade grau I": 0,
        "Obesidade grau II": 0,
        "Obesidade grau III": 0
    };

    for (var i = 0; i < Alunos.length; i++) {
        var aluno = Alunos[i];
        tabela[aluno.CategoriaIMC] += 1;
    }
    var texto = "";
    for (var categoria in tabela) {
        texto += categoria + ": " + tabela[categoria] + "<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
};