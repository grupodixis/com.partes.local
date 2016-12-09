function llenarValores(){
var partesTmp =[{
    "idParte":$.now(),
    "horaFinal": getTime(),
    "horaInicio": "13:30",
    "fecha": "0000-00-00",
    "observacion": "Tubos pasamanos",
    "nombreObra": "Barandillas",
    "clienteObra": "CLH2",
    "nombreUsuario": "Pablo",
    "nombreTarea": "Cortar",
    "status" : 0,
},{
    "idParte":$.now(),
    "horaFinal": getTime(),
    "horaInicio": "13:30",
    "fecha": "0000-00-00",
    "observacion": "Tubos pasamanos",
    "nombreObra": "Barandillas",
    "clienteObra": "CLH2",
    "nombreUsuario": "Pablo",
    "nombreTarea": "Cortar",
    "status" : 0,
},{
    "idParte":$.now(),
    "horaFinal": getTime(),
    "horaInicio": "13:30",
    "fecha": "0000-00-00",
    "observacion": "Tubos pasamanos",
    "nombreObra": "Barandillas",
    "clienteObra": "CLH2",
    "nombreUsuario": "Pablo",
    "nombreTarea": "Cortar",
    "status" : 0,
},{
    "idParte":$.now(),
    "horaFinal": getTime(),
    "horaInicio": "7:00",
    "fecha": "2016-11-23",
    "observacion": "Pletinas pasamanos",
    "nombreObra": "Barandillas",
    "clienteObra": "CLH2",
    "nombreUsuario": "Pablo",
    "nombreTarea": "Barrer",
    "status" : 0,
},{
    "idParte":$.now(),
    "horaFinal": getTime(),
    "horaInicio": "13:30",
    "fecha": "27\/11\/2016",
    "observacion": "Tubos pasamanos",
    "nombreObra": "Barandillas",
    "clienteObra": "CLH2",
    "nombreUsuario": "Pablo",
    "nombreTarea": "Cortar",
    "status" : 0,
}];
var partes = partesTmp;
localStorage.setItem('partesTmp', JSON.stringify(partesTmp));
var retrievedPartes = localStorage.getItem('partesTmp');
alert(partesTmp[3].clienteObra);   
}
// Status 0: none, Status 1: Insert, Status 2: Update, Status 3: Delete

var prt = JSON.parse(localStorage.getItem('partesTmp'));
var b = {
    "idParte": $.now(),
    "horaFinal": "no Finalizado",
    "horaInicio": getTime(),
    "fecha": "27/12/2016",
    "observacion": "Tubos Aritmes",
    "nombreObra": "Escaleras",
    "clienteObra": "AENA",
    "nombreUsuario": "Pablo",
    "nombreTarea": "Soldar",
    "status" : 1,
};

$("#finalizar").on('click', function() {
       finalizarParte(b);
    });
function finalizarParte(data){
    data.horaFinal = getTime();
    SaveDataToLocalStorage(data);
}
function getTime(){
var d = new Date();
var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
return time;
}    

function SaveDataToLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('partesTmp'));
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    console.log(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('partesTmp', JSON.stringify(a));
}

function resetPartes(){
    localStorage.removeItem("partesTmp");
}
$(document).ready(function() {

//alert (prt[0].idParte);
});
