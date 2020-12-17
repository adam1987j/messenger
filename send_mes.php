<?php
	$me = $_POST['me'];
	$who = $_POST['who'];
	$text = $_POST['text'];
	$xml = new DOMDocument();
  $xml_message = $xml->createElement("Message");
  $xml_me = $xml->createElement("me", $me);
  $xml_who = $xml->createElement("who", $who);
  $xml_text = $xml->createElement("text", $text);
  $xml_message->appendChild( $xml_me );
  $xml_message->appendChild( $xml_who );
  $xml_message->appendChild( $xml_text );
  $xml->appendChild( $xml_message );
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