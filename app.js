let numerosSorteados = []; // Array para armazenar os números sorteados
let numeroLimite = 10; // Limite do número secreto
let numeroSecreto = gerarNumeroAleatorio(); // Número secreto gerado aleatoriamente
let tentativas = 1; // Número de tentativas

function exibirTextoNaTela(tag, texto) { // Função para exibir texto na tela
  let campo = document.querySelector(tag); // Seleciona o elemento HTML
  campo.innerHTML = texto; // Insere o texto no elemento HTML
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { // Função para falar o texto
    rate: 1.2, // Velocidade da fala
  });
}

function exibirMensagem() { // Função para exibir mensagem de boas vindas
  exibirTextoNaTela("h1", "Jogo do número secreto"); // Exibe o título do jogo
  exibirTextoNaTela("p", "Digite um número entre 1 e 10"); // Exibe a mensagem de boas vindas
}

exibirMensagem(); // Exibe mensagem de boas vindas

function verificarChute() { // Função para verificar o chute do usuário
  let chute = document.querySelector("input").value; // Pega o valor do input
  let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // Verifica se o número de tentativas é maior que 1
  let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`; // Mensagem de acerto

  if (chute == numeroSecreto) { // Verifica se o chute é igual ao número secreto
    exibirMensagem(); // Exibe mensagem de boas vindas
    exibirTextoNaTela("h1", "Acertou!!!"); // Exibe mensagem de acerto
    exibirTextoNaTela("p", mensagemTentativas); // Exibe mensagem de tentativas
    exibirMensagem(); // Exibe mensagem de boas vindas
    document.getElementById("reiniciar").removeAttribute("disabled"); // Habilita o botão reiniciar(novo jogo)
  } else {
    if (chute > numeroSecreto) { // Verifica se o chute é maior que o número
      exibirTextoNaTela("p", "O número secreto é menor!"); // Exibe mensagem de erro
    } else {
      exibirTextoNaTela("p", "O número secreto é maior!"); // Exibe mensagem de erro
    }
    tentativas += 1; // Incrementa o número de tentativas
    limparCampo(); // Limpa o campo de input
  }
}

function limparCampo() { // Função para limpar o campo de input
  chute = document.querySelector("input"); // Seleciona o input
  chute.value = ""; // Limpa o valor do input
}

function gerarNumeroAleatorio() { // Função para gerar um número aleatório
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Gera um número aleatório

  if (numerosSorteados.length == numeroLimite) { // Verifica se o array de números sorteados está cheio
    numerosSorteados = []; // Limpa o array de números sorteados
  }

  if (numerosSorteados.includes(numeroEscolhido)) { // Verifica se o número já foi sorteado
    return gerarNumeroAleatorio(); // Chama a função novamente
  } else {
    numerosSorteados.push(numeroEscolhido); // Adiciona o número ao array de números sorteados
    return numeroEscolhido; // Retorna o número sorteado
  }
}

function reiniciar() { // Função para reiniciar o jogo
  alert("O jogo será reiniciado!"); // Exibe um alerta
  numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto
  tentativas = 1; // Reseta o número de tentativas
  exibirMensagem(); // Exibe mensagem de boas vindas
  limparCampo(); // Limpa o campo de input
  document.getElementById("reiniciar").setAttribute("disabled", "disabled"); // Desabilita o botão reiniciar(novo jogo)
}
