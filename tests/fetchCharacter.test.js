require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('agora sim!', async () => {
    const character = await fetchCharacter('720');
    console.log(character.name);
    expect(character.name).toBe('spider Man');
  });
});