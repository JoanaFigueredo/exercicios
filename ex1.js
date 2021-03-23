//1 - Criar uma lista vazia de "categoria de produtos" (com id, nome) e adicionar 5 categorias.
//    Percorrer a lista e mostrar no console só o nome da categoria.
//  Percorrer a lista e mostrar no console só a categoria "Eletrônicos".
const catergoriaDeProdutos = [
    {id: '1' , nome: 'Jogos'},
    {id: '2' , nome: 'Eletrônicos'},
    {id: '3' , nome: 'Comida'},
    {id: '4', nome: 'Saida de banho'},
    {id: '5' , nome: 'Churrasco'}
];
//percorre a lista e mostra no console só o nome da categoria
catergoriaDeProdutos.forEach(function(categoriaDeProdruto){
  console.log(categoriaDeProdruto.nome)
});

//percorre a lista e mostra no console só a categoria eletronicos
let soEletronicos = catergoriaDeProdutos.find(function(categoriaDeProdruto){
    return categoriaDeProdruto.nome === 'Eletrônicos'
})
