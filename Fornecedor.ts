
export class Fornecedor {
    private _nomeFornecedor: string;
    private _email: string;
    private _cnpj: string;

    constructor(_nomeFornecedor: string, _email: string, _cnpj: string) {

        this._nomeFornecedor = _nomeFornecedor;
        this._email = _email;
        this._cnpj = _cnpj;

    }

    get nome(){
        return this._nomeFornecedor;
    }

    set nome(nome: string) {
        this._nomeFornecedor = this._nomeFornecedor;
    }

    get email(){
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    get cnpj(){
        return this._cnpj
    }
    set cnpj(cnpj: string){
        this._cnpj = cnpj;
    }

    
}

