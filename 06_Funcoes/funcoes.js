/////////////function exibir mensagem/////////////////

function mensagem(){
    echo "Bem vindo ao site";
}

//chamando a function
mensagem();

//////////////////////////////////////////////////////
////////////function para calcular media//////////////
//////////////////////////////////////////////////////

function calcularMedia ($nome, $n1, $n2, $n3, $n4){
    $media = ($n1 + $n2 + $n3 + $n4) / 4;
    if($media >= 7):
        echo "$nome foi aprovado com a média $media.";
    else:
        echo "$nome foi reprovado";
    endif;
}

// chamando a function
calcularMedia("Alfredo", 5, 7, 9, 10);
calcularMedia("Raimundo", 6, 7, 8, 9);




