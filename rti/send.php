require($_SERVER["DOCUMENT_ROOT"]."/wp-load.php");

<?php
$name = $_POST['name'];
$phonenumber = $_POST['phone'];
$region = $_POST['region'];
$msg = $_POST['massage'];

$name = htmlspecialchars($name);

$name = urldecode($name);

$name = trim($name);

$massage = "Имя: $name \nЭлектронный адрес: $region \nНомер телефона:  $phonenumber";

mail("tarnakin90@mail.ru", "Заявка с сайта", "Имя: ".$name."\nРегион: ".$region."\nНомер телефона : ".$phonenumber."\nСообщение :".$msg);
?>