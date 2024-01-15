window.addEventListener("load", llamadaFetch2);

function llamadaFetch2() {
    // Obtener la referencia al contenedor de la imagen
    const imagenContainer = document.getElementById('divArgazkia');
   
    let options = { method: "GET", mode: 'cors' };

    fetch("https://api.thecatapi.com/v1/images/search", options)
        .then(data => data.json())
        .then(res => {
            console.log(res);
            document.getElementById("imgID").innerHTML = "ID: " + res[0].id;

            // Obtener la URL de la imagen desde el JSON
            const imageUrl = res[0].url;

            // Crear un elemento de imagen y establecer su fuente (src)
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;

            // Agregar la imagen al contenedor
            imagenContainer.appendChild(imageElement);

            /* var divArgazkia = document.createElement('img').src= res[0].url;
            document.getElementById("argazkia").appendChild(divArgazkia); */
        })
        .catch (error => {
            console.error('Error al cargar el JSON:', error);
        });

}