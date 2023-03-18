export class Usuario {

    constructor(nome, cpf, rendimento) {

        this.nome = nome;
        this.cpf = cpf;
        this.rendimento = rendimento;
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
    }
