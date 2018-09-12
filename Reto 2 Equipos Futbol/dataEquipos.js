var objEquipos = [];

// Defino la clase Jugador
class Jugador{
    constructor(nomJug){
        this.nombre = nomJug;
    }
}

// Defino la clase Puntaje
class Puntaje{
    constructor(pJug, pGan, pEmp, pPerd, gFav, gCon, gDifGol, pts)
    {
        this.pJugados = pJug;
        this.pGanados = pGan; 
        this.pEmpatados = pEmp;
        this.pPerdidos = pPerd;
        this.gFavor = gFav;
        this.gContra = gCon;
        this.difGoles = gDifGol;
        this.pts = pts; 
    }
}

// Defino la clase Equipo
class Equipo{
    constructor(ind, nombre, logo, dt, jugadores, resenia, estadio, numEstrellas, categoria, puntaje )
    {
        this.indice = ind;
        this.nombre = nombre;
        this.urlLogo = logo;
        this.directorTecnico = dt;
        this.jugadores = jugadores;
        this.resenia = resenia;
        this.estadio = estadio;
        this.estrellas = numEstrellas;
        this.categoria = categoria;
        this.puntaje = puntaje;
    }
}


var dataEquipos = [  
    {
        indice: "nacional",
        nombre:"Atletico Nacional" ,
        urlLogo: "/escudos/atletico-nacional.png",
        directorTecnico: "Jorge Almirón",
        jugadores: 
        [
            "A. Ramírez",
            "D. Moreno",
            "G. Castellani"
        ],
        resenia: "El Atlético Nacional S. A., ​ mejor conocido como Atlético Nacional, o simplemente Nacional, es un club de fútbol de la ciudad de Medellín, Colombia, fundado el 7 de marzo de 1947",
        estadio: "Atanasio Girardot",
        estrellas: "",
        categoria: 'A', 
        puntaje: {
                    pJugados: 6,
                    pGanados: 3, 
                    pEmpatados: 2,
                    pPerdidos: 1,
                    gFavor: 9,
                    gContra: 5,
                    difGoles: 4,
                    pts: 11
                   }
    },
    {
        indice: "millonarios",
        nombre:"Millonarios F.C." ,
        urlLogo: "/escudos/millonarios.png",
        directorTecnico: "Miguel Ángel Russo",
        jugadores: 
        [
            "Ayron del Valle",            
            "Gabriel Hauche",            
            "Christian Marrugo",            
        ], 
        resenia: "Millonarios Fútbol Club, oficialmente Azul y Blanco Millonarios Fútbol Club S. A.​, mejor conocido como Millonarios, ​ es un club de fútbol de la ciudad de Bogotá, capital de Colombia. ",
        estadio: " Estadio El Campín",
        estrellas: "",
        categoria: 'A',
        puntaje: {  pJugados: 6,
                    pGanados: 2, 
                    pEmpatados: 3,
                    pPerdidos: 1,
                    gFavor: 7,
                    gContra: 4,
                    difGoles: 3,
                    pts: 9
                }        
    },
    {
        indice: "america",
        nombre:"America de Cali" ,
        urlLogo: "/escudos/america-cali.png",
        directorTecnico: " Harold Lozano",
        jugadores: 
        [   "Diego Herner",
            "Fernando Aristeguieta",
            "Pablo Armero"
        ],
        resenia: "El América de Cali S. A., conocido como América de Cali o simplemente América, es un club de fútbol colombiano de la ciudad de Cali. ",
        estadio: "Olímpico Pascual Guerrero",
        estrellas: "",
        categoria: 'A',
        puntaje: {
                    pJugados: 6,
                    pGanados: 1, 
                    pEmpatados: 2,
                    pPerdidos: 3,
                    gFavor: 1,
                    gContra: 5,
                    difGoles: -4,
                    pts: 5
                }
    },
    
    {
        indice: "cali",
        nombre:"Asociación Deportivo Cali" ,
        urlLogo: "/escudos/deportivo-cali.png",
        directorTecnico: "",
        jugadores: 
        [
            "Nicolás Benedetti",
            "Andrés Eduardo Pérez",
            "Camilo Vargas"
        ],
        resenia: "El Deportivo Cali​ es un club deportivo de la ciudad de Cali, en el departamento del Valle del Cauca, Colombia, Fundado el 23 de noviembre de 1912 ",
        estadio: "Estadio Deportivo Cali",
        estrellas: "",
        categoria: 'A',
        puntaje: {
                    pJugados: 6,
                    pGanados: 2, 
                    pEmpatados: 3,
                    pPerdidos: 1,
                    gFavor: 6,
                    gContra: 6,
                    difGoles: 0,
                    pts: 9
                }
    },
    {
        indice: "junior",
        nombre:"Junior de Barranquilla" ,
        urlLogo: "/escudos/junior-barranquilla.png",
        directorTecnico: "",
        jugadores: 
        [
            "Sebastián Viera",
            "Jarlan Barrera",
            "Teófilo Gutiérrez"
        ],
        resenia: "El Club Deportivo Popular Junior F. C. S. A., mejor conocido como Junior de Barranquilla o también por su antiguo nombre de Atlético Junior es un club de fútbol de la ciudad de Barranquilla, Colombia.",
        estadio: "Estadio Metropolitano Roberto Meléndez",
        estrellas: "",
        categoria: 'A',
        puntaje: {
                    pJugados: 6,
                    pGanados: 4, 
                    pEmpatados: 1,
                    pPerdidos: 1,
                    gFavor: 10,
                    gContra: 3,
                    difGoles: 7,
                    pts: 13
                }
    },
    {
        indice: "caldas",
        nombre:"Once Caldas S. A." ,
        urlLogo: "/escudos/once-caldas.png",
        directorTecnico: "Hubert Bodhert",
        jugadores: 
        [
            "José Fernando Cuadrado",
            "Ray Vanegas",
            "Sergio Felipe Román Palacio"                
        ],
        resenia: "La Corporación Deportiva Once Caldas S.A., más conocida simplemente como el Once Caldas, ​ es un club de fútbol de Colombia, tiene su sede en la ciudad de Manizales, departamento de Caldas, ",
        estadio: "Estadio Palogrande",
        estrellas: "",
        categoria: 'A',
        puntaje: {
                    pJugados: 6,
                    pGanados: 5, 
                    pEmpatados: 1,
                    pPerdidos: 0,
                    gFavor: 11,
                    gContra: 4,
                    difGoles: 7,
                    pts: 16
                }
    },

    {
        indice: "cucuta",
        nombre:"Cúcuta Deportivo" ,
        urlLogo: "/escudos/cucuta.png",
        directorTecnico: "Lucas Pusineri",
        jugadores: 
        [
            "Darwin Carrero",
            "Mauricio Duarte",
            "Braynner García"              
        ],
        resenia: "El Cúcuta Deportivo​ es un club de fútbol colombiano con sede en la ciudad de Cúcuta en el departamento de Norte de Santander.",
        estadio: "Estadio Cucuta",
        estrellas: "",
        categoria: 'B',
        puntaje: {
                    pJugados: 6,
                    pGanados: 5, 
                    pEmpatados: 1,
                    pPerdidos: 0,
                    gFavor: 11,
                    gContra: 4,
                    difGoles: 7,
                    pts: 16
                }
    },
    {
        indice: "magdalena",
        nombre:"Unión Magdalena" ,
        urlLogo: "/escudos/magdalena.png",
        directorTecnico: "Lucas Pusineri",
        jugadores: 
        [
            "David Ferreira",
            "Marcelo Vidal",
            "Erwin Carrillo "          
        ],
        resenia: "El Unión Magdalena es un club de fútbol colombiano de la ciudad de Santa Marta, capital del departamento de Magdalena, fundado el 19 de abril de 1953. Desde 2006 disputa sus partidos en la Primera B del fútbol colombiano. ",
        estadio: " Estadio Sierra Nevada",
        estrellas: "",
        categoria: 'B',
        puntaje: {
                    pJugados: 21,
                    pGanados: 12, 
                    pEmpatados: 5,
                    pPerdidos: 4,
                    gFavor: 35,
                    gContra: 14,
                    difGoles: 21,
                    pts: 41
                }
    },
    {
        indice: "pereira",
        nombre:"Deportivo Pereira" ,
        urlLogo: "/escudos/pereira.png",
        directorTecnico: "José Fernando Santa",
        jugadores: 
        [
            "John Lozano",
            "Jairo Palomino",
            "Francisco Córdoba"
                   
        ],
        resenia: "El Deportivo Pereira, llamado oficialmente por su razón social Corporación Social Deportiva y Cultural de Pereira - Corpereira​ es un club de fútbol colombiano de la ciudad de Pereira,",
        estadio: " Estadio Hernán Ramírez Villegas",
        estrellas: "",
        categoria: 'B',
        puntaje: {
                    pJugados: 21,
                    pGanados: 11, 
                    pEmpatados: 5,
                    pPerdidos: 6,
                    gFavor: 31,
                    gContra: 24,
                    difGoles: 7,
                    pts: 38
                }
    },
    {
        indice: "popayan",
        nombre:"Universitario de Popayán" ,
        urlLogo: "/escudos/popayan.png",
        directorTecnico: "César Torres",
        jugadores: 
        [
            "Luis Fernando Mosquera",
            "Walter Cubilla",
            "Steven Bermúdez"                               
        ],
        resenia: "El Universitario de Popayán es un club de fútbol Colombiano profesional de la ciudad de Popayán, capital del departamento del Cauca. Fue fundado el 21 de mayo de 2011, actualmente juega en la Categoría Primera B, del fútbol profesional colombiano.",
        estadio: " Estadio Ciro López",
        estrellas: "",
        categoria: 'B',
        puntaje: {
                    pJugados: 22,
                    pGanados: 7, 
                    pEmpatados: 8,
                    pPerdidos: 7,
                    gFavor: 27,
                    gContra: 29,
                    difGoles: -2,
                    pts: 29
                }
    }
];

dataEquipos.forEach(function(element) {
    console.log(element.indice + ": " + element.puntaje.pts);

    var objPunt = new Puntaje(element.puntaje.pJugados,
                              element.puntaje.pGanados,
                              element.puntaje.pEmpatados,
                              element.puntaje.pPerdidos,
                              element.puntaje.gFavor,
                              element.puntaje.gContra,
                              element.puntaje.difGoles,
                              element.puntaje.pts
                            );
    var objJugadores = [ new Jugador (element.jugadores[0]) , new Jugador (element.jugadores[1]), new Jugador (element.jugadores[2])];

    var objEqui = new Equipo(element.indice, element.nombre, element.urlLogo, element.directorTecnico, objJugadores, 
        element.resenia, element.estadio, element.estrellas, element.categoria, objPunt);

        console.log(objEqui);

        objEquipos.push(objEqui);


        




});    