<?php

    $url = "data-1.json";
    $datos = json_decode(file_get_contents($url), true);
    $data = array();

    foreach ($datos as $objeto){
        array_push($data, $objeto);
    }

    echo json_encode($data);
?>