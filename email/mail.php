<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$number= $_POST['number'];
$message= $_POST['message'];
//$to = "info@elitetimbers.com.au";
$to = "rumaadl16@gmail.com";

$subject = "Mail From EliteTimbers website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone Number = " . $number. "\r\n  Message =" . $message;
$headers = "From: noreply@elitetimbers.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:http://www.elitetimbers.com.au");
?>
