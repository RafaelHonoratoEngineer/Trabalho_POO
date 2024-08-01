import { Produto } from "./Produto";
import { Vendedor } from "./Vendedor";
import { Cliente } from "./Cliente";

export class Venda {
    private _produtos: Produto[];
    private _quantidades: number[];
    private _preco: number;
    private _lucro: number;
    private _vendedor: Vendedor;
    private _cliente: Cliente;

    constructor (_produtos: Produto[], _quantidades: number[], _vendedor: Vendedor, _cliente: Cliente){
        this._produtos = _produtos;
        this._vendedor = _vendedor;
        this._cliente = _cliente;
        this._quantidades = _quantidades;
        this._preco = 0;
        this._lucro = 0;
    }

    get produtos() {
        return this._produtos;
    }

    adicionarProdutos(produtos: Produto[]){
        this._produtos.push(...produtos);
    }

    removerProdutos(produto: Produto){
        let index = this._produtos.indexOf(produto);
        
        if(index != -1){
            this._produtos.splice(index, 1);
        }
        else{
            console.log("O produto informado não exite!");
        }
    }
    get quantidades(){
        return this._quantidades;
    }

    set quantidades(quantidades: number[]) {
        this._quantidades = quantidades;
    }

    get preco() {
        return this._preco;
    }

    precoVenda(){
        for(let i = 0; i < this._produtos.length; i++){
            if(this._quantidades[i] > this._produtos[i].qntd){
                return `Erro! Quantidade de ${this._produtos[i].nome} indisponível. Estoque atual: ${this._produtos[i].qntd}.`;
            }
            else{
                this._preco += this._produtos[i].precoVenda*this._quantidades[i];
                this._lucro += (this._produtos[i].precoVenda - this._produtos[i].precoCompra)*this._quantidades[i];
                return this._preco; 
            }
        }
    }

    get lucro(){
        return this._lucro;
    }
    
    get vendedor(){
        return this._vendedor;
    }

    set vendedor(vendedor: Vendedor) {
        this._vendedor = vendedor;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    venderProduto(){
        for(let i = 0; i < this._produtos.length; i++){
            if(this._produtos[i].qntd < this._quantidades[i]){
                console.log('======================================================')
                return `Erro! Quantidade de ${this._produtos[i].nome} indisponível. Estoque atual: ${this._produtos[i].qntd}.`;
            } 
            else{
                this._produtos[i].qntd -= this._quantidades[i];
            }
        }
        for(let i = 0; i < this._produtos.length; i++){
            console.log(`VENDA REALIZADA!`)
            console.log(`PRODUTO: ${this._produtos[i].nome} || QUANTIDADE: ${this._quantidades[i]} || VALOR: R$${this._produtos[i].precoVenda*this._quantidades[i]}`);
            console.log('======================================================')

        }
    }
}
