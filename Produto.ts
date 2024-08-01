import { Fornecedor } from "./Fornecedor";

export class Produto{
    private _nome: string;
    private _idProduto: string
    private _fornecedor: Fornecedor;    
    private _setor: string;
    private _precoCompra: number;
    private _precoVenda: number;
    private _qntd: number;

    constructor(_nome: string, _idProduto: string, _fornecedor: Fornecedor, _setor: string,  _precoCompra: number, _qntd: number){
        this._fornecedor = _fornecedor;
        this._nome = _nome;
        this._precoCompra = _precoCompra;
        this._precoVenda = this.precoCompra + (this.precoCompra*0.20);
        this._setor = _setor;
        this._qntd = _qntd;
        this._idProduto = _idProduto
    }

    get nome(){
        return this._nome;
    }
    set nome(nome:string){
        this._nome = nome;
    }
    get fornecedores(){
        return this._fornecedor;
    }
    set fornecedor(fornecedor: Fornecedor){
        this._fornecedor = fornecedor;
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
    get precoCompra(){
        return this._precoCompra;
    }
    set precoCompra(precoCompra: number){
        this._precoCompra = precoCompra;
        this._precoVenda = precoCompra + (precoCompra*0.20);
    }
    get qntd(){
        return this._qntd;
    }
    set qntd(qntd: number){
        this._qntd = qntd;
    }
    get idProduto(){
        return this._idProduto;
    }
    set idProduto(idProduto: string){
        this._idProduto = idProduto;
    }
    exibirProduto(){
        return `NOME DO PRODUTO: ${this._nome}\nQUANTIDADE EM ESTOQUE: ${this._qntd}\nID DO PRODUTO: ${this._idProduto}\nSETOR: ${this._setor}\nPREÇO DE COMPRA: ${this._precoCompra}\nPRECO DE VENDA: ${this._precoVenda}\nNOME DO FORNECEDOR: ${this._fornecedor.nome}\n======================================================`;
    }
}

