function irudialdatu(){
    var image = document.getElementById('irudia');
    if(image.src.match("foto1")){
        image.src="foto2.png";
    }else if (image.src.match("foto2")) {
        image.src="foto3.png";
    }else{
        image.src="foto1.png";
    }
}