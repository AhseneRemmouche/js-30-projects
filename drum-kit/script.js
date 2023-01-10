console.log('Salam');

function playSound(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
console.log(keys);
keys.forEach(key =>
    key.addEventListener('transitionend', e => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    })
);

window.addEventListener('keydown', playSound);
