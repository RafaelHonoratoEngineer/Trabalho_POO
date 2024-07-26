
export class Produto{
    private _nome: string;
    private _fornecedor: string;    // dps atualizar para type: Fornecedor
    private _setor: string;
    private _precoVenda: number;
    private _precoCompra: number;
    private _dataValidade: Date;
    private _dataCompra: Date;

    constructor(_nome: string, _fornecedor: string, _setor: string, _precoVenda: number, _precoCompra: number,_dataValidade: Date, _dataCompra: Date){
        this._dataCompra = _dataCompra;
        this._dataValidade = _dataValidade;
        this._fornecedor = _fornecedor;
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
    get fornecedor(){
        return this._fornecedor;
    }
    set fornecedor(fornecedor: string){
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
    set precoVenda(precoVenda: number){
        this._precoVenda = precoVenda;
    }
    get precoCompra(){
        return this._precoCompra;
    }
    set precoCompra(precoCompra: number){
        this._precoCompra = precoCompra;
    }
    get dataValidade(){
        return this._dataValidade;
    }
    set dataValidade(dataValidade: Date){
        this._dataValidade = dataValidade;
    }
    get dataCompra(){
        return this._dataCompra;
    }
    set dataCompra(dataCompra: Date){
        this._dataCompra = dataCompra;
    }
    // TESTANDO GIT BASH


}

