// hitDrum işlevi animasyonu başlatır
const sounds = {
    'a': 'sounds/boom.wav',
    's': 'sounds/clap.wav',
    'd': 'sounds/hihat.wav',
    'f': 'sounds/kick.wav'
};

function hitDrum(item) {
    if (item) {
        item.style.transform = 'scale(1.1)'; 
        item.style.trasition = 'transform 0.1s';

        const key = item.getAttribute('data-key');
        const audio =  sounds[key];
      
        if(audio) {
            const sound = new Audio(audio);
            sound.currentTime = 0;
            sound.play();
        }
        else{
            console.error('Sound not found for key:', key);
            
        }
        setTimeout(() => {
            item.classList.remove('animate');
            item.style.transform = 'scale(1)';
        }, 80); // Animasyon süresi ile eşleşmeli
    }
}

// Drum öğelerine tıklama olayını bağlamak
document.querySelectorAll('.drum').forEach(item => {
    item.addEventListener('click', () => {
        hitDrum(item);
        console.log('Clicked:', item);
    });
});

// Tuş basımı olayını dinlemek
window.addEventListener('keydown', function(e) {
    const keyName = e.key.toLowerCase(); // Tuş adını küçük harfe dönüştür
    console.log('Key Pressed:', keyName);
    // Tuş ile ilişkilendirilmiş drum öğesini bul
    const drum = document.querySelector(`.drum[data-key="${keyName}"]`);
    console.log('Drum Found:', drum);
    if (drum) {
        hitDrum(drum);
    }
});
