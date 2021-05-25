class UI {
    
    changePl(){
        sn.play();
        Pl.style.display = 'none';
        Pu.style.display = 'inline-block';
    }
    
    changePu(){
        sn.pause();
        Pl.style.display = 'inline-block';
        Pu.style.display = 'none';
    }
}