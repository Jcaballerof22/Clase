var email = document.getElementById("email");
var nombre = document.getElementById("nombre");
var patron = /^[A-Za-z\s]+$/;
var izenaOndo;
var emailaOndo;
var botonDaw = document.getElementById("DAW");
var botonDam = document.getElementById("DAM");

botonDam.style.display = "none";
botonDaw.style.display = "none";

function validar(){
    if (nombre.value.length>20 || nombre.value.length<1 || !nombre.value.match(patron)){
        nombre.style.borderColor = "red";
        izenaOndo = false;
    }else{
        nombre.style.borderColor = "green";
        izenaOndo = true;
    }

    if (email.value.includes("@gmail.com")){
        email.style.borderColor = "green";
        emailaOndo = true;
    }else{
        email.style.borderColor = "red";
        emailaOndo = false;
    }
    botoiak();
}

function botoiak(){
    if (izenaOndo && emailaOndo){
        botonDam.style.display = "block";
        botonDaw.style.display = "block";
    }
}

function info(ciclo){
    var h2 = document.createElement("h2");
    h2.textContent = ciclo;

    var p = document.createElement("p");
    p.textContent = email.value + " " + nombre.value;

    document.body.appendChild(h2);
    document.body.appendChild(p);
}