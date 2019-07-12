// Questão 1)

var temp = Number(document.getElementById("temp_celsius").value);
var btnCalcula = document.getElementById("converter");

function converteCelsiusParaFahrenheit(temp){
    var conversao = ((9 * temp) / 5) + 32;
    return conversao;
}

btnCalcula.onclick = function(){
    document.getElementById("temp_fahr").innerHTML = converteCelsiusParaFahrenheit(temp);
}
//console.log(converteCelsiusParaFahrenheit(temp));

// ----------------------------------------------------

// Questão 2)

var listaCopas = document.getElementById("anos_copa");

for(var ano = 1930; ano <= 2018; ano += 4){
    listaCopas.innerHTML += '<li>' + ano + '</li>';
}

// ----------------------------------------------------

// Questão 3)

var n1 = Number(document.getElementById("nota1").value);
var n2 = Number(document.getElementById("nota2").value);
var media = calculaMedia(n1, n2);
var nFaltas = Number(document.getElementById("n_faltas").value);
var btn_calcula_situacao_aluno = document.getElementById("calcular");

function calculaMedia(n1, n2){
    var mediaAluno = 0;
        mediaAluno = (n1 + n2) / 2;
    return mediaAluno;
}

function verificaSitucaoAluno(media, nFaltas){
    var situacao = "";

    if(media >= 6.5 && nFaltas <= 14){
        situacao = "Média: " + media + " - Nº de faltas: " + nFaltas + " - Aprovado";
    } else if(media < 6.5 && nFaltas > 14){
        situacao = "Reprovado por falta - Nº de faltas( " + nFaltas + " ) e média abaixo de 6,5 ( " + media + " ).";
    } else if(media < 6.5){
        situacao = "Média: " + media + " - Reprovado."
    } else{
        situacao = "Reprovado por falta. - Nº de faltas: " + nFaltas  + ".";
    }

    return situacao;
}

btn_calcula_situacao_aluno.onclick = function(){
    //console.log(verificaSitucaoAluno(media, nFaltas));
    document.getElementById("result").innerHTML = verificaSitucaoAluno(media, nFaltas);
}
 

// ----------------------------------------------------

// Questão 4)

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': '02/10/1996'
        
    }

];

// vendas_cursos
// total_vendas

var total_vendas = 0;

document.getElementById("vendas_cursos").innerHTML = "";

for(var ven = 0; ven < vendas_cursos.length; ven++){

    if(vendas_cursos[ven].reembolso == null){
        total_vendas += vendas_cursos[ven].valor;

        var linhaHTML = "";
        linhaHTML += '<tr>' ;
        linhaHTML +=    '<td>' + vendas_cursos[ven].aluno + '</td>';
        linhaHTML +=    '<td>' + vendas_cursos[ven].data + '</td>';
        linhaHTML +=    '<td>' + vendas_cursos[ven].valor + '</td>';
        linhaHTML += '</tr>' ;

        document.getElementById("vendas_cursos").innerHTML += linhaHTML;
    }

}

document.getElementById("total_vendas").innerHTML = total_vendas;
