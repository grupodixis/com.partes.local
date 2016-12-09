var partes ="";
var obras ="";
var tareas ="";

function leer(op){
     $.ajax({
        url: 'http://www.pablosanchezweb.com/partes/php/select.php',
        type: 'GET',
        dataType: 'json',
        crossdomain:true,
        data: {op: op},
    })
    .done(function(data) {
        switch(op){
            case "partes":
                partes = data;
                break;
            case "obras":
                obras = data;
                break;
            case "tareas":
                tareas = data;
                break;
            default:
                break;  
        }   
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete "+op);
    });
}

document.addEventListener("deviceready", function(){
    leer("obras");
    leer("tareas");
    leer("partes");
});
$(document).ready(function() {
    leer("obras");
    leer("tareas");
    leer("partes");
});
