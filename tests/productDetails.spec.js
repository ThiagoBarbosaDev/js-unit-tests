const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('foo', 'bar'))).toBe(true)
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('foo', 'bar').length).toBe(2)
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect((productDetails('foo', 'bar')[0].details.productId) === productDetails('foo', 'bar')[1].details.productId).toBe(false)  
  });
  it('Verifica os tipos dos objetos dentro dos arrays', () => {
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('foo', 'bar')[0]).toBe('object')
    expect(typeof productDetails('foo', 'bar')[1]).toBe('object')
    expect(Array.isArray(productDetails('foo', 'bar')[0])).toBe(false)
    expect(Array.isArray(productDetails('foo', 'bar')[1])).toBe(false)
  })
});
  it('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails('foo', 'bar')[0].details.productId.slice(-3)).toBe('123');
    expect(productDetails('foo', 'bar')[1].details.productId.slice(-3)).toBe('123');
})