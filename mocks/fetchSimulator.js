const character = require('./character');

const ENDPOINTS = {
  CHARACTER: 'https://www.superheroapi.com/api.php/4192484924171229/720',
};

//aa

const TIME_IN_MILLISECONDS = 200;

const fetchSimulator = (url) => {
  // Verifica se a url é indefinida
  if (typeof url === undefined || url.endsWith('undefined')) {
    // Rejeita a promise e lança um objeto de erro
    return Promise.reject(new Error('You must provide an url'));
  }
  // Verifica se o objeto de endpoint inclui a url passada por parâmetro
  const validUrl = Object.values(ENDPOINTS).includes(url);
  // retorna a promise resolvida
  return Promise.resolve({
    // se a url for válida, retorna o código de sucesso(200), caso contrário, retorna o código de erro(404)
    status: validUrl ? 200 : 404,
    ok: validUrl,
    // realiza a segunda promise, que é transformar em json()
    json: () => new Promise((resolve) => {
      // Simula o tempo de resposta de uma API
      setTimeout(() => {
        // se a url for igual ao endpoint, então a função é resolvida, como se fosse o resultado da API
        if (url === ENDPOINTS.CHARACTER) {
          return resolve(character);
        }
        // Caso não se encaixe em nenhuma das verificações acima, a promise é resolvida e retorna uma string com 'invalid id'
        return resolve('Invalid id');
      }, TIME_IN_MILLISECONDS);
    }),
  });
};

// Avisamos ao nosso arquivo que nossa função será simulada.
// Você irá aprender a criar essas simulações no bloco de Front-end.
global.fetch = jest.fn(fetchSimulator);

module.exports = fetchSimulator;
