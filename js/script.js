// script.js
// -----------------------kevin-------------------------------
document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const blob = document.querySelector('.blob');

    // Change the size of the blob based on scroll position
    const size = 100 + (scrollY / 10);
    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;

    // Change the color of the blob based on scroll position
    const color = `hsl(${scrollY / 5}, 100%, 50%)`;
    blob.style.backgroundColor = color;

    // Change the shape of the blob (border-radius) based on scroll position
    const borderRadius = 50 - (scrollY / 20);
    blob.style.borderRadius = `${borderRadius}%`;
});

//  ---------------------------end kevin----------------------------

// -----------------------kishan----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('customCursor');

    document.addEventListener('mouseenter',() => {
        customCursor.style.display = 'block';
    });

    document.addEventListener('mouseleave',() => {
        customCursor.style.display = 'none';
    });

    document.addEventListener('mousemove', (dets) => {
        customCursor.style.left = `${dets.pageX}px`;
        customCursor.style.top = `${dets.pageY}px`;
        // createParticle(dets.pageX, dets.pageY);
        for (let i = 0; i < 7; i++) {
            createParticle(dets.pageX, dets.pageY, true);
        }
    });

    document.addEventListener('click', (dets) => {
        for (let i = 0; i < 40; i++) {
            createParticle(dets.pageX, dets.pageY, true);
        }
    });

    function createParticle(x, y, burst = false) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const destinationX = (Math.random() - 0.5) * 60;
        const destinationY = (Math.random() - 0.5) * 60;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const animation = particle.animate([
            { transform: `translate(${destinationX +30}px, ${destinationY+40}px)`, opacity: 1 },
            { transform: `translate(${destinationX +40}px, ${destinationY + 30}px)`, opacity: 0 }
        ], {
            duration:  700,
            easing: 'ease-out'
        });

        animation.onfinish = () => {
            particle.remove();
        };
    }
});



// /* ---------------------------end kishan---------------------------- */