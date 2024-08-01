import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";
import { Pessoa } from "./Pessoa";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
import { Venda } from "./Venda";

//===================================================//
//FORNECEDORES

let fornecedores: Fornecedor []= [];
let ype = new Fornecedor('Ype', 'ype@limpeza.com.br', '0001.0002')
let graosBR = new Fornecedor('Grãos BR LTDA', 'tio_joao_empresa@graos.com.br', '0001.9876')
let carnesBoiBao = new Fornecedor('Carnes Boi Bão', 'carne.boi.bao@carnesbrasil.com.br', '0001.8989')
fornecedores.push(ype);
fornecedores.push(graosBR);
fornecedores.push(carnesBoiBao); 

//===================================================//
//PRODUTOS

let produtos: Produto [] = [];
let arroz = new Produto('Arroz Tio Urbano 5kg', "000", fornecedores[1], 'Alimentos', 19.99, 10);
let aguaSanitaria = new Produto('Água Sanitária 2L', "001", fornecedores[0], 'Limpeza', 7.55, 7);
let contraFile = new Produto('Contra Filé Kg', "002", fornecedores[2], 'Acougue', 29.99, 15);
produtos.push(arroz);
produtos.push(aguaSanitaria);
produtos.push(contraFile);

//===================================================//
//VENDEDORES

let vendedores: Vendedor [] = [];
let fabricio = new Vendedor('fabricio', "7894613012", 'fabricio@gmail.com');
let guilherme = new Vendedor('guilherme', "5743664185", 'varela@gmail.com');
let rafael = new Vendedor('rafael', "7885764185", 'rafael@gmail.com');
vendedores.push(fabricio);
vendedores.push(guilherme);
vendedores.push(rafael);

//===================================================//
//CLIENTES

let clientes: Cliente [] = [];
let malaquias = new Cliente('malaquias', "46132138498", 'malaquias@gmail.com');
let Renan = new Cliente('Renan', "46132138498", 'renan@gmail.com');
clientes.push(malaquias); 
clientes.push(Renan); 


//===================================================//arroz.set = arroz.get - venda
//VENDAS    

let vendas: Venda []= [];

let venda1 = new Venda([arroz, contraFile], [4, 3], 'PIX', vendedores[1], clientes[1]);
vendas.push(venda1);

venda1.venderProduto();

console.log(arroz.exibirProduto());

console.log(malaquias.exibirCliente())

//console.log(venda1.venderProduto(arroz, 3)); 
// console.log(venda1.venderProduto(aguaSanitaria, 2));
// novaVenda()

//    Criar uma nova venda
//    const venda = new Venda(
//     [produto1, produto2, produto3],
//     'PIX', // Forma de pagamento
//     new Date(), // Data da venda
//     vendedor,
//     cliente
// );

//===================================================//
//===================================================//

// console.log(arroz.exibirProduto());
// console.log(fabricio.exibirVendedor());
// console.log(Renan.exibirCliente());

/*console.log(venda1.efetuarVenda());

console.log(arroz.exibirProduto());*/






