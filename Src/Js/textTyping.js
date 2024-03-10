const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Empresa";
    }, 0);
    setTimeout(() => {
        text.textContent = "Construtora";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Incorporadora";
    }, 8000); 
    setTimeout(() => {
        text.textContent = "Imobiliária";
    }, 12000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Corretora";
    }, 16000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);