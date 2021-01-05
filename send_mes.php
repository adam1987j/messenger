<?php
	$me = $_POST['me'];
	$who = $_POST['who'];
	$text = $_POST['text'];
  	$fileName = "message.xml";
	if (!file_exists($fileName)) {
	    echo "Cannot find file.";
	} else {
	    $file = fopen($fileName, "a+")or die("Unable to open");
	}
	$str = "$me|||$who|||$text".PHP_EOL;
	fwrite($file, $str);
  	fclose($file);
?>
