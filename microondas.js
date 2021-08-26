/*
Programação Imperativa: Checkpoint 1
Grupo 6:
Ector Cunha
Renan de Andrade
Matheus Braga Dias
Agenor Jr
Ronaldo Fonseca
Gabriela Schneider
*/

function microondas(opcao = "", tempo = 0) {
  let tempoPadrao, mensagem;

  switch(opcao.toLowerCase()) {
    case "pipoca":
      console.log("COMIDA: Pipoca");
      tempoPadrao = 10;
      break;
    case "macarrão":
      console.log("COMIDA: Macarrão");
      tempoPadrao = 8;
      break;
    case "carne":
      console.log("COMIDA: Carne");
      tempoPadrao = 15;
      break;
    case "feijão":
      console.log("COMIDA: Feijão");
      tempoPadrao = 12;
      break;
    case "brigadeiro":
      console.log("COMIDA: Brigadeiro");
      tempoPadrao = 8;
      break;
    default:
      mensagem = "Prato inexistente."
  }
  
  if (mensagem !== "Prato inexistente.") {
    if (tempo < tempoPadrao) mensagem = "Tempo insuficiente."
    else if (tempo >= tempoPadrao * 3) mensagem = "Kabumm!"
    else if (tempo >= tempoPadrao * 2) mensagem = "A comida queimou!"
    else mensagem = "Prato pronto, bom apetite!!!"
    
    console.log("TEMPO: " + tempo);
    console.log("RESULTADO: " + mensagem);
  } else {
    console.log("COMIDA: " + opcao)
    console.log("RESULTADO: " + mensagem)
  }
}

microondas("pipoca", 12);
microondas("Macarrão", 16);
microondas("feiJão", 36);
microondas("bigadeiro", 8);

// Versão de código menor, mas menos bonito no console usando objects do JS.

const microondas2 = (opcao = "", tempo = 0) => {
  let menu = {
    pipoca: 10,
    "macarrão": 8,
    carne: 15,
    "feijão": 12,
    brigadeiro: 8,
  }
  if (!menu[opcao.toLowerCase()]) return console.log("Prato inexistente.")
  if(tempo >= menu[opcao.toLowerCase()] * 3) console.log("Kabumm!!!");
  else if(tempo >= menu[opcao.toLowerCase()] * 2) console.log("A comida queimou!");
  else if(tempo >= menu[opcao.toLowerCase()]) console.log("A comida está pronta, bom apetite!");
  else console.log("Tempo insuficiente.")
}

microondas2("pipoca", 12);
microondas2("Macarrão", 16);
microondas2("feiJão", 36);
microondas2("bigadeiro", 8);