function validacion() {
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    if( usuario == null || usuario.length == 0) {
       alert("Ingrese un Usuario");
       document.getElementById("usuario").focus;
       return false;
    }
 
    if( pass == null || pass.length == 0) {
       alert("Ingrese un contraseña");
       return false;
    }
    $.ajax({
         data: {usuario:usuario,pass:pass},
         url: "/validar_usuario",
         // on success
         success: function (response) {
            console.log(response)
            if (response.is_taken == true) {
               $('#id_username').removeClass('is-valid').addClass('is-invalid');
               $('#id_username').after('<div class="invalid-feedback d-block" id="usernameError">This username is not available!</div>')
            }
            else {
               $('#id_username').removeClass('is-invalid').addClass('is-valid');
               $('#usernameError').remove();

            }

         },
         // on error
         error: function (response) {
            // alert the error if any error occured
            console.log(response.responseJSON.errors)
         }
      });
      return false;
  }