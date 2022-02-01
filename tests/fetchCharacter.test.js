require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});