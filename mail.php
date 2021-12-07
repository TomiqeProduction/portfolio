<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '/PHPMailer/src/Exception.php';
require '/PHPMailer/src/PHPMailer.php';
require '/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

// Form Data
$firstname = $_POST['fname'];
$email = $_POST['email'];
$lastname = $_POST['lname'];
$subject = $_POST['subject'];
$fullname = $firstname.$lastname;
$message = $_POST['message'];

$mailbody = 'New Form Submission' . PHP_EOL . PHP_EOL .
            'Name: ' . $fname $lname . '' . PHP_EOL .
            'Message: ' . $message . '' . PHP_EOL;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'terunertera@gmail.com'; // SMTP username
$mail->Password = 't123456789*'; // SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port       = 465;

$mail->setFrom($email, $fullname); // Admin ID
$mail->addAddress('tomas.machacek98@gmail.com', 'Business Owner'); // Business Owner ID

$mail->isHTML(false); // Set email format to HTML

$mail->Subject = 'New Form Submission';
$mail->Body    = $mailbody;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>