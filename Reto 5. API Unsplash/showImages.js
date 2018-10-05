const btnSearch = document.getElementById("btnBuscarImagenes");
const txtSearch = document.getElementById("terminoBusqueda");

const gridResults = document.getElementById("searchResult");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");




btnSearch.addEventListener("click", mostrarImagenes);


async function mostrarImagenes() {
    var termino = txtSearch.value;    
    await getImages(termino);    
    await createImagesLodash(imagesList) ;
    await assignBtnEvent(imagesList);
}


function createImagesLodash(imagesList){
//LODASH + JQUERY
// Voy Creando cada Card Basado en la Plantilla template en index.html
var cardsHTML = "";    
for(let i = 0 ; i < imagesList.length ; i++ ) {        
        var plantilla = _.template( $("#card-template").html() );        
        var plantillacompilada = plantilla({'description' : imagesList[i].description
                                            ,'imagen'     : imagesList[i].urls.thumb
                                            ,'id'         : "btnImagen" + i});                  
        
        cardsHTML += plantillacompilada;        
    }      
    $("#grid-row").html(cardsHTML);
    
}

// Asigno Event Listeners a los botones creados
function assignBtnEvent(imgs) {
    for (let i = 0; i < imgs.length; i++) {
        const element = imgs[i];
        const boton = document.getElementById("btnImagen" + i);
        boton.addEventListener('click',makeItHappenDelegate(imgs[i]),false);                
    }
    
}

// Funcion Delegate para recibir la imagen de cada card (variable clossing issue)
function makeItHappenDelegate(img) {
    return function(){
        mostrarInfo(img)
    }
  }

// Función para mostrar la info segun el btn presionado
function mostrarInfo(imageFull){    
    console.log(imageFull);    
    var containerHTML = "";        
    var plantillaInfo = _.template( $("#info-template").html() );        
    var plantillaInfocompilada = plantillaInfo({'description' : imageFull.description
                                                ,'imagen'     : imageFull.urls.full
                                                ,'usr_link'   : imageFull.links.html
                                                ,'usr_name'   : imageFull.user.name
                                                });                  
    containerHTML += plantillaInfocompilada;                      
    $("#info-row").html(containerHTML);

    var enviarData = document.getElementById('btnGuardar');   
    
    /* var usrName = document.getElementById('usrName');
    var imgUrl = document.getElementById('imgUrl');
    var imgDesc = document.getElementById('imgDescription'); */
            
    // Se asigna a una variable cada elemento input con su ID
    objImagen = {
            usrName: document.getElementById('usrName').innerText,
            imgUrl: document.getElementById('imgUrl').src,
            imgDesc: document.getElementById('imgDescription').innerText,
    }
    
    // Envio el objImagen para ser almacenado en la BD
    enviarData.addEventListener('click', function(){enviar(objImagen)},false);
}

function showAlert(msg) {    
    alert(msg);    
}
