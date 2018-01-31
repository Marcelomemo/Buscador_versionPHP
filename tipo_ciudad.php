<?php

	$url = "data-1.json";
	$datos = json_decode(file_get_contents($url), true);
	$tipos = array();

	foreach ($datos as $objeto){

	    if ( !in_array($objeto["Tipo"], $tipos) ) {
	    	array_push($tipos, $objeto["Tipo"]);
	    }
	}
	
	sort($tipos);
	echo json_encode($tipos);
?>