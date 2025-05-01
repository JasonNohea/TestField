

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.mode-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('pressed'));
            button.classList.add('pressed');
        });
    });
});

function fadeSplash() {
    const splash = document.getElementById("splash");

    // Delay the fade effect
    setTimeout(() => {
        splash.classList.add("opacity-0");

        // Then hide after the fade finishes
        setTimeout(() => {
            splash.classList.add("hidden");
        }, 1000); // Match with transition duration (1s)
    }, 1400); // Delay start by 2 seconds (or whatever you want)
}

let hasShrunk = false;

function shrunk() {
    if (hasShrunk) return; // Prevent further clicks

    const horiz = document.getElementById('horizontal');
    const vert = document.getElementById('vertical');
    const text = document.getElementById('standby-text');
    const vertical_wrap = document.getElementById('vertical-wrapper')
    const cb_logo = document.getElementById('cb-logo');

    horiz.classList.add('w-0', 'overflow-hidden');
    vert.classList.add('h-0', 'overflow-hidden', 'delay-500'); // add delay
    horiz.classList.add('opacity-0');
    vertical_wrap.classList.add('opacity-0');
    cb_logo.classList.remove('opacity-10')
    cb_logo.classList.add('opacity-80');
    text.classList.add('opacity-0'); // or use display: none
    // text.style.display = 'none';

    hasShrunk = true;
}

