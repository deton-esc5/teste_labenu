window.addEventListener ("load", function(){

    let email = document.querySelector('.email');
    let botao = document.querySelector('.botao');

    botao.addEventListener('click', function(event){

        if (email.value.length == "0" || email.value == "" || email.value.indexOf('@') ==-1 || email.value.indexOf('.')==-1 ){

            alert ('E-mail inválido!');

            event.preventDefault();

        }else {
            
            alert ('O e-mail ' + email.value + ' foi enviado.');

                setTimeout(carregar, 2000);

                function carregar (){

                    window.location.reload;

                    alert ("Bem-vindo "+ email.value + " !");

                }      
            
        }
            event.preventDefault();

    })

});