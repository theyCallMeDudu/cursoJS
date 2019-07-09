// Questão 1)
var valor1 = Number(document.getElementById("num_1").innerHTML);
var valor2 = Number(document.getElementById("num_2").innerHTML);

function soma(valor1, valor2){
    var result = valor1 + valor2;
    return result;
}

function exibeResultado(){
    document.getElementById("resultado").innerHTML = '<strong>' + soma(valor1, valor2) + '</strong>';
}

exibeResultado();
// ----------------------------------------------------

// Questão 2

var celsius = Number(document.getElementById("caixa_azul").innerHTML);
var fahrenheit = Number(document.getElementById("caixa_amarela").innerHTML);

function converteCelsiusParaFahrenheit(celsius){
    var conversao = ((9 * celsius) / 5) + 32;
    return conversao;
}

function exibeResultadoNaCaixaAmarela(){
    document.getElementById("caixa_amarela").innerHTML = converteCelsiusParaFahrenheit(celsius);
}

exibeResultadoNaCaixaAmarela();

//console.log(converteCelsiusParaFahrenheit(celsius));
// ----------------------------------------------------

// Questão 3)

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];

var novoArray = [
    grupos.slice(-2,)
];

// function addAoNovoArray(novoArray){
//     novoArray.push("Mariana", "Felipe", "Carla");
// }
novoArray.push(["Mariana", "Felipe", "Carla"]);
console.log(novoArray);
// ----------------------------------------------------

// Questão 4)

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'somaAval': function(){ // b)
        var soma = this.n_aval_1_estrela  +
           this.n_aval_2_estrelas +
           this.n_aval_3_estrelas +
           this.n_aval_4_estrelas + 
           this.n_aval_5_estrelas;
    return soma;
    },
    'mediaAval': function(){ // b)
        var media = ((this.n_aval_1_estrela * 1)  + 
                    (this.n_aval_2_estrelas * 2)  +
                    (this.n_aval_3_estrelas * 3)  + 
                    (this.n_aval_4_estrelas * 4)  +
                    (this.n_aval_5_estrelas * 5)) / 

                    ((this.n_aval_1_estrela) + 
                    (this.n_aval_2_estrelas) +
                    (this.n_aval_3_estrelas) + 
                    (this.n_aval_4_estrelas) +
                    (this.n_aval_5_estrelas));
    return media;
    }

}

// a)
var categoria = curso.categoria[0];
document.getElementById("categoria_principal").innerHTML = categoria;

// b)
var totalAvaliacoes = curso.somaAval();
document.getElementById("total_aval").innerHTML = totalAvaliacoes;

var mediaAvaliacoes = curso.mediaAval().toFixed();
document.getElementById("media_aval").innerHTML = mediaAvaliacoes;
// ----------------------------------------------------

// Questão 5)

var user = {
    'nome': "Walter",
    'sobrenome': "White",
    'email': "heisenberg@gmail.com",
    'nome_completo': function(){
        var nomeCompleto = this.nome + " " + this.sobrenome;
        return nomeCompleto;
    }
}

function exibeTabela(_user){
    return '<div class = "tableBox">' +
                '<table>'   +
                    '<tr>'  +
                        '<th>' + "Nome Completo"  + '</th>' +  
                        '<th>' + "E-mail" + '</th>' +
                    '</tr>' + 
                    '<tr>'  +
                        '<td>' + user.nome_completo()  + '</td>' +  
                        '<td>' + user.email + '</td>' +
                    '</tr>' +
                '</table>'  +  
           '</div>'
}

var table = exibeTabela();

document.getElementById("tabela").innerHTML = table;
