require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  // it('descrição do que está sendo testado', async () => {
  //   await requisicao();
  // });

  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
    // console.log(character.name);
  });

  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
    // console.log(failRequest);
  });

  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parametro qualquer');
    expect(response).toBe('Invalid id');
    // console.log(response); 
  });
  // Foi testado três possíveis casos:
  // quando nosso id está correto
  // quando não passamos id algum
  // quando ele é incorreto.

  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    // testar se fetch foi chamada 4 vezes (executamos a função uma vez para cada teste realizado)

    expect(fetch).toHaveBeenCalledWith(url);
    // verificar se foi chamada com a url correta para buscar os dados na API
  });
  // neste último teste, foi verificado, de fato, a implementação da função que executa a requisição,
  // ao utilizar o matcher toHaveBeenCalledTimes , ele verificou quantas vezes a função fetch foi executada dentro de todo o describe , ou seja, vazou do escopo. Para evitar esse tipo de problema, você pode utilizar o beforeEach ou o afterEach .
});