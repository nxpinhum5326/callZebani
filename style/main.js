function callZebani(){
    const sound = document.getElementById('zebani-sound');
    sound.play();
    
    const image = document.getElementById('zebani-image');
    image.src = 'style/images/zebani.jpg';
    image.classList.add('shake');
}