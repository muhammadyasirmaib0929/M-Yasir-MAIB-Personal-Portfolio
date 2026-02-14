const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    const isClosed = mobileMenu.classList.contains('translate-x-full');

    if (isClosed) {
        // Open
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
        menuBtn.innerHTML = "&#10005;"; // X icon
        menuBtn.classList.add('rotate-90', 'text-white');
    } else {
        // Close
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        menuBtn.innerHTML = "&#8801;"; // Hamburger
        menuBtn.classList.remove('rotate-90', 'text-white');
    }
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Auto-close on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});