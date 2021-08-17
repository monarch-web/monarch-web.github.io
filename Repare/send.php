<?php
$fname = $_POST['fname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$mark = $_POST['mark'];
$model = $_POST['model'];
$year = $_POST['year'];
$parts = $_POST['parts'];

$massage = "Имя: $fname \nЭлектронный адрес: $email \nНомер телефона:  $tel";

mail("fainorthegreat3@gmail.com", "Заявка с сайта", "ФИО:".$fname.". E-mail: ".$email." Номер телефона : ".$phone." Марка :".$mark." Модель :".$model." Год выпуска :".$year." Запчасти :".$parts ,"From: send@a0391989.xsph.ru\r\n");
?>