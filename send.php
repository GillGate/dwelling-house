<?php 
	sleep(2);
	$name  = trim($_POST['name']);
	$phone = trim($_POST['phone']);

	$date = date('Y-m-d H:i:s');

	if($name == '' || $phone == '') {
		echo 'Заполните все поля!';
	} elseif (strlen($name) < 2){
		echo 'Имя должно содержать от 2 до 30 символов';
	} elseif (!ctype_alpha($name)) {
		echo 'Имя может содержать только буквы';
	}
	 else {
    	echo 'ok';
    }