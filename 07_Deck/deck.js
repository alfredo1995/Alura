// representando os objects

var cartaPaulo = {
    nome: "Dragão branco de olhos azuis",
    ataque: 300,
    defesa: 250,
    magia: 180
}

var cartaRafa = {
    nome: "Magro Negro dos olhos azuis",
    ataque: 250,
    defesa: 200,
    magia: 310

}

var cartaAlfredo = {
    nome: "Exodia",
    ataque: 400,
    defesa: 400,
    magia: 300
}

// agrupar todas as variaveis em um array(todas variaveis em uma so) 

var cartas = [cartaPaulo, cartaRafa, cartaAlfredo]
                 //0         //1          //2
var cartaMaquina
var cartaJogador

// criar uma function para sortear as cartas

function sortearCarta(){
    //criar variaveis para as variaveis criadas dentro da fuction / math.radom gera n° aleatorios
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    // pegar o valor da cartaMaquina que sera o resultado do numeroCartaMaquina na posição cartas[]
    cartaMaquina = cartas[numeroCartaMaquina]
    alert(cartaMaquina)

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]

    //getElementById para selecionar o id do HTML

    document.getElementById('btnSortear').disabled
}