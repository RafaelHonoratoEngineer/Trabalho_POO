
import { Produto } from "./Produto";

export class Estoque{
    private _produtos: Produto [];
    private _qtndTotal: number;
    //private _qntd: number;

    constructor(_produtos: Produto[]){
        this._produtos = _produtos;
        this._qtndTotal = 0;
        this._produtos.forEach(produto => {
            this._qtndTotal += produto.qntd;
        })
    }
   /* get idProduto(){
        return this.idProduto;
    }
    set idProduto(idProduto: string){
        this.idProduto = idProduto;
    } 
    get quantidade(){
        return this._qntd;
    }
    set quantidade(quantidade: number){
        this._qntd = quantidade;
    }*/
    get produto(){
        return this._produtos;
    }
    adionarProdutos(produtos: Produto []){
        if(produtos.length >=1){
            this._produtos.push(...produtos);
            this._qtndTotal = 0;
            this._produtos.forEach(produto => {
                this._qtndTotal += produto.qntd;
            })
        }
        else{
            console.log('Produtos está vazio!');
        }
    }
    get qtndTotal(){
        return this._qtndTotal;
    }

    
}