
//Cargar todas las ciudases de la data-Json sin repetirse
function cargar_ciudad(){
    $.ajax({
        type: "GET",
        url: "ciudades.php",
        dataType: "json"
    }).done(function (datos) {
        var texto = "";

        for(var num in datos) {
            texto += "<option value='" + datos[num] + "'>" + datos[num] + "</option>";
        }

        $('#selectCiudad').html( $('#selectCiudad').html() + texto);
        $('#selectCiudad').material_select();
    });
}


//Cargar todos los tipos de ciudases de la data-Json sin repetirse
function cargar_tipo_ciudad(){
    $.ajax({
        type: "GET",
        url: "tipo_ciudad.php",
        dataType: "json"
    }).done(function (datos) {
        var texto = "";

        for(var num in datos) {
            texto += "<option value='" + datos[num] + "'>" + datos[num] + "</option>";
        }

        $('#selectTipo').html( $('#selectTipo').html() + texto);
        $('#selectTipo').material_select();
    });
}


//Cargar toda la informacion del archivo Json
$('#mostrarTodos').on('click', function () {

    $.ajax({
        url: "mostrar_todos.php",
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        var texto =""

        $.each( data, function( id, objeto ) {

            texto += "<div class='card row white'> <article> <div class='col s6 m6 l6'> <img src='img/home.jpg'> </div> <div class='col s6 m6 l6'>" +
                "<p><b>Dirección: </b> " + objeto.Direccion + " </br>" +
                "<b>Ciudad: </b> " + objeto.Ciudad + " </br>" +
                "<b>Telefono: </b> " + objeto.Telefono + " </br>" +
                "<b>Codigo Postal: </b> " + objeto.Codigo_Postal + " </br>" +
                "<b>Tipo: </b> " + objeto.Tipo + " </br>" +
                "<b>Precio: </b> <span class='precio'> " + objeto.Precio + " </span> </p>" +
                "<hr> <div class='ver_mas'><a href='#'> VER MAS </a> </div></div> </article> </div>";
        });
        $('#buscador').html(texto);
    });
});


//Cargar toda la información deacuerdo a cada filtro
$('#submitButton').on('click', function (e) {

    e.preventDefault();
    $.ajax({
        url: "buscar.php",
        type: "GET",
        data: {"ciudad": $("#selectCiudad").val(), "tipo": $("#selectTipo").val(), "maxprecio": $(".irs-to").html(), "minprecio": $(".irs-from").html()},
        dataType: "json"
    }).done(function (data) {

        var texto = "";

        $.each( data, function( id, objeto ) {

            texto += "<div class='card row white'> <article> <div class='col s6 m6 l6'> <img src='img/home.jpg'> </div> <div class='col s6 m6 l6'>" +
                "<p><b>Dirección: </b> " + objeto.Direccion + " </br>" +
                "<b>Ciudad: </b> " + objeto.Ciudad + " </br>" +
                "<b>Telefono: </b> " + objeto.Telefono + " </br>" +
                "<b>Codigo Postal: </b> " + objeto.Codigo_Postal + " </br>" +
                "<b>Tipo: </b> " + objeto.Tipo + " </br>" +
                "<b>Precio: </b> <span class='precio'> " + objeto.Precio + " </span> </p>" +
                "<hr> <div class='ver_mas'><a href='#'> VER MAS </a> </div></div> </article> </div>";
        });
        $('#buscador').html(texto);
    });
});


cargar_ciudad();
cargar_tipo_ciudad();
