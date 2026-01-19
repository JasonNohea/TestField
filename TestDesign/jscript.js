

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
    const frame = document.getElementById("matrix-frame");
    const headertext = document.getElementsByClassName("header-frame");
    const file = document.getElementById("file");

    // 1. The Logo/Shrink animation starts immediately via the onclick="shrunk()"

    // 2. FADE OUT THE SPLASH
    // We wait 1200ms (to let the logo show at 80% opacity first)
    setTimeout(() => {
        if (splash) {
            // CRITICAL: Remove the opacity-100 so opacity-0 works
            splash.classList.remove("opacity-100");
            splash.classList.add("opacity-0");

            // Completely remove from view after the 1s transition finishes
            setTimeout(() => {
                splash.classList.add("hidden");
            }, 1000);
        }
    }, 1200);

    // 3. START MAIN UI ANIMATIONS
    // Width expansion
    setTimeout(() => {
        if (frame) {
            frame.classList.add("width-animate");
        }
    }, 2200);

    // Height expansion & Text reveal
    setTimeout(() => {
        if (frame) {
            frame.classList.add("height-animate");
        }
        if (headertext.length > 0) {
            for (let i = 0; i < headertext.length; i++) {
                headertext[i].classList.add("fade-in-active");
            }
        }
    }, 3200);
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

