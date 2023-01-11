<?php

if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mailTo = "jiazhaotongjoy@gmail.com";
    $headers = "From: ".$email;



    mail($mailTo, $subject, $message, $headers);
    echo "Mail send"

}

?>