import { Pessoa } from './Pessoa';

export class Cliente extends Pessoa {
    constructor(nome: string, cpf: string, email: string) {
        super(nome, cpf, email);
    }

    exibirPessoa(): void {
        console.log(`Cliente - Nome: ${this.nome}, CPF: ${this.cpf}, Email: ${this.email}`);
    }
}
