var cargado = false; // para cargar el select de equipos la primera vez que se hace click
var selEquipo = document.getElementById('equipos');
var nomEquipo = document.getElementById('nombre');
var logoEquipo = document.getElementById('imgEquipo');
var dtEquipo = document.getElementById('dt');
var reseniaEquipo = document.getElementById('resenia');
var estadioEquipo = document.getElementById('estadio');
var estrellasEquipo = document.getElementById('estrellas');


selEquipo.onchange = function()
{    
    var optEquipo = this.value;
    // Recuperar el equipo seleccionado para mostrar su info
    objEquipos.forEach(function(element) {                                            
                            if(element.indice == optEquipo)
                            { mostrarEquipo(element);}              
                        });

    // Funcion que muestra la data del Equipo recibido por parametro
    function mostrarEquipo(equipoMostrar)
    {       
        nomEquipo.innerHTML         = equipoMostrar.nombre;
        logoEquipo.src              = equipoMostrar.urlLogo;
        dtEquipo.innerHTML          = equipoMostrar.directorTecnico;
        reseniaEquipo.innerHTML     = equipoMostrar.resenia;
        estadioEquipo.innerHTML     = equipoMostrar.estadio;
        estrellasEquipo.innerHTML   = equipoMostrar.estrellas;
    }

} // onChange del Select


selEquipo.onclick = function cargarSelect ()
{        
    if (!cargado){
        // Recorrer el arreglo de equipos cargando los equipos al select
        dataEquipos.forEach(function(element) {                                            
                    var newOption = document.createElement("option");
                    newOption.text = element.nombre;
                    newOption.value = element.indice;
                    //console.log(newOption.value);
                    selEquipo.add(newOption);                                            
            });  
    }
    cargado = true;      
} // onLoad del Select

