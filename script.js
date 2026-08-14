// Popup alert when "Learn More" is clicked
function showMessage(){
    alert(
        "Welcome to My First Ever Website!\n\n" +
        "I created this webpage using HTML, CSS, and JavaScript.\n\n" +
        "This website is named Aev. - ART. EXPRESSION. VISION.\n\n" +
        "This is a collection of my projects, explorations, and the things I've created along the way.\n\n" +
        "All graphics on this website were illustrated :)"
    );

}

// How I made the hamburger button: these lines get the hamburger button and the nav menu from the page using their IDs
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('mainNav');

// When hamburger is clicked
menuToggle.addEventListener('click', () => {
    // Toggles the 'nav-open' class on the nav
    mainNav.classList.toggle('nav-open');
    // Toggles the 'active' class on the button
    menuToggle.classList.toggle('active');
});

// Gets every nav link on the page
document.querySelectorAll('.nav-link').forEach(link => {
    // When links are clicked
    link.addEventListener('click', () => {
        // Close the menu so it doesn't stay open after navigating
        mainNav.classList.remove('nav-open');
        menuToggle.classList.remove('active');
    })
});

// Lightbox: click any portfolio image to zoom in
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.portfolio-img').forEach(item => {
    if(item.tagName === 'VIDEO') return;
    item.addEventListener('click', () => {
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
        lightbox.classList.add('active');
    });
});

// Click anywhere on the lightbox background to close it
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Escape key for lightbox

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        lightbox.classList.remove('active');
    }
});

// Popup alert showing contact email
function showEmail(){
    alert(
        "You can reach me at:\n\n" +
        "herrero.markaaron@gmail.com"
    );
}