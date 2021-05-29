const songs = [
        "bensound-allthat.mp3",
        "bensound-jazzcomedy.mp3",
        "bensound-jazzyfrenzy.mp3",
        "bensound-memories.mp3",
        "bensound-onceagain.mp3",
        "bensound-pianomoment.mp3"
]

const createSongList = () => {
  const list = document.createElement('ol');

  for(let i=0; i<songs.length; i++) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);  
  }
  return list;
}

document.getElementById('songList').appendChild(createSongList());

songList.onclick = (e) => {
    // console.log(e);
    const clickedItem = e.target;
    const source = document.getElementById('source');
    source.src = 'songs/' + clickedItem.innerText;
    
    document.getElementById('currentlyPlayingSong').innerText = "Currently Playing : ";
    document.getElementById('currentSong').innerText = clickedItem.innerText;

    player.load();
    player.play();

}

const playAudio = () => {
    if (player.readyState) {
        player.play();
    }
}

const pauseAudio = () => {
    player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.oninput = (e) => {
    console.log(e);
}