// Functie om schermen te tonen of te verbergen
function showScreen(screenId) {
    const screens = ['main-screen', 'time-capsule-screen', 'time-capsule-video-screen', 'time-capsule-notes-screen'];

    screens.forEach(id => {
        document.getElementById(id).style.display = id === screenId ? 'flex' : 'none';
    });
}

// Functie om naar het Tijdcapsule Foto-scherm te gaan
function showTimeCapsuleScreen() {
    showScreen('time-capsule-screen');
}

// Functie om naar het Tijdcapsule Video-scherm te gaan
function showTimeCapsuleVideoScreen() {
    showScreen('time-capsule-video-screen');
}

// Functie om naar het Tijdcapsule Notes-scherm te gaan
function showTimeCapsuleNotesScreen() {
    showScreen('time-capsule-notes-screen');
}


// Selecteerbare grid-items (zowel foto's, video's als notes)
function setupSelectableItems(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach(item => {
        // Klikken om selectie toe te voegen
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
        });

        // Ingedrukt houden om het item te vergroten
        item.addEventListener('mousedown', () => {
            item.classList.add('pressed');  // Vergroot het item bij het indrukken
        });

        // Loslaten van de muisknop om het vergrote effect te verwijderen
        item.addEventListener('mouseup', () => {
            item.classList.remove('pressed');
        });

        // Verwijder het vergrote effect als de muis buiten het item beweegt
        item.addEventListener('mouseleave', () => {
            item.classList.remove('pressed');
        });
    });
}

// Setup selecteerbare items voor foto's, video's en notes
document.addEventListener('DOMContentLoaded', () => {
    setupSelectableItems('.photo-item');
    setupSelectableItems('.video-item');
    setupSelectableItems('.note-item'); // Zorg ervoor dat ook notes-selectie werkt
});

// Event Listener voor de "Photos" knop (om naar het Foto-scherm te gaan)
document.querySelector('.time-capsule-save').addEventListener('click', showTimeCapsuleScreen);

// Event Listener voor de "Videos" knop (om naar het Video-scherm te gaan)
document.querySelector('.time-capsule-save').addEventListener('click', showTimeCapsuleVideoScreen);

// Event Listener voor de "Notes" knop (om naar het Notes-scherm te gaan)
document.querySelector('.time-capsule-save').addEventListener('click', showTimeCapsuleNotesScreen);

