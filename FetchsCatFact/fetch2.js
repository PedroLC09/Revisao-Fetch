async function fetchFacts() {


    try {
        // 1. Await na requisição
        const response = await fetch('https://catfact.ninja/fact');

         // 2. Verificar se a resposta HTTP foi 200-299 (sucesso)
        if (!response.ok) {
            // Se não, lança um erro para cair no catch
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

         // 3. Await na conversão para JSON
         const dados = await response.json();
         console.log("Dados Recebidos:", dados);
         return dados;


    } catch (error) {
        // 4. Tratamento do erro (rede, JSON malformado ou HTTP)
        console.error("Algo deu Errado!", error.message);
    }

}

fetchFacts()