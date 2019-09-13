
let cupoMin=5;
let cupoMax1=8;
let cupoMax2=3;

function validarCupo(cupoMin, cupoMax){
    if(cupoMin>cupoMax){
        alert("Error! cupo minimo: "+cupoMin+ ", cupo maximo: " +cupoMax+ ". El cupo maximo no puede ser menor que el minimo");
        return false;
    }
}
//validarCupo(cupoMin, cupoMax1);
//validarCupo(cupoMin, cupoMax2);

/*-------------------------------------------------------------------------------------------------*/

let fechaIni= new Date(2018, 11, 28);
let fechaFin= new Date(2018, 11, 26);

function compararFechas (fechaIni, fechaFin){
    if (fechaIni <= fechaFin){
        alert("esta bien");
    }else{
        alert("Error! la fecha final no debe ser anterior que la inicial");
        return false;
    }
}

//console.log(fechaIni);
//console.log(fechaFin);

/*-------------------------------------------------------------------------------------------------*/

let clave1='hola123';
let clave2='hola';

function controlarClave(clave){
    if(clave.length <= 8 && clave.length >= 6){
        alert("La clave '" +clave1 + "' esta bien");
    }else{
        alert("Error! La clave '" +clave2 + "' es incorrecta. Debe contener entre 6 y 8 carácteres");
    }
}

//controlarClave(clave1);
//controlarClave(clave2);

/*-------------------------------------------------------------------------------------------------*/

let clave='hola123'
let reingresoClave1='hola123'
let reingresoClave2='hola589'

function reingresoClave (clave, reingresoClave){
    if(clave==reingresoClave){
        alert("Perfecto! Las claves coinciden");
    }else{
        alert("Error! Las claves deben ser iguales");
        return false;
    }
}

//reingresoClave(clave, reingresoClave1);
//reingresoClave(clave, reingresoClave2);

/*-------------------------------------------------------------------------------------------------*/


function validarFormularioCursos(){
    let cupomin= document.getElementById("cupomin").value;
    let cupomax= document.getElementById("cupomax").value;
    let fechaDesde= document.getElementById("fechaDesde").value;
    let fechaHasta= document.getElementById("fechaHasta").value;
    let fechaLimite= document.getElementById("fechaLimite").value;

    console.log(cupomin);
    console.log(fechaDesde);

    if(validarCupo(cupomin, cupomax) == false){
        return false;
    }

    if(compararFechas(fechaDesde, fechaHasta) == false){
        return false;
    }

    if(compararFechas(fechaLimite, fechaDesde) == false){
        return false;
    }
    
    return true;
}

function validarContraseña(){
    
    let contraseña1= document.getElementById("contraseña1").value;
    let contraseña2= document.getElementById("contraseña2").value;

    console.log(contraseña1);

    if (reingresoClave (contraseña1, contraseña2) == false){
        return false;
    }

    return true;
}

/*--------------------------------------------------------------------------------------------------*/




