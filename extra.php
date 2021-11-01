<?php
    include './conexbd.php';

    $nombre = $_POST['nombreJugadorIng'];
    // $punto = $_POST[];
    mysql_query("INSERT INTO puntajes VALUES ('', '$nombre', '')", $conn);
?>