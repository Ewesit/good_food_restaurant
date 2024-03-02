function SendMail() {
    var params = {
        form_name : document.getElementById("fullname").value,
        form_name : document.getElementById("email_id").value,
        form_name : document.getElementById("message").value

    }

    emailjs.send("service_np7dggs","contact-form", params).then(function (res){
        alert("Success! " + res.status);
    })

}
    
    


