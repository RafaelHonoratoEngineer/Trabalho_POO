
import { Produto } from "./Produto";

export class Estoque{
    private _produtos: Produto [];

    constructor(_produtos: Produto []){
        this._produtos = _produtos;

    }
   /* get idProduto(){
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
    } */
    get produto(){
        return this._produtos;
    }

    adicionarProduto(produtos: Produto []) {
        this._produtos.push(...produtos);
    }

    removerProduto(produto: Produto) {
        var index = this._produtos.indexOf(produto);

        if(index != -1){
            this._produtos.splice(index);
            console.log(`O produto [${produto}] foi removido com sucesso!`);
        }
                
    }
}