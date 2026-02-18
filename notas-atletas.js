function calcularMediaAtletas(objAtletas) {

    let saida = "";

    for (let i = 0; i < objAtletas.length; i++) {

        let nome = objAtletas[i].nome;
        let notas = objAtletas[i].notas.slice(); // cópia do array

        // Ordena as notas em ordem crescente
        notas.sort(function(a, b) {
            return a - b;
        });

        // Remove a menor e a maior nota
        let notasComputadas = notas.slice(1, 4);

        // Soma as três notas restantes
        let soma = 0;
        notasComputadas.forEach(function(nota) {
            soma += nota;
        });

        let media = soma / notasComputadas.length;

        // Monta o texto de saída
        saida += "Atleta: " + nome + "\n";
        saida += "Notas Obtidas: " + notas + "\n";
        saida += "Média Válida: " + media + "\n\n";
    }

    document.getElementById("resultado").textContent = saida;
}


// Dados fornecidos
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Executa a função ao carregar
calcularMediaAtletas(atletas);