function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    var saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no número de vitórias
    var nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibe a mensagem final
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);
}

// Exemplo de uso da função
calcularNivel(82, 10); // Substitua pelos valores desejados