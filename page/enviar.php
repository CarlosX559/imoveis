<?php

if(isset($_POST["email"]) && !empty(trim($_POST["email"]))) {

    $assunto = "#form de contato LP Tráfego";
    $nome = addslashes($_POST['nome']);
    $email = addslashes( $_POST['email']);
    $telefone = addslashes( $_POST['telefone']);
 
    /*$email_to = "trafegobaldy@gmail.com";*/
    $email_to = "carlosuig@hotmail.com";

    $header = "Content-Type: text/html; charset=utf-8"."\r\n";
    $header .= "From:".$email."\r\n".
                "Reply-To:".$email."\e\n".
                "X=Mailer:PHP/".phpversion();

    // Dados que serão enviados.
    $body = "<strong>Nome: </strong>".$nome."</br>".
            "<strong>Email: </strong>".$email."</br>".
            "<strong>Whatsapp: </strong>".$telefone."</br>";
 
    //Enviando o email.
        $status = mail($email_to, $assunto, $body, $header);
     
      
        header("Location: https://carlosx559.github.io/imoveis/page/obrigado/index.html");
        
                    
}

?>