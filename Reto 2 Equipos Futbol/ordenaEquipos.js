//var btnOrdenar = document.getElementById('btnOrdena');
var btnCat = document.getElementById('btnCategoria');
var optCat = document.getElementById('CategoriaSelect');

var equiposCategoria = [];
var equiposPuntaje = [];

// Funcion que selecciona los equipos de categoria A
optCat.onchange = function()
{
    var catSeleccionada = this.options[optCat.selectedIndex].text;    
    //console.log(catSeleccionada);
    equiposCategoria = objEquipos.filter( function(equipo)
                    {                                                
                        return equipo.categoria == catSeleccionada;                        
                    });    
    //console.log("Seleccionando: ");    
    equiposCategoria.forEach(function(element) {
        //console.log(element.indice + ": " + element.categoria  + ": " + element.puntaje)
    });
}


// Funcion que ordena los equipos por Puntuacion
btnCat.onclick = function()
{
    equiposPuntaje = equiposCategoria.sort( function(equipo1, equipo2)
        {
            //console.log(equipo1.puntaje);    
            var punt1 = equipo1.puntaje;
            var punt2 = equipo2.puntaje;
            return punt2.pts - punt1.pts;
        });

        //console.log("Ordenando: ");    
        equiposPuntaje.forEach(function(element) {
            //console.log(element.indice + ": " + element.puntaje.pts)
        });    

   genera_tabla();     
}



function genera_tabla() {
    // Obtener la referencia del elemento body    
    var divPunt = document.getElementById("puntuacion");
    var tpuntajes = document.getElementById("tabPuntajes");
    var tBodyPunt = document.getElementById("tBodyPuntajes");
    
    //Limpio el cuerpo de la tabla antes de cargar la nueva info
    tBodyPunt.innerHTML = "";

    // Crea un elemento <table> y un elemento <tbody>
    //var tabla   = document.createElement("table");
    //var tblBody = document.createElement("tbody");
    
    // Crea las celdas
    for (var i = 0; i < equiposPuntaje.length; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        // Crea un elemento <td> y un nodo de texto, hace que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        
        // Llena las celdas de la fila
        // Celda #
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(i+1);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);
        
        // Celda Nombre Equipo
        celda = document.createElement("td");
        textoCelda = document.createTextNode(equiposPuntaje[i].nombre);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);

        // Celda Partidos Jugados
        celda = document.createElement("td");
        textoCelda = document.createTextNode(equiposPuntaje[i].puntaje.pJugados);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);

        // Celda Partidos Ganados
        celda = document.createElement("td");
        textoCelda = document.createTextNode(equiposPuntaje[i].puntaje.pGanados);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);

        // Celda Partidos Empatados
        celda = document.createElement("td");
        textoCelda = document.createTextNode(equiposPuntaje[i].puntaje.pEmpatados);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);

        // Celda Partidos Perdidos 
        celda = document.createElement("td");
        textoCelda = document.createTextNode(equiposPuntaje[i].puntaje.pPerdidos);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);

        // Celda Goles a Favor
        celda = document.createElement("td");
        textoCelda = document.createTextNode(equiposPuntaje[i].puntaje.gFavor);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);

        // Celda Goles en Contra
        celda = document.createElement("td");
        textoCelda = document.createTextNode(equiposPuntaje[i].puntaje.gContra);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);

        // Celda Diferencia Goles 
        celda = document.createElement("td");
        textoCelda = document.createTextNode(equiposPuntaje[i].puntaje.difGoles);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);

        // Celda Puntaje
        celda = document.createElement("td");
        textoCelda = document.createTextNode(equiposPuntaje[i].puntaje.pts);
        celda.appendChild(textoCelda);        
        hilera.appendChild(celda);

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tBodyPunt.appendChild(hilera);
    }
    
    // posiciona el <tbody> debajo del elemento <table>
    tpuntajes.appendChild(tBodyPunt);
    // appends <table> into <body>
    divPunt.appendChild(tpuntajes);        
    }