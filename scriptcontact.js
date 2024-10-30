window.addEventListener('load', function() {
    const nor = document.querySelector('.nor');
    nor.classList.add('show'); // Norul va apărea deja
    setTimeout(() => {
        nor.classList.add('hide'); // Norul va coborî
    }, 1500); // Durata până când norul începe să coboare
});