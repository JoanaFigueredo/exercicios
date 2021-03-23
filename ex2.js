//2 - Criar uma lista vazia de "categoria de produtos" (com id, nome, status (se é ativo ou inativo)) e adicionar 5 categorias.
//    Criar uma lista vazia de "produtos" (com id, nome e preço) e adicionar 3 produtos
//    Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
//    Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
//    Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
//    Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
const categoriaDeProdutos = [
    {id: '1' , nome: 'Jogos' , status: 'ativo'},
    {id: '2' , nome: 'Eletrônicos' , status: 'ativo'},
    {id: '3' , nome: 'Comida' , status: 'inativo'},
    {id: '4', nome: 'Saida de banho' , status: 'ativo'},
    {id: '5' , nome: 'Churrasco' , status: 'inativo'}
]

const produtos = [
    {id: '1' , nome: 'Jogos' , preço: '6'},
    {id: '2' , nome: 'Eletrônicos' , preço: '8'},
    {id: '3' , nome: 'Comida' , preço: '11'},
]


//Percorre a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
let soEletronicos = categoriaDeProdutos.find(function(categoriaDeProdruto){
    return categoriaDeProdruto.nome === 'Eletrônicos'
})

console.log(soEletronicos)

//percorre a lista e mostra no console só o "nome das categorias" com produtos com preço menor que 10

let menorQueDez = produtos.filter(function(produto){
    return produto.preço < 10;
});

console.log(menorQueDez);

//Percorre a lista e mostrar no console só os produtos das categorias desativadas.

let desativadas = categoriaDeProdutos.filter(function(categoriaDeProduto){
    return categoriaDeProduto.status === 'inativo'
    });
  
console.log(desativadas);

//Percorre a lista e adiciona na categoria a quantidade de produtos de cada categoria.