<?php
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $message = $_POST['message'];
  $subject = 'Black Pepper Contact Form Message';
  $mailTo = "megan@blackpepperdigital.co.uk";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an email from ".$name.".\n\n".$message;
  if(mail($mailTo, $subject, $txt, $headers)){
    echo "succes";
  }else{
    echo "The server failed to send the message. Please try again later ";}
  header("Location: contact.html?mailsend");}
?>
