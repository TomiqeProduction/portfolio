<?php

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['mail'];
$tel = $_POST['tel'];
$message = $_POST['message'];

$mail_subject = "New Form Submission";
$email_body = "Name: $fname, $lname.\n".
              "Email: $email.\n".
              "Message: $message.\n";

$to = "tomas.machacek98@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n"

mail($to, $mail_subject, $email_body, $headers);
header("Location: index.html");

?>