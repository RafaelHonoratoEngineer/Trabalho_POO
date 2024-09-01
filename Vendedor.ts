import { Pessoa } from './Pessoa';

export class Vendedor extends Pessoa{

    private _idVEndedor: string;
    private _dataAdmissao: string

    constructor(nome: string, cpf: string, email: string, idVendedor: string){
        super(nome, cpf, email);
        this._idVEndedor = idVendedor;
        this._dataAdmissao = this.dataContrato();
    }
    
    get idVendedor(){
        return this._idVEndedor;
    }
    set idVendedor(idVendedor: string){
        this._idVEndedor = idVendedor;
    }
    get dataAdmissao(){
        return this._dataAdmissao;
    }

    dataContrato(): string{
        let date = new Date();

        let dia =  String(date.getDate()).padStart(2, '0');
        let mes = String(date.getMonth() + 1).padStart(2, '0')
        let ano = String(date.getFullYear);

        let dataContrato = `${dia}/${mes}/${ano}`
        return dataContrato;
    }

    imprimirDados(): void{
        console.log('======================================================')
        console.log(`FICHA DO VENDEDOR: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`EMAIL: ${this.email}`)
        console.log(`ID: ${this._idVEndedor}`)
        console.log(`DATA DE ADMISSÃO: ${this._dataAdmissao}`)
        console.log('======================================================')
    }
}