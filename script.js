document.addEventListener('DOMContentLoaded', () => {
    const giftContainer = document.querySelector('.gift-container');
    const restartBtn = document.querySelector('.btn-restart');
    const sceneGift = document.getElementById('scene-gift');
    const sceneLetter = document.getElementById('scene-letter');
    const sceneHeadphones = document.getElementById('scene-headphones');
    const sceneVideo = document.getElementById('scene-video');
    const video = document.getElementById('myVideo');
    const clickText = document.querySelector('.click-text');
    const continueBtn = document.getElementById('btn-continue');
    const playVideoBtn = document.getElementById('btn-play-video');

    // Inicializar eventos
    giftContainer.addEventListener('click', openGift);
    continueBtn.addEventListener('click', showHeadphonesWarning);
    playVideoBtn.addEventListener('click', playVideo);
    restartBtn.addEventListener('click', resetApp);

    function openGift() {
        // Evitar doble clic
        if (giftContainer.classList.contains('open')) return;

        // 1. Activar animaciones CSS
        giftContainer.classList.add('open');
        clickText.classList.add('fade-out');

        // 2. Esperar a que terminen las animaciones para mostrar la CARTA
        setTimeout(() => {
            sceneGift.classList.add('hidden');
            sceneLetter.classList.remove('hidden'); // Mostrar carta
        }, 1500);
    }

    function showHeadphonesWarning() {
        // Ocultar carta y mostrar aviso audífonos
        sceneLetter.classList.add('hidden');
        sceneHeadphones.classList.remove('hidden');
    }

    function playVideo() {
        // Ocultar aviso y mostrar video
        sceneHeadphones.classList.add('hidden');
        sceneVideo.classList.remove('hidden');

        // Reproducir video
        video.currentTime = 0;
        video.play().catch(e => {
            console.log("Autoplay bloqueado, esperando interacción usuario");
        });
    }

    function resetApp() {
        // 1. Pausar video
        video.pause();
        video.currentTime = 0;

        // 2. Resetear clases y escenas
        giftContainer.classList.remove('open');
        clickText.classList.remove('fade-out');

        sceneVideo.classList.add('hidden');
        sceneHeadphones.classList.add('hidden');
        sceneLetter.classList.add('hidden');
        sceneGift.classList.remove('hidden');
        
        // Forzar un reflow para reiniciar animaciones si fuera necesario (opcional)
        // void giftContainer.offsetWidth; 
    }
});