var selectedTab = document.getElementById("selTab");
var htmlDivFilms = document.getElementById("films");
var htmlDivPeople = document.getElementById("people");
var htmlDivPlanets = document.getElementById("planets");
var htmlDivSpecies = document.getElementById("species");
var htmlDivStarships = document.getElementById("starships");
var htmlDivVehicles = document.getElementById("vehicles");
var modalPers = document.getElementById("containerModal");
var modalFijo = document.getElementById("myModal1");
var persFilm = [];
var url;      
var loopPeople = 0;
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
    //e.stopPropagation()
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
    console.log("Voy a Mostrar el Contenido adicional");
    console.log(jitem);
    console.log(datosCat.results[0]);
    

    //Creo los elementos del Modal    
    // El Modal    
    var persModal = document.createElement("div");
    persModal.setAttribute("class","modal fade");    
    persModal.setAttribute("id","myModal1");    
    persModal.setAttribute("role","dialog");    

    var persModalDlg = document.createElement("div");
    persModalDlg.setAttribute("class","modal-dialog modal-lg"); 
    
    var persModalCtn = document.createElement("div");
    persModalCtn.setAttribute("class","modal-content"); 
    
    var persModalHead = document.createElement("div");
    persModalHead.setAttribute("class","modal-header"); 
    
    var persModalHeadTitle = document.createElement("div");
    persModalHeadTitle.setAttribute("class","modal-title"); 
    persModalHeadTitle.innerHTML = "Personajes";
    
    persModalHead.appendChild(persModalHeadTitle);
    persModalCtn.appendChild(persModalHead);

    var persModalBdy = document.createElement("div");
    persModalBdy.setAttribute("class","modal-body"); 

    // Armo el carrusel para mostrar la info adicional    
    // Carrusel Slide
    var carSlide = document.createElement("div");
    carSlide.setAttribute("id","myCarousel");
    carSlide.setAttribute("class","carousel slide");
    carSlide.setAttribute("data-ride","carousel");
    carSlide.setAttribute("interval","1000");
    

    // Carrusel Inner
    var carInner = document.createElement("div");
    carInner.setAttribute("class","carousel-inner");    
    //carInner.setAttribute("role","listbox");    

    // Cargo las imagenes segun la categoria                   
    cargarImgCat(datosCat,jitem);

    var arrResults;
    
    if (datosCat.results) {
        arrResults = datosCat.results;
    } else {
        arrResults = datosCat;
    }     

    arrResults.forEach(element => {        
        /* console.log(element);                            
        console.log(element.srcImg);
        console.log(element.title); */
                                                          
            // Creo el Carrusel Item    
            var carItem = document.createElement("div");
            carItem.setAttribute("class","item active");
             
            // Asigno la imagen
            var imag = document.createElement("img");
            imag.setAttribute("class", "d-block w-100");
            imag.setAttribute("src", element.srcImg);            
            imag.setAttribute("width", "50%");
            imag.setAttribute("alt", "film image");
            carItem.appendChild(imag);

            // Creo el Carrusel Caption   
            var carTitle = document.createElement("div");
            carTitle.setAttribute("class","carousel-caption");
            
            // Asigno el Titulo
            var nameCap = document.createElement("h5");
            var nameCapText = document.createTextNode("Name: ");
            nameCap.appendChild(nameCapText);
            carTitle.appendChild(nameCap);
            // Asigno el Text 
            var textName = document.createElement("p");
            var textNameContent = document.createTextNode(element.title);            
            textName.appendChild(textNameContent);
            carTitle.appendChild(textName);            

            //Agrego el Titulo al Carrusel
            carInner.appendChild(carTitle);   

            //Agrego el Item al Carrusel
            carInner.appendChild(carItem);            
            

    }); 

    //Agrego el slide al carrusel
    carSlide.appendChild(carInner);    
    
    // Agregp el carrusel al modal
    persModalBdy.appendChild(carSlide);
    persModalCtn.appendChild(persModalBdy);
    persModalDlg.appendChild(persModalCtn)
    persModal.appendChild(persModalDlg);

    //console.log(persModal);
    //Muestro el modal
    modalPers.appendChild(persModal);      
    $("#myModal1").modal();


}        



