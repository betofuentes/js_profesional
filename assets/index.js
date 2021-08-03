const video = document.querySelector("video")
const button = document.querySelector("button")

function MediaPlayer(config){
    this.media = config.el
}

MediaPlayer.prototype.play = function() {
    if(this.media.paused){
        this.media.play()
    } else {
    this.media.pause();
    }
}

const player = new MediaPlayer({el: video});

button.onclick = () => player.play();
// video.play() // Esto no nos lo permitirá, a los navegadores no les gusta que apenas cargando la página web ya comience a reproducirse el video.