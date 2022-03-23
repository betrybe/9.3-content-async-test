require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');


// URL - Base: https://www.superheroapi.com/api.php/4192484924171229/720 irá retorna um personagem

// Os treis possiveis erros 

describe('Teste a função fetchCharacter', () => {
  it('1 - Testando se ha retorno da função', async () => {
    const character = await fetchCharacter('720');
    // Precisa de um objeto como base para fazer a verificação
  });

  it('2 - Verifique se o nome da pessoa é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });

  it('3 - Verifica se retorna erro ao executar a função sem parâmentro', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
    // retorno: You must provide an url
  });

  it('4 - Verifica se retorna \'Ivalid id\' ao executar a função com parâmetro que não existe ', async () => {
    const response = await fetchCharacter('paramentro qualquer');
    expect(response).toBe('Invalid id');
  });

  // Realizando a chamada da função afim de testar se a URL é recebida corretamente

  it('6 - Verifica se fetch é chamado com o endpoint correto', async () => {
    // URL - da Api que vai ser testada.
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    // Chamando a função e esperando seu retorno.
    await fetchCharacter('720');

    // toHaveBeenCalledTimes , ele verificou quantas vezes a função fetch foi executada 
    // dentro de todo o describe , ou seja, vazou do escopo. Para evitar esse tipo de 
    // problema, você pode utilizar o beforeEach ou o afterEach .
    
    beforeEach(() => {
      expect(fetch).toHaveBeenCalledTimes(4);
    });
    afterEach(() => {
      expect(fetch).toHaveBeenCalledWith(url);
    });
  });
}); 