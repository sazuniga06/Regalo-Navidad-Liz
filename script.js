document.addEventListener('DOMContentLoaded', () => {
    const giftContainer = document.querySelector('.gift-container');
    const restartBtn = document.querySelector('.btn-restart');
    const sceneGift = document.getElementById('scene-gift');
    const sceneVideo = document.getElementById('scene-video');
    const video = document.getElementById('myVideo');
    const clickText = document.querySelector('.click-text');

    // Inicializar eventos
    giftContainer.addEventListener('click', openGift);
    restartBtn.addEventListener('click', resetApp);

    function openGift() {
        // Evitar doble clic
        if (giftContainer.classList.contains('open')) return;

        // 1. Activar animaciones CSS
        giftContainer.classList.add('open');
        clickText.classList.add('fade-out');

        // 2. Esperar a que terminen las animaciones para cambiar de escena
        setTimeout(() => {
            sceneGift.classList.add('hidden');
            sceneVideo.classList.remove('hidden');

            // Reproducir video
            video.currentTime = 0;
            video.play().catch(e => {
                console.log("Autoplay bloqueado, esperando interacción usuario");
            });
        }, 1500); // Tiempo ajustado a la suma de animaciones (aprox 1.2s - 1.5s)
    }

    function resetApp() {
        // 1. Pausar video
        video.pause();
        video.currentTime = 0;

        // 2. Resetear clases y escenas
        giftContainer.classList.remove('open');
        clickText.classList.remove('fade-out');

        sceneVideo.classList.add('hidden');
        sceneGift.classList.remove('hidden');
        
        // Forzar un reflow para reiniciar animaciones si fuera necesario (opcional)
        // void giftContainer.offsetWidth; 
    }
});