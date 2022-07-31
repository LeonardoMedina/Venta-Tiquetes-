var limit_tiquets_avión = 30;
var numero_Asientos_Avión = 30;

var limit_tiquets_Autobus = 40;
var numero_Asientos_Autbobus = 40;

var select_CO = document.getElementById("Ciudad de orígen");
var value_CO = select.options[select.selectedIndex].value;
console.log(value_CO); 

var select_CD = document.getElementById("Ciudad de destino");
var value_CD = select.options[select.selectedIndex].value;
console.log(value_CD);

var username = prompt("Buen día, estimado cliente, le damos la bienvenida a GOOD TRAVEL: VIAJANDO A OTRO NIVEL, ingrese su nombre de usuario para continuar")
var need = prompt("Bienvenido "+ username + ", a nuestro sistema de MasterTicket ¿Deseas comprar algun ticket?  (Sí/No)");

if(need == 'Sí'){
  comprartiquetes();
}else{
  alert("¡Gracias por su preferencia 😊. Que siga teniendo un excelente dia!"); 
}


function comprartiquetes()
{
  var transporte = parseInt(prompt("¿En qué desea viajar? Elija el número de la opción: \n 1. Avión\n 2. Autobús"));
    if(transporte == 1){
    var cantidad_tiquetes_a = parseInt(prompt("¿Cuántos tiquetes desea adquirir?"));
    var n_pasajero_a = 1
    }
    while(n_pasajero_a <= cantidad_tiquetes_a)
    {
      n_pasajero_a = n_pasajero_a + 1      
      alert("Rellene los datos del pasajero " + n_pasajero_a)
      var datos_1_a = prompt("Nombre completo:")
      var datos_2_a = prompt("Edad:")
      var datos_3_a = prompt("DNI:")
      prompt("Datos del pasajero:" + "\n Nombre: " + datos_1_a + "\n Edad: " + datos_2_a + "\n DNI: " + datos_3_a + "Desea continuar : Sí/No") 
    }
    elegir_avion()
    var fechaHora = new Date();
    alert("Perfecto! Su compra se ha efectuado exitosamente " + usuario + ". Haga clic para ver los detalles de su ticket");
    alert("\n Usuario: " + username + "\n Nombre de pasajeros: " + cantidad_tiquetes_a + "\n Fecha y hora de compra: " + fechaHora+ "\n Medio de Trasporte: Avión" + "\n Ciudad de Origen: " + select_CO + "\n Ciudad de destino: " + select_CD + "\n Total de la compra :" + costo_total);
  }        
    if (transporte == 2){
    var cantidad_tiquetes_b = parseInt(prompt("¿Cuántos tiquetes desea adquirir?"));
    var n_pasajero_b = 1
    
    while(n_pasajero_b <= cantidad_tiquetes_b)
    {
      n_pasajero_b = n_pasajero_b + 1      
      alert("Rellene los datos del pasajero " + n_pasajero_b)
      var datos_1_b = prompt("Nombre completo:")
      var datos_2_b = prompt("Edad:")
      var datos_3_b = prompt("DNI:")
      prompt("Datos del pasajero:" + "\n Nombre: " + datos_1_b + "\n Edad: " + datos_2_b + "\n DNI: " + datos_3_b)
    }
    elegir_bus()
    
    var fechaHora = new Date();
      alert("Perfecto! Su compra se ha efectuado exitosamente " + username + ". Haga clic para ver los detalles de su ticket");
      alert("\n Usuario: " + username + "\n N° de pasajeros: " + cantidad_tiquetes_b + "\n Fecha y hora de compra: " + fechaHora+ "\n Medio de Trasporte: Bus" + "\n Ciudad de Origen: " + select_CO + "\n Ciudad de destino: " + select_CD + "\n Total de la compra :" + costo_total);

      
  
  if(transporte != 1 && transporte != 2){
    alert("Lo sentimos, los datos ingresados son incorrectos 😒");
  }
}

function elegir_avion()
{
    var asientos_avión = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (var i = 0; i <= 39; i++) {
      var elegir_asiento_a = parseInt(prompt("Elija los asientos de su preferencia del 0 al 29:"))
      asientos_avión[i] = asientos_avión[elegir_asiento_a];
    }
   
    if(asientos_avión[elegir_asiento_a] = 0){        
      console.log("El asiento está libre")
      asientos_avión[elegir_asiento_a] = asientos_avión[1]
      alert("Perfecto 👍, asiento seleccionado")          
    }else{        
      alert("Upps😒! El asiento seleccionado no se encuentra disponible. Vuelva a seleccionar su asiento")
    }
}

function elegir_bus()
{
    var asientos_bus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (var i = 0; i <= 39; i++) {
      var elegir_asiento_b = parseInt(prompt("Elija los asientos de su preferencia del 0 al 39:"))
      asientos_bus[i] = asientos_bus[elegir_asiento_b];
    }
   
    if(asientos_bus[elegir_asiento_b] = 0){        
      console.log("El asiento está libre")
      asientos_bus[elegir_asiento_b] = asientos_bus[1]
      alert("Perfecto 👍, asiento seleccionado")          
    }else{        
      alert("Upps😒! El asiento seleccionado no se encuentra disponible. Vuelva a seleccionar su asiento")
    }
}