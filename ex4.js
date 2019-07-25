// Questão 1)

var estados = document.getElementById("estados");

estados.onchange = function(){
    localStorage.setItem("estado", estados.value)
}

    if(localStorage.estado){
        estados.value = localStorage.estado;
    }

// ----------------------------------------------------

// Questão 2)

var btn_confirma = document.getElementById("confirmar_pedido");
var data_pedido = new Date();
var data_pedido_formatada = format_date(data_pedido);

btn_confirma.onclick = function(){

    var opcao = document.getElementById("envios").value;

    if(opcao == "escolha"){
        alert("Escolha uma forma de envio.");
    }
    else{
        document.getElementById("data_pedido").innerHTML = data_pedido_formatada;
    
        if(opcao == "normal"){
            var dias_entrega = 18;
            document.getElementById("data_entrega").innerHTML = data_entrega;
        } else{
            dias_entrega = 12;
            document.getElementById("data_entrega").innerHTML = data_entrega;
        }    

        var data_envio = new Date().getTime();
        var data_entrega = data_envio + (dias_entrega * 86400000);

        document.getElementById("data_pedido").innerHTML = format_date(data_envio);
        document.getElementById("data_entrega").innerHTML = format_date(data_entrega);
    }
}

function format_date(timestamp){
    var dia = add_left_zero(new Date(timestamp).getDate());
    var mes = add_left_zero(new Date(timestamp).getMonth() + 1);
    var ano = add_left_zero(new Date(timestamp).getFullYear());
    return dia + "/ " + mes + "/ " + ano;
}

function add_left_zero(number){
    if(number < 10){
        return "0" + number.toString();
    } else{
        return number.toString();
    }
}

// ----------------------------------------------------

// Questão 3)

var iniciado = false;
var hora_inicio;
var hora_atual;
var tempo_passado;
var init_cronometro;
var hora, minutos, segundos, milisegundos;

var btn_start_stop = document.getElementById("comecar_parar");
var btn_toggle_zero = document.getElementById("zerar");



btn_start_stop.onclick = function(){
    
    if(!iniciado){
        iniciado = true;
        btn_start_stop.innerHTML = "Parar";

        if(!hora_inicio){
            hora_inicio = new Date().getTime();
        } else{
            hora_inicio = new Date().getTime() - tempo_passado;
        }

        init_cronometro = window.setInterval(function(){

            hora_atual = new Date().getTime();
            tempo_passado = hora_atual - hora_inicio;

            hora = Math.floor(tempo_passado / 3600000);
            resto = tempo_passado - (hora * 3600000);

            minutos = Math.floor(resto / 60000);
            resto -= (minutos  * 60000);

            segundos = Math.floor(resto / 1000);
            resto -= (segundos * 1000);

            milisegundos = resto;
            
            document.getElementById("cronometro").innerHTML = add_left_zero(hora) + ": " + add_left_zero(minutos)
                                                              + ": " + add_left_zero(segundos) + ": "
                                                              + add_left_zero(milisegundos);

        }, 10);

    } else{
        window.clearInterval(init_cronometro);
        iniciado = false;
        btn_start_stop.innerHTML = "Começar";
    }
}

btn_toggle_zero.onclick = function(){
    tempo_passado = 0;
    hora_inicio = new Date().getTime();
    document.getElementById("cronometro").innerHTML = "00: 00: 00: 000";
}

// ----------------------------------------------------

// Questão 4)

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];

function valor_pedagio(veiculo){
    switch(veiculo.categoria){
        case "1":
            return 11.22;
            break;
        
        case "2":
            return 22.45;
            break;
        
        case "3":
            return 16.88;
            break;

        case "4":
            return 33.65;
            break;

        default:
            console.log("Veículo de placa: " + veiculo.placa + "não fez pagamento por erro de categoria (" + veiculo.categoria + ").");
            return 0;
    } 
}

var total = 0;

for(var a = 0; a < carros.length; a++){
    total += valor_pedagio(carros[a]);
}

document.getElementById("faturamento_total").innerHTML = total.toFixed(2);
