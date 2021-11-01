<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Memorama</title>
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/emergente.css" rel="stylesheet" type="text/css" />
    <link href="css/botones.css" rel="stylesheet" type="text/css" />
    <script src="js/memo.js"></script>
    <!-- link de la libreria de iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>

<body onload="generarTablero();" id="cuerpo">
    <div class="popup" id="vent">
        <section>
            <p id="ganador"></p>
        </section>
        <section>
            <button type="submit" id="emerbt" onclick="window.location.href='index.html'">Volver</button>
        </section>
    </div>
    
    
    <section id="tabe">
        <div class="filJugador" id="flJugador">
            <h1 id="move">Movimientos</h1>
            <h2 id="nombreUno">:</h2>
        </div>    
        <div id="tablero">
        </div>
    </section>
</body>

</html>