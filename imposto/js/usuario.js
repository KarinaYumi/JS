export class Usuario {

    constructor(nome, cpf, rendimento) {

        this.nome = nome 
        if( nome == ""){
            alert ("Preencha o campo 'nome'");
            window.location.href = "index.html";
        };

        this.rendimento = rendimento 
        if( rendimento < 0 || rendimento == ""){
            alert ("Informe um rendimento válido");
            window.location.href = "index.html";
        };
        this.cpf = this.VerificaCPF(cpf);
        this.aliquota = this.calcularTaxa();
        this.valorImposto = this.calcularImposto();
    }

    calcularTaxa() {

    if (this.rendimento <= 22847.76){
       return 0;

    } else if (this.rendimento >= 22847.76 && this.rendimento <= 33919.80){
        return 7.5;

    } else if (this.rendimento >= 33919.80 && this.rendimento <= 45012.60){
        return 15;

    } else if (this.rendimento >= 45012.60 && this.rendimento <= 55976.16){
        return 22.5;

    } else if (this.rendimento > 55976.16){
        return 27.5;
    }
}

    calcularImposto(){
  
            if (this.aliquota == 0) {
                return 0;
            } else {
                return ((this.rendimento * this.aliquota) / 100 ).toFixed(2);
            }
        }
    

    VerificaCPF(cpf) {

        var soma;
        var i;
        var resto;
        soma = 0;
        if (cpf == "00000000000") {
            alert ("CPF inválido");
            window.location.href = "index.html";

        }
        
        for (i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        
        resto = soma % 11;
        
        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        
        if (resto != parseInt(cpf.substring(9, 10))) {
            alert ("CPF inválido");
        window.location.href = "index.html";
        }
        
        soma = 0;
        
        for (i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = soma % 11;
        
        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        
        if (resto != parseInt(cpf.substring(10, 11))) {
            alert ("CPF inválido");
            window.location.href = "index.html";
        }

        return cpf;
        }
    }
