var alfredo = {
    nome: "Alfredo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var rafa = {
    nome: "Rafaela",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0   
}

// cria a função cotendo o objeto - criar mais uma variavel para retornar o valor da propriedade do objeto(pontos)
alfredo.pontos = calculaPontos(alfredo)
rafa.pontos = calculaPontos(rafa)

// joga o objeto (alfredo) p/ dentro do (jogador) da funciton
function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}



/*



var jogadores = ["alfredo", "rafa"]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "><td>" + jogadores[i].empates +  "</td>"
        html += "<td>" + jogadores[i].Derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></tr></td>"

        }

        var tabelaJogadores = document.getElementById("tabelaJogadores")
        tabelaJogadores.innerHTML = html 
    }


    function adicionarVitoria(i){
        var jogador = jogadores[i]
        jogador.vitorias++
        jogador.pontos = calculaPontos(jogador)
        exibirJogadoresNaTela(jogadores)
        
    }

    function adicionarDerrota(i){
        alert("clicou no botao derrota")
    }

    */