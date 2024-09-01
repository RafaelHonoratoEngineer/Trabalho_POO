import { Pessoa } from './Pessoa';

export class Cliente extends Pessoa{

    constructor(nome: string, cpf: string, email: string){
        super(nome, cpf, email);
    }    

    imprimirDados(): void {
        console.log('======================================================')
        console.log(`FICHA DO CLIENTE: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`EMAIL: ${this.email}`)
        console.log('======================================================')
    }
   
}