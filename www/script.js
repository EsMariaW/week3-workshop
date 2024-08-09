$( document ).ready(function(){

    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    })

    function ajaxPost(){
        let formData = {
            email : $("#email").val(),
            password : $("#password").val()
        }
        console.log(window.location + "api/login");
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "api/login",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(response){   // if AJAX response was successful
                if (response.valid){
                    $("#errormsg").removeClass('showmessage');
                    $("#errormsg").addClass('hidemessage');
                }else{
                    $("#errormsg").removeClass('hidemessage');
                    $("#errormsg").addClass('showmessage');
                }
            },
            error: function(xhr, status, error) {
                console.error("Error occurred: ", status, error); // Improved error handling
                alert("Error! " + xhr.responseText);
            }
            // error : function(error){
            //     alert("Error! ");
            // }
        });
        resetData();
    }

    function resetData(){
        $("#email").val("");
        $("#password").val("");
    }

});
