$(function(){
  $("#boton").prop('disabled', true)

    function getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + "=")) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }

    $('#contraseña1').blur(function(){
      if($(this).val() == ""){
        $(this).focus()
        $("#boton").prop('disabled', true)
      }else{
        $("#boton").prop('disabled', false)
      }

    })

    $('#contraseña2').blur(function(){
      if($(this).val() == ""){
        $(this).focus()
      }

    })

    $('#contraseña1').focus(function(){
      if($(this).val() == ""){
        $("#boton").prop('disabled', true)
      }else{
        $("#boton").prop('disabled', false)
      }

    })

    $('#contraseña2').focus(function(){
      if($(this).val() == ""){
        $("#boton").prop('disabled', true)
      }else{
        $("#boton").prop('disabled', false)
      }

    })



    $("#boton").click(function(){
      p = ""
      if($('#contraseña1').val() != $('#contraseña2').val()){
        p = "<p> Las contraseñas no coinciden </p>"
        
      }else{

      contraseñas = {contraseña1: $("#contraseña1").val(), contraseña2: $("#contraseña2").val()}
      miJSON = JSON.stringify(contraseñas)

      p = "<p></p>"

      $.ajax({
          url: "/prueba/",
          type: "POST",
          dataType: "json",
          data: miJSON,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRFToken": getCookie("csrftoken"),
          },
          success: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
      $('body').append(p)
       
    });


    $('#mostrarContrasenias').click(function(){
      $.ajax({
        url: "/prueba/",
        type: "GET",
        dataType: "json",
        success: (data) => {
          for(contasenia of data.context){

            $('body').append('<p>'+ 'Contraseña 1: ' + contasenia.contrasenia1 + ' Contraseña 2: '+ contasenia.contrasenia2 + '</p>');
            console.log(contasenia.contrasenia1)
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    })

  
  });