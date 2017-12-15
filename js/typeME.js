$(function(){
   $('#contact-form input[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/chupil87@gmail.com", 
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                tel:$('tel').val(),
                feedback: $('#feedback').val()
            },
            dataType: "json"
        })
             
    }
}
