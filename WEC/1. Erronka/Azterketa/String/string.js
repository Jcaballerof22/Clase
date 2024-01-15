var esaldia = "España se ha proclamado campeona del Eurobasket después de derrotar a Francia (88-76) en la gran final de Berlin";

//Zenbat letra ditu esaldiak?
console.log(esaldia.length);

// Zer karakter du 25. posizioak?
console.log(esaldia[25]);

// Zein posiziotan dago lehenengo d letra? Eta azken d letra? Nola lortuko zenuke bigarren d letra ateratzea?
var contadorea = 0;
for (var i=0; i<esaldia.length; i++){
    if(esaldia[i]=='d'){
        contadorea ++;
        if(contadorea==1){
            console.log(i);
        }
        if (contadorea==2){
            console.log(i);
        }
        if (contadorea==6){
            console.log(i);
        }
    }
}

console.log(esaldia.indexOf("d"));
console.log(esaldia.lastIndexOf("d"));
console.log(esaldia.indexOf("d", esaldia.indexOf("d")+1));

// Zer posizioan dago "Eurobasket" hitza?
console.log(esaldia.indexOf("Eurobasket"));

// Nola dakizu esaldian «Portugal» hitza existitzen den?
if (esaldia.includes("Portugal")){
    console.log("Si");
}else{
    console.log("No");
}

// Nola dakizu esaldia Berlin hitzarekin hasten edo amaitzen den?
if (esaldia.startsWith("Berlin")){
    console.log("Empiesa");
}else if (esaldia.endsWith("Berlin")){
    console.log("Finalisa");
}

// Gehitu «2022ko irailaren 18an» esaldiari, eta gorde guztia aldagai batean.
newEsaldia = esaldia + " 2022ko irailaren 18an";
console.log(newEsaldia);

// Aurreko esalditik 26 eta 35 posizioen artean dauden letrak atera.
var newNewEsaldia = "";
for (var i=26; i<35; i++){
    newNewEsaldia += newEsaldia[i];
    // console.log(newEsaldia[i]);
}
console.log(newNewEsaldia);

console.log(newEsaldia.substring(26,35));
console.log(newEsaldia.substring(40));

// Gehitu esaldiari 5 zuriune aurretik eta 10 zuriune atzetik. Gero, zuriune horiek ezabatuko dituen metodoa bilatu, zenbat dauden zehatz-mehatz adierazi beharrik izan gabe.
newEsaldia = "     "+newEsaldia+"          ";
console.log(newEsaldia);
console.log(newEsaldia.trim());

// Esaldia letra xehe bihuru. Eta gero letra larri.
console.log(esaldia.toLowerCase());
console.log(esaldia.toUpperCase());

// Esaldia array bihurtu, non posizio bakoitzak hitz bat duen, metodo bakarra erabiliz.
console.log(esaldia.split(" "));