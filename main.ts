//import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";
import { Estoque } from "./Estoque";
import * as fs from 'fs';

let produtos: Produto[] = [];

const file: string = 'C:\Users\Falcon-R\Documents\Engenharia de Computação\Quarto Semestre\POO\Primeiro Trabalho\Trabalho_POO\produtos_mercado.csv';

fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;

    const lines: string[] = data.split('\n');
    lines.shift(); // Remove a linha de cabeçalho
    let linha: string | undefined = lines.shift();

    while (linha) {
        let nome: string;
        let fornecedor: string;
        let setor: string;
        let precoVenda: number;
        let precoCompra: number;
        let qntd: number;

        const elementosMercado: string[] = linha.trim().split(',');

        nome = elementosMercado[0];
        fornecedor = elementosMercado[1];
        setor = elementosMercado[2];
        precoVenda = Number(elementosMercado[3]);
        precoCompra = Number(elementosMercado[4]);
        qntd = Number(elementosMercado[5]);
        
        let produto = new Produto(nome, fornecedor, setor, precoVenda, precoCompra, qntd);
        linha = lines.shift();
        produtos.push(produto);
    }


});

let estoque = new Estoque(produtos);

console.log(produtos);
console.log("==========================");
console.log(estoque);
