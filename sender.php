<?php
    define ('SITE_DOMAIN', $_SERVER['SERVER_NAME']);
    $name = $_POST['name'];
    $email = $_POST['email'];

	$to = "kirill.mail.tu78@gmail.com";
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = "From: ".SITE_DOMAIN." <info@".SITE_DOMAIN.">\r\n";
	$subject = "Заявка c сайта";

	$msg="
    Имя: $name /n
    Почта: $email";
	mail($to, $subject, $msg, $from );
	print_r( $_POST );
?>
