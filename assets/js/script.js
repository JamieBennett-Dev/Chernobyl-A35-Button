document.addEventListener('DOMContentLoaded', function() {
    let coverWrap = document.getElementsByClassName('cover-wrap')[0];
    if (coverWrap) {
        coverWrap.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                this.classList.add('active');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the button element
    const button = document.querySelector('.button');

    // Create audio objects for the sounds
    const alarmSound = new Audio('../assets/sounds/Nuclear-Alarm.mp3'); // Path to your alarm sound file
    const explosionSound = new Audio('../assets/sounds/Nuclear-Explosion.mp3'); // Path to your explosion sound file

    // Add an event listener to the button
    button.addEventListener('click', function() {
        // Play the alarm sound
        alarmSound.play();

        // Add an event listener to the alarm sound to play the explosion sound when the alarm finishes
        alarmSound.addEventListener('ended', function() {
            explosionSound.play();
        }, { once: true }); // Use { once: true } to ensure the event listener is only called once
    });
});
