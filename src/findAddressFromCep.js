const buildURL = (cep) => {
  return `http://cep.la/${cep}`;
}

const findAddressFromCEP = async (cep) => {
  const requestInitializer = {
    headers: {'Accept': 'application/json'}
  };

  const response = await fetch(buildURL(cep), requestInitializer);
  const cepInfo = await response.json();

  if (cepInfo.logradouro === undefined) {
    logs.push(`Error! CEP não encontrado`);
    throw new Error('CEP não encontrado!');
  }

  logs.push(`Sucesso! Objeto de endereço recebido: ${JSON.stringify(cepInfo)}`);
  return `${cepInfo.logradouro}, ${cepInfo.bairro}, ${cepInfo.cidade} - ${cepInfo.uf}`;
}

console.log(findAddressFromCEP('57036270'));
