"use strict";

const datuakEskatu = "Gehitu zenbaki bat.";
const galdera = "Beste zenbaki bat sartu nahi duzu?";
let datuak = [];

var datuakLortu = function (){
    do{
        datuak.push(prompt(datuakEskatu));
    } while (confirm(galdera))
        return datuak;
    }

var datuakKalkulatu = function (array) {
    let emaitza = 0;
    let kopurua = 0;
    for(var i=0;i<array.length;i++){
        emaitza += Number(array[i]);
        kopurua ++;

    }
    emaitza = emaitza / kopurua;
    return emaitza;
}

datuak = datuakLortu();
alert(datuakKalkulatu(datuak));
