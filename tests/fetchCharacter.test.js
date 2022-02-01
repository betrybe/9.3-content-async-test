require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se retorno de name é correto', async () => {
    const character = await fetchCharacter('720');
    console.log(character.name)
    expect(character.name).toBe('Wonder Woman')
  });
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    console.log(failRequest);
    expect(failRequest).toEqual(new Error ('You must provide an url'))
  });
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parametro qualquer');
    expect(response).toBe('Invalid id');
    console.log(response);
  });
});