require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Descrição', async () => {
    const result = await fetchCharacter();
    expect(result).toEqual(new Error('You must provide an url'));
  });
});