import { Pessoa } from './Pessoa';

export class Vendedor extends Pessoa {
    constructor(nome: string, cpf: string, email: string) {
        super(nome, cpf, email);
    }

    exibirPessoa(): void {
        console.log('======================================================')
        console.log(`Vendedor - Nome: ${this.nome}, CPF: ${this.cpf}, Email: ${this.email}`);
        console.log('======================================================')
    }
}
