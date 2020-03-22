<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/estilo.css" type="text/css">
</head>

<body>
    <?php
        // Variables para los valores de "nombre", "apellidos" y "domicilio"
        $nombre = $_REQUEST["nombre"];
        $apellidos = $_REQUEST["apellidos"];
		$id = $_REQUEST["identificacion"];
		$nacimiento = $_REQUEST["nacimiento"];
		$estCivil = $_REQUEST["estCivil"];
		$direccion = $_REQUEST["direccion"];
		$telefono = $_REQUEST["telefono"];
		$formacion1 = $_REQUEST["formacion1"];
		$formacion2 = $_REQUEST["formacion2"];
		
        
        // Abre el archivo numerofactura.txt 
        $leerNumeroHoja = fopen("numerohoja.txt", "rb");

        // Variable $hdv para leer el contenido de "leerNumeroHoja"
        $hdv = fread($leerNumeroHoja, filesize("numerohoja.txt"));

        //Cierra el archivo
        fclose($leerNumeroHoja);

        // Incrementamos el valor leído previamente
        $hdv++;

        // Abrimos el archivo otra vez
        $leerNumeroHoja = fopen("numerohoja.txt", "wb");

        // Escribimos el valor de la variable "$hvd" para la próxima
        fwrite($leerNumeroHoja, $hdv);

        // Cierra el archivo
        fclose($leerNumeroHoja);

        $datos = fopen("datos.txt", "ab");
    
        // Escribe los datos introducidos separados por ";"
        fwrite($datos, $hdv.";".$nombre.";".$apellidos.";".$id.";".$nacimiento.";".$estCivil.";".$direccion.";".$telefono.";".$formacion1.";".$formacion2."\n");
        
        fclose($datos);
    
        // Escribe la factura simplificada en la pantalla
        echo "<h2>Hoja de vida<br />
        
        hoja nº$factura<br />
        Nombre: $nombre <br />
		Apellido: $apellidos<br />
        Identificacion: $id<br />
        Fecha de nacimiento: $nacimiento<br />
		Estado civil: $estCivil<br />
		Direccion: $direccion<br />
		Telefono: $telefono<br />
		Formacion basica: $formacion1<br />
		Formacion superior: $formacion2<br /
		;
        ?>
</body>
</html>