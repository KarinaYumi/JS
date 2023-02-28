var Alunos = [{
    
    "Nome": "Karina Ferreira ",
    "Idade": 18,
    "Altura": 1.70,
    "Peso": 57,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Andressa Soares",
    "Idade": 14,
    "Altura": 1.50,
    "Peso": 46,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Milena Cruz",
    "Idade": 15,
    "Altura": 1.60,
    "Peso": 52,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Maria Das Graças",
    "Idade": 17,
    "Altura": 1.77,
    "Peso": 67,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Victor Soares",
    "Idade": 21,
    "Altura": 1.87,
    "Peso": 79,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Angela",
    "Idade": 14,
    "Altura": 1.62,
    "Peso": 51,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Antonio Viti",
    "Idade": 18,
    "Altura": 1.86,
    "Peso": 87,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Lucas César",
    "Idade": 21,
    "Altura": 1.78,
    "Peso": 67,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Luccas Goda",
    "Idade": 18,
    "Altura": 1.75,
    "Peso": 68,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "João Caetano",
    "Idade": 16,
    "Altura": 1.70,
    "Peso": 60,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Madalena Engue",
    "Idade": 18,
    "Altura": 1.61,
    "Peso": 59,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Thiago Lisboa",
    "Idade": 17,
    "Altura": 1.73,
    "Peso": 63,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Julio ",
    "Idade": 18,
    "Altura": 1.92,
    "Peso": 81,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{ "Nome": "Vitor",
    "Idade": 18,
    "Altura": 1.54,
    "Peso": 87,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Antonieta",
    "Idade": 17,
    "Altura": 1.74,
    "Peso": 63,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Carmen",
    "Idade": 28,
    "Altura": 1.65,
    "Peso": 123,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Cosme",
    "Idade": 13,
    "Altura": 1.60,
    "Peso": 432,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Diogo",
    "Idade": 18,
    "Altura": 1.87,
    "Peso": 237,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Diego",
    "Idade": 15,
    "Altura": 1.88,
    "Peso": 43,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },

{
    "Nome": "Kaio",
    "Idade": 17,
    "Altura": 1.79,
    "Peso": 32,
    "IMC": 0,
    "CategoriaIMC": 'Sem class'
    },
];

function calcularIMC() {
    for (var i = 0; i < Alunos.length; i++) {
        var aluno = Alunos[i];
        aluno.IMC = aluno.Peso / (aluno.Altura * aluno.Altura);    
    
        // ORGANIZAR IMC
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

calcularIMC();

function apresentarIMC() {
    var Numero = document.getElementById("Numero").value;
    Numero--;
    var aluno = Alunos[Numero];
    if ( Numero < 0 || Numero > 19){
        document.getElementById("resultado").innerHTML = "Número inválido!";
    }else{
        var texto = "";
        texto += aluno.Nome + " - " + aluno.IMC.toFixed(2) + " Categorizado(a): "+ aluno.CategoriaIMC +"<br>";
        document.getElementById("resultado").innerHTML = texto;
    };
};

function separarCategoria(){

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

function apresentarTodos(){
    var texto = "";
    for (var i = 0; i < Alunos.length; i++) {
        var lugar = i + 1;
        var aluno = Alunos[i];
        texto += lugar + " | " + aluno.Nome + " -- IMC: " + aluno.IMC.toFixed(2) + " -  "+ aluno.CategoriaIMC +"<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
}