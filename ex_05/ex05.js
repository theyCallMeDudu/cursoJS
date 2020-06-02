// Folha de exercícios 05

// 1)

function pegaPaises(callback){
    
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        type: "GET",
        dataType: "json"}).done(function(data){
            callback(data);
        }).fail(function(){
            console.log('Erro na requisição.');
        });

}


function populaSelect(paises){
    for(var i = 0; i < paises.length; i++){
        document.getElementById("paises").innerHTML += '<option value="' + paises[i].alpha3code + '">' + paises[i].name + '</option>';    
    }
}

pegaPaises(populaSelect);

///////////////////////////////////////////

// 2)

var cursos = [
    {
        "titulo": "PHP",
        "aval": []
    },
    {
        "titulo": "Javascript",
        "aval": [5,5,4.5,4,5,5,5,4.5]
    },
    {
        "titulo": "Python",
        "aval": [5,5,4,4,5,3,5,4,4,5]
    },
    {
        "titulo": "Machine Learning",
        "aval": [5,5,4.5]
    }
];

function calculaMediaAvaliacoes(listaCursos){
    var media = 0;

    for(var a = 0; a < listaCursos.length; a++){

        try{
            if(listaCursos[a].aval.length == 0){
                throw 'Curso ' + listaCursos[a].titulo + ' não possui avaliações.';
            } else if(listaCursos[a].aval.length < 5){
                throw 'Curso ' + listaCursos[a].titulo + ' possui menos de 5 avaliações.';
            }

            var soma = 0;

            for(var b = 0; b < listaCursos[a].aval.length; b++){
                soma += listaCursos[a].aval[b];
            }

            var media = soma / listaCursos[a].aval.length;

            console.log('Curso: ' + listaCursos[a].titulo + ' Média de avaliações: ' + media.toFixed(2));

        }
        
        catch(err){
                console.log(err);
            }

    }
        
} 

calculaMediaAvaliacoes(cursos);

////////////////////////////////////////////

// 3)

var userNameSpace = {
  'usuarios': {
        "33884h": "João Gomes",
        "43585f": "Maria Luisa",
        "93661h": "Pedro Henqrique",
        "23172g": "Paula Carvalho"
  },
  
  'acessos': [
    {
        "usuario": "33884h",
        "data": "10/07/18"
    },
    {
        "usuario": "33884h",
        "data": "11/07/18"
    },
    {
        "usuario": "43585f",
        "data": "19/07/18"
    },
    {
        "usuario": "93661h",
        "data": "24/07/18"
    },
    {
        "usuario": "23172g",
        "data": "13/08/18"
    },
    {
        "usuario": "93661h",
        "data": "14/08/18"
    }
  ],

  'imprimir_acessos': function(){
      for(var a = 0; a < this.acessos.length; a++){
        $("#acessos").append('<li>Acesso de ' + this.usuarios[this.acessos[a].usuario] + ', no dia ' + this.acessos[a].data + '</li>');
      }
  }
}

userNameSpace.imprimir_acessos();