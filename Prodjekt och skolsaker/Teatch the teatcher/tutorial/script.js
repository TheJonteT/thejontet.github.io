// JavaScript-kod
function smoothScrollTo(target, duration, offset = 0) {
    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + start + offset;
    const startTime = performance.now();

    function scroll() {
        const currentTime = performance.now();
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);

        window.scrollTo(0, start + (end - start) * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(scroll);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scroll);
}

function moveUp(button) {
    const article = button.closest('article');
    const previousArticle = article.previousElementSibling;
    if (previousArticle && previousArticle.tagName === 'ARTICLE') {
        smoothScrollTo(previousArticle, 500, -50); // Adjust the offset value as needed
    } else {
        smoothScrollTo(document.querySelector('header'), 500, -50); // Adjust the offset value as needed
    }
}

function moveDown(button) {
    const article = button.closest('article');
    const nextArticle = article.nextElementSibling;
    if (nextArticle && nextArticle.tagName === 'ARTICLE') {
        smoothScrollTo(nextArticle, 500, -50); // Adjust the offset value as needed
    }
}

// Kod för att starta animationen för #animeIII när den klickas
document.addEventListener('DOMContentLoaded', (event) => {
    const animeIII = document.querySelector('#animeIII');

    animeIII.addEventListener('click', () => {
        animeIII.style.animationPlayState = 'running';
    });
});

// Kod för att starta #transIII när den klickas
document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.querySelector('#transII');

    element.addEventListener('click', () => {
        // Ändra bakgrundsfärgen till blå
        element.style.backgroundColor = 'blue';

        // Återställ bakgrundsfärgen till röd efter 5 sekunder
        setTimeout(() => {
            element.style.backgroundColor = 'red';
        }, 5000);
    });
});