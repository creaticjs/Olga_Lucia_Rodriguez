var selectedTab = document.getElementById("selTab");
var element = document.getElementById("films");
var btnPer;
var persFilm = [];

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("pagina Cargada🤠");

    var jitem;
    // Recupero el elemento seleccionado de los "a" dentro de la lista     
    var items = document.querySelectorAll("a");                    
    items.forEach(element => {        
        element.onclick = function(){            
            jitem = element.getAttribute("href").substr(1);                        
            // llamo a obtener la info de la api con la url armada
            getRequestGit(jitem);                                 
        }
    });    
});

function mostrarTabs(item, datosAPI)
{        
    switch(item) {
        case "films":            
            mostrarFilms(datosAPI);
            break;
        case "Orange":
            text = "I am not a fan of orange.";
            break;
        case "Apple":
            text = "How you like them apples?";
            break;
        default:
            text = "I have never heard of that fruit...";
    }
}

function mostrarFilms(datosCategoria){
    console.log("*** Voy a mostrar Films ***");
    console.log(datosCategoria);
    var arrResults = datosCategoria.results;
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
            btnPersonajes.setAttribute("class", "btn btn-link");
            btnPersonajes.setAttribute("data-toggle", "modal");
            btnPersonajes.setAttribute("data-target", "#myModal");
            btnPersonajes.setAttribute("value", "Personajes");            
            btnPersonajes.setAttribute("id", "BtnPersonajes");            
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
    element.appendChild(row);   
    
    /* document.getElementById('nombre').innerHTML = datosCategoria.name;
    document.getElementById('bio').innerHTML = datosCategoria.bio;
    var imagen=document.getElementById('avatar');
    imagen.setAttribute('src',datosCategoria.avatar_url); */
    
    //document.getElementById("renderajax").innerHTML = this.responseText;
}

btnPer.onclick = function(){                
    console.log("Voy a Mostrar los personajes");
    console.log(persFilm);
    //arrPers.forEach
    // llamo a obtener la info de la api con la url armada
    //getRequestGit(jitem);                                 
}