//Jest testing with async and await

require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    // console.log(character.name); // access name of person
    expect(character.name).toBe('Wonder Woman'); //Test passed
    // expect(character.name).toBe('Spider Man'); // Test failed
  });
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    // console.log(failRequest); // Error message
    expect(failRequest).toEqual(new Error('You must provide an url')); // new Error: construtor
  });
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parametro qualquer');
    // console.log(response); // Error: invalid id
    expect(response).toBe('Invalid id');
  });
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4); // how often function fetch() was called in describe
    expect(fetch).toHaveBeenCalledWith(url);
  });
});