// Responsible for the bell icon
$(document).ready(function() {
    $('.toggle-bell').click(function() {
        $(this).toggleClass('clicked');
    });
});

// script responsible for footer behaviour
const footer = document.getElementById('page-footer');

document.addEventListener('mousemove', (event) => {
    const mouseY = event.clientY;

    // Adjust this value to control when the footer appears
    const threshold = 10;

    if (window.innerHeight - mouseY < threshold) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden');
    }
});
