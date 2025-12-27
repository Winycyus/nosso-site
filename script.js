var player;
var isReady = false;

// 1. Carrega a API do YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Cria o player quando a API estiver pronta
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '-dZ212yhIGc', // ID do vídeo Maranata
        playerVars: {
            'autoplay': 0,
            'controls': 0
        },
        events: {
            'onReady': function() {
                isReady = true;
                console.log("Player pronto para tocar!");
            },
            'onError': function(e) {
                console.error("Erro no player:", e);
            }
        }
    });
}

// 3. Função do botão
document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.querySelector('#btn-play');

    playBtn.addEventListener('click', () => {
        if (isReady && player) {
            const state = player.getPlayerState();
            if (state === 1) { // 1 = Tocando
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        } else {
            alert("O player ainda está carregando, tente novamente em 2 segundos.");
        }
    });
});