var audio_reprodutor = document.getElementById('audio_reprodutor');
var carregado = false;

var play_btn = document.getElementById('play_btn');
var pause_btn = document.getElementById('pause_btn');


pause_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    play_btn.style.display = "inline";
    pause_btn.style.display = "none";

    audio_reprodutor.pause();

    return false;
});

play_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    play_btn.style.display = "none";
    pause_btn.style.display = "inline";

    audio_reprodutor.play();

    return false;
});

const play_musica = (arquivo) => {
    if(carregado == false)
    {
        audio_reprodutor.innerHTML = '<source src="'+arquivo+'" type="audio/mp3" />';
        carregado = true;
    }
    audio_reprodutor.play();
    play_btn.style.display = "none";
    pause_btn.style.display = "inline";
}

document.querySelectorAll('.main_coluna').forEach(item => {

    item.addEventListener('click', event =>{
        let imagem = item.getAttribute('data-image');
        let artista = item.getAttribute('data-artist');
        let som = item.getAttribute('data-song');
        let arq = item.getAttribute('data-file');

        let reprodutor_artista_componente = document.getElementsByClassName('reprodutor_artista');
        reprodutor_artista_componente[0].innerHTML = '<img src="'+imagem+'"/><h3>'+artista+'<br/><span>'+som+'</span></h3>';

        play_musica(arq);
    });
});
































