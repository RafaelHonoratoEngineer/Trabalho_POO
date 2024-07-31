import { Produto } from "./Produto";
import { Vendedor } from "./Vendedor";
import { Cliente } from "./Cliente";

export class Venda {
    private _produtos: Produto[];
    private _formaPagamento: string;
    private _preco: number;
    private _dataVenda: Date;
    private _vendedor: Vendedor;
    private _cliente: Cliente;

    constructor (
        produtos: Produto[],
        formaPagamento: string,
        vendedor: Vendedor,
        cliente: Cliente
    ) {
        this._produtos = produtos;
        this._formaPagamento = formaPagamento;
        this._dataVenda = new Date();
        this._vendedor = vendedor;
        this._cliente = cliente;
        this._preco = 0;
    }

    get produtos() {
        return this._produtos;
    }

    set produtos(produtos: Produto[]) {
        this._produtos = produtos;
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

    set preco(preco: number) {
        this._preco = preco;
    }

    get dataVenda() {
        return this._dataVenda;
    }

    set dataVenda(dataVenda: Date) {
        this._dataVenda = dataVenda;
    }

    get vendedor() {
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



    venderProduto(produto: Produto, quantidade: number): string {
        if (produto.qntd < quantidade) {
            return `Quantidade de ${produto.nome} indisponível. Estoque atual: ${produto.qntd}.`;
        } else {
            // Atualiza o estoque do produto
            produto.qntd -= quantidade;

            // Calcula o valor da venda para este produto
            const valorVenda = produto.precoVenda * quantidade;
            this._preco += valorVenda;
            produto.qntd -= quantidade

            // Adiciona o produto ao preço total da venda
          

            return `Venda de ${quantidade} unidade(s) do produto ${produto.nome}. Valor total: R$${valorVenda.toFixed(2)}. valor restante: ${produto.qntd}`;
        }
    }

    // efetuarVenda(): string {
    //     return `Venda efetuada para ${this._cliente.nome}. Total: R$${this._preco.toFixed(2)}.`;
    // }
}
