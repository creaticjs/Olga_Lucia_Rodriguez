var datosAPI={};
var datosItem={};
var objCat = {};
var cargado = false;

function getRequestCat(url,cat){
    var peticion  = new  XMLHttpRequest();
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {            
            datosAPI = JSON.parse(this.responseText);                         
            // Cargo las imagenes segun la categoria                   
            cargarImgCat(datosAPI,cat);
            //  y muestro el contenido en el tab actual 
            mostrarTabs(cat, datosAPI); 
            if (datosAPI.next) {            
                getRequestCat(datosAPI.next,cat);
                cargado = true;                                           
            }                                             
        }
    }    
    // Envio el request como metodo GET
    peticion.open('GET',url,true);
    peticion.send();        
}

function cargarImgCat(datosFilms, catImg){
    console.log("Cargando Imagenes Categoria ****************");
    // Valido si me enviaron una categoria con resultados o un item final
    var arrResults;
    if (datosFilms.results) {
        arrResults = datosFilms.results;
    } else {
        arrResults = datosFilms;
    } 
    for (let index = 0; index < arrResults.length; index++) {
          objCat = arrResults[index];
          //console.log(objCat);
          if (index <= 3 && !cargado) {
            objCat.srcImg = "./assets/" + catImg + "/" + index + ".png";            
          } else {
            objCat.srcImg = "./assets/" + catImg + "/" + "default.png";              
          }
          
    }
}


function getRequestPromise(url, cat){    
    return new Promise(function(resolve, reject){
        var httpX = new XMLHttpRequest();
        httpX.onload = function(){
            //console.log(this.responseText);
            resolve(JSON.parse(this.responseText));            
        }
        httpX.onerror = function(){
            reject(Error("Error Cargando Categoria" + cat));
        }
        httpX.open('GET',url,true);
        httpX.send()
    });
}


