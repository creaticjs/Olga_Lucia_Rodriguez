// Initialize Firebase
var config = {
    apiKey: "AIzaSyDjBsGePSAY7hxd6IqZu5OuOJSpV3DqxII",
    authDomain: "bbimagescollector.firebaseapp.com",
    databaseURL: "https://bbimagescollector.firebaseio.com",
    projectId: "bbimagescollector",
    storageBucket: "bbimagescollector.appspot.com",
    messagingSenderId: "381653537020"
  };
  firebase.initializeApp(config);
  
    
  // Conectarse a la base de datos y a una “tabla” o colección de datos
 var basedeDatos = firebase.database().ref('Datos').push();

async function enviar (objImg) {
    console.log("Enviando data a bd");
    console.log(objImg)

    await basedeDatos.set(objImg);
    showAlert("Objeto Guardado");
}