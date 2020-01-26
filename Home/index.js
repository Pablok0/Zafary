
const Whatzapp =  document.querySelector('#btn-what');
const zpoti =  document.querySelector('#btn-zpo');    
const Home =  document.querySelector('#btn-home');       

irWhatzapp.addEventListener('click', cargarwsp);
irzpo.addEventListener('click', spf);
irhome.addEventListener('click', hm);

function cargarwsp() {
    const contDinamico  = document.querySelector('#contenido-dinamico');
    contDinamico.setAttribute('src' , 'https://github.com/Pablok0/Ejercicios-taller-apps/blob/master/whazzap/Index.html' );

}
function spf() {
    const contDinamico  = document.querySelector('#contenido-dinamico');
    contDinamico.setAttribute('src', 'https://github.com/Pablok0/Ejercicios-taller-apps/blob/master/zpotify/index.html');
    
}
function hm() {
    const contDinamico  = document.querySelector('#contenido-dinamico');
    contDinamico.setAttribute('src', 'https://github.com/pablok0/Home/');
    
}