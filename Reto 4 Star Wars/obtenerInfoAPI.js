var datosAPI={};
var objCat = {};


function getRequestGit(link){
    // armo la url del elemento seleccionado
    var url = "https://swapi.co/api/";      
    url = url + link +  "/";         
    var peticion  = new  XMLHttpRequest();
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            datosAPI = JSON.parse(this.responseText); 
            // Cargo las imagenes segun la categoria                   
            cargarImgCat(datosAPI,link);
            //  y muestro el contenido en el tab actual 
            mostrarTabs(link, datosAPI);                      
        }
    }
    // Envio el request como metodo GET
    peticion.open('GET',url,true);
    peticion.send();        
}


function cargarImgCat(datosFilms, catImg){
    var arrResults = datosFilms.results;
    for (let index = 0; index < arrResults.length; index++) {
          objCat = arrResults[index];
          console.log(objCat);
          if (index <= 3) {
            objCat.srcImg = "../assets/" + catImg + "/" + index + ".png";            
          } else {
            objCat.srcImg = "../assets/" + catImg + "/" + "default.png";              
          }
          
    }
}

