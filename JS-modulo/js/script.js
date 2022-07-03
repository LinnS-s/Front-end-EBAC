
function calcularMedia( notas ){

    let soma = 0 ;
    for ( c = 0; c < notas.length; c++){
      soma += notas[c];
    }
    media = soma / notas.length;
    
    return media;
  }

function aprovacao( notas ){

    let media = calcularMedia(notas); 
    let condicao = media >= 8 ? "aprovado" : "recuperação";
    return 'Media '+ media + ' - Resultado: ' + condicao;

}




document.addEventListener('submit', function( evento ){

    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for( let key of dados.keys()) {
        objeto[key] = dados.get(key);

        notas.push (parseInt(dados.get(key)));
    }

    console.log(objeto);

    console.log(notas);
   
    document.getElementById('resultado').innerHTML = aprovacao(notas);

    aprovacao(notas);
   
});

