<?php
$name = $_POST['name'];
$phonenumber = $_POST['phonenumber'];

$name = htmlspecialchars($name);

$name = urldecode($name);

$name = trim($name);

$massage = "Имя: $name \nЭлектронный адрес: $email \nНомер телефона:  $phonenumber";

mail("g0oddeal@yandex.ru", "Заявка с сайта", "Имя:".$name.". Номер телефона : ".$phonenumber." From: info@солнышко.рус\r\n");
?>