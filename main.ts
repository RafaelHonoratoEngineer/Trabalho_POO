import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";
import { Estoque } from "./Estoque";

let fornecedores: Fornecedor []= [];
let ype = new Fornecedor('Ype', 'ype@limpeza.com.br', '0001.0002')
let graosBR = new Fornecedor('Grãos BR LTDA', 'tio_joao_empresa@graos.com.br', '0001.9876')
let carnesBoiBao = new Fornecedor('Carnes Boi Bão', 'carne.boi.bao@carnesbrasil.com.br', '0001.8989')
fornecedores.push(ype);
fornecedores.push(graosBR);
fornecedores.push(carnesBoiBao); 

//===================================================//

let produtos: Produto [] = [];
let arroz = new Produto('Arroz Tio Urbano 5kg', fornecedores[1], 'Alimentos', 30.50, 19.99, 10);
let aguaSanitaria = new Produto('Água Sanitária 2L', fornecedores[0], 'Limpeza', 12.75, 7.55, 7);
let contraFile = new Produto('Contra Filé Kg', fornecedores[2], 'Acougue', 35.99, 29.99, 15);
produtos.push(arroz);
produtos.push(aguaSanitaria);
produtos.push(contraFile);

//===================================================//

let estoque = new Estoque(produtos);

//===================================================//

let frango = new Produto('Coxinha', fornecedores[2], 'Acouge', 10.99, 7.50, 12);
estoque.adionarProdutos([frango])

console.log(estoque);





