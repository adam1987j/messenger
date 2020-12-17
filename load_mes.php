<?php
	$me = $_POST['me'];
	$who = $_POST['who'];
	$file = fopen("message.xml", "r") or die ("Cannot read file");
	while(! feof($file)) {
  	$array = explode("|||", fgets($file));
  	if ($me == $array[0] && $who == $array[1]) {
	  	echo "<p class='right'><span>$array[2]</span></p>";
  	} else if ($me == $array[1] && $who == $array[0]) {
	  	echo "<p class='left'><span>$array[2]</span></p>";
  	}
  }
	fclose($file);
?>