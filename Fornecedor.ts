import { Produto } from "./Produto";

export class Fornecedor {
    private _nome: string;
    private _email: string;
    //private _contato: number; caso seja interessante ter o contato telefone do fornecedor
    private _tiposProduto: Produto[];
    //private _quantia: number; aqui a quantidade vai vir direto da classe Produto do matuto
    //private _Iniciocontrato: Date; // como se fosse o início da parceria entre os negócios

    constructor(_nome: string, _email: string, _tiposProduto: Produto[]) {

        this._nome = _nome;
        this._email = _email;
    //  this._contato = _contato;
    //  this._quantia = _quantia;
        this._tiposProduto = _tiposProduto;
    //  this._Iniciocontrato = _Iniciocontrato;

    }

    get nome(){
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get email(){
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

   /* get contato(){
        return this._contato;


    set contato(contato: number){
        this._contato = contato;
    } */

    get tiposProduto(){
        return this._tiposProduto;
    }

    set tiposProduto(tiposProduto: Produto[]){
        this._tiposProduto = tiposProduto;
    }

   /* get quantia(){
        return this._quantia;
    }

    set quantia(quantia: number){
        this._quantia = quantia;
    }

    get Iniciocontrato(){
        return this._Iniciocontrato;
    }

    set Iniciocontrato(Iniciocontrato: Date){
        this._Iniciocontrato = Iniciocontrato;
    }*/ 


}
// capri mama pau 