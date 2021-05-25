class song {
    
  play(){
      let songinfo = tracks[numberTrack];
      track.src = songinfo.src;
      track.currentTime = ctime;
      track.play();
      
      img.src = songinfo.imgsrc;
      name.textContent = songinfo.name;
      title.textContent = songinfo.singer;
  }
    pause(){
        ctime = track.currentTime;
        let songinfo = tracks[numberTrack];
        track.src = songinfo.src;
        track.pause();
    }
}