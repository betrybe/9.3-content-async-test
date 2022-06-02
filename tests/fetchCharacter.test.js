require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('if correct parameters resolves a promise', async () => {
    const character = await fetchCharacter(720);
    expect(character.name).toMatch('Wonder Woman');
  });
  it('if no parameters rejects promise', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
  it('if wrong parameters rejects promise', async () => {
    const failRequest = await fetchCharacter('uma string qualquer');
    expect(failRequest).toEqual('Invalid id');
  });
  it('validates number of tests', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});