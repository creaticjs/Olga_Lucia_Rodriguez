// Initialize Firebase
        var config = {
          apiKey: "AIzaSyAk7eCvKtDK-l9nuFCtdsBum6POAdYb2lI",
          authDomain: "myfirebasechat-39d8d.firebaseapp.com",
          databaseURL: "https://myfirebasechat-39d8d.firebaseio.com",
          projectId: "myfirebasechat-39d8d",
          storageBucket: "myfirebasechat-39d8d.appspot.com",
          messagingSenderId: "736886010438"
        };
        firebase.initializeApp(config);
      
        // Get a reference to the database service
       var database = firebase.database();
      
       // Conectarse a la base de datos y a una “tabla” o colección de datos
      var basedeDatos = firebase.database().ref('mensajes');
      
      basedeDatos.on('child_added', function (data) {
          $('#mensajes').append(`${data.val().body}\n`);          
          //$('#mensajes').append(`</p>${data.val().body}<br><p/>`);          
      });
      
      
      $('#enviar').on('click', enviarMSG);
      $('#textoMsg').on('keypress',function(e){
          if(e.which == 13) {
          enviarMSG();
      }
      });
      
      function enviarMSG(){
      console.log('Enviar mensaje');
      basedeDatos.push().set({body: myName + ' dice: ' + $('#textoMsg').val()})
      $('#textoMsg').val('');
      }
      
      // variable para mantener el nombre de usuario
      var myName;
      $('#setName').on('click', setNombre);
      $('#textoName').on('keypress',function(e){
          if(e.which == 13) {
            setNombre()
      }
      });

      function setNombre(){
        myName = $('#textoName').val();
       };    