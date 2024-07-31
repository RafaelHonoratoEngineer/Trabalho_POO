import { Produto } from "./Produto.ts";
import { Vendedor } from "./Vendedor.ts";
import { Cliente } from "./Cliente.ts";

export class Venda {
    private _produtos: Produto[];
    private _formaPagamento: string;
    private _preco: number;
    private _dataVenda: Date;
    private _lucro: number;
    private _vendedor: Vendedor;
    private _cliente: Cliente;

    constructor (_produtos: Produto [], _formaPagamento: string, _dataVenda: Date, _vendedor: Vendedor, _cliente: Cliente) {
    this._produtos = _produtos;
    this._formaPagamento = _formaPagamento;
    this._dataVenda = new Date();
    this._vendedor = _vendedor;
    this._cliente = _cliente;
    }

    get produtos () {
        return this._produtos;
    }

    set produtos (produtos: Produto[]) {
        this._produtos = produtos;
    }

    get formaPagamento () {
        return this._formaPagamento;
    }

    set formaPagamento (formaPagamento: string) {
        this._formaPagamento = formaPagamento;
    }
    
    get preco () {
        return this._preco;
    }

    precoVenda(){
        let x;
        if(this._formaPagamento == 'PIX'){ 

            this._produtos.forEach(produto => {
                x += produto.precoVenda;
            })
        }
        
        this._preco = x-(x*0.05);

        return this._preco;
    }
        


    get lucro () {
        return this._lucro;
    }

    set lucro (lucro: number) {
        this._lucro = lucro;
    }

    get dataVenda () {
        return this._dataVenda;
    }

    set dataVenda (dataVenda: Date) {
        this._dataVenda = dataVenda;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }
}