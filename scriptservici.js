window.addEventListener('load', function() {
    const nor = document.querySelector('.nor');
    nor.classList.add('show'); // Norul va apărea deja
    setTimeout(() => {
        nor.classList.add('hide'); // Norul va coborî
    }, 1500); // Durata până când norul începe să coboare
});





document.addEventListener("DOMContentLoaded", function() {
    const masajLink = document.getElementById("masaj1");
    const ascunsDiv = document.getElementById("ascunsContent");

    // La click pe link, afișează div-ul ascuns
    masajLink.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation(); // Opresc propagarea pentru ca body să nu preia click-ul
        ascunsDiv.classList.add("show");
    });

    // La click pe div-ul ascuns, oprește propagarea pentru a nu declanșa body click-ul
    ascunsDiv.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // La click pe body, ascunde div-ul
    document.body.addEventListener("click", function() {
        ascunsDiv.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const masajLink = document.getElementById("masaj2");
    const ascunsDiv = document.getElementById("ascunsContent2");

    // La click pe link, afișează div-ul ascuns
    masajLink.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation(); // Opresc propagarea pentru ca body să nu preia click-ul
        ascunsDiv.classList.add("show");
    });

    // La click pe div-ul ascuns, oprește propagarea pentru a nu declanșa body click-ul
    ascunsDiv.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // La click pe body, ascunde div-ul
    document.body.addEventListener("click", function() {
        ascunsDiv.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const masajLink = document.getElementById("masaj3");
    const ascunsDiv = document.getElementById("ascunsContent3");

    // La click pe link, afișează div-ul ascuns
    masajLink.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation(); // Opresc propagarea pentru ca body să nu preia click-ul
        ascunsDiv.classList.add("show");
    });

    // La click pe div-ul ascuns, oprește propagarea pentru a nu declanșa body click-ul
    ascunsDiv.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // La click pe body, ascunde div-ul
    document.body.addEventListener("click", function() {
        ascunsDiv.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const masajLink = document.getElementById("masaj4");
    const ascunsDiv = document.getElementById("ascunsContent4");

    // La click pe link, afișează div-ul ascuns
    masajLink.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation(); // Opresc propagarea pentru ca body să nu preia click-ul
        ascunsDiv.classList.add("show");
    });

    // La click pe div-ul ascuns, oprește propagarea pentru a nu declanșa body click-ul
    ascunsDiv.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // La click pe body, ascunde div-ul
    document.body.addEventListener("click", function() {
        ascunsDiv.classList.remove("show");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const masajLink = document.getElementById("masaj5");
    const ascunsDiv = document.getElementById("ascunsContent5");

    // La click pe link, afișează div-ul ascuns
    masajLink.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation(); // Opresc propagarea pentru ca body să nu preia click-ul
        ascunsDiv.classList.add("show");
    });

    // La click pe div-ul ascuns, oprește propagarea pentru a nu declanșa body click-ul
    ascunsDiv.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // La click pe body, ascunde div-ul
    document.body.addEventListener("click", function() {
        ascunsDiv.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const casute2   = document.getElementById("casute")
    const masajLink = document.getElementById("masaj6");
    const ascunsDiv = document.getElementById("ascunsContent6");

    // La click pe link, afișează div-ul ascuns
    masajLink.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation(); // Opresc propagarea pentru ca body să nu preia click-ul
        ascunsDiv.classList.add("show");
        
    });

    // La click pe div-ul ascuns, oprește propagarea pentru a nu declanșa body click-ul
    ascunsDiv.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // La click pe body, ascunde div-ul
    document.body.addEventListener("click", function() {
        ascunsDiv.classList.remove("show");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const masajLinks = document.querySelectorAll('[id^="masaj"]');
    const casuteDivs = document.querySelectorAll('.casute');

    masajLinks.forEach((link, index) => {
        const casuta = casuteDivs[index];

        link.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            casuta.classList.toggle("active");
        });

        document.body.addEventListener("click", function() {
            casuta.classList.remove("active");
        });
    });
});





  