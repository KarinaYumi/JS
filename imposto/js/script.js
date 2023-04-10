import { Usuario } from "./usuario.js";

//RECEBE OS DADOS
export function ReceberDados(){
    const urlParams = new URLSearchParams(window.location.search);
    return objUsuario(
        urlParams.get('nome'), 
        urlParams.get('cpf'), 
        urlParams.get('rendimento'))
}

function objUsuario(nome, cpf, rendimento) {
    return new Usuario(nome, cpf, rendimento);

}
