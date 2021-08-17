<?php
$tel = $_POST['tel'];


$massage = "Номер телефона:  $tel";

// echo $fname;
// echo "<br>";
// echo $email;

mail("fainorthegreat3@gmail.com", "Заявка с сайта  BANKING"," Номер телефона : ".$tel,"From: send@a0391989.xsph.ru\r\n");


// if (mail("fainorthegreat3@gmail.com", "Заказ с сайта", "ФИО:".$fname.". E-mail: ".$email." Номер телефона : ".$tel , "From: example2@mail.ru \r\n"))
//  {
//     echo " сообщение успешно отправлено";
// } else {
//     echo " при отправке сообщения возникли ошибки";
// }
// $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';
// header("Location: http://a0391989.xsph.ru/");

?>



