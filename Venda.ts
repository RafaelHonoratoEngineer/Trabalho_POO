import { Produto } from "./Produto";
import { Vendedor } from "./Vendedor";
import { Cliente } from "./Cliente";

export class Venda {
    private _produtos: Produto[];
    private _quantidades: number[];
    private _formaPagamento: string;
    private _preco: number;
    private _lucro: number;
    private _dataVenda: Date;
    private _vendedor: Vendedor;
    private _cliente: Cliente;

    constructor (_produtos: Produto[], _quantidades: number[], _formaPagamento: string, _vendedor: Vendedor, _cliente: Cliente){
        this._produtos = _produtos;
        this._formaPagamento = _formaPagamento;
        this._dataVenda = new Date();
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

    get formaPagamento() {
        return this._formaPagamento;
    }

    set formaPagamento(formaPagamento: string) {
        this._formaPagamento = formaPagamento;
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
    
    get dataVenda() {
        return this._dataVenda;
    }

    set dataVenda(dataVenda: Date) {
        this._dataVenda = dataVenda;
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
                // Atualiza o estoque do produto

                this._produtos[i].qntd -= this._quantidades[i];
    
                // Calcula o valor da venda para este produto
                /*const valorVenda = produto.precoVenda * quantidade;
                this._preco += valorVenda;
                produto.qntd -= quantidade*/
    
                // Adiciona o produto ao preço total da venda

            }
        }
        for(let i = 0; i < this._produtos.length; i++){
            console.log('======================================================')
            console.log(`VENDA REALIZADA!`)
            console.log(`PRODUTO: ${this._produtos[i].nome} || QUANTIDADE: ${this._quantidades[i]} || VALOR: R$${this._produtos[i].precoVenda*this._quantidades[i]}`);
            console.log('======================================================')

        }

        
        //return `Venda de ${quantidade} unidade(s) do produto ${produto.nome}. Valor total: R$${valorVenda.toFixed(2)}. valor restante: ${produto.qntd}`;
    }

}
