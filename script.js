document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("music");
    const playPauseButton = document.getElementById("playPauseButton");

    playPauseButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            playPauseButton.textContent = "⏸ PAUSAR MÚSICA";
        } else {
            music.pause();
            playPauseButton.textContent = "▶ TOQUE AQUI PARA OUVIR UM POUCO DE 'LOVESONG'!";
        }
    });
});


