import {Produto} from './Produto' 
import { IDados } from './IDados';

export class Estoque implements IDados{
    private _quantidadeTotal: number = 0;
    private _Produtos: Produto [];
    private _dataUltimoAbastecimento: string;

    constructor(Produtos: Produto []){
        this._Produtos = Produtos;
        this._quantidadeTotal = this.contagem();
        this._dataUltimoAbastecimento = this._dataAbastecimento();
    }

    private contagem(): number{

            let count: number = 0;

            for(const item of this._Produtos) {
            
                    count += item.qntd;
            }

            return count;     
            }   

    public adicionarProduto(produto: Produto): void{
            this._Produtos.push(produto);
            this._quantidadeTotal += produto.qntd;

            this._dataUltimoAbastecimento = this._dataAbastecimento();
    }
    
    public removerProduto(produto: Produto){
            let index = this._Produtos.indexOf(produto);
            
            if(index != -1){
                this._Produtos.splice(index, 1);
            }

            this._quantidadeTotal -= produto.qntd;
            }
    
    private _dataAbastecimento(): string{
            let date = new Date();

            let dia =  String(date.getDate()).padStart(2, '0');
            let mes = String(date.getMonth() + 1).padStart(2, '0')
            let ano = String(date.getFullYear());

            let dataAbastecimento = `${dia}/${mes}/${ano}`
            return dataAbastecimento;
    }

    public imprimirDados(): void {
            console.log(`==================RELATÓRIO DE ESTOQUE==================`);
            for(const item of this._Produtos){
                    console.log(`PRODUTO: ${item.nome} -------- QUANTIDADE: ${item.qntd}`);
                    console.log(`PRODUTO: ${item.nome} -------- ID: ${item.idProduto}`);
                    console.log(`PRODUTO: ${item.nome} -------- SETOR: ${item.setor}`);
                    console.log(`PRODUTO: ${item.nome} -------- PRECO DE COMPRA: ${item.precoCompra}`);
                    console.log(`PRODUTO: ${item.nome} -------- PRECO DE VENDA: ${item.precoVenda}`);
                    console.log('=============================================================')
                
            }
            console.log(`DATA ULTIMO ABASTECIMENTO: ${this._dataUltimoAbastecimento}`);
            console.log(`QUANTIDADE TOTAL DE ITENS: ${this._quantidadeTotal}`);

        }
    }