var esaldia = "La noche se avecina, ahora empieza mi guardia. No terminará hasta el día de mi muerte. No tomaré esposa, no poseeré tierras, no engendraré hijos. No llevaré corona, no alcanzaré la gloria. Vivire y morire en mi puesto. Soy la espada en la oscuridad. Soy el vigilante del Muro. Soy el fuego que arde contra el frío, la luz que trae el amanecer, el cuerno que despierta a los durmientes, el escudo que defiende los reinos de los hombres. Entrego mi vida y mi honor a la Guardia de la Noche,durante esta noche y todas las que estén por venir.";
var palabra = document.getElementById("palabra");
var emaitza = document.getElementById("emaitza");

esaldia = esaldia.toLowerCase();
// esaldia = esaldia.split(" ");
// console.log(esaldia);

// for (var i=0; i<esaldia.length; i++){
//     if(esaldia[i].includes("no")){
//         esaldia[i]=" ";
//     }
// }
esaldiaNo = esaldia.replace(/\bno\b/g, "");
console.log(esaldia);
console.log(esaldiaNo);

esaldiaSplit = esaldia.split(" ");
console.log(esaldiaSplit);
console.log(palabra);
function contar(){
    var contador = 0;
    palabraMinuscula = palabra.value.toLowerCase();
    for(var i=0; i<esaldiaSplit.length; i++){
        if(esaldiaSplit[i]===palabraMinuscula){
            contador++;
        }
    }
    emaitza.textContent = contador;
}