//classes
let ui = new UI();
let sn = new song();
//variables
let numberTrack = 0,
    track = document.querySelector('audio'),
    img  = document.querySelector('.songPic'),
    Pl  =  document.querySelector('#play'),
    Pu  =  document.querySelector('#pus'),
    nex = document.querySelector('#nex'),
    pre = document.querySelector('#pre'),
    name  = document.querySelector('h1'),
    title = document.querySelector('h3'),
    prog = document.querySelector('.progresC'),
    sp1 = document.querySelectorAll('.no')[0],
    sp2 = document.querySelectorAll('.no')[1],
    ctime = 0,
    bluprog = document.querySelector('.progres'),


 tracks = [
    {
    src : 'audio/1.mp3',
    imgsrc : 'img/1.jpg',
    name : 'nemidonam1',
    singer : 'nemidone1'
    },
    
    {
    src : 'audio/2.mp3',
    imgsrc : 'img/2.jpg',
    name : 'nemidonam2',
    singer : 'nemidone2'
    },
    
    {
    src : 'audio/3.mp3',
    imgsrc : 'img/3.jpg',
    name : 'nemidonam3',
    singer : 'nemidone3'
    },
    
    {
    src : 'audio/4.mp3',
    imgsrc : 'img/4.jpg',
    name : 'nemidonam4',
    singer : 'nemidone4'
    }
];

//evenliseners
evenLisener()
function evenLisener(){
    Pl.addEventListener('click', function(e) {
        ui.changePl();
    });
    Pu.addEventListener('click', function(e) {
        ui.changePu();
    });
    pre.addEventListener('click', befor);
    nex.addEventListener('click', next);
    prog.addEventListener('click', choosSecend);
    track.addEventListener('timeupdate', everySecend);
}

//functions

function next (e) {
    numberTrack += 1;
        ctime = 0;
        if(numberTrack === 4){
            numberTrack = 0;
        }
        else if(numberTrack === -1){
                numberTrack = 3;
                }
        ui.changePl();
}

function befor (e) {
    numberTrack -= 1;
        ctime = 0;
        if(numberTrack === 4){
            numberTrack = 0
        }
        else if(numberTrack === -1){
                numberTrack = 3
                }
        ui.changePl();
}
function everySecend (e) {
    bluprog.style.width = String((track.currentTime/track.duration)*100)+'%';
        
        let secCurent   = Math.floor(track.currentTime % 60), 
            secDuration = Math.floor(track.duration % 60),
            minCurent   = Math.floor(track.currentTime / 60),
            minDuration = Math.floor(track.duration / 60);
        
        if(secCurent < 10){
            secCurent = `0${secCurent}`;
           }
        sp1.textContent = `${minCurent}:${secCurent}`;
        
        if(secDuration < 10){
            secDuration = `0${secDuration}`;
        }
         if(secDuration){
             sp2.textContent = `${minDuration}:${secDuration}`;
        }
        
        if(track.ended){
           next()
           }
}
function choosSecend (e) {
    if(e.target.className !== 'no'){
            ctime = Math.floor((e.offsetX/this.clientWidth)*track.duration);
        ui.changePl();
        }
}


