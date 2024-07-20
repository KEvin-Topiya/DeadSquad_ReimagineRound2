// script.js
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