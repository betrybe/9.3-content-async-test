require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toEqual('Wonder Woman');
  });

  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    console.log(failRequest);
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});