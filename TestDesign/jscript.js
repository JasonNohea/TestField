

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
    const file2 = document.getElementById("file-alt");

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

    setTimeout(() => {
        if (file2) {
            file2.classList.remove("none", "invisible");
            file2.classList.add("window-popup");

            // Scramble internal text for File 2
            const texts = file2.querySelectorAll(".header-frame");
            texts.forEach(t => {
                t.classList.add("fade-in-active");
                scrambleText(t);
            });
        }
    }, 4000);
}

function scrambleText(element) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%&#$@+*";

    // 1. Capture the "supposed text" only once
    // If it's already saved, use the saved version; otherwise, save current text.
    if (!element.dataset.original) {
        element.dataset.original = element.innerText;
    }

    const originalText = element.dataset.original;
    let iteration = 0;

    // Clear any existing intervals on this specific element to prevent "double scrambling"
    if (element.scrambleInterval) clearInterval(element.scrambleInterval);

    element.scrambleInterval = setInterval(() => {
        element.innerText = originalText
            .split("")
            .map((char, index) => {
                if (index < iteration) {
                    return originalText[index];
                }
                // Keep spaces as spaces to prevent layout jumping
                if (originalText[index] === " ") return " ";

                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");

        if (iteration >= originalText.length) {
            clearInterval(element.scrambleInterval);
        }

        iteration += 1 / 1.2;
    }, 40);
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

