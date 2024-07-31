import { Pessoa } from './Pessoa';

export class Cliente{

    private _cliente: Pessoa;
    
    constructor(nome: string, cpf: string, email: string) {
        this._cliente = new Pessoa(nome, cpf, email);    }
   
    get nome(): string {
        return this._cliente.nome;
    }

    set nome(nome: string) {
        this._cliente.nome = nome;
    }

    get cpf(): string {
        return this._cliente.cpf;
    }

    set cpf(cpf: string) {
        this._cliente.cpf = cpf;
    }

    get email(): string {
        return this._cliente.email;
    }

    set email(email: string) {
        this._cliente.email = email;
    }
    exibirCliente(): void {
        console.log('======================================================')
        console.log(`Cliente - Nome: ${this.nome}, CPF: ${this.cpf}, Email: ${this.email}`);
        console.log('======================================================')
    }
}