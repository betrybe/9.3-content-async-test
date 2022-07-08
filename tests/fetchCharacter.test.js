require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  // it('descrição', async () => {
  //   await requisicao();
  // // });
  // it('Verifica se o nome da personagem é Wonder Woman', async () => {
  //   const character = await fetchCharacter('720');
  //   console.log(character);
  // });
  // it('Verifica se o nome da personagem é Wonder Woman', async () => {
  //   const character = await fetchCharacter('720');
  //   console.log(character.name);
  // });
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });
  // it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
  //   const failRequest = await fetchCharacter();
  //   console.log(failRequest);
  // });
  // Perceba que na primeira linha do erro aparece o seguinte:
  // Error: "You must provide an url"
  // Esse erro é lançado pela requisição e, para testar esse cenário, é necessário reproduzir esse objeto de erro criado quando a promise foi rejeitada.
  // Informe ao teste que o esperado é que a requisição retorne um erro que possua o texto 'You must provide an url'.
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();

    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
  // it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
  //   const response = await fetchCharacter('parâmetro qualquer');
  //   console.log(response);
  // });
  // Perceba que o retorno do console foi esse:
  // Ou seja, quando é passado um id inválido como parâmetro da função, o retorno é Invalid id.
  // Então vamos ao teste:
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parâmetro qualquer');
    expect(response).toBe('Invalid id');
  });
//   Foi testado três possíveis casos:

//   quando nosso id está correto
//   quando não passamos id algum
//   quando ele é incorreto.

// Agora, para finalizar, é necessário testar a chamada da função e se a url recebida é a correta. Para isso, é preciso executar a função fetchCharacter, mas nesse caso, é necessário 'esperar' que a função fetch seja chamada 4 vezes e também se é executada com o parâmetro correto:
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });

});