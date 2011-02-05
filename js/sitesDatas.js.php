<?php
	header('Content-type: application/javascript'); 
	session_start();

	if ($_SESSION['user']['fb_userid'] > 0 && is_file('./usersdatas/sitesDatas_'.$_SESSION['user']['fb_userid'].'.js')) {
		header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GMT");
		echo file_get_contents('./usersdatas/sitesDatas_'.$_SESSION['user']['fb_userid'].'.js');
	}
	elseif (!empty($_SESSION['user']['SITES'])) {
		header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
		header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GMT");
		echo $_SESSION['user']['SITES'];
	}
	else
		echo file_get_contents('sitesDatas.js');
?>