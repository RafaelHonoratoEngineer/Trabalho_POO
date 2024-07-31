import { Pessoa } from './Pessoa';

export class Vendedor {

    private _vendedor: Pessoa;
    
    constructor(nome: string, cpf: string, email: string) {
        this._vendedor = new Pessoa(nome, cpf, email);
    }
   
    get nome(): string {
        return this._vendedor.nome;
    }

    set nome(nome: string) {
        this._vendedor.nome = nome;
    }

    get cpf(): string {
        return this._vendedor.cpf;
    }

    set cpf(cpf: string) {
        this._vendedor.cpf = cpf;
    }

    get email(): string {
        return this._vendedor.email;
    }

    set email(email: string) {
        this._vendedor.email = email;
    }
    exibirVendedor(): void {
        console.log('======================================================')
        console.log(`Vendedor - Nome: ${this.nome}, CPF: ${this.cpf}, Email: ${this.email}`);
        console.log('======================================================')
    }
}