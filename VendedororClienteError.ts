export class PessoaNaoEncontradaError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "PessoaNaoEncontradaError";
    }
}