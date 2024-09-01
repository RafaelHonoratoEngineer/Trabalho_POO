export class ProdutoNaoEncontradoError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "ProdutoNaoEncontradoError";
    }
}
