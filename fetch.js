/*

Estou revisando o Consumo de APIs com JavaScript Fetch, porém agora de forma mais técnica/aprofundada.

A API Utilizada foi a "Cat Fact API".
A Cat Fact é uma API de fatos aleatórios sobre gatos, você faz o fetch e ela te devolve um fato aleatório sobre gatos.
basicamente um "fun fact" dos gatinhos kkkkkk.

sem mais delongas...

Objetivos da Revisão:

1 - Rever o consumo de APIs com Fetch, focando na parte técnica.
2 - Rever o Fluxo Assíncrono e a Manipulação de JSON
3 - Rever a estrutura de promessas(promises) e tratamento de erros em requisições HTTP(catch).

Obs: (Se por algum acaso você acessou meu repositório, baixou como zip ou clonou para um novo repositório seu, e estiver lendo isso agora,
saiba que esse estudo ainda não está pronto, eu já sei explicar o código, porém não com o domínio que eu quero, meu objetivo final
é conseguir explicar a parte técnica e teórica para qualquer pessoa.)

*/

fetch('https://catfact.ninja/fact')
  .then(response => {
    // Validação de Status HTTP
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    // Manipulação dos Dados
    console.log("Fato:", data.fact);
  })
  .catch(error => {
    // Tratamento de Exceções
    console.error("Falha na operação:", error.message);
  });


  /*
  
    Mas Afinal, O Que é Feito Nesse Código?

    O Fetch realiza o método HTTP chamado "GET" para fazer uma requisição à API Cat Fact,
    que o devolve um fato curioso sobre gatos em formato JSON. 

  */
