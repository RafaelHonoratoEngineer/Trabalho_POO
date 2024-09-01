import { Pessoa } from './Pessoa';
import { PessoaNaoEncontradaError } from './VendedororClienteError';

export class Cliente extends Pessoa {
    constructor(nome: string, cpf: string, email: string) {
        super(nome, cpf, email);
    }

    public validarCPF(cpf: string) {
        if (cpf.length !== 11) {  // Ajuste a validação conforme necessário
            throw new PessoaNaoEncontradaError(`Erro! CPF ${cpf} do ${this.nome} não possui caracteres suficientes.`);
        }
    }

    exibirPessoa(): void {
        console.log(`Cliente - Nome: ${this.nome}, CPF: ${this.cpf}, Email: ${this.email}`);
    }
}
