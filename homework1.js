$( "#loginclick" ).on( "click", function( event ) {
    if ($("#emailText").val().match(/\S+@\S+/)) {
        document.getElementById("emailText").setAttribute("class", "border-primary")
        if ($("#passwordText").val().length === 0) {
            document.getElementById("passwordText").setAttribute("class", "border-danger")
        }
        else {
            document.getElementById("passwordText").setAttribute("class", "border-primary")
            $("#loginForm").submit();
            window.location.href = document.referrer
        }
    }
    else {
        document.getElementById("emailText").setAttribute("class", "border-danger")
    }
  });