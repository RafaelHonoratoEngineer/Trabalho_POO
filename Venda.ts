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

    constructor (_produtos: Produto [], _formaPagamento: string, _preco:number, _dataVenda: Date, _lucro: number, _vendedor: Vendedor, _cliente: Cliente) {
    this._produtos = _produtos;
    this._formaPagamento = _formaPagamento;
    this._preco = _preco;
    this._dataVenda = _dataVenda;
    this._lucro = _lucro;
    this._vendedor = _vendedor;
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

    set preco (preco: number) {
        this._preco = preco;
    }

    get dataVenda () {
        return this._dataVenda;
    }

    set dataVenda (dataVenda: Date) {
        this._dataVenda = dataVenda;
    }

    get lucro () {
        return this._lucro;
    }

    set lucro (lucro: number) {
        this._lucro= lucro;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }
}