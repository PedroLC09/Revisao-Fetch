async function CharacterFetch() {

    try {
        const response = await fetch('https://dragonball-api.com/api/characters/1')

        if (!response.ok) {
            throw new Error(`Erro HTTP!: ${response.status}`)
        }

            const dados = await response.json()
            console.log("Dados Recebidos:", dados)
            return dados;

        } catch(error) {
            console.error("Personagem não Encontrado!:", error.message);
        }
} 

CharacterFetch()

