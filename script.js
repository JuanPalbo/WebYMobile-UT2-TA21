const texto = document.getElementById('texto');

texto.addEventListener('focus', () => {
    texto.style.border = '0.2vw solid black';
    texto.placeholder = 'En realidad a fines de este ejercicio es irrelevante si se ingresa texto o no.'
});

texto.addEventListener('blur', () => {
    texto.style.border = '0.05vw solid darkslategray';
    texto.placeholder = 'Ingresar el texto acá';
});

