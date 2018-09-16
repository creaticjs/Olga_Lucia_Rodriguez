var selectedTab = document.getElementById("selTab");
var htmlDivFilms = document.getElementById("films");
var htmlDivPeople = document.getElementById("people");
var htmlDivPlanets = document.getElementById("planets");
var htmlDivSpecies = document.getElementById("species");
var htmlDivStarships = document.getElementById("starships");
var htmlDivVehicles = document.getElementById("vehicles");
var modalPers = document.getElementById("myModal");
var persFilm = [];
var url;      
var loopPeople = 0;

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
    console.log(datosCategoria);
    // Obtengo los resultados de la consulta
    var arrResults = datosCategoria.results;    

    console.log(datosCategoria.results);
    
    // Creo la row y la agrego al document
    var row = document.createElement("div");    
    row.setAttribute("class", "row");
    
    //Limpio el cuerpo de la tabla antes de cargar la nueva info
    //htmlDivCategoria.innerHTML = "";
    
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


/* function mostrarFilms(datosCategoria){
    console.log("*** Voy a mostrar Films ***");
    console.log(datosCategoria);
    // Ordeno los films por episodio id
    var arrResults = datosCategoria.results;
    arrResults.sort(function(a, b){return a.episode_id - b.episode_id});
    //console.log(datosCategoria.results);
    //console.log(elem.title);
        // Creo la row y la agrego al document
        var row = document.createElement("div");    
        row.setAttribute("class", "row");
        arrResults.forEach(elem =>{
            // Creo la columna
            var col = document.createElement("div");    
            col.setAttribute("class", "col-sm-6");
            // Creo la Card
            var card = document.createElement("div");    
            card.setAttribute("class", "card mb-4 mt-4 mx-auto");                 
            // Asigno el Titulo
            var title = document.createElement("h5");
            var title_text = document.createTextNode(elem.title);
            title.appendChild(title_text);
            card.appendChild(title);            
            // Creo el card body
            var card_body = document.createElement("div");
            card_body.setAttribute("class", "card-body");
            // Asigno el Director Caption
            var director_cap = document.createElement("h4");
            var director_cap_text = document.createTextNode("Director: ");
            director_cap.appendChild(director_cap_text);
            card_body.appendChild(director_cap);
            // Asigno el Director Text 
            var director_name = document.createElement("p");
            var director_name_text = document.createTextNode(elem.director);
            director_name.appendChild(director_name_text);
            card_body.appendChild(director_name);
            //
            // Asigno el Producer Caption
            var producer_cap = document.createElement("h4");
            var producer_cap_text = document.createTextNode("Producer: ");
            producer_cap.appendChild(producer_cap_text);
            card_body.appendChild(producer_cap);
            // Asigno el producer Text 
            var producer_name = document.createElement("p");
            var producer_name_text = document.createTextNode(elem.producer);
            producer_name.appendChild(producer_name_text);
            card_body.appendChild(producer_name);
            // Asigno el texto
            var par = document.createElement("p");
            var par_text = document.createTextNode(elem.opening_crawl);
            par.appendChild(par_text);
            card_body.appendChild(par);
            // Asigno la imagen
            var imag = document.createElement("img");
            imag.setAttribute("class", "card-img-top");
            imag.setAttribute("src", elem.srcImg);
            imag.setAttribute("width", "80%");
            imag.setAttribute("alt", "film image");
             // Agrego la imagen al card body
             card_body.appendChild(imag); 
            // Agrego los botones para la informacion adicional
            var btnPersonajes = document.createElement("input")
            btnPersonajes.setAttribute("class", "btn btn-default disabled mt-4");
            btnPersonajes.setAttribute("data-toggle", "modal");
            //btnPersonajes.setAttribute("data-target", "#myModal");
            btnPersonajes.setAttribute("value", "Personajes");            
            btnPersonajes.setAttribute("id", "BtnPersonajes");         
            // Agrego EventListener al boton
            //btnPersonajes.addEventListener("click", funcLoadPersonajes);   
            // Agrego el boton al card body
            card_body.appendChild(btnPersonajes);  
            // Agrego el card body a la card
            card.appendChild(card_body);            
            // Agrego la nueva card a la columna
            col.appendChild(card);
            // Agrego la columna al row
            row.appendChild(col);        
            // Cargo el array con la informacion de Personajes de la Pelicula            
            persFilm = elem.characters;
        });
    // Agrego la row al contenido del tab
    htmlDivFilms.appendChild(row);           
}

function funcLoadPersonajes(){
    console.log("Voy a Mostrar los personajes");
    console.log(persFilm);
    //Creo los elementos del Modal
    
    // El Modal
    var persModal = document.createElement("div");
    persModal.setAttribute("class","modal");    

    var persModalDlg = document.createElement("div");
    persModalDlg.setAttribute("class","modal-dialog"); 
    
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
    persModalHead.setAttribute("class","modal-body"); 

    // Carrusel Slide
    var carSlide = document.createElement("div");
    carSlide.setAttribute("class","carousel slide");
    carSlide.setAttribute("data-ride","carousel");

    // Carrusel Inner
    var carInner = document.createElement("div");
    carInner.setAttribute("class","carousel-inner");     

    persFilm.forEach(element => {        
        console.log(element);
        getRequestItem(element);                      
        console.log(datosItem);
        console.log(datosItem.srcImg);
        console.log(datosItem.name);
                                                          
            // Creo el Carrusel Item    
            var carItem = document.createElement("div");
            carItem.setAttribute("class","carousel-item");
             
            // Asigno la imagen
            var imag = document.createElement("img");
            imag.setAttribute("class", "d-block w-100");
            imag.setAttribute("src", datosItem.srcImg);
            imag.setAttribute("width", "80%");
            imag.setAttribute("alt", "film image");
            carItem.appendChild(imag);

            // Asigno el Name Caption
            var nameCap = document.createElement("h5");
            var nameCapText = document.createTextNode("Name: ");
            nameCap.appendChild(nameCapText);
            carItem.appendChild(nameCap);
            // Asigno el Text 
            var textName = document.createElement("p");
            var textNameContent = document.createTextNode(datosItem.name);
            textName.appendChild(textNameContent);
            carItem.appendChild(textName);            

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

    //Muestro el modal
    persModal.show = true;
}                 */