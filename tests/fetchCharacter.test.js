require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Function Test: fetchCharacter', () => {
  it('Check if character name is Wonder Woman',
    async () => {
      const character = await fetchCharacter('720');
      expect(character.name).toBe('Wonder Woman');
    });
  it('Check if returns an error when call the function without parameter',
    async () => {
      const failRequest = await fetchCharacter();

      expect(failRequest).toEqual(new Error('You must provide an url'));
    });
  it('Check if returns "Invalid id" when call the function with a non existent ID',
    async () => {
      const response = await fetchCharacter('anything');
      expect(response).toBe('Invalid id');
    });
  it('Check if fetch is called with the correct EndPoint',
    async () => {
      const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
      await fetchCharacter('720');

      expect(fetch).toHaveBeenCalledTimes(4);
      expect(fetch).toHaveBeenCalledWith(url);
    });
});