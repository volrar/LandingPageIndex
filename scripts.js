// Text-Scroll

const spans = document.querySelectorAll('.text-span');
let currentSpan = 0;

function revealLetters(span) {
    span.innerHTML = span.textContent
        .split('')
        .map((letter, i) => {
            if (letter === '') {
                return `<span class="letter-space" style="--i:${i}">${letter}</span>`;
            } else {
                return `<span class="letter" style="--i:${i}">${letter}</span>`;
            }
        })
        .join('');
}


function cycleText() {
    spans.forEach(span => span.classList.remove('active'));

    const span = spans[currentSpan];
    revealLetters(span);
    span.classList.add('active');

    currentSpan = (currentSpan + 2) % spans.length;

    setTimeout(cycleText, 3000); // Change text every 2 seconds
}

cycleText();