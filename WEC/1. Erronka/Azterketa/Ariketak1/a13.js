var erantzuna;
var ida;


function konprobatu(erantzuna, ida){
    var x = document.getElementById(ida);
    var ondo = document.getElementById('ondo');
    var txarto = document.getElementById('txarto');
    if(erantzuna=="bien"){
        x.style.color = "green";
        ondo.innerHTML++;
    }else{
        x.style.color = "red";
        txarto.innerHTML++;
    }
    kontatu()
}

function kontatu(){
    if(ondo.innerHTML == 4){
        document.write("hAS gasnASi");
    }
    if(txarto.innerHTML == 4){
        document.write("HAsas oerduiisd");
    }
}