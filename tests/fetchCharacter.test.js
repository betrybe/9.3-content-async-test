require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
    it('Checks if the characters name is Wonder Woman', async () => {
      // console.log(await fetchCharacter('720'));
      const character = await fetchCharacter('720');

      // Verificamos se a resposta da API é um objeto e acessamos a chave nome desse objeto para testar o nome da personagem
      // console.log(character.name);

      // Verifica se não é um falso positivo alterando o resultado esperado para 'Spider Man'
      // expect(character.name).toBe('Spider Man');

      // Foi usado o .toBe pq o retorno é name e name é uma string
      expect(character.name).toBe('Wonder Woman');
    });
    
    it('Checks if it returns an error when executing the function without parameter', async () => {
      const failRequest = await fetchCharacter();
      // Observando o retorno da função pelo console.log()
      // console.log(failRequest);

      // Foi usado .toEqual pq o retorno é new Error, que é um construtor do JavaScript responsável por criar um OBJETO de erro.
      expect(failRequest).toEqual(new Error('You must provide an url'));
    });

    it('Checks if it returns "Invalid id" when executing the function with parameter that does not exist', async () =>  {
      const response = await fetchCharacter('parametro qualuqer');
      //  Verifique o que a API retorna e para isso vamos utiilize o console.log()
      // console.log(response);
      expect(response).toBe('Invalid id');
    });

    it('Check if fetch is called with the correct endpoint', async () => {
      const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
      // É necessário executar a função fetchCharacter
      await fetchCharacter('720');
      // É necessário esperar que a função fetch seja chamada 4 vezes
      expect(fetch).toHaveBeenCalledTimes(4);
      // Se a função fetch é executada com o parâmetro certo
      expect(fetch).toHaveBeenCalledWith(url);
    });
});