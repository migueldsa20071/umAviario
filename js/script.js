// Habilita som na primeira interação
let soundEnabled = false;
function enableSoundOnInteraction() {
    soundEnabled = true;
    document.removeEventListener('click', enableSoundOnInteraction);
    document.removeEventListener('scroll', enableSoundOnInteraction);
}
document.addEventListener('click', enableSoundOnInteraction);
document.addEventListener('scroll', enableSoundOnInteraction);

// Tiê Sangue
const tiesangueCard = document.getElementById('tiesangueCard');
const tiesangueAudio = document.getElementById('tiesangue-audio');

tiesangueCard.addEventListener('mouseenter', () => {
    if (soundEnabled) tiesangueAudio.play();
});
tiesangueCard.addEventListener('mouseleave', () => {
    tiesangueAudio.pause();
    tiesangueAudio.currentTime = 0;
});

// Ararajuba
const ararajubaCard = document.getElementById('ararajubaCard');
const ararajubaAudio = document.getElementById('ararajuba-audio');

ararajubaCard.addEventListener('mouseenter', () => {
    if (soundEnabled) ararajubaAudio.play();
});
ararajubaCard.addEventListener('mouseleave', () => {
    ararajubaAudio.pause();
    ararajubaAudio.currentTime = 0;
});
