export abstract class Pessoa {
    private _nome: string;
    private _cpf: string;
    private _email: string;

    constructor(_nome: string, _cpf: string, _email: string) {
        this._nome = _nome;
        this._cpf = _cpf;
        this._email = _email;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get email() {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    abstract imprimirDados(): void;
}
