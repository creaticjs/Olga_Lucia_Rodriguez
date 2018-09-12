var datosCategorias={};

function getRequestGit(){
    var peticion  = new  XMLHttpRequest();
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            datosCategorias = JSON.parse(this.responseText);
            mostrarTabs();
        }
    }
    peticion.open('GET','https://api.github.com/users/olgalucia11',true);
    peticion.send();
}

function mostrarTabs(){
    
    
    
    
    document.getElementById('nombre').innerHTML = datosCategorias.name;
    document.getElementById('bio').innerHTML = datosCategorias.bio;
    var imagen=document.getElementById('avatar');
    imagen.setAttribute('src',datosCategorias.avatar_url);
    console.log(datosCategorias);
    //document.getElementById("renderajax").innerHTML = this.responseText;
}