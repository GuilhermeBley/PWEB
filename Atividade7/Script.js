
// Calculo média
// Resultados possíveis: Empate, Pedra, Papel
// 
// Returns
// 
//  [Number : string]
//
//  String
//  pedra, papel ou 'tesoura'    
//
//  Numbers:
//  0 - EMPATE
//  1 - VITORIA
//  2 - DERROTA
// 
function Jogar(escolha){
    
    // 0 = pedra
    // 1 = papel
    // 2 = tesoura
    let array = new Array("pedra", "papel", "tesoura");

    let jogador = -1;
    
    // Escolhendo opção do jogador
    for (i=0; i < array.length; i++){
        if (array[i] === escolha){
            jogador = i;
            break;
        }
    }

    if (jogador >= -1 && jogador <= 3){
        
        let maquina = Math.floor(Math.random() * 100) % 3; // Aleatório de 0 até 3
        
        if (jogador === maquina) // Empate
            return [0,array[maquina]]; // EMPATE

            // JOGADOR PEDRA
        if (jogador === 0 && maquina === 1) // Pedra x Papel
            return [2,array[maquina]]; // DERROTA

        if (jogador === 0 && maquina === 2) // Pedra x tesoura
            return [1,array[maquina]]; // VITORIA

            // JOGADOR PAPEL
        if (jogador === 1 && maquina === 0) // Papel x Pedra
            return [1,array[maquina]]; // VITORIA

        if (jogador === 1 && maquina === 2) // Papel x tesoura
            return [2,array[maquina]]; // DERROTA

            // JOGADOR TESOURA
        if (jogador === 2 && maquina === 1) // Tesoura x Papel
            return [1,array[maquina]]; // VITORIA

        if (jogador === 2 && maquina === 0) // Tesoura x Pedra
            return [2,array[maquina]]; // DERROTA
    }
}

function TesteJogar(){

    let escolha = prompt("Digite pedra, papel ou tesoura: ")

    let resultado = [];
    resultado = Jogar(escolha);

    if (!(resultado instanceof Array))
    {
        alert("Digite corretamente os valores.");   
        return;
    }

    if (resultado.length < 1){
        alert("erro");
        return;
    }

    resultado[0] = parseInt(resultado[0]);

       
    if (resultado[0] === 0) 
    {
        alert("Empate. Tente novamente. (Jogador) " + escolha + " X (Maquina) " + resultado[1]);
    }

    else if (resultado[0] === 1) // Vitoria
    {
        alert("Parabéns! Você venceu. resultado : (Jogador) " + escolha + " X (Maquina) " + resultado[1]);
    }

    else if (resultado[0] === 2) // Derrota
    {
        alert("Lamento :( Você perdeu. resultado : (Jogador) " + escolha + " X (Maquina) " + resultado[1]);
    }
    else{
        alert("erro");
        console.log("ESCOLHA: " + escolha);
        console.log("RESULTADOS: " + resultado[0] + resultado[1]);
    }
}