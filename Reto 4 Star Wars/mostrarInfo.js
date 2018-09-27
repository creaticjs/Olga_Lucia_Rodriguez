var selectedTab = document.getElementById("selTab");
var htmlDivFilms = document.getElementById("films");
var htmlDivPeople = document.getElementById("people");
var htmlDivPlanets = document.getElementById("planets");
var htmlDivSpecies = document.getElementById("species");
var htmlDivStarships = document.getElementById("starships");
var htmlDivVehicles = document.getElementById("vehicles");
var modalFijo = document.getElementById("myModal1");
var modalFijoTitle = document.getElementById("myModalTitle");
var carInnerFijo = document.getElementById("carouselInner");
var url;      
var datosCat=[];

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("pagina Cargada🤠");

    var jitem;
    // Recupero el elemento seleccionado de los "a" dentro de la lista     
    var items = document.querySelectorAll("a");                    
    items.forEach(element => {        
        element.onclick = function(){            
            jitem = element.getAttribute("href").substr(1);     
            // armo la url del elemento seleccionado    
            url = "https://swapi.co/api/" + jitem +  "/";                     
            cargado = false;
            // llamo a obtener la info de la api con la url armada
            getRequestCat(url, jitem);                                                         
            
        }
    });    
});

function mostrarTabs(item, datosAPI)
{        
    switch(item) {
        case "films":            
            //mostrarFilms(datosAPI);            
            // Ordeno los resultados de la consulta            
            datosAPI.results.sort(function(a, b){return a.episode_id - b.episode_id});
            mostrarCategoria(datosAPI,htmlDivFilms);            
            break;
        case "people":        
            //mostrarPeople(datosAPI);
            mostrarCategoria(datosAPI,htmlDivPeople);            
            break;
        case "planets":                        
            mostrarCategoria(datosAPI,htmlDivPlanets);            
            break;  
        case "species":                    
            mostrarCategoria(datosAPI,htmlDivSpecies);            
            break; 
        case "starships":            
            mostrarCategoria(datosAPI,htmlDivStarships);
            break;  
        case "vehicles":            
            mostrarCategoria(datosAPI,htmlDivVehicles);
            break;                
        default:
            text = "I have never heard of that ...";
    }
}
    

function mostrarCategoria(datosCategoria, htmlDivCategoria){
    console.log("*** Voy a mostrar Categoria General ***");
    //console.log(datosCategoria);
    // Obtengo los resultados de la consulta
    var arrResults = datosCategoria.results;    

    //console.log(datosCategoria.results);
    
    // Creo la row y la agrego al document
    var row = document.createElement("div");    
    row.setAttribute("class", "row");
    
    //Limpio el cuerpo de la tabla antes de cargar la nueva info
    if (!cargado) {
        htmlDivCategoria.innerHTML = "";    
    } 
        
    //Recorro el Array de Resultados creando la card
        arrResults.forEach(elem =>{
            //console.log(elem.name);
            // Creo la columna
            var col = document.createElement("div");    
            col.setAttribute("class", "col-sm-6");                                 
            // Creo la Card
            var card = document.createElement("div");    
            card.setAttribute("class", "card border-danger mt-4 mx-auto");                             
            // Asigno el Titulo            
            var title = document.createElement("h3");
            title.setAttribute("class", "card-title mt-4 mx-auto");            
            var tituloCard;
            if (elem.name) {
                tituloCard= elem.name;
            } else {
                tituloCard = elem.title;
            }
            var title_text = document.createTextNode(tituloCard);
            title.appendChild(title_text);
            card.appendChild(title);            
            
            // Creo el card body
            var card_body = document.createElement("div");
            card_body.setAttribute("class", "card-body");

            // Asigno la imagen
            var imag = document.createElement("img");
            imag.setAttribute("class", "card-img-top mb-4");
            imag.setAttribute("src", elem.srcImg);
            imag.setAttribute("width", "80%");
            imag.setAttribute("alt", "film image");
            // Agrego la imagen al card body
            card_body.appendChild(imag);  
            for (var i in elem) {
                if (elem.hasOwnProperty(i)) {                                    

                    if (((elem[i]).toString().substr(0,4) != 'http') && i != 'srcImg')                    
                    {
                        // Asigno el Name Caption
                        var objeto_cap = document.createElement("h4");                        
                        var objeto_cap_text = document.createTextNode(i);
                        objeto_cap.appendChild(objeto_cap_text);
                        card_body.appendChild(objeto_cap);

                        // Asigno el Text 
                        var objeto_name = document.createElement("p");
                        var objeto_name_text = document.createTextNode(elem[i]);
                        objeto_name.appendChild(objeto_name_text);
                        card_body.appendChild(objeto_name);                        
                    }
                    
                }
              }
            
              for (var i in elem) {
                if (elem.hasOwnProperty(i)) {                                    

                    if (((elem[i]).toString().substr(0,4) == 'http') && i != 'srcImg')                    
                    {                        
                        
                        console.log(elem[i].toString());
                        // Agrego los botones para la informacion adicional
                        var btnPersonajes = document.createElement("input")
                        btnPersonajes.setAttribute("value", i);            
                        btnPersonajes.setAttribute("id", "Btn"+i);
                        btnPersonajes.setAttribute("class", "btn btn-default btn-lg mt-4");
                        btnPersonajes.setAttribute("data-toggle", "modal");
                        btnPersonajes.setAttribute("data-target", "#myModal1");                        
                                 
                        // Agrego EventListener al boton
                        btnPersonajes.addEventListener("click", CargarAdicional);   
                        // Agrego el boton al card body
                        card_body.appendChild(btnPersonajes);  
                    }
                }
            }
            // Termino de Configurar la card           
            // Agrego el card body a la card
            card.appendChild(card_body);            
            // Agrego la nueva card a la columna            
            col.appendChild(card);
            // Agrego la columna al row
            row.appendChild(col);                    
        });                
    htmlDivCategoria.appendChild(row);           
}                                

