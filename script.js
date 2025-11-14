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
    else{
        alert("Seleccione otro tipo de servicios");
    }

    var dinamica = formulario.querySelector('input[name="dinamica"]:checked').value;

    if(dinamica == "receta"){
        total += 1000;
    }
    else if(dinamica == "ejercicios"){
        total += 1000;
    }
    else if(dinamica == "revista"){
        total += 150;
    }
    else{
        alert("Seleccione un tipo de preparación");
    }

    var tipodepago = document.getElementById("tipodepago").value;

    if(tipodepago == "efectivo"){
        total = total * 1.0;
    }
    else if(tipodepago == "tarjetacod"){
        total = total +(total * 0.06);
    }
    else if(tipodepago == "transferencia"){
        total = total + (total * 0.03) ;
    }
    else{
        alert("Seleccione un tipo de pago");
    }

    var FAC = document.getElementById("factura").value;
    if(FAC == "si"){
        total = total + (total * 0.16);
    }
    else if(FAC == "no"){
        total = total * 1.0;
    }
    else{
        alert("Seleccione si desea factura o no");
    }

    document.getElementById("total").innerHTML = "Total: $ " + total;

    alert("Gracias por su interes en nuestros servicios.");
    
}