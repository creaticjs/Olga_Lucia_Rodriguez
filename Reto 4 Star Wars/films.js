var datosFilms={};

function getRequestGit(){
    var peticion  = new  XMLHttpRequest();
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            datosFilms = JSON.parse(this.responseText);
            mostrarTabs();
        }
    }
    peticion.open('GET','https://swapi.co/api/films/1/',true);
    peticion.send();
}

function mostrarTabs(){
    
    console.log(datosFilms);
    
    
    /* document.getElementById('nombre').innerHTML = datosFilms.name;
    document.getElementById('bio').innerHTML = datosFilms.bio;
    var imagen=document.getElementById('avatar');
    imagen.setAttribute('src',datosFilms.avatar_url); */
    
    //document.getElementById("renderajax").innerHTML = this.responseText;
}