// Functie om naar het Tijdcapsule scherm te gaan
function showTimeCapsuleScreen() {
    document.getElementById('main-screen').style.display = 'none';  // Verberg het hoofdscherm
    document.getElementById('time-capsule-screen').style.display = 'flex';  // Toon het tijdcapsule scherm
}

// Functie om terug te keren naar het hoofdscherm
function showMainScreen() {
    document.getElementById('time-capsule-screen').style.display = 'none';  // Verberg het tijdcapsule scherm
    document.getElementById('main-screen').style.display = 'flex';  // Toon het hoofdscherm
}
