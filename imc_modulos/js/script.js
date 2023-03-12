import RetornaAlunos from "./alunos.js";
import calcularIMC from "./calculos.js";
import apresentarIMC from "./printar.js";
import {apresentarTodos} from "./printar.js";
import {separarCategoria} from "./calculos.js";

var Alunos = RetornaAlunos();

Alunos = calcularIMC();
document.getElementById("btnProcurar").addEventListener("click", apresentarIMC);
document.getElementById("btnTodos").addEventListener("click", apresentarTodos);
document.getElementById("btnCategoria").addEventListener("click", separarCategoria);


