
import { Produto } from "./Produto";

export class Estoque{
    private _idProduto : string;
    private _quantidade : number;


    constructor(_idProduto: string, _quantidade: number){
        this._idProduto = _idProduto;
        this._quantidade = _quantidade;

    }
    get idProduto(){
        return this.idProduto;
    }
    set idProduto(idProduto: string){
        this.idProduto = idProduto;
    }
    get quantidade(){
        return this.quantidade;
    }
    set quantidade(quantidade: number){
        this.quantidade = quantidade;
    }

    adicionarProduto(quantidade: number) {
        this._quantidade += quantidade;
    }

    removerProduto(quantidade: number) {
        if (this._quantidade >= quantidade) {
            this._quantidade -= quantidade;
        }         
    }
}