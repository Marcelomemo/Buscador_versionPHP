<?php

	$ciudad = $_GET["ciudad"];
	$tipo = $_GET["tipo"];
    $maxprecio = (float)substr(str_replace(' ', '',$_GET["maxprecio"]), 1);
    $minprecio = (float)substr(str_replace(' ', '',$_GET["minprecio"]), 1);

    $url = "data-1.json";
    $datos = json_decode(file_get_contents($url), true);
    $data = array();

    foreach ($datos as $objeto){
    	if ($objeto["Ciudad"] == $ciudad || $ciudad == "" ){
    		if ($objeto["Tipo"] == $tipo || $tipo == "" ){
                $precio = (float)substr(str_replace(',', '',$objeto["Precio"]), 1);

                if ( $precio >= $minprecio  && $precio <= $maxprecio ){ 
        	       array_push($data, $objeto);
               }
        	}
        }
    }

    echo json_encode($data);
    
?>