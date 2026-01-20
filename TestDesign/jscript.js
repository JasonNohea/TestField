

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

    setTimeout(() => {
        if (splash) {
            splash.classList.remove("opacity-100");
            splash.classList.add("opacity-0");

            setTimeout(() => {
                splash.classList.add("hidden");
            }, 1000);
        }
    }, 1200);

    setTimeout(() => {
        if (frame) {
            frame.classList.add("width-animate");
        }
    }, 2000);

    setTimeout(() => {
        if (frame) {
            frame.classList.add("height-animate");
        }
        if (headertext.length > 0) {
            for (let i = 0; i < headertext.length; i++) {
                headertext[i].classList.add("fade-in-active");

                scrambleText(headertext[i]);
            }
        }
    }, 3200);

    setTimeout(() => {
        if (file) {
            file.classList.remove("none"); // Remove your 'none' class
            file.classList.add("window-popup");

            // If you want the "TEST ONLY" text inside the window 
            // to scramble again when the window pops up:
            const testText = file.querySelector(".text-3xl");
            if (testText) {
                scrambleText(testText);
            }
        }
    }, 3800); // 3200ms (Height start) + 600ms delay
}

function scrambleText(element) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%&#$@+*";
    const originalText = element.innerText;
    let iteration = 0;

    const interval = setInterval(() => {
        element.innerText = originalText
            .split("")
            .map((char, index) => {
                if (index < iteration) {
                    return originalText[index]; // Correct letter
                }
                // Random character
                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");

        if (iteration >= originalText.length) {
            clearInterval(interval);
        }

        // Speed: 1/3 means it takes 3 "ticks" to lock one letter
        iteration += 1 / 1.2;
    }, 40); // 40ms per update for a high-tech feel
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

