<?php 
	$name  = trim($_POST['name']);
	$phone = trim($_POST['phone']);

	$date = date('Y-m-d H:i:s');

	if($name !== '' & $phone !== '') {
		file_put_contents('apps.txt', "date $name $phone \n", FILE_APPEND);
		echo 'Success!';
	} else {
		echo 'Ну вы чего?'
	}