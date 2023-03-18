import { ReceberDados } from "./script.js";

document.addEventListener(
    'mouseover', () => {
        var usuario = ReceberDados();
            imprimirdados(usuario);
    }
)
function imprimirdados(usuario){

    document.getElementById('nome').value = 'Nome: '+ usuario.nome
    document.getElementById('cpf').value ='CPF: '+  usuario.cpf,
    document.getElementById('rendimento').value = 'Rendimento: R$ ' + usuario.rendimento,
    document.getElementById('aliquota').value = 'Aliquota: '+ usuario.aliquota + '%',
    document.getElementById('valorImposto').value = 'Imposto R$: ' +usuario.valorImposto
}

