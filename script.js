document.addEventListener("DOMContentLoaded", function () {
    // Sound-Zuordnung: Button-ID → Sound-Datei
    const sounds = {
        "was": "Waaas.wav",
        "goal": "GOOOOL.wav",
        "arda": "Ardaa.wav",
        "nixKapieren": "IchNixKapieren.wav"
    };

    // Für jeden Button ein Event-Listener setzen
    Object.keys(sounds).forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", function () {
                const audio = new Audio(sounds[id]);
                audio.currentTime = 0;
                audio.play()
                    .then(() => console.log(`Spielt: ${sounds[id]}`))
                    .catch(error => console.error("Fehler beim Abspielen:", error));
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.9)";
            // Button nach einer kurzen Zeit wieder auf seine Originalgröße zurücksetzen
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 100); // Nach 100ms zurücksetzen
        });
    });
});