function CargarAdicional(event){
    event.preventDefault();
    event.stopPropagation()
    console.log("Voy a pedir la informacion adicional");        
    // Voy a pedir la informacion adicional        
    var jitem = "films";     
    // armo la url del elemento seleccionado    
    url = "https://swapi.co/api/" + jitem +  "/";                     
    //cargado = false;    

    // Hago la llamada usando promises
    getRequestPromise(url,jitem)
    .then(function(datosCat){               
        //console.log(datosCat);         
        //  y muestro el contenido en el carrusel 
        mostrarCarrusel(jitem, datosCat);           
        
    })
    .catch(function(err){
        console.log(err);
    })
}

function mostrarCarrusel(jitem, datosCat){
    console.log("Voy a Mostrar el Carrusel");
    console.log(jitem);
    console.log(datosCat.results[0]);
    
    carInnerFijo.innerHTML = "";

    modalFijoTitle.innerText = jitem;

    // Cargo las imagenes segun la categoria                   
    cargarImgCat(datosCat,jitem);

    var arrResults;
    
    if (datosCat.results) {
        arrResults = datosCat.results;
    } else {
        arrResults = datosCat;
    }     

    var itActive = "carousel-item active";
    arrResults.forEach(element => {        

            // Creo el Carrusel Item    
            var carItem = document.createElement("div");
            carItem.setAttribute("class",itActive);
            itActive = "carousel-item";            

            // Asigno la imagen            
            var imag = document.createElement("img");
            imag.setAttribute("class", "d-block w-100");
            imag.setAttribute("src", element.srcImg);                        
            imag.setAttribute("alt", "film image");
            carItem.appendChild(imag);

            // Creo el Carrusel Caption   
            var carTitle = document.createElement("div");
            carTitle.setAttribute("class","carousel-caption");
            carTitle.innerHTML = "";
            // Asigno el Titulo            
            var nameCap = document.createElement("h5");
            var nameCapText = document.createTextNode("Name: ");
            nameCap.appendChild(nameCapText);
            carTitle.appendChild(nameCap);
            
            // Asigno el Text 
            var parrafo = document.createElement("p");                                                   
            var contenido = document.createTextNode(element.title);                             
            parrafo.appendChild(contenido);             
            carTitle.appendChild(parrafo);         
                                    
            //Agrego el Titulo al Carrusel
            carItem.appendChild(carTitle);   

            //Agrego el Item al Carrusel
            carInnerFijo.appendChild(carItem);            
            
    });   
    
    $("#myModal1").modal();

}        



