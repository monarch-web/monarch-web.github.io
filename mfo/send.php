<?php
$name = $_POST['fname'];
$tel = $_POST['phome-number'];
$email = $_POST['email'];
$inn = $_POST['INN'];
$textm = $_POST['textm'];


mail("smartkredit@bitrix24.ru", "Заявка с сайта"," Номер : ".$tel." Имя : ".$name."  Почта : ".$email." ИНН : ".$inn." Текст сообщения : ".$textm , "From: Сайт\r\n");


?>