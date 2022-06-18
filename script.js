console.log("Welcome to VIBE");
let songIndex = 0;
let musicElement = new Audio("songs/1.mp3")
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar'); 
let masterSongName = document.getElementById('masterSongName');
let masterSongMovieName = document.getElementById('masterSongMovieName');
let masterSongSingerName = document.getElementById('masterSongSingerName');
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    {songName: "Main Ki Karaan", movieName: "Lall Singh Chaddha", singerName: "Sonu Nigam", filePath: "/songs/1.mp3", coverPath: "/images/cover1.jpg"},
    {songName: "Jug Jug Jeeve", movieName: "Shiddat", singerName: "Sachet Tandon", filePath: "/songs/2.mp3"},
    {songName: "Akhiyan Udik Diyan", movieName: "Shiddat", singerName: "Master Salim", filePath: "/songs/3.mp3", coverPath: "/covers/3.jpg"},
    {songName: "HAri Har", movieName: "Prithviraj", singerName: "Varun Grover", filePath: "/songs/4.mp3", coverPath: "/covers/4.jpg"},
    {songName: "Toofan", movieName: "KGF Chapter 2", singerName: "Sandesh Datta Naik", filePath: "/songs/5.mp3", coverPath: "/covers/5.jpg"},
    {songName: "Jordaar", movieName: "Jayeshbhai Jordaar", singerName: "Vishal Dadlani", filePath: "/songs/6.mp3", coverPath: "/covers/6.jpg"},
    {songName: "Dafa kar", movieName: "Heropanti 2", singerName: "A R Rahman", filePath: "/songs/7.mp3", coverPath: "/covers/7.jpg"},
    {songName: "Shes On Fire", movieName: "Dhaakad", singerName: "badshah", filePath: "/songs/8.mp3", coverPath: "/covers/8.jpg"},
    {songName: "Kaisi Baatein Karte Ho", movieName: "Modern Love Mumbai", singerName: "Sonu Nigam", filePath: "/songs/9.mp3", coverPath: "/covers/9.jpg"},
]

songItems.forEach((element, i)=>{
//     element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('img')[1].id = i;
    element.getElementsByClassName('songName')[0].getElementsByTagName('b')[0].innerText = songs[i].songName;
    element.getElementsByClassName('movieName')[0].innerText = songs[i].movieName; 
    element.getElementsByClassName('singerName')[0].innerText = songs[i].singerName; 
})

masterPlay.addEventListener('click' , ()=>{
    if(musicElement.paused || musicElement.currentTime<=0)
    {
        musicElement.play();
        document.getElementById(songIndex).src = "SVG icons/pause-solid.svg";
        masterPlay.src="SVG icons/pause-solid.svg";
        masterPlay.width="12px";
    }
    else
    {
        musicElement.pause();
        document.getElementById(songIndex).src = "SVG icons/circle-play-solid.svg";
        masterPlay.src="SVG icons/circle-play-solid.svg";
        masterPlay.width="23px";
    }
})

musicElement.addEventListener('timeupdate' , ()=>{
    let progress = parseInt((musicElement.currentTime/musicElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change' , ()=>{
    musicElement.currentTime = progressBar.value*musicElement.duration / 100;
})
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if((musicElement.paused) || (musicElement.play && songIndex != parseInt(e.target.id)))
        {
        progressBar.value = 0;
        document.getElementById(songIndex).src = "SVG icons/circle-play-solid.svg";
        songIndex = parseInt(e.target.id);
        e.target.src="SVG icons/pause-solid.svg";
        masterSongName.getElementsByTagName('b')[0].innerText = songs[songIndex].songName;
        masterSongMovieName.innerText = songs[songIndex].movieName; 
        masterSongSingerName.innerText = songs[songIndex].singerName;
        musicElement.src = songs[songIndex].filePath;
        musicElement.currentTime = 0;
        musicElement.play();
        masterPlay.src = "SVG icons/pause-solid.svg";
        }
        else
        {
        e.target.src = "SVG icons/circle-play-solid.svg";
        musicElement.pause();
        masterPlay.src = "SVG icons/circle-play-solid.svg";
        }
    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    document.getElementById(songIndex).src = "SVG icons/circle-play-solid.svg";
    if(songIndex<= 0)
    {
        songIndex = 0;
    }
    else
    {
        songIndex -= 1;
    }
    masterSongName.innerText = songs[songIndex].songName;
    masterSongMovieName.innerText = songs[songIndex].movieName; 
    masterSongSingerName.innerText = songs[songIndex].singerName;
    musicElement.src = songs[songIndex].filePath;
    musicElement.currentTime = 0;
    musicElement.play();
    masterPlay.src = "SVG icons/pause-solid.svg";
    document.getElementById(songIndex).src = "SVG icons/pause-solid.svg";
})

document.getElementById('next').addEventListener('click', ()=>{
    document.getElementById(songIndex).src = "SVG icons/circle-play-solid.svg";
    if(songIndex>= 9)
    {
        songIndex = 0;
    }
    else
    {
        songIndex += 1;
    }
    masterSongName.innerText = songs[songIndex].songName;
    masterSongMovieName.innerText = songs[songIndex].movieName; 
    masterSongSingerName.innerText = songs[songIndex].singerName;
    musicElement.src = songs[songIndex].filePath;
    musicElement.currentTime = 0;
    musicElement.play();
    masterPlay.src = "SVG icons/pause-solid.svg";
    document.getElementById(songIndex).src = "SVG icons/pause-solid.svg";
})
