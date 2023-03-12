import RetornaAlunos from "./alunos.js";
var Alunos = RetornaAlunos();

export default function apresentarIMC() {
    var Numero = document.getElementById("Numero").value;
    Numero--;
    var aluno = Alunos[Numero];
    if ( Numero < 0 || Numero > 19){
        document.getElementById("resultado").innerHTML = "Número inválido!";
    } 
    else {
        var texto = "";
        texto = aluno.Nome + " - " + aluno.IMC.toFixed(2) + " Categorizado(a): "+ aluno.CategoriaIMC +"<br>";
        document.getElementById("resultado").innerHTML = texto;
    };
};

export function apresentarTodos(){
    var texto = "";
    for (var i = 0; i < Alunos.length; i++) {
        var lugar = i + 1;
        var aluno = Alunos[i];
        texto += lugar + " | " + aluno.Nome + " -- IMC: " + aluno.IMC.toFixed(2) + " -  "+ aluno.CategoriaIMC +"<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
}