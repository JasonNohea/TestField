
function fadeSplash() {
    const splash = document.getElementById("splash");

    // Delay the fade effect
    setTimeout(() => {
        splash.classList.add("opacity-0");

        // Then hide after the fade finishes
        setTimeout(() => {
            splash.classList.add("hidden");
        }, 1000); // Match with transition duration (1s)
    }, 800); // Delay start by 2 seconds (or whatever you want)
}

let hasShrunk = false;

function shrunk() {
    if (hasShrunk) return; // Prevent further clicks

    const horiz = document.getElementById('horizontal');
    const vert = document.getElementById('vertical');
    const text = document.getElementById('standby-text');

    horiz.classList.add('w-0', 'overflow-hidden');
    vert.classList.add('h-0', 'overflow-hidden', 'delay-500'); // add delay
    text.classList.add('opacity-0'); // or use display: none
    // text.style.display = 'none';

    hasShrunk = true;
}

