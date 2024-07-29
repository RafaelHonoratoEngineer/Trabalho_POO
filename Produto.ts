import { Fornecedor } from "./Fornecedor";
export class Produto{
    private _nome: string;
    private _fornecedores: Fornecedor[];    // dps atualizar para type: Fornecedor
    private _setor: string;
    private _precoVenda: number;
    private _precoCompra: number;

    constructor(_nome: string, _fornecedores: Fornecedor[], _setor: string, _precoVenda: number, _precoCompra: number){
        this._fornecedores = _fornecedores;
        this._nome = _nome;
        this._precoCompra = _precoCompra;
        this._precoVenda = _precoVenda;
        this._setor = _setor;
    }

    get nome(){
        return this._nome;
    }
    set nome(nome:string){
        this._nome = nome;
    }
    get fornecedores(){
        return this._fornecedores;
    }
    set fornecedor(fornecedores: Fornecedor[]){
        this._fornecedores = fornecedores;
    }
    get setor(){
        return this._setor;
    }
    set setor(setor: string){
        this._setor = setor;
    }
    get precoVenda(){
        return this._precoVenda;
    }
    set precoVenda(precoVenda: number){
        this._precoVenda = precoVenda;
    }
    get precoCompra(){
        return this._precoCompra;
    }
    set precoCompra(precoCompra: number){
        this._precoCompra = precoCompra;
    }
    // TESTANDO GIT BASH


}

