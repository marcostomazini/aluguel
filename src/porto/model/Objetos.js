class Telefone{
    constructor(){
        this.ddd;
        this.numero;
        this.ramal;
        this.tipoTefone;
    }
}

class Endereco{
    constructor(){
        this.cep;
        this.logradouro;
    }
}

class InformacaoProfissional{
    constructor(){
        this.codigoVinculoEmpregaticio;
        this.empresa;
        this.telefoneLocalTrabalho;
        this.salario;
        this.outrosRendimentos;
    }
}

class Pretendente {
    constructor(){
        this.cpf;
        this.nome;
        this.dataNascimento;
        this.pretendenteFinanceiro;
        this.emancipado;
        this.tipo;
        this.telefones=[];
        this.tipoPretendente;
        this.cpfConjuge;
        this.estadoCivil;
        this.email;
        this.informacaoProfissional;
        this.endereco;
    }
}

module.exports= { Telefone, Pretendente, Endereco, InformacaoProfissional }
