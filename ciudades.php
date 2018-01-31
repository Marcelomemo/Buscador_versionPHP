<?php

	$url = "data-1.json";
	$datos = json_decode(file_get_contents($url), true);
	$ciudad = array();
	
	foreach ($datos as $objeto){

    	if ( !in_array($objeto["Ciudad"], $ciudad) ) {
        	array_push($ciudad, $objeto["Ciudad"]);
    	}
	}
	
	sort($ciudad);
	echo json_encode($ciudad);
?>