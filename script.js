function CalcularTotal(){

     var formulario = document.getElementById("Calcular");
     total = 0;

     var tipo = formulario.tipo.value;

     if(tipo == "primerconsulta"){
            total += 850;;
     }
     else if(tipo == "seguimiento"){
            total += 700;
    }
    else if(tipo == "paquetetres"){
            total += 2000;
    }
    else if(tipo == "paquetepareja"){
            total += 5000;
    }
    else{
        alert("Seleccione un tipo de consulta");
    }

    var analisis = document.getElementById('analisis').value;

    if(analisis == "ACCsinconsulta"){
        total += 200;
    }
    else if(analisis == "ACCconsulta"){
        total += 1000;
    }

    document.getElementById("total").innerHTML = "Total: $ " + total;
    
}