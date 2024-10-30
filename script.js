// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.bottom >= 0
    );
}

// Function to handle animation for an element by ID
function handleScrollAnimations() {
    const elements = ['spate','umbra','st', 'dr', 'jos','sus','focus','fade','swing','steag','dita','servic','s1','s2','s3','s4']; // Array of IDs for elements

    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element && isInViewport(element)) {
            element.classList.add('show'); // Add 'show' class to trigger animation
        }
    });
}

// Listen for scroll event and run the function
window.addEventListener('scroll', handleScrollAnimations);

// Ensure it's called on page load to check elements already in viewport
window.addEventListener('load', handleScrollAnimations);


document.querySelectorAll('.menu a[href="servicii.html"], .menu a[href="contact.html"],#so,.toate a[href="servicii.html"],#con').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const nor = document.querySelector('.nor');
        nor.classList.add('show');
        
        // Salvăm URL-ul către care să redirecționăm
        const destination = this.getAttribute('href');
        
        setTimeout(() => {
            window.location.href = destination;
        }, 1000); // Timpul animatiei
    });
});

