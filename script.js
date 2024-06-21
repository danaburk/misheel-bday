document.getElementById('playMusic').addEventListener('click', function() {
    var audio = document.getElementById('birthdaySong');
    audio.play();
    
    // Trigger confetti animation
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
});
