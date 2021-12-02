<?php

require 'mailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

// Form Data
$fname = $_REQUEST['fname'] ;
$email = $_REQUEST['email'] ;
$lname = $_REQUEST['lname'];
$subject = $_REQUEST['subject'] ;
$message = $_REQUEST['message'] ;

$mailbody = 'New Lead Enquiry' . PHP_EOL . PHP_EOL .
            'Name: ' . $fname,$lname . '' . PHP_EOL .
            'From: ' . $email . '' . PHP_EOL .
            'Subject:' . $subject . '' . PHP_EOL .
            'Message: ' . $message . '' . PHP_EOL;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'tomas.machacek98@gmail.com'; // SMTP username
$mail->Password = 'Tomqarikandjoaca1'; // SMTP password
$mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to

$mail->setFrom('admin@domain.com', 'WebMaster'); // Admin ID
$mail->addAddress('owner@domain.com', 'Business Owner'); // Business Owner ID
$mail->addReplyTo($email, $fname, $lname); // Form Submitter's ID

$mail->isHTML(false); // Set email format to HTML

$mail->Subject = 'New Lead Enquiry';
$mail->Body = $mailbody;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Success';
}
?>