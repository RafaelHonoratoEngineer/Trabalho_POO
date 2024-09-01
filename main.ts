import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";
import { Pessoa } from "./Pessoa";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
import { Venda } from "./Venda";
import { Estoque } from "./Estoque";
import { ProdutoNaoEncontradoError } from './ProdutoError';

let fornecedores: Fornecedor []= [];
let ype = new Fornecedor('Ype', 'ype@limpeza.com.br', '0001.0002')
let graosBR = new Fornecedor('Grãos BR LTDA', 'tio_joao_empresa@graos.com.br', '0001.9876')
let carnesBoiBao = new Fornecedor('Carnes Boi Bão', 'carne.boi.bao@carnesbrasil.com.br', '0001.8989')
fornecedores.push(ype);
fornecedores.push(graosBR);
fornecedores.push(carnesBoiBao); 

let produtos: Produto [] = [];
let arroz = new Produto('Arroz Tio Urbano 5kg', "000", fornecedores[1], 'Alimentos', 19.99, 10);
let aguaSanitaria = new Produto('Água Sanitária 2L', "001", fornecedores[0], 'Limpeza', 7.55, 7);
let contraFile = new Produto('Contra Filé Kg', "002", fornecedores[2], 'Acougue', 29.99, 15);

produtos.push(aguaSanitaria);
produtos.push(contraFile);



let vendedores: Vendedor [] = [];
let fabricio = new Vendedor('fabricio', "7894613012", 'fabricio@gmail.com');
let guilherme = new Vendedor('guilherme', "5743664185", 'varela@gmail.com');
let rafael = new Vendedor('rafael', "7885764185", 'rafael@gmail.com');
vendedores.push(fabricio);
vendedores.push(guilherme);
vendedores.push(rafael);


let clientes: Cliente [] = [];
let malaquias = new Cliente('malaquias', "46132138498", 'malaquias@gmail.com');
let Renan = new Cliente('Renan', "46132138498", 'renan@gmail.com');
let jorge = new Cliente('jorge', "8561364984", 'jorgesilva@gmail.com');
clientes.push(malaquias); 
clientes.push(Renan); 
clientes.push(jorge);



let vendas: Venda []= [];

let venda1 = new Venda([aguaSanitaria, contraFile], [4, 3], vendedores[1], clientes[1]);
vendas.push(venda1);

//===================================================//
//BACKLOG 5 - realizar vendas
let estoque = new Estoque(produtos);

//===================================================//

//BACKLOG 6 - testar funcionalidade de produtos e venda

// console.log("PRODUTOS: ");
// console.log(arroz.exibirProduto());
// console.log(aguaSanitaria.exibirProduto());
// console.log(contraFile.exibirProduto());


// console.log("VENDAS");
// console.log('======================================================')
// venda1.venderProduto();

// console.log('======================================================')

// console.log("PRODUTOS: ");
// console.log(arroz.exibirProduto());
// console.log(aguaSanitaria.exibirProduto());
// console.log(contraFile.exibirProduto());



// passo 1 ex2


console.log("INFORMAÇÕES DO CLIENTE:");
malaquias.exibirPessoa(); // Exibir informações do cliente

console.log('======================================================')

console.log("INFORMAÇÕES DO VENDEDOR:");
fabricio.exibirPessoa(); // Exibir informações do vendedor

//passso 2 ex2

try {
    estoque.removerProduto(arroz);
} catch (error) {
    if (error instanceof ProdutoNaoEncontradoError) {
        console.error(error.message);
    } else {
        console.error("Ocorreu um erro inesperado.");
    }
}

// interface
estoque.imprimirDados();