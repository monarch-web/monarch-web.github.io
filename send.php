<?php
$fname = $_POST['fname'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$project = $_POST['project'];
$limitation = $_POST['limitation'];
$time__interval = $_POST['time__interval'];

$fname = htmlspecialchars($fname);
$email = htmlspecialchars($email);

$fname = urldecode($fname);
$email = urldecode($email);

$fname = trim($fname);
$email = trim($email);

$massage = "Имя: $fname \nЭлектронный адрес: $email \nНомер телефона:  $tel";

// echo $fname;
// echo "<br>";
// echo $email;

mail("fainorthegreat3@gmail.com", "Заявка с сайта", "ФИО:".$fname.". E-mail: ".$email." Номер телефона : ".$tel." Тип проекта :".$project." Интервал звонка :".$time__interval." Как быстро надо выполнить :".$limitation ,"From: send@a0391989.xsph.ru\r\n");


// if (mail("fainorthegreat3@gmail.com", "Заказ с сайта", "ФИО:".$fname.". E-mail: ".$email." Номер телефона : ".$tel , "From: example2@mail.ru \r\n"))
//  {
//     echo " сообщение успешно отправлено";
// } else {
//     echo " при отправке сообщения возникли ошибки";
// }
// $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';
// header("Location: http://a0391989.xsph.ru/");

?>



