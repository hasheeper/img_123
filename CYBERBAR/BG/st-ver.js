const audioPlayer = document.querySelector('.audio-player');
const radioPlayer = document.querySelector('.radio-player');
const audio = document.getElementById('audio-element');
const playBtn = document.querySelector('.audio-player .play-btn');
const prevBtn = document.querySelector('.audio-player .prev-btn');
const nextBtn = document.querySelector('.audio-player .next-btn');
const songTitle = document.querySelector('.song-title');
const artist = document.querySelector('.artist');
const progressBar = document.querySelector('.music-progress-bar');
const progress = document.querySelector('.music-progress');
const albumCover = document.querySelector('.cover-image');
const returnBtn = document.querySelector('.return-btn');
const waveMenu = document.querySelector('.wave-menu');
const expandBtn = document.querySelector('.expand-btn');
const expandableContainer = document.querySelector('.expandable-container');
const radioReturnBtn = document.querySelector('.radio-return-btn');
const audioReturnBtn = document.querySelector('.audio-return-btn');
const stationLogo = document.querySelector('.station-logo');



const radioChannels = [
  {
    frequency: 89.4,
    name: "VA-11 Retro",
    logo: {
      big: "va-11",
      mid: "retro",
      small: "Cyberpunk Bar Tunes",
      number: "89.4"
    },
    playlist: [
      { title: "every day is night", artist: "VA-11", src: "https://files.catbox.moe/1d5koe.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "a neon glow lights the way", artist: "VA-11", src: "https://files.catbox.moe/na50hy.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "all systems go", artist: "VA-11", src: "https://files.catbox.moe/jzum2v.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "commencing simulation", artist: "VA-11", src: "https://files.catbox.moe/6ri9jb.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "dusk", artist: "VA-11", src: "https://files.catbox.moe/xgsq1v.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "friendly conversation loop", artist: "VA-11", src: "https://files.catbox.moe/lmciu6.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "go go streaming chan", artist: "VA-11", src: "https://files.catbox.moe/8jix4c.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "heart of the city", artist: "VA-11", src: "https://files.catbox.moe/wqp4cr.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "karmotrine dream", artist: "VA-11", src: "https://files.catbox.moe/uxm5za.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "last call", artist: "VA-11", src: "https://files.catbox.moe/vedghr.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "neon district", artist: "VA-11", src: "https://files.catbox.moe/iqhpii.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "nightime maneuvers", artist: "VA-11", src: "https://files.catbox.moe/ktk09f.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "safe haven loop", artist: "VA-11", src: "https://files.catbox.moe/mbpq7u.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "showtime", artist: "VA-11", src: "https://files.catbox.moe/3yz84x.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "skyline", artist: "VA-11", src: "https://files.catbox.moe/rsy6nj.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "snowfall", artist: "VA-11", src: "https://files.catbox.moe/50d4h1.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "stage theme", artist: "VA-11", src: "https://files.catbox.moe/mbpq7u.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "synthestitch", artist: "VA-11", src: "https://files.catbox.moe/20sumd.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "troubling news", artist: "VA-11", src: "https://files.catbox.moe/y4w5yk.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "neo avatar", artist: "VA-11", src: "https://files.catbox.moe/3tzejo.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "umemoto", artist: "VA-11", src: "https://files.catbox.moe/czk6qo.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "underground club", artist: "VA-11", src: "https://files.catbox.moe/6mcymb.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "welcome to valhalla", artist: "VA-11", src: "https://files.catbox.moe/vxzf0e.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "your love is a drug", artist: "VA-11", src: "https://files.catbox.moe/axzeuv.mp3", cover: "https://files.catbox.moe/1nxysa.png" },
      { title: "youve got me", artist: "VA-11", src: "https://files.catbox.moe/xa5q4s.mp3", cover: "https://files.catbox.moe/1nxysa.png" }
    ]
  },
  {
    frequency: 96.3,
    name: "Samurai Beats",
    logo: {
      big: "S-BEATS",
      mid: "l",
      small: "synthwave sounds",
      number: "96.3"
    },
    playlist: [
      { title: "You Will Never Know", artist: "Katana Zero", src: "https://files.catbox.moe/k1udbi.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "A Fine Red Mist", artist: "Katana Zero", src: "https://files.catbox.moe/9hmspe.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "Driving Force Neon Fog", artist: "Katana Zero", src: "https://files.catbox.moe/5v877a.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "Blue Room", artist: "Katana Zero", src: "https://files.catbox.moe/3dcxlr.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "Breath of a Serpent", artist: "Katana Zero", src: "https://files.catbox.moe/ev44y6.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "Chinatown", artist: "Katana Zero", src: "https://files.catbox.moe/akn1c1.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "Driving Force Neon Fog", artist: "Katana Zero", src: "https://files.catbox.moe/5v877a.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "End of the Road", artist: "Katana Zero", src: "https://files.catbox.moe/0rmns6.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "Hit the Floor", artist: "Katana Zero", src: "https://files.catbox.moe/k4kbku.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "Prison Air 2", artist: "Katana Zero", src: "https://files.catbox.moe/qmjebd.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "Rain on Brick", artist: "Katana Zero", src: "https://files.catbox.moe/tdyuas.mp3", cover: "https://files.catbox.moe/i3d949.png" },
      { title: "Worst Neighbors Ever", artist: "Katana Zero", src: "https://files.catbox.moe/778s1u.mp3", cover: "https://files.catbox.moe/i3d949.png" }
    ]
  },
  {
    frequency: 101.5,
    name: "Kawaii Cyber",
    logo: {
      big: "K-Cyber",
      mid: "2",
      small: "Cute EDM",
      number: "101.5"
    },
    playlist: [
      { title: "Prepa-rara", artist: "Dohna Dohna", src: "https://files.catbox.moe/h9dgos.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "Kill Time", artist: "Dohna Dohna", src: "https://files.catbox.moe/i6ureg.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "rambling pleat", artist: "Dohna Dohna", src: "https://files.catbox.moe/9uam3n.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "After the", artist: "Dohna Dohna", src: "https://files.catbox.moe/60ntxt.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "ChuccuraChuccura", artist: "Dohna Dohna", src: "https://files.catbox.moe/dpc3xy.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "Doo-Yah-Roo-Yoh", artist: "Dohna Dohna", src: "https://files.catbox.moe/rsjiyv.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "Following F", artist: "Dohna Dohna", src: "https://files.catbox.moe/s2hbfi.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "soft drive", artist: "Dohna Dohna", src: "https://files.catbox.moe/2np8re.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "VILE VAN", artist: "Dohna Dohna", src: "https://files.catbox.moe/h9dgos.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "From the Dawn and Darkness", artist: "Dohna Dohna", src: "https://files.catbox.moe/nbq64h.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "dndndn.dn", artist: "Dohna Dohna", src: "https://files.catbox.moe/jdjcbg.mp3", cover: "https://files.catbox.moe/30s0p5.jpg" },
      { title: "Whatcha Whatcha Doin'", artist: "Dohna Dohna", src: "https://files.catbox.moe/usj1kz.mp3", cover: "https://files.catbox.moe/g3sz99.jpg" }
    ]
  },
  {
    frequency: 103.8,
    name: "2077-Voices",
    logo: {
      big: "2077-Voices",
      mid: "z",
      small: "neon sound",
      number: "-103.8"
    },
    playlist: [
      { title: "Night City", artist: "Cyberpunk 2077", src: "https://files.catbox.moe/vfm4mn.mp3", cover: "https://files.catbox.moe/ny5zn1.png" },
      { title: "BM", artist: "Cyberpunk 2077", src: "https://files.catbox.moe/bjydfl.mp3", cover: "https://files.catbox.moe/ny5zn1.png" },
      { title: "Delicate Weapon", artist: "Cyberpunk 2077", src: "https://files.catbox.moe/aw64fi.mp3", cover: "https://files.catbox.moe/db4gr7.png" },
      { title: "V", artist: "Cyberpunk 2077", src: "https://files.catbox.moe/h173k3.mp3", cover: "https://files.catbox.moe/ny5zn1.png" },
      { title: "The Rebel Path", artist: "Cyberpunk 2077", src: "https://files.catbox.moe/xcavcb.mp3", cover: "https://files.catbox.moe/ny5zn1.png" },
      { title: "Never Fade Away", artist: "Cyberpunk 2077", src: "https://files.catbox.moe/8vv54o.mp3", cover: "https://files.catbox.moe/ny5zn1.png" },
      { title: "Hanako & Yorinobu", artist: "Cyberpunk 2077", src: "https://files.catbox.moe/amq255.mp3", cover: "https://files.catbox.moe/ny5zn1.png" },
      { title: "I Really Want to Stay At Your House", artist: "Cyberpunk 2077", src: "https://files.catbox.moe/y99spj.mp3", cover: "https://files.catbox.moe/db4gr7.png" }
    ]
  }
];

let currentRadioChannelIndex = 0;
let currentSongIndex = 0;
let isPlaying = false;

async function setAudioVolume() {
  try {
    const variables = await getVariables();
    let volumeLevel = 1.0; // 默认100%音量

    if (variables && variables.musicVolume !== undefined) {
      volumeLevel = variables.musicVolume * 0.25; // 将0-4转换为0-1的音量值
    }

    audio.volume = volumeLevel;
    console.log('Set audio volume to:', volumeLevel);
  } catch (error) {
    console.error('Failed to set audio volume:', error);
    audio.volume = 1.0; // 出错时使用默认音量
  }
}

function loadTrack(channelIndex, trackIndex) {
  // Pause current audio if playing
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  }

  const track = radioChannels[channelIndex].playlist[trackIndex];
  audio.src = track.src;
  songTitle.textContent = track.title;
  artist.textContent = track.artist;
  albumCover.src = track.cover;
  audio.load();

  setAudioVolume();

  checkTextOverflow();
  resetProgress();
  updateWaveMenu();

  // Update play button and classes
  playBtn.textContent = '▶';
  audioPlayer.classList.remove('playing');
  waveMenu.classList.remove('playing');
}

function playPause() {
  if (audio.paused) {
    // Notify parent window before playing
    window.parent.postMessage({
      type: 'audioPlay',
      iframeId: window.frameElement.id
    }, '*');

    audio.play();
    playBtn.textContent = '❚❚';
    audioPlayer.classList.add('playing');
    waveMenu.classList.add('playing');
  } else {
    audio.pause();
    playBtn.textContent = '▶';
    audioPlayer.classList.remove('playing');
    waveMenu.classList.remove('playing');
  }
  isPlaying = !audio.paused;
}

window.addEventListener('message', function (event) {
  if (event.data.type === 'stopAudio' &&
    event.data.iframeId !== window.frameElement.id) {
    audio.pause();
    playBtn.textContent = '▶';
    audioPlayer.classList.remove('playing');
    waveMenu.classList.remove('playing');
    isPlaying = false;
  }
});

function nextTrack() {
  currentSongIndex = (currentSongIndex + 1) % radioChannels[currentRadioChannelIndex].playlist.length;
  loadTrack(currentRadioChannelIndex, currentSongIndex);
  audio.play();
  isPlaying = true;
  playBtn.textContent = '❚❚';
  audioPlayer.classList.add('playing');
  waveMenu.classList.add('playing');
}

function prevTrack() {
  currentSongIndex = (currentSongIndex - 1 + radioChannels[currentRadioChannelIndex].playlist.length) % radioChannels[currentRadioChannelIndex].playlist.length;
  loadTrack(currentRadioChannelIndex, currentSongIndex);
  audio.play();
  isPlaying = true;
  playBtn.textContent = '❚❚';
  audioPlayer.classList.add('playing');
  waveMenu.classList.add('playing');
}

function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${percent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

function resetProgress() {
  progress.style.width = '0%';
  audio.currentTime = 0;
}

function updateRadioChannel() {
  const channel = radioChannels[currentRadioChannelIndex];
  document.querySelector('.frequency').textContent = channel.frequency.toFixed(1);
  const pointerPosition = (channel.frequency - 88) / (108 - 88) * 100;
  document.querySelector('.frequency-pointer').style.left = `${pointerPosition}%`;

  document.querySelector('.logo-big').textContent = channel.logo.big;
  document.querySelector('.logo-mid').textContent = channel.logo.mid;
  document.querySelector('.logo-small').textContent = channel.logo.small;
  document.querySelector('.logo-number').textContent = channel.logo.number;

  updateLogoStyles(channel.name);
}

function updateLogoStyles(stationName) {
  const logoContainer = document.querySelector('.station-logo');
  const logoBig = document.querySelector('.logo-big');
  const logoMid = document.querySelector('.logo-mid');
  const logoSmall = document.querySelector('.logo-small');


  logoContainer.className = 'station-logo';

  switch (stationName) {
    case 'VA-11 Retro':
      logoContainer.classList.add('d-style');
      break;
    case 'Samurai Beats':
      logoContainer.classList.add('a-style');
      break;
    case 'Kawaii Cyber':
      logoContainer.classList.add('b-style');
      break;
    case '2077-Voices':
      logoContainer.classList.add('c-style');
      break;
  }
}

function changeRadioChannel(direction) {
  currentRadioChannelIndex = (currentRadioChannelIndex + direction + radioChannels.length) % radioChannels.length;
  currentSongIndex = 0;
  updateRadioChannel();
  if (audioPlayer.style.transform === 'translateX(0)') {
    loadTrack(currentRadioChannelIndex, currentSongIndex);
    if (isPlaying) {
      playPause();
    }
  }
  updateStationLogoBlur();
}


function switchToAudioPlayer() {
  radioPlayer.style.transform = 'translateX(-100%)';
  audioPlayer.style.transform = 'translateX(0)';
}

function switchToRadioPlayer() {
  radioPlayer.style.transform = 'translateX(0)';
  audioPlayer.style.transform = 'translateX(100%)';
}

function playAndSwitchToAudioPlayer() {
  switchToAudioPlayer();
  currentSongIndex = 0;
  loadTrack(currentRadioChannelIndex, currentSongIndex);
  playPause();
}

function changeRadioChannel(direction) {
  currentRadioChannelIndex = (currentRadioChannelIndex + direction + radioChannels.length) % radioChannels.length;
  currentSongIndex = 0;
  updateRadioChannel();
  if (audioPlayer.style.transform === 'translateX(0)') {
    loadTrack(currentRadioChannelIndex, currentSongIndex);
    if (isPlaying) {
      audio.play();
    }
  }
  updateStationLogoBlur();
}

function checkTextOverflow() {
  const container = document.querySelector('.song-title-container');
  const title = document.querySelector('.song-title');

  title.classList.remove('scrolling');
  title.style.paddingLeft = '0';

  if (title.offsetWidth > container.offsetWidth) {
    title.classList.add('scrolling');
  }
}

function updateWaveMenu() {
  if (isPlaying) {
    waveMenu.classList.add('playing');
  } else {
    waveMenu.classList.remove('playing');
  }
}

function updateStationLogoBlur() {
  const stationLogo = document.querySelector('.station-logo');
  if (expandableContainer.style.bottom === '0px') {
    stationLogo.classList.add('blur-filter');
  } else {
    stationLogo.classList.remove('blur-filter');
  }
}

expandBtn.addEventListener('click', () => {
  if (expandableContainer.style.bottom === '0px') {
    expandableContainer.style.bottom = '-100%';
    expandBtn.classList.remove('expanded');
  } else {
    expandableContainer.style.bottom = '0px';
    expandBtn.classList.add('expanded');
  }
  updateStationLogoBlur();
});



playBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);
audio.addEventListener('ended', nextTrack);
radioReturnBtn.addEventListener('click', switchToAudioPlayer);
audioReturnBtn.addEventListener('click', switchToRadioPlayer);




document.querySelector('.radio-player .prev-btn').addEventListener('click', () => {
  changeRadioChannel(-1);
  updateStationLogoBlur();
});

document.querySelector('.radio-player .next-btn').addEventListener('click', () => {
  changeRadioChannel(1);
  updateStationLogoBlur();
});
document.querySelector('.radio-player .play-pause-btn').addEventListener('click', playAndSwitchToAudioPlayer);

window.addEventListener('resize', checkTextOverflow);

loadTrack(currentRadioChannelIndex, currentSongIndex);
updateRadioChannel();

document.addEventListener('DOMContentLoaded', () => {
  setAudioVolume();
});

document.addEventListener('DOMContentLoaded', function () {
    const dialogueBox = document.querySelector('.dialogue-box');
    const logBox = document.querySelector('.log-box');
    const dialogueToLogButton = document.getElementById('dialogueToLogButton');
    const logToDialogueButton = document.getElementById('logToDialogueButton');
    const characterName = document.querySelector('.character-name');
    const dialogueText = document.querySelector('.dialogue-text');
    const logContent = document.querySelector('.log-content');
    const mainContent = document.querySelector('.main-content');
    const leftCharacter = document.querySelector('.left-character');
    const rightCharacter = document.querySelector('.right-character');

    const characterExpressions = {
        emi: {
            angry: 'https://files.catbox.moe/fnaiv7.png',
            anxious: 'https://files.catbox.moe/f2wzy3.png',
            confident: 'https://files.catbox.moe/btts3d.png',
            confused: 'https://files.catbox.moe/v0h8tq.png',
            embarrassed: 'https://files.catbox.moe/7py8hc.png',
            excited: 'https://files.catbox.moe/ygt21h.png',
            fearful: 'https://files.catbox.moe/q3fle2.png',
            happy: 'https://files.catbox.moe/79v5m6.png',
            peaceful: 'https://files.catbox.moe/o3x52k.png',
            playful: 'https://files.catbox.moe/nlusja.png',
            sad: 'https://files.catbox.moe/px3elf.png',
            serious: 'https://files.catbox.moe/6brj51.png',
            shy: 'https://files.catbox.moe/5kb3m6.png',
            speechless: 'https://files.catbox.moe/npqd2r.png',
            surprised: 'https://files.catbox.moe/is40ae.png',
            neutral: 'https://files.catbox.moe/o3x52k.png'
        },
        lynna: {
            angry: 'https://files.catbox.moe/llwzxb.png',
            anxious: 'https://files.catbox.moe/hyamc5.png',
            confident: 'https://files.catbox.moe/9nxhxf.png',
            confused: 'https://files.catbox.moe/hmvpgp.png',
            embarrassed: 'https://files.catbox.moe/5mrntm.png',
            excited: 'https://files.catbox.moe/mif0i2.png',
            fearful: 'https://files.catbox.moe/961kxj.png',
            happy: 'https://files.catbox.moe/gvapyy.png',
            peaceful: 'https://files.catbox.moe/bn6i4m.png',
            playful: 'https://files.catbox.moe/i5p2b3.png',
            sad: 'https://files.catbox.moe/hz447a.png',
            serious: 'https://files.catbox.moe/c1p3ao.png',
            shy: 'https://files.catbox.moe/4wwucg.png',
            speechless: 'https://files.catbox.moe/q2xql9.png',
            surprised: 'https://files.catbox.moe/vgrgb8.png',
            neutral: 'https://files.catbox.moe/bn6i4m.png'
        },
        kyra: {
            angry: 'https://files.catbox.moe/styiym.png',
            anxious: 'https://files.catbox.moe/styiym.png',
            confident: 'https://files.catbox.moe/odtj1b.png',
            confused: 'https://files.catbox.moe/bvytlt.png',
            embarrassed: 'https://files.catbox.moe/zh84zm.png',
            excited: 'https://files.catbox.moe/arudxr.png',
            fearful: 'https://files.catbox.moe/7r95jb.png',
            happy: 'https://files.catbox.moe/ejoxqn.png',
            peaceful: 'https://files.catbox.moe/6wl8j8.png',
            playful: 'https://files.catbox.moe/bpff1v.png',
            sad: 'https://files.catbox.moe/zlez5o.png',
            serious: 'https://files.catbox.moe/x1nd4c.png',
            shy: 'https://files.catbox.moe/4sh3op.png',
            speechless: 'https://files.catbox.moe/kg27rl.png',
            surprised: 'https://files.catbox.moe/ro2r30.png',
            neutral: 'https://files.catbox.moe/6wl8j8.png'
        },
        sayori: {
            angry: 'https://files.catbox.moe/rn6tll.png',
            anxious: 'https://files.catbox.moe/198jqj.png',
            confident: 'https://files.catbox.moe/fqf4ll.png',
            confused: 'https://files.catbox.moe/ndlo8v.png',
            embarrassed: 'https://files.catbox.moe/zkebkw.png',
            excited: 'https://files.catbox.moe/k21727.png',
            fearful: 'https://files.catbox.moe/28c1u0.png',
            happy: 'https://files.catbox.moe/xbec38.png',
            peaceful: 'https://files.catbox.moe/fqf4ll.png',
            playful: 'https://files.catbox.moe/0bdh3m.png',
            sad: 'https://files.catbox.moe/xu4sir.png',
            serious: 'https://files.catbox.moe/yvr7vg.png',
            shy: 'https://files.catbox.moe/3x6fxm.png',
            speechless: 'https://files.catbox.moe/g5qgee.png',
            surprised: 'https://files.catbox.moe/ndlo8v.png',
            neutral: 'https://files.catbox.moe/fqf4ll.png'
        },
        riko: {
            angry: 'https://files.catbox.moe/4aiz3i.png',
            anxious: 'https://files.catbox.moe/sjppwp.png',
            confident: 'https://files.catbox.moe/q1nhbz.png',
            confused: 'https://files.catbox.moe/acl8nv.png',
            embarrassed: 'https://files.catbox.moe/8n6bgq.png',
            excited: 'https://files.catbox.moe/i9oaou.png',
            fearful: 'https://files.catbox.moe/r9tztk.png',
            happy: 'https://files.catbox.moe/prxv6x.png',
            peaceful: 'https://files.catbox.moe/m4y48l.png',
            playful: 'https://files.catbox.moe/jbk2nj.png',
            sad: 'https://files.catbox.moe/tuy6cx.png',
            serious: 'https://files.catbox.moe/9vhu2d.png',
            shy: 'https://files.catbox.moe/28gpuy.png',
            speechless: 'https://files.catbox.moe/bd05ya.png',
            surprised: 'https://files.catbox.moe/vbtfxu.png',
            neutral: 'https://files.catbox.moe/m4y48l.png'
        }
    };

    const backgroundImages = {
        center: 'https://files.catbox.moe/096qsw.webp',
        left: 'https://files.catbox.moe/pj51zm.png',
        right: 'https://files.catbox.moe/vpll93.png'
    };

    const emotionBubbles = {
        no_bubble: 'https://files.catbox.moe/trv4y0.gif',
        angry_exclam: 'https://files.catbox.moe/cyzqn8.gif',
        exclaim: 'https://files.catbox.moe/4m324h.gif',
        frantic_complex: 'https://files.catbox.moe/anewj7.gif',
        happy_note: 'https://files.catbox.moe/0x6ksy.gif',
        idea_bulb: 'https://files.catbox.moe/5rgwxl.gif',
        love_heart: 'https://files.catbox.moe/1fnns3.gif',
        question: 'https://files.catbox.moe/f5n4gj.gif',
        resigned_sweat: 'https://files.catbox.moe/v7jrt0.gif',
        silence_dot: 'https://files.catbox.moe/2c0ekb.gif',
        sleepy_zzz: 'https://files.catbox.moe/trvpy0.gif'
    };

    let currentExpressions = {
        emi: 'neutral',
        kyra: 'neutral',
        lynna: 'neutral',
        sayori: 'neutral',
        riko: 'neutral'
    };

    const jsonData = globalJsonData;

    updateDayIndicator(jsonData);


    function updateDayIndicator(jsonData) {
        const dayIndicator = document.querySelector('.day-indicator');
        const dayText1 = dayIndicator.querySelector('.day-text-1');
        const timeCard = document.querySelector('.time-card');
        const timeText = timeCard.querySelector('.time-text');
        const dayText = timeCard.querySelector('.day-text');


        const dayInfo = jsonData.find(item => item.day !== undefined);
        if (dayInfo) {
            dayText1.textContent = `DAY ${dayInfo.day}`;

            const date = new Date(2023, 5, 15 + dayInfo.day - 1);
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            dayText.textContent = date.toLocaleDateString('en-US', options);

            if (dayInfo.time) {
                const [hours, minutes] = dayInfo.time.split(':');
                const ampm = hours >= 12 ? 'PM' : 'AM';
                const formattedHours = hours % 12 || 12;
                timeText.innerHTML = `<span>${formattedHours}:${minutes}</span><span class="time-sub-text">${ampm}</span>`;
            }

            if (dayInfo.weather) {
                let weatherCode;
                const hour = parseInt(dayInfo.time.split(':')[0]);
                const isDay = hour >= 6 && hour < 18;

                switch (dayInfo.weather.toLowerCase()) {
                    case 'rainy': weatherCode = 'B'; break;
                    case 'snowy': weatherCode = 'C'; break;
                    case 'cloudy': weatherCode = 'D'; break;
                    case 'thunderstorm': weatherCode = 'F'; break;
                    case 'sunny': weatherCode = isDay ? 'H' : 'L'; break;
                    default: weatherCode = '';
                }

                const weatherSpan = timeText.querySelector('.weather-sub-text') || document.createElement('span');
                weatherSpan.className = 'weather-sub-text';
                weatherSpan.textContent = weatherCode;
                timeText.appendChild(weatherSpan);

            }
        }
    }


    function updateBackgroundImage(jsonData) {
        const dayInfo = jsonData.find(item => item.day !== undefined);
        if (dayInfo) {
            const time = dayInfo.time;
            const weather = dayInfo.weather.toLowerCase();
            let backgroundUrl = '';

            const hour = parseInt(time.split(':')[0]);

            if (hour >= 6 && hour < 18) {
                if (weather === 'sunny' || weather === 'cloudy') {
                    backgroundUrl = 'https://files.catbox.moe/4vdlh2.webp';
                } else if (weather === 'rainy' || weather === 'thunderstorm' || weather === 'snowy') {
                    backgroundUrl = 'https://files.catbox.moe/d0kteg.webp';
                }
            } else if ((hour >= 18 && hour <= 23) || (hour >= 0 && hour < 6)) {
                if (weather === 'sunny' || weather === 'cloudy') {
                    backgroundUrl = 'https://files.catbox.moe/l1bd55.webp';
                } else if (weather === 'rainy' || weather === 'thunderstorm' || weather === 'snowy') {
                    backgroundUrl = 'https://files.catbox.moe/mf96sg.webp';
                }
            }

            if ((hour >= 5 && hour < 7) || (hour >= 17 && hour < 19)) {
                if (weather === 'sunny' || weather === 'cloudy') {
                    backgroundUrl = hour < 7 ? 'https://files.catbox.moe/80otm1.webp' : 'https://files.catbox.moe/wbnp4b.webp';
                } else if (weather === 'rainy' || weather === 'thunderstorm' || weather === 'snowy') {
                    backgroundUrl = 'https://files.catbox.moe/h5v1on.webp';
                }
            }

            if (backgroundUrl) {
                const topRight = document.querySelector('.top-right');
                if (topRight) {
                    const backgroundImage = topRight.querySelector('.background-image');
                    if (backgroundImage) {
                        backgroundImage.style.backgroundImage = `url('${backgroundUrl}')`;
                    }
                }
            }
        }
    }

    updateBackgroundImage(jsonData);


    let currentDialogueIndex = 0;
    let isTyping = false;
    let typewriterTimeout;


    function triggerEmotionBubble(character, emotion) {
        const emotionMap = {
            emi: {
                angry: { bubble: 'angry_exclam', probability: 1 },
                surprised: { bubble: 'exclaim', probability: 1 },
                excited: { bubble: 'exclaim', probability: 0.5 },
                confused: { bubble: 'question', probability: 1 },
                anxious: { bubble: 'frantic_complex', probability: 0.5 },
                happy: { bubble: 'happy_note', probability: 1 },
                playful: { bubble: 'happy_note', probability: 0.5 },
                confident: { bubble: 'idea_bulb', probability: 1 },
                peaceful: { bubble: 'silence_dot', probability: 0.2 },
                shy: { bubble: 'love_heart', probability: 0 },
                embarrassed: { bubble: 'resigned_sweat', probability: 1 },
                speechless: { bubble: 'silence_dot', probability: 1 }
            },
            lynna: {
                angry: { bubble: 'angry_exclam', probability: 1 },
                surprised: { bubble: 'exclaim', probability: 0.5 },
                excited: { bubble: 'exclaim', probability: 0.4 },
                confused: { bubble: 'question', probability: 0.5 },
                anxious: { bubble: 'frantic_complex', probability: 1 },
                happy: { bubble: 'happy_note', probability: 0.5 },
                playful: { bubble: 'happy_note', probability: 0.5 },
                confident: { bubble: 'idea_bulb', probability: 0.5 },
                peaceful: { bubble: 'silence_dot', probability: 0.2 },
                shy: { bubble: 'love_heart', probability: 0 },
                embarrassed: { bubble: 'resigned_sweat', probability: 1 },
                speechless: { bubble: 'silence_dot', probability: 1 }
            },
            kyra: {
                angry: { bubble: 'angry_exclam', probability: 1 },
                surprised: { bubble: 'exclaim', probability: 0.5 },
                excited: { bubble: 'exclaim', probability: 0.5 },
                confused: { bubble: 'question', probability: 1 },
                anxious: { bubble: 'frantic_complex', probability: 0.5 },
                happy: { bubble: 'happy_note', probability: 0.5 },
                playful: { bubble: 'happy_note', probability: 0.25 },
                confident: { bubble: 'idea_bulb', probability: 0.25 },
                peaceful: { bubble: 'silence_dot', probability: 0.4 },
                shy: { bubble: 'love_heart', probability: 0 },
                embarrassed: { bubble: 'resigned_sweat', probability: 1 },
                speechless: { bubble: 'silence_dot', probability: 1 }
            },
            sayori: {
                angry: { bubble: 'angry_exclam', probability: 1 },
                surprised: { bubble: 'exclaim', probability: 0.2 },
                excited: { bubble: 'exclaim', probability: 0 },
                confused: { bubble: 'question', probability: 0.5 },
                anxious: { bubble: 'frantic_complex', probability: 0.5 },
                happy: { bubble: 'happy_note', probability: 0 },
                playful: { bubble: 'happy_note', probability: 0 },
                confident: { bubble: 'idea_bulb', probability: 0 },
                peaceful: { bubble: 'silence_dot', probability: 0.4 },
                shy: { bubble: 'love_heart', probability: 0 },
                embarrassed: { bubble: 'resigned_sweat', probability: 1 },
                speechless: { bubble: 'silence_dot', probability: 1 }
            },
            riko: {
                angry: { bubble: 'angry_exclam', probability: 1 },
                surprised: { bubble: 'exclaim', probability: 1 },
                excited: { bubble: 'happy_note', probability: 0.5 },
                confused: { bubble: 'question', probability: 0.5 },
                anxious: { bubble: 'frantic_complex', probability: 1 },
                happy: { bubble: 'happy_note', probability: 0.5 },
                playful: { bubble: 'happy_note', probability: 0.5 },
                confident: { bubble: 'idea_bulb', probability: 0 },
                peaceful: { bubble: 'silence_dot', probability: 0 },
                shy: { bubble: 'love_heart', probability: 0 },
                embarrassed: { bubble: 'resigned_sweat', probability: 1 },
                speechless: { bubble: 'silence_dot', probability: 1 }
            }
        };

        const characterEmotions = emotionMap[character] || emotionMap.mika;
        const emotionInfo = characterEmotions[emotion];

        if (emotionInfo && Math.random() < emotionInfo.probability) {
            return emotionBubbles[emotionInfo.bubble];
        }
        return emotionBubbles.no_bubble;
    }


    function createCharacterElement(character, position, isSpeaking) {
        const normalizedCharacter = character.toLowerCase();
        const characterDiv = document.createElement('div');
        characterDiv.className = 'scene-container';
        const currentEmotion = currentExpressions[normalizedCharacter];
        const expressionUrl = characterExpressions[normalizedCharacter][currentEmotion];
        const bubbleUrl = isSpeaking ? triggerEmotionBubble(normalizedCharacter, currentEmotion) : emotionBubbles.no_bubble;
        const animation = isSpeaking ? getRandomAnimation(normalizedCharacter, currentEmotion) : 'static';

        characterDiv.innerHTML = `
        <div class="background-image" style="background-image: url('${backgroundImages[position]}');"></div>
        <div class="custom-character-container"></div>
        <div class="character-image char-character-image center-horizontal">
            <div class="character-image char-character-image mid-depth">
                <div class="action-wrapper ${animation}-container">
                    <div class="character-image ${normalizedCharacter}-${position}-character-image" style="background-image: url('${expressionUrl}');"></div>
                    <div class="emotion-bubble ${normalizedCharacter}-${position}-emotion-bubble" style="background-image: url('${bubbleUrl}'); opacity: 0;"></div>
                </div>
            </div>
        </div>
    `;
        return characterDiv;
    }

    function getRandomAnimation(character, emotion) {
        const animationProbabilities = {
            emi: {
                angry: { 'light-bounce-single': 0.7 },
                surprised: { 'light-bounce-single': 1 },
                excited: { 'light-bounce-double': 1 },
                confused: { 'static': 1 },
                anxious: { 'shake-light': 1 },
                happy: { 'light-bounce-single': 1 },
                playful: { 'static': 1 },
                confident: { 'static': 1 },
                peaceful: { 'static': 1 },
                shy: { 'shake-light': 1 },
                embarrassed: { 'shake-light': 0.6 },
                speechless: { 'static': 1 }
            },
            lynna: {
                angry: { 'shake-light': 0.7 },
                surprised: { 'light-bounce-single': 0.5 },
                excited: { 'light-bounce-single': 1 },
                confused: { 'static': 1 },
                anxious: { 'shake-light': 0.5 },
                happy: { 'light-bounce-single': 0.1 },
                playful: { 'static': 1 },
                confident: { 'static': 1 },
                peaceful: { 'static': 1 },
                shy: { 'shake-light': 1 },
                embarrassed: { 'shake-light': 1 },
                speechless: { 'static': 1 }
            },
            kyra: {
                angry: { 'shake-light': 0.3 },
                surprised: { 'static': 0.6 },
                excited: { 'light-bounce-single': 0.5 },
                confused: { 'static': 1 },
                anxious: { 'shake-light': 0.5 },
                happy: { 'static': 1 },
                playful: { 'static': 1 },
                confident: { 'static': 1 },
                peaceful: { 'static': 1 },
                shy: { 'shake-light': 0.4 },
                embarrassed: { 'shake-light': 0.5 },
                speechless: { 'static': 1 }
            },
            sayori: {
                angry: { 'shake-light': 0.3 },
                surprised: { 'static': 1 },
                excited: { 'static': 1 },
                confused: { 'static': 1 },
                anxious: { 'static': 1 },
                happy: { 'static': 1 },
                playful: { 'static': 1 },
                confident: { 'static': 1 },
                peaceful: { 'static': 1 },
                shy: { 'shake-light': 0.4 },
                embarrassed: { 'shake-light': 0.5 },
                speechless: { 'static': 1 }
            },
            riko: {
                angry: { 'shake-light': 0.3 },
                surprised: { 'static': 0.6 },
                excited: { 'light-bounce-single': 1 },
                confused: { 'static': 1 },
                anxious: { 'shake-light': 0.5 },
                happy: { 'static': 1 },
                playful: { 'static': 1 },
                confident: { 'static': 1 },
                peaceful: { 'static': 1 },
                shy: { 'shake-light': 1 },
                embarrassed: { 'shake-light': 1 },
                speechless: { 'static': 1 }
            }
        };

        const characterAnimations = animationProbabilities[character] || animationProbabilities.mika;
        const animations = characterAnimations[emotion] || { 'static': 1 };

        let random = Math.random();
        for (let [animation, probability] of Object.entries(animations)) {
            if (random < probability) {
                return animation;
            }
            random -= probability;
        }
        return 'static';
    }



    function updateCharacterExpression(character, emotion, isSpeaking) {
        const normalizedCharacter = character.toLowerCase();

        if (characterExpressions[normalizedCharacter] && characterExpressions[normalizedCharacter][emotion]) {
            currentExpressions[normalizedCharacter] = emotion;
            const positions = ['center', 'left', 'right'];
            positions.forEach(position => {
                const characterImage = document.querySelector(`.${normalizedCharacter}-${position}-character-image`);
                const emotionBubble = document.querySelector(`.${normalizedCharacter}-${position}-emotion-bubble`);
                const actionWrapper = document.querySelector(`.${normalizedCharacter}-${position}-character-image .action-wrapper`);

                if (characterImage) {
                    characterImage.style.backgroundImage = `url('${characterExpressions[normalizedCharacter][emotion]}')`;
                }

                if (emotionBubble) {
                    if (isSpeaking) {
                        const bubbleUrl = triggerEmotionBubble(normalizedCharacter, emotion);
                        emotionBubble.style.backgroundImage = `url('${bubbleUrl}')`;
                        emotionBubble.style.animation = 'none';
                        emotionBubble.offsetHeight;
                        emotionBubble.style.animation = 'bubbleAppear 1.8s forwards';
                    } else {
                        emotionBubble.style.animation = 'none';
                        emotionBubble.style.opacity = '0';
                    }
                }

                if (actionWrapper && isSpeaking) {
                    const animation = getRandomAnimation(normalizedCharacter, emotion);
                    actionWrapper.className = `action-wrapper ${animation}-container`;
                } else if (actionWrapper) {
                    actionWrapper.className = 'action-wrapper static-container';
                }
            });
        }
    }



    function determineCharacterPositions(characters) {
        if (!characterPositionMapping) {
            characterPositionMapping = initializeCharacterPositions(globalJsonData);
        }

        const positions = {};
        const uniqueCharacters = [...new Set(characters.map(char => char.toLowerCase()))];

        uniqueCharacters.forEach(character => {
            const position = characterPositionMapping[character];
            if (position) {
                positions[position] = character;
            }
        });

        return positions;
    }

    function createTransitionOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'transition-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundImage = 'url(https://files.catbox.moe/7pv5v0.webp)';
        overlay.style.backgroundSize = '100% 100%';
        overlay.style.opacity = '0.95';
        overlay.style.zIndex = '10';
        overlay.style.display = 'none';
        return overlay;
    }

    const noiseSound = new Audio('https://files.catbox.moe/tbloym.wav'); noiseSound.volume = 0.3;

    function playNoiseSound() {
        noiseSound.currentTime = 0;
        noiseSound.play();
        setTimeout(() => {
            noiseSound.pause();
        }, 300);
    }

    function playTransitionAnimation(container) {
        const overlay = createTransitionOverlay();
        container.appendChild(overlay);
        overlay.style.display = 'block';
        playNoiseSound();

        setTimeout(() => {
            overlay.style.display = 'none';
            container.removeChild(overlay);
        }, 300);
    }

    let characterPositionMapping = null;

    function initializeCharacterPositions(jsonData) {
        if (characterPositionMapping !== null) {
            return characterPositionMapping;
        }

        const characters = new Set();
        jsonData.forEach(item => {
            if (item.character) {
                characters.add(item.character.toLowerCase());
            }
        });

        const uniqueCharacters = [...characters];
        characterPositionMapping = {};

        if (uniqueCharacters.length > 0) {
            const firstCharacter = uniqueCharacters[0];
            characterPositionMapping[firstCharacter] = 'center';
        }

        if (uniqueCharacters.length > 1) {
            const availablePositions = ['left', 'right'];
            for (let i = 1; i < uniqueCharacters.length && availablePositions.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * availablePositions.length);
                const position = availablePositions[randomIndex];
                characterPositionMapping[uniqueCharacters[i]] = position;
                availablePositions.splice(randomIndex, 1);
            }
        }

        return characterPositionMapping;
    }



    function updateCharacterPositions(positions, speakingCharacter) {
        const containers = {
            center: mainContent,
            left: leftCharacter,
            right: rightCharacter
        };

        const previousPositions = {
            center: mainContent.dataset.character,
            left: leftCharacter.dataset.character,
            right: rightCharacter.dataset.character
        };

        Object.values(containers).forEach(container => {
            container.innerHTML = '';
            container.classList.remove('has-character');
        });

        Object.entries(positions).forEach(([position, character]) => {
            if (character && containers[position]) {
                const characterElement = createCharacterElement(
                    character,
                    position,
                    character === speakingCharacter
                );
                containers[position].appendChild(characterElement);

                containers[position].classList.add('has-character');

                if (character !== previousPositions[position]) {
                    playTransitionAnimation(containers[position]);
                }

                containers[position].dataset.character = character;

                updateCharacterExpression(
                    character,
                    currentExpressions[character],
                    character === speakingCharacter
                );
            }
        });

        applyDarkFilter(positions);
    }
    function applyDarkFilter(positions, speakingCharacter) {
        const normalizedSpeakingCharacter = speakingCharacter ? speakingCharacter.toLowerCase() : null;

        Object.entries(positions).forEach(([position, character]) => {
            const normalizedCharacter = character.toLowerCase();
            const characterImage = document.querySelector(`.${normalizedCharacter}-${position}-character-image`);

            if (characterImage) {
                if (normalizedCharacter !== normalizedSpeakingCharacter) {
                    characterImage.style.transition = 'filter 0.3s ease';
                    characterImage.style.filter = 'brightness(70%)';
                } else {
                    characterImage.style.transition = 'filter 0.3s ease';
                    characterImage.style.filter = 'brightness(105%)';
                }
            }
        });
    }

    function setDialogue(index) {
        const item = jsonData[index];

        if (item.narration || (item.character && item.dialogue)) {
            const allCharacters = ['emi', 'lynna', 'kyra', 'sayori', 'riko'];
            allCharacters.forEach(char => {
                updateCharacterExpression(char, currentExpressions[char.toLowerCase()], false);
            });

            if (item.narration) {
                characterName.textContent = "旁白";
                characterName.style.color = '#FFFFFF';
                typeWriter(dialogueText, item.narration);
            } else if (item.character && item.dialogue) {
                characterName.textContent = item.character;
                const normalizedCharacter = item.character.toLowerCase();
                characterName.style.color = characterNameColors[normalizedCharacter] || '#00FFFF';
                typeWriter(dialogueText, item.dialogue);
                if (item.emotion) {
                    updateCharacterExpression(item.character.toLowerCase(), item.emotion, true);
                }
            }

            const characters = jsonData.slice(0, index + 1)
                .filter(item => item.character && item.dialogue)
                .map(item => item.character.toLowerCase());
            const positions = determineCharacterPositions(characters);
            updateCharacterPositions(positions, item.character ? item.character.toLowerCase() : null);

            removeAllFilters();
            applyDarkFilter(positions, item.character ? item.character.toLowerCase() : null);
        }

        if (index === jsonData.length - 1 ||
            (index < jsonData.length - 1 && !jsonData[index + 1].narration &&
                !(jsonData[index + 1].character && jsonData[index + 1].dialogue))) {
            document.dispatchEvent(new CustomEvent('lastDialogueReached'));
        } else {
            const startText = document.querySelector('.bottom-left div');
            if (startText) {
                startText.style.color = 'gray';
                startText.style.cursor = 'default';
            }
        }
    }

    function removeAllFilters() {
        const characterImages = document.querySelectorAll('.character-image');
        characterImages.forEach(image => {
            image.style.transition = 'filter 0.3s ease';
            image.style.filter = 'brightness(100%)';
        });
    }


    dialogueToLogButton.addEventListener('click', function () {
        dialogueBox.style.display = 'none';
        logBox.style.display = 'flex';
    });

    logToDialogueButton.addEventListener('click', function () {
        logBox.style.display = 'none';
        dialogueBox.style.display = 'flex';
    });


    let isAutoMode = false;
    let isSkipMode = false;
    let autoModeTimeout;

    const autoButton = document.getElementById('autoButton');
    const skipButton = document.getElementById('skipButton');

    autoButton.addEventListener('click', toggleAutoMode);
    skipButton.addEventListener('click', toggleSkipMode);


    function toggleAutoMode() {
        isAutoMode = !isAutoMode;
        autoButton.classList.toggle('active');
        if (isAutoMode) {
            const currentItem = jsonData[currentDialogueIndex];
            if (currentItem.narration) {
                typeWriter(dialogueText, currentItem.narration);
            } else if (currentItem.character && currentItem.dialogue) {
                typeWriter(dialogueText, currentItem.dialogue);
            }
        } else {
            clearTimeout(autoModeTimeout);
        }
    }

    function toggleSkipMode() {
        isSkipMode = !isSkipMode;
        skipButton.classList.toggle('active');
        if (isSkipMode) {
            const currentItem = jsonData[currentDialogueIndex];
            if (currentItem.narration) {
                dialogueText.textContent = currentItem.narration;
            } else if (currentItem.character && currentItem.dialogue) {
                dialogueText.textContent = currentItem.dialogue;
            }
            if (currentTypewriterSound) {
                fadeOutSound(currentTypewriterSound);
            }
            clearTimeout(typewriterTimeout);
            isTyping = false;
        }
    }

    function advanceDialogue() {
        if (currentDialogueIndex < jsonData.length - 1) {
            currentDialogueIndex++;
            setDialogue(currentDialogueIndex);
        } else {
            isAutoMode = false;
            autoButton.classList.remove('active');
        }
    }


    let currentTypewriterSound = null;

    function typeWriter(element, text) {
        if (currentTypewriterSound) {
            fadeOutSound(currentTypewriterSound);
        }

        const typewriterSound = new Audio('https://files.catbox.moe/5z4kdk.webm');
        typewriterSound.loop = true;
        const volumeLevel = globalVolume * 0.25;
        typewriterSound.volume = volumeLevel * 0.5;
        currentTypewriterSound = typewriterSound;

        if (isSkipMode) {
            element.textContent = text;
            isTyping = false;
            if (isAutoMode) {
                clearTimeout(autoModeTimeout);
                autoModeTimeout = setTimeout(advanceDialogue, 500);
            }
            return;
        }

        if (isTyping) {
            clearTimeout(typewriterTimeout);
            element.textContent = '';
        }

        isTyping = true;
        element.textContent = '';
        let i = 0;
        const speed = 90;

        typewriterSound.play();

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                typewriterTimeout = setTimeout(type, speed);
            } else {
                isTyping = false;
                fadeOutSound(typewriterSound);
                if (isAutoMode) {
                    clearTimeout(autoModeTimeout);
                    const baseDelay = text.length * (speed * 0.8);
                    const extraDelay = 800;
                    const totalDelay = Math.min(baseDelay + extraDelay, 3000);
                    autoModeTimeout = setTimeout(advanceDialogue, totalDelay);
                }
            }
        }

        type();
    }


    function fadeOutSound(sound) {
        const volumeLevel = globalVolume * 0.25;
        const fadeOutInterval = setInterval(() => {
            if (sound.volume > volumeLevel * 0.1) {
                sound.volume -= volumeLevel * 0.25;
            } else {
                clearInterval(fadeOutInterval);
                sound.pause();
                sound.currentTime = 0;
                if (sound === currentTypewriterSound) {
                    currentTypewriterSound = null;
                }
            }
        }, 100);
    }

    function stopTypewriterSound() {
        if (currentTypewriterSound) {
            fadeOutSound(currentTypewriterSound);
            currentTypewriterSound = null;
        }
    }

    const dialogueBoxObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const dialogueBox = document.querySelector('.dialogue-box');
                if (dialogueBox.style.display === 'none') {
                    stopTypewriterSound();
                }
            }
        });
    });

    dialogueBoxObserver.observe(document.querySelector('.dialogue-box'), { attributes: true });

    dialogueToLogButton.addEventListener('click', function () {
        dialogueBox.style.display = 'none';
        logBox.style.display = 'flex';
        stopTypewriterSound();
    });

    logToDialogueButton.addEventListener('click', function () {
        logBox.style.display = 'none';
        dialogueBox.style.display = 'flex';
    });


    function populateLogBox() {
        logContent.innerHTML = '';
        jsonData.forEach(item => {
            if (item.narration) {
                addNarration(item.narration);
            } else if (item.character && item.dialogue) {
                addDialogue(item.character, item.dialogue, item.emotion);
            }
        });
    }

    function addDialogue(character, text, emotion) {
        const logRow = document.createElement('div');
        logRow.className = 'log-row';

        const characterAvatar = document.createElement('div');
        const normalizedCharacter = character.toLowerCase();
        characterAvatar.className = `${normalizedCharacter}-character-avatar`;

        const avatarUrl = characterAvatars[normalizedCharacter];
        if (avatarUrl) {
            characterAvatar.style.backgroundImage = `url(${avatarUrl})`;
        }

        const characterDialogue = document.createElement('div');
        characterDialogue.className = 'character-dialogue';
        characterDialogue.style.borderLeft = `3px solid ${characterNameColors[normalizedCharacter] || '#00FFFF'}`;
        characterDialogue.textContent = text;

        logRow.appendChild(characterAvatar);
        logRow.appendChild(characterDialogue);
        logContent.appendChild(logRow);
    }

    const characterAvatars = {
        emi: 'https://files.catbox.moe/9o5i6c.png',
        lynna: 'https://files.catbox.moe/sccj8m.png',
        kyra: 'https://files.catbox.moe/7vl7dv.png',
        sayori: 'https://files.catbox.moe/6u6p7f.png',
        riko: 'https://files.catbox.moe/o3d0mp.png'
    };

    function addNarration(text) {
        const narration = document.createElement('div');
        narration.className = 'narration';
        narration.textContent = text;
        logContent.appendChild(narration);
    }

    const leftTrigger = document.createElement('div');
    leftTrigger.style.position = 'absolute';
    leftTrigger.style.left = '0';
    leftTrigger.style.top = '0';
    leftTrigger.style.width = '50%';
    leftTrigger.style.height = '100%';
    leftTrigger.style.cursor = 'pointer';

    const rightTrigger = document.createElement('div');
    rightTrigger.style.position = 'absolute';
    rightTrigger.style.right = '0';
    rightTrigger.style.top = '0';
    rightTrigger.style.width = '50%';
    rightTrigger.style.height = '100%';
    rightTrigger.style.cursor = 'pointer';

    const leftArrow = document.createElement('div');
    leftArrow.className = 'arrow-left';
    leftArrow.innerHTML = '◀';

    const rightArrow = document.createElement('div');
    rightArrow.className = 'arrow-right';
    rightArrow.innerHTML = '▶';

    leftTrigger.appendChild(leftArrow);
    rightTrigger.appendChild(rightArrow);

    dialogueBox.appendChild(leftTrigger);
    dialogueBox.appendChild(rightTrigger);


    leftTrigger.addEventListener('mouseover', () => {
        leftArrow.style.opacity = '1';
        leftArrow.style.transform = 'translateY(-50%) scale(1.1)';
    });

    leftTrigger.addEventListener('mouseout', () => {
        leftArrow.style.opacity = '0';
        leftArrow.style.transform = 'translateY(-50%) scale(1)';
    });

    rightTrigger.addEventListener('mouseover', () => {
        rightArrow.style.opacity = '1';
        rightArrow.style.transform = 'translateY(-50%) scale(1.1)';
    });

    rightTrigger.addEventListener('mouseout', () => {
        rightArrow.style.opacity = '0';
        rightArrow.style.transform = 'translateY(-50%) scale(1)';
    });

    leftTrigger.addEventListener('click', function () {
        let newIndex = currentDialogueIndex - 1;
        playButtonClickSound();
        if (currentTypewriterSound) {
            fadeOutSound(currentTypewriterSound);
        }
        while (newIndex >= 0 && !isValidDialogue(jsonData[newIndex])) {
            newIndex--;
        }
        if (newIndex >= 0) {
            currentDialogueIndex = newIndex;
            setDialogue(currentDialogueIndex);
        }
    });

    rightTrigger.addEventListener('click', function () {
        let newIndex = currentDialogueIndex + 1;
        playButtonClickSound();
        if (currentTypewriterSound) {
            fadeOutSound(currentTypewriterSound);
        }
        while (newIndex < jsonData.length && !isValidDialogue(jsonData[newIndex])) {
            newIndex++;
        }
        if (newIndex < jsonData.length) {
            currentDialogueIndex = newIndex;
            setDialogue(currentDialogueIndex);
        }
    });


    function isValidDialogue(item) {
        return item.narration || (item.character && item.dialogue);
    }
    const style = document.createElement('style');
    document.head.appendChild(style);

    setDialogue(currentDialogueIndex);
    populateLogBox();

    dialogueBox.style.display = 'flex';
    logBox.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.querySelector('.form-container');
    const replyButton = document.getElementById('replyButton');
    const bottomRight = document.querySelector('.bottom-right');
    const bottomCenter = document.querySelector('.bottom-center');
    const dialogueBox = document.querySelector('.dialogue-box');
    const textarea = document.querySelector('.textarea');
    const sendButton = document.querySelector('.send-button');
    const resetButton = document.querySelector('.reset-button');

    formContainer.style.display = 'none';

    function showReplyForm() {
        formContainer.style.display = 'flex';
        formContainer.style.opacity = '0';
        formContainer.style.transform = 'translateY(20px)';
        setTimeout(() => {
            formContainer.style.opacity = '1';
            formContainer.style.transform = 'translateY(0)';
        }, 10);
        bottomRight.style.animation = 'slideDownFade 0.3s ease-out forwards';
        bottomCenter.style.animation = 'slideDownFade 0.3s ease-out forwards';
        replyButton.classList.add('active');
        replyButton.style.animation = 'fadeIn 0.3s ease-out forwards';
    }

    function hideReplyForm() {
        formContainer.style.opacity = '0';
        formContainer.style.transform = 'translateY(20px)';
        bottomRight.style.animation = 'slideUpFade 0.3s ease-in forwards';
        bottomCenter.style.animation = 'slideUpFade 0.3s ease-in forwards';
        setTimeout(() => {
            formContainer.style.display = 'none';
            bottomRight.style.display = 'block';
            bottomCenter.style.display = 'block';
        }, 500);
        replyButton.classList.remove('active');
        replyButton.style.animation = 'fadeOut 0.3s ease-in forwards';
    }

    replyButton.addEventListener('click', function () {
        if (formContainer.style.display === 'none') {
            showReplyForm();
        } else {
            hideReplyForm();
        }
    });

    document.addEventListener('lastDialogueReached', function () {
        replyButton.style.display = 'block';
        replyButton.style.animation = 'fadeIn 0.3s ease-out forwards';
    });

    replyButton.style.display = 'none';

    function sendMessage() {
        const message = textarea.value.trim();
        if (message) {
            const command = `/send ${message}|/trigger`;
            triggerSlash(command);
            textarea.value = '';
        }
    }

    sendButton.addEventListener('click', sendMessage);

    resetButton.addEventListener('click', function () {
        textarea.value = '';
    });

    textarea.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
});

const characterNameColors = {
    lynna: 'rgba(0, 229, 255)',
    kyra: 'rgba(0, 255, 102)',
    emi: 'rgba(212, 255, 0)',
    sayori: 'rgba(179, 0, 255)',
    riko: 'rgb(255, 109, 236)'
};

let globalVolume = 1;
let musicVolume = 1;

const buttonClickSound = new Audio('https://files.catbox.moe/fvqnih.wav');
const clickSound = new Audio('https://files.catbox.moe/cspzv4.flac');

function playButtonClickSound() {
    buttonClickSound.currentTime = 0;
    buttonClickSound.play();
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', playButtonClickSound);
    });

    const aacButton = document.getElementById('aacButton');
    aacButton.style.display = 'none';
    aacButton.style.opacity = '0';
    aacButton.style.transition = 'opacity 0.3s ease-in';

    aacButton.addEventListener('click', () => {
        activateMixmaster();
        aacButton.style.opacity = '0';
        setTimeout(() => {
            aacButton.style.display = 'none';
        }, 300);
    });

    getVariables().then(variables => {
        if (!variables.activelyServe || variables.activelyServe === 'off') {
            aacButton.style.display = 'none';
        } else if (variables.activelyServe === 'on') {
            aacButton.style.display = 'none';
            aacButton.style.opacity = '0';
            aacButton.style.transition = 'opacity 0.3s ease-in';
        }
    });

    getVariables().then(variables => {
        if (variables.globalVolume !== undefined &&
            variables.globalVolume >= 0 &&
            variables.globalVolume <= 4) {
            globalVolume = variables.globalVolume;
        } else {
            globalVolume = 1; // 默认值
        }

        const volumeLevel = globalVolume * 0.25; // 将 0-4 转换为 0-1

        buttonClickSound.volume = volumeLevel;
        clickSound.volume = volumeLevel;
        ingredientSound.volume = volumeLevel * 0.7; // 保持原有的0.7倍关系
        buttonSound.volume = volumeLevel;
        shakeSound.volume = volumeLevel * 0.7;  // 保持原有的0.7倍关系
        iceSound.volume = volumeLevel;
    });

    let lastCheckTime = 0;
    const checkInterval = 1000; // 每秒检查一次

    setInterval(() => {
        const currentTime = Date.now();
        if (currentTime - lastCheckTime >= checkInterval) {
            lastCheckTime = currentTime;

            getVariables().then(variables => {
                if (variables.globalVolume !== undefined &&
                    variables.globalVolume >= 0 &&
                    variables.globalVolume <= 4 &&
                    variables.globalVolume !== globalVolume) {
                    globalVolume = variables.globalVolume;
                    updateSoundVolumes();
                }
            });
        }
    }, checkInterval);
});

document.addEventListener('DOMContentLoaded', function () {



    const aacButton = document.getElementById('aacButton');
    aacButton.addEventListener('click', () => {
        activateMixmaster();
        aacButton.style.display = 'none';
    });


    const ingredientSound = new Audio('https://files.catbox.moe/40lu54.flac');
    ingredientSound.volume = 0.7;
    const buttonSound = new Audio('https://files.catbox.moe/kewk6l.mp3');
    const shakeSound = new Audio('https://files.catbox.moe/cl0apg.webm');
    const iceSound = new Audio('https://files.catbox.moe/abaum0.webm');
    shakeSound.volume = 0.7;
    const containers = ['Azurite', 'Aureum', 'Amethyst', 'Verdex', 'Rubilith'];
    const colors = {
        Azurite: '#3498db',
        Aureum: '#f1c40f',
        Amethyst: '#9b59b6',
        Verdex: '#2ecc71',
        Rubilith: '#e74c3c'
    };

    const ingredientImages = {
        Azurite: 'https://files.catbox.moe/zh32vu.png',
        Aureum: 'https://files.catbox.moe/f61530.png',
        Amethyst: 'https://files.catbox.moe/1z9g4g.png',
        Verdex: 'https://files.catbox.moe/zp2nes.png',
        Rubilith: 'https://files.catbox.moe/o9yu0n.png'
    };

    const cocktailImages = {
        "Unknown Mixture": 'https://files.catbox.moe/0ii2z0.png',
        "Dawn's Whisper": 'https://files.catbox.moe/4h6hdq.png',
        "Violet Dreams": 'https://files.catbox.moe/36e7cq.png',
        "Woodland Whispers": 'https://files.catbox.moe/6oebkj.png',
        "Golden Memories": 'https://files.catbox.moe/vuohuv.png',
        "Mint Thunder": 'https://files.catbox.moe/oewux8.png',
        "Ruby Sunset": 'https://files.catbox.moe/a2ijhk.png',
        "Tranquil Harbor": 'https://files.catbox.moe/4mp63m.png',
        "Smoky Illusion": 'https://files.catbox.moe/8hkcs4.png',
        "Aurora's Kiss": 'https://files.catbox.moe/r1mfjq.png',
        "Emerald Cascade": 'https://files.catbox.moe/47q9d7.png',
        "Velvet Nebula": 'https://files.catbox.moe/x9angu.png',
        "Rainbow Prism": 'https://files.catbox.moe/2gj35r.png',
        "Desert Mirage": 'https://files.catbox.moe/4ra7gn.png',
        "Frost Giant": 'https://files.catbox.moe/tg4xtt.png',
        "Berry Rhapsody": 'https://files.catbox.moe/41681l.png',
        "Lavender Twilight": 'https://files.catbox.moe/1qyblv.png',
        "Spiced Inferno": 'https://files.catbox.moe/sgj9vv.png',
        "Quantum Fizz": 'https://files.catbox.moe/1ckj5l.png',
        "Autumn Symphony": 'https://files.catbox.moe/16v26a.png',
        "Lunar Serenade": 'https://files.catbox.moe/cfhewz.png',
        "Tropical Tsunami": 'https://files.catbox.moe/jdxwqe.png',
        "Smoky Maple Dream": 'https://files.catbox.moe/g9qwtt.png',
        "Celestial Elixir": 'https://files.catbox.moe/271ohw.png',
        "Ginger Infusion": 'https://files.catbox.moe/n8dpwe.png',
        "Midnight Elixir": 'https://files.catbox.moe/ee5bw6.png',
        "Alpine Serenity": 'https://files.catbox.moe/zlbzqp.png'
    };

    const ingredientNames = {
        Azurite: 'Azurite',
        Aureum: 'Aureum',
        Amethyst: 'Amethyst',
        Verdex: 'Verdex',
        Rubilith: 'Rubilith'
    };

    let currentMix = {};
    let hasIce = false;
    let totalIngredients = 0;
    let isServed = false;
    let shakeButton, resetButton, addIceButton, progressBar, cocktailName, makerContainer;


    function createIngredientContainer(color) {
        const container = document.querySelector(`.${color.toLowerCase()}-container`);
        container.innerHTML = '';

        const contentContainer = document.createElement('div');
        contentContainer.style.display = 'flex';
        contentContainer.style.justifyContent = 'space-between';
        contentContainer.style.width = '100%';
        contentContainer.style.height = '100%';

        const nameElement = document.createElement('div');
        nameElement.className = 'ingredient-name';
        nameElement.textContent = ingredientNames[color];
        nameElement.style.writingMode = 'vertical-rl';
        nameElement.style.textOrientation = 'upright';
        nameElement.style.transform = 'rotate(0deg)';
        nameElement.style.fontSize = '0.9vw';
        nameElement.style.marginTop = '7%';
        nameElement.style.marginLeft = '-60%';
        nameElement.style.display = 'flex';
        nameElement.style.alignItems = 'center';

        const barsContainer = document.createElement('div');
        barsContainer.className = 'ingredient-bars';
        barsContainer.style.width = '35%';
        barsContainer.style.display = 'flex';
        barsContainer.style.flexDirection = 'column';
        barsContainer.style.justifyContent = 'space-between';

        for (let i = 0; i < 5; i++) {
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.width = '80%';
            bar.style.height = '10%';
            bar.style.backgroundColor = `${colors[color]}11`;
            bar.style.border = `1px solid ${colors[color]}66`;
            bar.style.marginBottom = '2px';
            barsContainer.appendChild(bar);
        }

        const imageContainer = document.createElement('div');
        imageContainer.className = 'ingredient-image';
        imageContainer.style.width = '48%';
        imageContainer.style.height = '100%';
        imageContainer.style.display = 'flex';
        imageContainer.style.zIndex = '10';
        imageContainer.style.justifyContent = 'center';
        imageContainer.style.alignItems = 'center';
        imageContainer.style.cursor = 'pointer';
        imageContainer.style.transition = 'transform 0.2s';

        const img = document.createElement('img');
        img.src = ingredientImages[color];
        img.alt = `${color} Ingredient`;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        img.style.objectFit = 'contain';
        img.style.transition = 'transform 0.2s';
        imageContainer.appendChild(img);

        const style = document.createElement('style');
        style.textContent = `
            .ingredient-image:hover img {
                transform: scale(1.1);
            }
            .ingredient-image:active img {
                transform: scale(0.9);
            }
        `;
        document.head.appendChild(style)

        contentContainer.appendChild(nameElement);
        contentContainer.appendChild(barsContainer);
        contentContainer.appendChild(imageContainer);

        container.appendChild(contentContainer);

        container.style.display = 'flex';
        container.style.flexDirection = 'row';
        container.style.justifyContent = 'space-between';
        container.style.alignItems = 'center';
        container.style.padding = '5px';
        container.style.boxSizing = 'border-box';
        container.style.backgroundColor = 'black';

        return { container, barsContainer };
    }

    const ingredientContainers = {};
    containers.forEach(color => {
        const { container, barsContainer } = createIngredientContainer(color);
        ingredientContainers[color] = { container, barsContainer, filledBars: 0 };

        container.addEventListener('click', function () {
            if (!isServed && ingredientContainers[color].filledBars < 5 && totalIngredients < 20) {
                ingredientSound.currentTime = 0;
                ingredientSound.play();
                const bars = barsContainer.querySelectorAll('.bar');
                bars[4 - ingredientContainers[color].filledBars].style.backgroundColor = `${colors[color]}CC`;
                ingredientContainers[color].filledBars++;
                currentMix[color] = (currentMix[color] || 0) + 1;
                totalIngredients++;
                updateMakerProgress();

                const shaker = makerContainer.querySelector('.shaker');
                shaker.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    shaker.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });

    function handleShakeClick() {
        if (buttonSound.paused) {
            buttonSound.currentTime = 0;
            buttonSound.play();
        }
        shakeMix();
    }

    function handleResetClick() {
        if (buttonSound.paused) {
            buttonSound.currentTime = 0;
            buttonSound.play();
        }
        resetMixture();
    }

    function handleAddIceClick() {
        if (iceSound.paused) {
            iceSound.currentTime = 0;
            iceSound.play();
        }
        addIce();
    }

    function initializeElements() {
        shakeButton = document.querySelector('.button1');
        resetButton = document.querySelector('.button2');
        addIceButton = document.querySelector('.button3');
        progressBar = document.querySelector('.progress');
        cocktailName = document.querySelector('.cocktail-name');
        makerContainer = document.querySelector('.maker-container');

        shakeButton.removeEventListener('click', handleShakeClick);
        resetButton.removeEventListener('click', handleResetClick);
        addIceButton.removeEventListener('click', handleAddIceClick);

        shakeButton.addEventListener('click', handleShakeClick);
        resetButton.addEventListener('click', handleResetClick);
        addIceButton.addEventListener('click', handleAddIceClick);
    }


    function updateMakerProgress() {
        progressBar.style.width = `${(totalIngredients / 20) * 100}%`;
    }

    function shakeMix() {
        if (!isServed && Object.keys(currentMix).length > 0) {
            const shaker = makerContainer.querySelector('.shaker');
            shaker.classList.add('shaking');
            shaker.style.transform = 'scale(1.1)';
            progressBar.style.width = '0%';

            shakeSound.currentTime = 0;
            shakeSound.play();

            let progress = 0;
            const interval = setInterval(() => {
                progress += 5;
                progressBar.style.width = `${progress}%`;
                if (progress >= 100) {
                    clearInterval(interval);
                    shaker.classList.remove('shaking');
                    shaker.style.transform = 'scale(1)';
                    showDrinkResult();

                    setTimeout(() => {
                        shakeSound.pause();
                        shakeSound.currentTime = 0;
                    }, 2000);
                }
            }, 100);
        }
    }


    function addIce() {
        if (!isServed) {
            hasIce = true;
            addIceButton.style.backgroundColor = '#ADD8E6';
            addIceButton.style.color = 'white';
            addIceButton.disabled = true;
        }
    }

    function resetMixture() {
        currentMix = {};
        hasIce = false;
        totalIngredients = 0;
        isServed = false;
        cocktailName.textContent = '';
        addIceButton.style.backgroundColor = '';
        addIceButton.style.color = '';
        addIceButton.disabled = false;
        shakeButton.disabled = true;
        addIceButton.disabled = true;
        resetButton.disabled = true;
        const shaker = makerContainer.querySelector('.shaker');
        if (shaker) {
            shaker.classList.remove('shaking');
            shaker.style.transform = '';
        }

        containers.forEach(color => {
            ingredientContainers[color].filledBars = 0;
            const bars = ingredientContainers[color].barsContainer.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.backgroundColor = 'transparent';
                bar.style.backgroundColor = `${colors[color]}11`;
                bar.style.border = `1px solid ${colors[color]}66`;
            });
        });

        makerContainer.innerHTML = `
            <div class="cocktail-name"></div>
            <div class="shaker-container">
                <img class="shaker" src="https://files.catbox.moe/9yattm.png" alt="Cocktail Shaker">
            </div>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
        `;

        initializeElements();
    }

    function showDrinkResult() {
        const drink = identifyDrink();

        cocktailName.textContent = drink;
        cocktailName.style.position = 'absolute';
        cocktailName.style.top = '5%';
        cocktailName.style.left = '50%';
        cocktailName.style.transform = 'translateX(-50%)';
        cocktailName.style.fontSize = '1vw';
        cocktailName.style.whiteSpace = 'pre';
        cocktailName.style.color = 'white';
        cocktailName.style.padding = '2px 2px';
        cocktailName.style.borderRadius = '10px';
        cocktailName.style.zIndex = '1';

        const drinkImage = document.createElement('img');
        drinkImage.src = cocktailImages[drink] || 'https://example.com/unknown-mixture.png';
        drinkImage.alt = drink;
        drinkImage.style.width = '80%';
        drinkImage.style.height = '80%';
        drinkImage.style.position = 'absolute';
        drinkImage.style.left = '10%'
        drinkImage.style.top = '10%'
        drinkImage.style.objectFit = 'contain';
        cocktailName.style.zIndex = '-1';

        const shakerContainer = makerContainer.querySelector('.shaker-container');
        shakerContainer.innerHTML = '';
        shakerContainer.appendChild(drinkImage);

        const existingServeButton = makerContainer.querySelector('.serve-button');
        if (existingServeButton) {
            makerContainer.removeChild(existingServeButton);
        }

        const serveButton = document.createElement('button');
        serveButton.textContent = '上酒';
        serveButton.className = 'button serve-button';
        serveButton.style.width = '80%';
        serveButton.style.backgroundColor = '#80808033';
        serveButton.style.fontFamily = 'CustomFont, sans-serif';
        serveButton.style.position = 'absolute';
        serveButton.style.bottom = '5%';
        serveButton.style.left = '50%';
        serveButton.style.transform = 'translateX(-50%)';
        serveButton.addEventListener('click', serveDrink);

        const progressBar = makerContainer.querySelector('.progress-bar');
        if (progressBar) {
            makerContainer.removeChild(progressBar);
        }

        makerContainer.appendChild(serveButton);
    }

    function identifyDrink() {
        const recipes = {
            "Dawn's Whisper": { Rubilith: 2, Azurite: 1, Verdex: 1, hasIce: true },
            "Violet Dreams": { Amethyst: 2, Aureum: 2, Rubilith: 1, hasIce: false },
            "Woodland Whispers": { Verdex: 3, Azurite: 1, Amethyst: 1, hasIce: true },
            "Golden Memories": { Aureum: 3, Rubilith: 1, Amethyst: 1, hasIce: false },
            "Mint Thunder": { Azurite: 5, Amethyst: 2, hasIce: true },
            "Ruby Sunset": { Rubilith: 3, Verdex: 1, Amethyst: 1, hasIce: false },
            "Tranquil Harbor": { Aureum: 2, Azurite: 2, Verdex: 1, hasIce: true },
            "Smoky Illusion": { Verdex: 2, Amethyst: 2, Rubilith: 1, hasIce: false },
            "Aurora's Kiss": { Azurite: 2, Rubilith: 2, Amethyst: 1, hasIce: true },
            "Rebirth After Intoxication": { Amethyst: 2, Verdex: 2, Aureum: 1, hasIce: false },
            "Emerald Cascade": { Verdex: 5, Azurite: 1, hasIce: true },
            "Velvet Nebula": { Amethyst: 4, Aureum: 4, hasIce: false },
            "Rainbow Prism": { Rubilith: 3, Azurite: 3, Verdex: 3, Aureum: 3, Amethyst: 3, hasIce: true },
            "Desert Mirage": { Aureum: 4, Verdex: 2, Rubilith: 2, hasIce: false },
            "Frost Giant": { Azurite: 5, Amethyst: 3, Aureum: 1, Rubilith: 1, hasIce: true },
            "Berry Rhapsody": { Rubilith: 4, Aureum: 2, Amethyst: 2, hasIce: false },
            "Lavender Twilight": { Amethyst: 3, Aureum: 3, Azurite: 2, hasIce: true },
            "Spiced Inferno": { Verdex: 4, Rubilith: 3, Amethyst: 2, hasIce: false },
            "Quantum Fizz": { Azurite: 3, Verdex: 3, Aureum: 2, Rubilith: 2, hasIce: true },
            "Autumn Symphony": { Rubilith: 4, Verdex: 4, Aureum: 4, Amethyst: 3, hasIce: false },
            "Lunar Serenade": { Amethyst: 5, Azurite: 2, Rubilith: 1, hasIce: true },
            "Tropical Tsunami": { Rubilith: 4, Azurite: 3, Verdex: 1, hasIce: true },
            "Smoky Maple Dream": { Verdex: 5, Aureum: 3, hasIce: false },
            "Celestial Elixir": { Amethyst: 4, Rubilith: 3, Azurite: 3, Aureum: 2, Verdex: 1, hasIce: true },
            "Ginger Infusion": { Verdex: 4, Azurite: 3, Rubilith: 2, hasIce: false },
            "Midnight Elixir": { Amethyst: 5, Rubilith: 2, Verdex: 1, hasIce: true },
            "Alpine Serenity": { Azurite: 3, Verdex: 3, Aureum: 2, hasIce: true }
        };

        for (let drink in recipes) {
            let match = true;
            let recipeIngredients = Object.keys(recipes[drink]).filter(key => key !== 'hasIce');
            let currentIngredients = Object.keys(currentMix);

            for (let ingredient in recipes[drink]) {
                if (ingredient === 'hasIce') {
                    if (recipes[drink][ingredient] !== hasIce) {
                        match = false;
                        break;
                    }
                } else if (currentMix[ingredient] !== recipes[drink][ingredient]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                for (let ingredient in currentMix) {
                    if (!recipes[drink].hasOwnProperty(ingredient)) {
                        match = false;
                        break;
                    }
                }
            }

            if (match) {
                return drink;
            }
        }
        return 'Unknown Mixture';
    }



    function updateTipContainer(jsonData) {
        const tipContainer = document.querySelector('.tip-container');
        tipContainer.innerHTML = '';

        tipContainer.style.flexDirection = 'column';
        tipContainer.style.padding = '1.1vw';
        tipContainer.style.color = 'white';
        tipContainer.style.maxHeight = '100%';
        tipContainer.style.overflowY = 'auto';

        const headerContainer = document.createElement('div');
        headerContainer.style.display = 'flex';
        headerContainer.style.alignItems = 'center';
        headerContainer.style.marginBottom = '2vw';

        if (jsonData && jsonData.tip) {
            const characterLower = jsonData.character ? jsonData.character.toLowerCase() : '';
            if (characterLower && Object.keys(characterImages).some(key => key.toLowerCase() === characterLower)) {
                const characterKey = Object.keys(characterImages).find(key => key.toLowerCase() === characterLower);
                const characterImg = document.createElement('img');
                characterImg.src = characterImages[characterKey];
                characterImg.alt = characterKey;
                characterImg.style.width = '5vw';
                characterImg.style.height = '5vw';
                characterImg.style.border = `0.2vw solid ${characterColors[characterKey]}`;
                characterImg.style.borderRadius = '0.5vw';
                characterImg.style.marginRight = '1vw';
                headerContainer.appendChild(characterImg);

                const characterName = document.createElement('span');
                characterName.textContent = characterKey.charAt(0).toUpperCase() + characterKey.slice(1);
                characterName.style.fontSize = '2vw';
                characterName.style.color = characterColors[characterKey];
                headerContainer.appendChild(characterName);
            }

            tipContainer.appendChild(headerContainer);

            const tipContent = document.createElement('div');
            tipContent.className = 'tip-content';
            tipContent.style.fontSize = '1.9vw';
            tipContent.style.lineHeight = '1.4';

            const text = jsonData.tip;
            const sentences = text.split(/(?<=[。！？.!?])\s*/);

            sentences.forEach(sentence => {
                if (sentence.trim()) {
                    const sentenceElement = document.createElement('p');
                    sentenceElement.textContent = sentence.trim();
                    sentenceElement.style.margin = '0 0 1vw 0';
                    tipContent.appendChild(sentenceElement);
                }
            });

            tipContainer.appendChild(tipContent);
        } else {
            // 当没有有效的 JSON 数据时显示默认提示文字
            const tipContent = document.createElement('div');
            tipContent.className = 'tip-content';
            tipContent.style.fontSize = '1.9vw';
            tipContent.style.lineHeight = '1.4';
            tipContent.style.textAlign = 'center';
            tipContent.style.width = '100%';

            const warningText = document.createElement('p');
            warningText.textContent = '确保在有铺垫的情况下调用主动调酒';
            warningText.style.margin = '0';
            tipContent.appendChild(warningText);

            tipContainer.appendChild(tipContent);
        }

        startText.style.transform = 'scale(1.05)';
        setTimeout(() => {
            startText.style.transform = 'scale(1)';
        }, 100);
        bottomLeft.style.cursor = 'pointer';
        bottomLeft.addEventListener('click', activateMixmaster);

        isTipContainerActive = true;
        checkActivationConditions();
    }

    const ingredientsContent = document.querySelector('.ingredients-content');
    const tipContainer = document.querySelector('.tip-container');
    const mixmasterContainer = document.querySelector('.mixmaster-container');
    const bottomLeft = document.querySelector('.bottom-left');
    const startText = document.createElement('div');
    tipContainer.style.display = 'none';
    startText.textContent = '开始调酒';
    startText.style.color = 'gray';
    startText.style.fontSize = '1.8vw';
    startText.style.display = 'flex';
    startText.style.justifyContent = 'center';
    startText.style.alignItems = 'center';
    startText.style.height = '100%';
    startText.style.cursor = 'default';
    bottomLeft.appendChild(startText);

    let isLastDialogue = false;
    let hasActivatedMixmaster = false;
    let isTipContainerActive = false;

    function checkActivationConditions() {
        getVariables().then(variables => {
            if (isLastDialogue && isTipContainerActive && !hasActivatedMixmaster) {
                startText.style.color = 'white';
                startText.style.cursor = 'pointer';
                bottomLeft.style.cursor = 'pointer';
                startText.addEventListener('click', activateMixmaster);
                bottomLeft.addEventListener('click', activateMixmaster);

                if (variables.activelyServe === 'on') {
                    const aacButton = document.getElementById('aacButton');
                    if (aacButton) {
                        aacButton.style.display = 'block';
                        aacButton.style.opacity = '1';
                    }
                }
            } else if (!hasActivatedMixmaster) {
                startText.style.color = 'gray';
                startText.style.cursor = 'default';
                bottomLeft.style.cursor = 'default';
                startText.removeEventListener('click', activateMixmaster);
                bottomLeft.removeEventListener('click', activateMixmaster);
            }
        });
    }

    document.addEventListener('lastDialogueReached', function () {
        isLastDialogue = true;
        checkActivationConditions();

        // 检查 activelyServe 状态后再决定是否显示按钮
        getVariables().then(variables => {
            if (!currentJsonData && variables.activelyServe === 'on') {
                const aacButton = document.getElementById('aacButton');
                if (aacButton) {
                    aacButton.style.display = 'block';
                    setTimeout(() => {
                        aacButton.style.opacity = '1';
                    }, 10);
                }
            }
        });
    });

    ingredientsContent.style.display = 'none';

    tipContainer.innerHTML = '';

    mixmasterContainer.style.filter = 'grayscale(80%)';
    mixmasterContainer.style.pointerEvents = 'none';


    function activateMixmaster() {
        hasActivatedMixmaster = true;
        startText.removeEventListener('click', activateMixmaster);
        startText.style.color = 'cyan';
        startText.style.cursor = 'default';
        bottomLeft.style.cursor = 'default';
        clickSound.currentTime = 0;
        clickSound.play();

        hideElements();

        mixmasterContainer.style.display = 'block';

        if (window.innerWidth <= 480) {
            mixmasterContainer.style.transition = 'height 0.3s ease-out';
            mixmasterContainer.style.height = '40%';
        }

        const rightCharacter = document.querySelector('.right-character');
        const hasRightCharacter = rightCharacter && rightCharacter.children.length > 0;

        if (hasRightCharacter) {
            const animationOverlay = document.createElement('div');
            animationOverlay.style.position = 'absolute';
            animationOverlay.style.top = '0';
            animationOverlay.style.left = '0';
            animationOverlay.style.width = '100%';
            animationOverlay.style.height = '100%';
            animationOverlay.style.backgroundImage = 'url(https://files.catbox.moe/7pv5v0.webp)';
            animationOverlay.style.backgroundSize = 'cover';
            animationOverlay.style.zIndex = '1000';
            mixmasterContainer.appendChild(animationOverlay);

            setTimeout(() => {
                mixmasterContainer.removeChild(animationOverlay);
                showMixmasterContent();
            }, 300);
        } else {
            showMixmasterContent();
        }
    }

    function showMixmasterContent() {
        mixmasterContainer.style.filter = 'none';
        mixmasterContainer.style.pointerEvents = 'auto';

        ingredientsContent.style.display = 'block';
        ingredientsContent.style.opacity = '0';
        ingredientsContent.style.transform = 'scale(0.9) translateY(20px)';
        ingredientsContent.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        setTimeout(() => {
            ingredientsContent.style.opacity = '1';
            ingredientsContent.style.transform = 'scale(1) translateY(0)';
        }, 10);

        const tipContainer = document.querySelector('.tip-container');
        tipContainer.style.display = 'block';
        tipContainer.innerHTML = '<img src="https://files.catbox.moe/7pv5v0.webp" alt="Animation" style="width: 100%; height: 100%;">';
        setTimeout(() => {
            updateTipContainer(currentJsonData);
        }, 300);
    }



    let currentJsonData = null;
    function resetMixmasterState() {
        mixmasterContainer.style.filter = 'grayscale(100%)';
        mixmasterContainer.style.pointerEvents = 'none';
        mixmasterContainer.style.display = 'none';
        isLastDialogue = false;
        hasActivatedMixmaster = false;
        isTipContainerActive = false;

        const aacButton = document.getElementById('aacButton');
        if (aacButton) {
            aacButton.style.opacity = '0';
            setTimeout(() => {
                aacButton.style.display = 'none';
            }, 300);
        }

        startText.removeEventListener('click', activateMixmaster);
        bottomLeft.removeEventListener('click', activateMixmaster);
        checkActivationConditions();
    }




    function hideIngredientsContent() {
        ingredientsContent.style.transition = 'opacity 0.6s ease-in, transform 0.3s ease-in';
        ingredientsContent.style.opacity = '0';
        ingredientsContent.style.transform = 'scale(0.9) translateY(20px)';
        setTimeout(() => {
            ingredientsContent.style.display = 'none';
        }, 300);
    }

    function hideTipContainer() {
        tipContainer.innerHTML = '<img src="https://files.catbox.moe/7pv5v0.webp" alt="Animation" style="width: 100%; height: 100%;">';
        setTimeout(() => {
            tipContainer.style.transition = 'opacity 0.3s ease-out';
            tipContainer.style.opacity = '0';
            setTimeout(() => {
                tipContainer.style.display = 'none';
            }, 300);
        }, 300);
    }

    const characterImages = {
        emi: 'https://files.catbox.moe/9o5i6c.png',
        lynna: 'https://files.catbox.moe/sccj8m.png',
        kyra: 'https://files.catbox.moe/7vl7dv.png',
        sayori: 'https://files.catbox.moe/6u6p7f.png',
        riko: 'https://files.catbox.moe/o3d0mp.png',
    };
    const characterColors = {
        lynna: 'rgba(0, 229, 255, 0.8)',
        kyra: 'rgba(0, 255, 102, 0.8)',
        emi: 'rgba(212, 255, 0, 0.8)',
        sayori: 'rgba(179, 0, 255, 0.8)',
        riko: 'rgb(255, 109, 236, 0.8)'
    };

    function updateTipContainer(jsonData) {
        const tipContainer = document.querySelector('.tip-container');
        tipContainer.innerHTML = '';

        tipContainer.style.flexDirection = 'column';
        tipContainer.style.padding = '1.1vw';
        tipContainer.style.color = 'white';
        tipContainer.style.maxHeight = '100%';
        tipContainer.style.overflowY = 'auto';

        const headerContainer = document.createElement('div');
        headerContainer.style.display = 'flex';
        headerContainer.style.alignItems = 'center';
        headerContainer.style.marginBottom = '2vw';

        if (jsonData && jsonData.tip) {
            const characterLower = jsonData.character ? jsonData.character.toLowerCase() : '';
            if (characterLower && Object.keys(characterImages).some(key => key.toLowerCase() === characterLower)) {
                const characterKey = Object.keys(characterImages).find(key => key.toLowerCase() === characterLower);
                const characterImg = document.createElement('img');
                characterImg.src = characterImages[characterKey];
                characterImg.alt = characterKey;
                characterImg.style.width = '5vw';
                characterImg.style.height = '5vw';
                characterImg.style.border = `0.2vw solid ${characterColors[characterKey]}`;
                characterImg.style.borderRadius = '0.5vw';
                characterImg.style.marginRight = '1vw';
                headerContainer.appendChild(characterImg);

                const characterName = document.createElement('span');
                characterName.textContent = characterKey.charAt(0).toUpperCase() + characterKey.slice(1);
                characterName.style.fontSize = '2vw';
                characterName.style.color = characterColors[characterKey];
                headerContainer.appendChild(characterName);
            }

            tipContainer.appendChild(headerContainer);

            const tipContent = document.createElement('div');
            tipContent.className = 'tip-content';
            tipContent.style.fontSize = '1.9vw';
            tipContent.style.lineHeight = '1.4';

            const text = jsonData.tip;
            const sentences = text.split(/(?<=[。！？!?])\s*/);

            sentences.forEach(sentence => {
                if (sentence.trim()) {
                    const sentenceElement = document.createElement('p');
                    sentenceElement.textContent = sentence.trim();
                    sentenceElement.style.margin = '0 0 1vw 0';
                    tipContent.appendChild(sentenceElement);
                }
            });

            tipContainer.appendChild(tipContent);
        } else {
            // 当没有有效的 JSON 数据时显示默认提示文字
            const tipContent = document.createElement('div');
            tipContent.className = 'tip-content';
            tipContent.style.fontSize = '2.3vw';
            tipContent.style.lineHeight = '1.4';
            tipContent.style.textAlign = 'center';
            tipContent.style.width = '100%';

            const warningText = document.createElement('p');
            warningText.textContent = '确保在有前后铺垫的情况下调用主动调酒';
            warningText.style.margin = '0';
            tipContent.appendChild(warningText);

            tipContainer.appendChild(tipContent);
        }

        startText.style.transform = 'scale(1.05)';
        setTimeout(() => {
            startText.style.transform = 'scale(1)';
        }, 100);
        bottomLeft.style.cursor = 'pointer';
        bottomLeft.addEventListener('click', activateMixmaster);

        isTipContainerActive = true;
        checkActivationConditions();
    }

    handleJsonInput();

    function handleJsonInput() {
        if (Array.isArray(globalJsonData) && globalJsonData.length > 0) {
            currentJsonData = globalJsonData.find(item => item.mixtarget);
            if (currentJsonData) {
                updateTipContainer(currentJsonData);
                // 当识别到有效的 JSON 数据时，淡出隐藏主动上酒按钮
                const aacButton = document.getElementById('aacButton');
                if (aacButton) {
                    aacButton.style.opacity = '0';
                    setTimeout(() => {
                        aacButton.style.display = 'none';
                    }, 300);
                }
            } else {
                console.error('No mixtarget found in globalJsonData');
            }
        } else {
            console.error('Invalid globalJsonData: Expected an array with at least one object');
            isTipContainerActive = false;
            checkActivationConditions();

            // 在显示主动上酒按钮之前先检查 activelyServe 状态
            getVariables().then(variables => {
                if (isLastDialogue && variables.activelyServe === 'on') {
                    const aacButton = document.getElementById('aacButton');
                    if (aacButton) {
                        aacButton.style.display = 'block';
                        setTimeout(() => {
                            aacButton.style.opacity = '1';
                        }, 10);
                    }
                }
            });
        }
    }


    const elementsToToggle = [
        '.dialogue-box', '.log-box', '.main-content',
        '.left-character', '.right-character',
        '.bottom-center', '.bottom-right', '.form-container'
    ];

    function hideElements() {
        elementsToToggle.forEach(selector => {
            if (selector !== '.mixmaster-container') {
                const element = document.querySelector(selector);
                if (element) {
                    if (selector === '.form-container') {
                        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out, height 0.5s ease-out';
                        element.style.opacity = '0';
                        element.style.transform = 'translateY(10vw)';
                        element.style.height = '0';
                        element.style.overflow = 'hidden';
                    } else {
                        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                        element.style.opacity = '0';
                        element.style.transform = 'scale(0.9)';
                    }
                    setTimeout(() => {
                        element.style.display = 'none';
                    }, 500);
                }
            }
        });
    }

    function showElements() {
        elementsToToggle.forEach(selector => {
            if (selector !== '.mixmaster-container' || !hasActivatedMixmaster) {
                const element = document.querySelector(selector);
                if (element) {
                    if (selector === '.bottom-center' || selector === '.bottom-right') {
                        element.style.display = 'none';
                        return;
                    }

                    element.style.display = '';

                    if (selector === '.form-container') {
                        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out, height 0.5s ease-out';
                        element.style.opacity = '0';
                        element.style.transform = 'translateY(20px)';
                        element.style.height = '0';

                        setTimeout(() => {
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                            element.style.height = '';
                        }, 10);
                    } else {
                        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                        element.style.opacity = '0';
                        element.style.transform = 'scale(0.9)';

                        setTimeout(() => {
                            element.style.opacity = '1';
                            element.style.transform = 'scale(1)';
                        }, 10);
                    }

                    setTimeout(() => {
                        if (selector === '.form-container') {
                            element.style.overflow = '';
                        }
                    }, 510);
                }
            }
        });
    }


    function toggleMixmasterVisibility() {
        const rightCharacter = document.querySelector('.right-character');
        const mixmasterContainer = document.querySelector('.mixmaster-container');

        if (rightCharacter && rightCharacter.children.length > 0) {
            mixmasterContainer.style.display = 'none';
        } else {
            mixmasterContainer.style.display = 'block';
        }
    }

    toggleMixmasterVisibility();

    const rightCharacterObserver = new MutationObserver(toggleMixmasterVisibility);

    const observerConfig = { childList: true, subtree: true };


    const rightCharacter = document.querySelector('.right-character');
    if (rightCharacter) {
        rightCharacterObserver.observe(rightCharacter, observerConfig);
    }

    const tagTranslations = {
        "sweet": "甜味",
        "bitter": "苦味",
        "sour": "酸味",
        "spicy": "辛辣",
        "bubbly": "发泡",
        "bland": "清淡",
        "vintage": "复古",
        "soft": "温和",
        "strong": "强烈",
        "sobering": "解酒",
        "happy": "惬意"
    };

    const cocktailTags = {};
    cocktails.forEach(cocktail => {
        cocktailTags[cocktail.name] = cocktail.tags;
    });

    function judgeDrink(servedDrink) {
        const currentMixtarget = globalJsonData.find(item => item.mixtarget)?.mixtarget;

        if (!currentMixtarget) {
            return "未知";
        }

        if (typeof currentMixtarget === "string") {

            return servedDrink === currentMixtarget ? "成功" : "失败";
        } else if (Array.isArray(currentMixtarget)) {

            const servedDrinkTags = cocktailTags[servedDrink] || [];
            const englishTags = currentMixtarget.map(tag => {
                return Object.keys(tagTranslations).find(key => tagTranslations[key] === tag) || tag;
            });

            const matchedTags = englishTags.filter(tag => servedDrinkTags.includes(tagTranslations[tag]));

            if (matchedTags.length === currentMixtarget.length) {
                return "成功";
            } else if (matchedTags.length > 0) {
                return "小成功";
            } else {
                return "失败";
            }
        }

        return "未知";
    }

    function serveDrink() {
        if (!isServed) {
            isServed = true;

            if (window.innerWidth <= 480) {
                mixmasterContainer.style.transition = 'height 0.3s ease-out';
                mixmasterContainer.style.height = '28%';
            }

            const currentDrink = cocktailName.textContent;
            const judgement = judgeDrink(currentDrink);

            setVariables({
                lastServedDrink: currentDrink,
                servedDrinkJudge: judgement
            });

            getVariables().then(variables => {
                console.log("Last served drink:", variables.lastServedDrink);
                console.log("Drink judgement:", variables.servedDrinkJudge);
            }).catch(error => {
                console.error("Error retrieving variables:", error);
            });

            alert(`酒已上桌！您调制的是：${currentDrink}`);
            clickSound.currentTime = 0;
            clickSound.play();

            containers.forEach(color => {
                const bars = ingredientContainers[color].barsContainer.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.backgroundColor = '#808080';
                    bar.style.border = '1px solid #808080';
                });
                ingredientContainers[color].container.style.pointerEvents = 'none';
            });

            shakeButton.disabled = true;
            addIceButton.disabled = true;
            resetButton.disabled = true;

            const serveButton = makerContainer.querySelector('.serve-button');
            if (serveButton) {
                serveButton.style.backgroundColor = '#808080';
                serveButton.disabled = true;
            }

            hideTipContainer();
            hideIngredientsContent();

            mixmasterContainer.style.display = 'block';
            mixmasterContainer.style.filter = 'grayscale(80%)';
            mixmasterContainer.style.pointerEvents = 'none';

            startText.style.color = 'gray';
            startText.style.cursor = 'default';
            bottomLeft.style.cursor = 'default';

            triggerSlash(`/setvar key=modeStatus startCot`);

            showDialogueElements();

            setTimeout(() => {
                resetMixture();
            }, 50);
        }
    }

    function playTransitionAnimation(callback) {
        const mixmasterContainer = document.querySelector('.mixmaster-container');
        const animationOverlay = document.createElement('div');
        animationOverlay.style.position = 'absolute';
        animationOverlay.style.top = '0';
        animationOverlay.style.left = '0';
        animationOverlay.style.width = '100%';
        animationOverlay.style.height = '100%';
        animationOverlay.style.backgroundImage = 'url(https://files.catbox.moe/7pv5v0.webp)';
        animationOverlay.style.backgroundSize = 'cover';
        animationOverlay.style.zIndex = '1000';
        mixmasterContainer.appendChild(animationOverlay);

        setTimeout(() => {
            mixmasterContainer.removeChild(animationOverlay);
            if (callback) callback();
        }, 300);
    }

    function showDialogueElements() {
        showElements();
    }
    initializeElements();
});

window.addEventListener('resize', () => {
    if (hasActivatedMixmaster && !isServed) {
        if (window.innerWidth <= 480) {
            mixmasterContainer.style.height = '40%';
        } else {
            mixmasterContainer.style.height = '78%';
        }
    } else if (window.innerWidth <= 480) {
        mixmasterContainer.style.height = '28%';
    } else {
        mixmasterContainer.style.height = '78%';
    }
});

function updateSoundVolumes() {
    const volumeLevel = globalVolume * 0.25;

    buttonClickSound.volume = volumeLevel;
    clickSound.volume = volumeLevel;
    ingredientSound.volume = volumeLevel * 0.7;
    buttonSound.volume = volumeLevel;
    shakeSound.volume = volumeLevel * 0.7;
    iceSound.volume = volumeLevel;
}

const cocktails = [
    {
        name: "Dawn's Whisper",
        recipe: [
            { amount: 2, ingredient: "Rubilith" },
            { amount: 1, ingredient: "Azurite" },
            { amount: 1, ingredient: "Verdex" }
        ],
        ice: true,
        description: "清新的果香与薄荷的凉爽完美融合，带来清晨般的清爽感。",
        tags: ["清淡", "惬意", "甜味", "发泡"]
    },
    {
        name: "Violet Dreams",
        recipe: [
            { amount: 2, ingredient: "Amethyst" },
            { amount: 2, ingredient: "Aureum" },
            { amount: 1, ingredient: "Rubilith" }
        ],
        ice: false,
        description: "柔和的奶油质地中蕴含着淡淡的果香，如梦似幻。",
        tags: ["温和", "甜味", "惬意"]
    },
    {
        name: "Woodland Whispers",
        recipe: [
            { amount: 3, ingredient: "Verdex" },
            { amount: 1, ingredient: "Azurite" },
            { amount: 1, ingredient: "Amethyst" }
        ],
        ice: true,
        description: "浓郁的草本香气配合清凉的薄荷，仿佛置身幽静森林。",
        tags: ["苦味", "强烈", "复古"]
    },
    {
        name: "Golden Memories",
        recipe: [
            { amount: 3, ingredient: "Aureum" },
            { amount: 1, ingredient: "Rubilith" },
            { amount: 1, ingredient: "Amethyst" }
        ],
        ice: false,
        description: "香草和蜂蜜的甜美中带有一丝酒精的辛辣，唤起温暖回忆。",
        tags: ["甜味", "温和", "惬意"]
    },
    {
        name: "Mint Thunder",
        recipe: [
            { amount: 5, ingredient: "Azurite" },
            { amount: 2, ingredient: "Amethyst" }
        ],
        ice: true,
        description: "强烈的薄荷清凉感配合高浓度酒精，如雷霆般震撼味蕾。",
        tags: ["辛辣", "强烈", "发泡"]
    },
    {
        name: "Ruby Sunset",
        recipe: [
            { amount: 3, ingredient: "Rubilith" },
            { amount: 1, ingredient: "Verdex" },
            { amount: 1, ingredient: "Amethyst" }
        ],
        ice: false,
        description: "浓郁的果香中带有微妙的苦涩，如同多变的晚霞。",
        tags: ["甜味", "苦味", "复古"]
    },
    {
        name: "Tranquil Harbor",
        recipe: [
            { amount: 2, ingredient: "Aureum" },
            { amount: 2, ingredient: "Azurite" },
            { amount: 1, ingredient: "Verdex" }
        ],
        ice: true,
        description: "奶油般丝滑的口感中融入清凉薄荷，带来宁静放松的感觉。",
        tags: ["温和", "清淡", "解酒"]
    },
    {
        name: "Smoky Illusion",
        recipe: [
            { amount: 2, ingredient: "Verdex" },
            { amount: 2, ingredient: "Amethyst" },
            { amount: 1, ingredient: "Rubilith" }
        ],
        ice: false,
        description: "淡淡的烟熏味与果香交织，创造出复杂多变的口感。",
        tags: ["苦味", "强烈", "复古"]
    },
    {
        name: "Aurora's Kiss",
        recipe: [
            { amount: 2, ingredient: "Azurite" },
            { amount: 2, ingredient: "Rubilith" },
            { amount: 1, ingredient: "Amethyst" }
        ],
        ice: true,
        description: "清新的薄荷与甜美的果香交织，如梦幻极光般绚丽。",
        tags: ["甜味", "发泡", "惬意"]
    },
    {
        name: "Emerald Cascade",
        recipe: [
            { amount: 5, ingredient: "Verdex" },
            { amount: 1, ingredient: "Azurite" }
        ],
        ice: true,
        description: "浓郁的草本精华配以一丝薄荷清凉，带来强烈的自然风味。",
        tags: ["苦味", "清淡", "解酒"]
    },
    {
        name: "Velvet Nebula",
        recipe: [
            { amount: 4, ingredient: "Amethyst" },
            { amount: 4, ingredient: "Aureum" }
        ],
        ice: false,
        description: "高浓度酒精与奶油般的口感完美融合，醇厚而温和。",
        tags: ["强烈", "温和", "惬意"]
    },
    {
        name: "Rainbow Prism",
        recipe: [
            { amount: 3, ingredient: "Rubilith" },
            { amount: 3, ingredient: "Azurite" },
            { amount: 3, ingredient: "Verdex" },
            { amount: 3, ingredient: "Aureum" },
            { amount: 3, ingredient: "Amethyst" }
        ],
        ice: true,
        description: "五种成分完美平衡，呈现出丰富多彩的味觉体验，如同味蕾上的彩虹。",
        tags: ["复古", "强烈", "惬意"]
    },
    {
        name: "Desert Mirage",
        recipe: [
            { amount: 4, ingredient: "Aureum" },
            { amount: 2, ingredient: "Verdex" },
            { amount: 2, ingredient: "Rubilith" }
        ],
        ice: false,
        description: "蜂蜜的甜美中带有草本和果香的点缀，层次丰富。",
        tags: ["甜味", "苦味", "复古"]
    },
    {
        name: "Frost Giant",
        recipe: [
            { amount: 5, ingredient: "Azurite" },
            { amount: 3, ingredient: "Amethyst" },
            { amount: 1, ingredient: "Aureum" },
            { amount: 1, ingredient: "Rubilith" }
        ],
        ice: true,
        description: "强烈的薄荷冰爽感主导，酒精和果香点缀，如同北欧神话中的冰霜巨人。",
        tags: ["辛辣", "强烈", "发泡"]
    },
    {
        name: "Berry Rhapsody",
        recipe: [
            { amount: 4, ingredient: "Rubilith" },
            { amount: 2, ingredient: "Aureum" },
            { amount: 2, ingredient: "Amethyst" }
        ],
        ice: false,
        description: "浓郁的浆果风味与奶油和酒精的完美平衡，口感丰富。",
        tags: ["甜味", "温和", "惬意"]
    },
    {
        name: "Lavender Twilight",
        recipe: [
            { amount: 3, ingredient: "Amethyst" },
            { amount: 3, ingredient: "Aureum" },
            { amount: 2, ingredient: "Azurite" }
        ],
        ice: true,
        description: "优雅的薰衣草香气与奶油和薄荷的融合，口感柔和。",
        tags: ["温和", "清淡", "解酒"]
    },
    {
        name: "Spiced Inferno",
        recipe: [
            { amount: 4, ingredient: "Verdex" },
            { amount: 3, ingredient: "Rubilith" },
            { amount: 2, ingredient: "Amethyst" }
        ],
        ice: false,
        description: "辛辣的香料风味配合果香和酒精，刺激而复杂。",
        tags: ["辛辣", "强烈", "复古"]
    },
    {
        name: "Quantum Fizz",
        recipe: [
            { amount: 3, ingredient: "Azurite" },
            { amount: 3, ingredient: "Verdex" },
            { amount: 2, ingredient: "Aureum" },
            { amount: 2, ingredient: "Rubilith" }
        ],
        ice: true,
        description: "薄荷和草本的清新与果香和蜂蜜的甜美交织，如量子泡沫般神秘莫测。",
        tags: ["发泡", "清淡", "惬意"]
    },
    {
        name: "Autumn Symphony",
        recipe: [
            { amount: 4, ingredient: "Rubilith" },
            { amount: 4, ingredient: "Verdex" },
            { amount: 4, ingredient: "Aureum" },
            { amount: 3, ingredient: "Amethyst" }
        ],
        ice: false,
        description: "果香、木质调、蜂蜜和酒精的和谐交响，完美呈现秋日韵味。",
        tags: ["甜味", "苦味", "复古"]
    },
    {
        name: "Lunar Serenade",
        recipe: [
            { amount: 5, ingredient: "Amethyst" },
            { amount: 2, ingredient: "Azurite" },
            { amount: 1, ingredient: "Rubilith" }
        ],
        ice: true,
        description: "高度数酒精为主，配以薄荷和果香，口感强烈而清冽。",
        tags: ["强烈", "辛辣", "惬意"]
    },
    {
        name: "Tropical Tsunami",
        recipe: [
            { amount: 4, ingredient: "Rubilith" },
            { amount: 3, ingredient: "Azurite" },
            { amount: 1, ingredient: "Verdex" }
        ],
        ice: true,
        description: "热带水果风味浓郁，薄荷清凉如海浪余韵，口感丰富。",
        tags: ["甜味", "酸味", "发泡"]
    },
    {
        name: "Smoky Maple Dream",
        recipe: [
            { amount: 5, ingredient: "Verdex" },
            { amount: 3, ingredient: "Aureum" }
        ],
        ice: false,
        description: "浓郁的烟熏味道与枫糖浆的甜美交织，口感独特。",
        tags: ["苦味", "甜味", "复古"]
    },
    {
        name: "Celestial Elixir",
        recipe: [
            { amount: 4, ingredient: "Amethyst" },
            { amount: 3, ingredient: "Rubilith" },
            { amount: 3, ingredient: "Azurite" },
            { amount: 2, ingredient: "Aureum" },
            { amount: 1, ingredient: "Verdex" }
        ],
        ice: true,
        description: "五种成分的神秘组合，如同品尝星空中的琼浆玉液，口感层次丰富。",
        tags: ["强烈", "温和", "复古"]
    },
    {
        name: "Ginger Infusion",
        recipe: [
            { amount: 4, ingredient: "Verdex" },
            { amount: 3, ingredient: "Azurite" },
            { amount: 2, ingredient: "Rubilith" }
        ],
        ice: false,
        description: "辛辣的生姜味道主导，柑橘和薄荷相互交织，刺激味蕾。",
        tags: ["辛辣", "酸味", "强烈"]
    },
    {
        name: "Midnight Elixir",
        recipe: [
            { amount: 5, ingredient: "Amethyst" },
            { amount: 2, ingredient: "Rubilith" },
            { amount: 1, ingredient: "Verdex" }
        ],
        ice: true,
        description: "浓郁的酒香为主，果香与草本增添层次，口感浓烈。",
        tags: ["强烈", "苦味", "复古"]
    },
    {
        name: "Alpine Serenity",
        recipe: [
            { amount: 3, ingredient: "Azurite" },
            { amount: 3, ingredient: "Verdex" },
            { amount: 2, ingredient: "Aureum" }
        ],
        ice: true,
        description: "清新的高山气息与蜂蜜甜美融合，带来宁静感受。",
        tags: ["清淡", "温和", "解酒"]
    }
];
let selectedTag = 'all';
let currentIndex = 0;
let isAlphabeticalSort = false;

function formatRecipe(recipe) {
    return recipe.map(item => `<span class="${item.ingredient}">${item.amount} ${item.ingredient}</span>`).join(', ');
}

function updateTagDisplay() {
    const tagList = document.getElementById('tag-list');
    tagList.querySelectorAll('li').forEach(li => {
        li.classList.toggle('active', li.dataset.tag === selectedTag);
    });
}

function filterCocktails() {
    let filtered = selectedTag === 'all'
        ? cocktails
        : cocktails.filter(cocktail => cocktail.tags.includes(selectedTag));

    if (isAlphabeticalSort) {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
}


function updateDisplay() {
    const filteredCocktails = filterCocktails();
    const cocktailList = document.getElementById('cocktail-list');
    cocktailList.innerHTML = '';
    filteredCocktails.forEach((cocktail, index) => {
        const li = document.createElement('li');
        li.textContent = cocktail.name;
        li.classList.toggle('active', index === currentIndex);
        li.addEventListener('click', () => {
            playButtonClickSound();
            currentIndex = index;
            updateDisplay();
        });
        cocktailList.appendChild(li);
    });

    if (filteredCocktails.length > 0) {
        currentIndex = currentIndex % filteredCocktails.length;
        const centerBlock = document.querySelector('.list-block-center-standard-container');
        const upBlock = document.querySelector('.list-block-up-standard-container');
        const downBlock = document.querySelector('.list-block-down-standard-container');

        centerBlock.style.opacity = '0';
        upBlock.style.transform = 'translateY(-10px)';
        downBlock.style.transform = 'translateY(10px)';

        setTimeout(() => {
            updateCocktailInfo('current', filteredCocktails[currentIndex]);
            const prevIndex = (currentIndex - 1 + filteredCocktails.length) % filteredCocktails.length;
            const nextIndex = (currentIndex + 1) % filteredCocktails.length;
            updateCocktailInfo('prev', filteredCocktails[prevIndex]);
            updateCocktailInfo('next', filteredCocktails[nextIndex]);

            centerBlock.style.opacity = '1';
            upBlock.style.transform = 'translateY(0)';
            downBlock.style.transform = 'translateY(0)';
        }, 250);
    } else {
        ['current', 'prev', 'next'].forEach(prefix => {
            document.getElementById(`${prefix}-cocktail`).textContent = '';
            document.getElementById(`${prefix}-recipe`).innerHTML = '';
            document.getElementById(`${prefix}-ice`).textContent = '';
            document.getElementById(`${prefix}-description`).textContent = '';
            document.getElementById(`${prefix}-tags`).textContent = '';
        });
    }
}

function updateCocktailInfo(prefix, cocktail) {
    document.getElementById(`${prefix}-cocktail`).textContent = cocktail.name;
    document.getElementById(`${prefix}-recipe`).innerHTML = `一杯${cocktail.name}需要${formatRecipe(cocktail.recipe)}`;
    document.getElementById(`${prefix}-ice`).textContent = cocktail.ice ? "加冰。" : "";
    document.getElementById(`${prefix}-description`).textContent = cocktail.description;
    document.getElementById(`${prefix}-tags`).textContent = cocktail.tags.join(', ');
}
document.getElementById('tag-list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        clickSound.currentTime = 0; // Reset the audio to the beginning
        clickSound.play();
        selectedTag = e.target.dataset.tag;
        updateTagDisplay();
        currentIndex = 0;
        updateDisplay();
    }
});

document.getElementById('sort-abc-btn').addEventListener('click', () => {
    playButtonClickSound();
    isAlphabeticalSort = !isAlphabeticalSort;
    currentIndex = 0;
    updateDisplay();
});

document.getElementById('prev-btn').addEventListener('click', (e) => {
    e.preventDefault();
    playButtonClickSound();
    const filteredCocktails = filterCocktails();
    currentIndex = (currentIndex - 1 + filteredCocktails.length) % filteredCocktails.length;
    updateDisplay();
});

document.getElementById('next-btn').addEventListener('click', (e) => {
    e.preventDefault();
    playButtonClickSound();
    const filteredCocktails = filterCocktails();
    currentIndex = (currentIndex + 1) % filteredCocktails.length;
    updateDisplay();
});


updateTagDisplay();
updateDisplay();

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const cancelButton = document.getElementById('cancelButton');
    const barStatusElement = document.getElementById('barStatus');
    const statusText = document.getElementById('statusText');

    const possibleTimes = ['16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
    const possibleCharacters = ['emi', 'lynna', 'kyra', 'sayori', 'riko'];
    const possibleWeather = ['sunny', 'cloudy', 'rainy'];

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function updateBarStatus(status) {
        if (status === 'open') {
            barStatusElement.classList.remove('closed');
            barStatusElement.classList.add('open');
            statusText.textContent = 'CLOSE?';
            toggleButton.textContent = 'YES';
        } else {
            barStatusElement.classList.remove('open');
            barStatusElement.classList.add('closed');
            statusText.textContent = 'OPEN?';
            toggleButton.textContent = 'YES';
        }
    }

    const initialStatus = globalJsonData[0].bar_status;
    updateBarStatus(initialStatus);

    toggleButton.addEventListener('click', async function () {
        const currentStatus = barStatusElement.classList.contains('open') ? 'open' : 'closed';
        const newStatus = currentStatus === 'open' ? 'closed' : 'open';

        if (newStatus === 'open') {

            setVariables({
                barStatus: newStatus,
                defaultTime: getRandomItem(possibleTimes),
                appearCharA: getRandomItem(possibleCharacters),
                currentWeather: getRandomItem(possibleWeather)
            });

            triggerSlash('/flushvar appearCharB |/flushvar appearCharC | /addvar key=currentDay 1| /setvar key=appearChar {{getvar::appearCharA}}');

            triggerSlash('/cut {{lastMessageId}}| /run preprocessing | /setvar key=modeStatus openCot |/setvar key=barStatus open |/send trigger:open | /trigger |');

            triggerSlash('/run open');
        } else {

            setVariables({ barStatus: newStatus });

            triggerSlash('/setvar key=modeStatus summaryMode |/delay 1000 | /send trigger:close | /trigger');

            triggerSlash('/run closed');
        }

        updateBarStatus(newStatus);

        alert(newStatus === 'open' ? '店门开启' : '店门关闭');

        barStatusElement.querySelector('.hover-content').style.display = 'none';

        barStatusElement.style.pointerEvents = 'none';
    });

    cancelButton.addEventListener('click', function () {

        barStatusElement.querySelector('.hover-content').style.display = 'none';

        barStatusElement.style.pointerEvents = 'none';
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const topLeft = document.querySelector('.top-left');
    const timeText = document.querySelector('.time-text');
    const timeSubText = document.querySelector('.time-sub-text');
    const weatherSubText = document.querySelector('.weather-sub-text');
    const dayText = document.querySelector('.day-text');

    const elementsToToggle = [timeText, timeSubText, weatherSubText, dayText];

    const hoverContent = document.createElement('div');
    hoverContent.className = 'hover-content';
    hoverContent.style.opacity = '0';
    hoverContent.style.transition = 'opacity 0.3s ease';
    hoverContent.style.pointerEvents = 'none';

    const leftButton = document.createElement('a');
    leftButton.className = 'button-link left';
    leftButton.href = 'https://rentry.co/Cyberpunk-Bar';
    leftButton.target = '_blank';
    const leftImg = document.createElement('img');
    leftImg.src = 'https://files.catbox.moe/1qwzqt.png';
    leftImg.alt = 'Left Button';
    leftImg.className = 'button-image';
    leftButton.appendChild(leftImg);

    const halloText = document.createElement('span');
    halloText.className = 'hallo-text';
    halloText.textContent = 'LINK';

    const rightButton = document.createElement('a');
    rightButton.className = 'button-link right';
    rightButton.href = 'https://discord.com/invite/B7Wr25Z7BZ';
    rightButton.target = '_blank';
    const rightImg = document.createElement('img');
    rightImg.src = 'https://files.catbox.moe/co25m7.png';
    rightImg.alt = 'Right Button';
    rightImg.className = 'button-image';
    rightButton.appendChild(rightImg);

    hoverContent.appendChild(leftButton);
    hoverContent.appendChild(halloText);
    hoverContent.appendChild(rightButton);

    topLeft.appendChild(hoverContent);

    elementsToToggle.forEach(el => {
        el.style.transition = 'opacity 0.3s ease';
    });

    topLeft.addEventListener('mouseenter', function () {
        hoverContent.style.opacity = '1';
        hoverContent.style.pointerEvents = 'auto';

        elementsToToggle.forEach(el => {
            el.style.opacity = '0';
        });
    });

    topLeft.addEventListener('mouseleave', function () {
        hoverContent.style.opacity = '0';
        hoverContent.style.pointerEvents = 'none';

        elementsToToggle.forEach(el => {
            el.style.opacity = '1';
        });
    });
});


async function checkAndAddProgressBar() {
    const modeObject = globalJsonData.find(item => item.hasOwnProperty('mode'));

    if (modeObject) {
        const gameContainer = document.querySelector('.game-container');

        const progressBarContainer = document.createElement('div');
        progressBarContainer.id = 'modeProgressBarContainer';

        progressBarContainer.innerHTML = `
            <div id="modeProgressBar"></div>
            <div id="modeProgressText">未激活模式</div>
        `;

        gameContainer.parentNode.insertBefore(progressBarContainer, gameContainer);

        const style = document.createElement('style');
        style.textContent = `
            #modeProgressBarContainer {
                width: 100%;
                height: 2vw;
                background-color: #00008B;
                position: relative;
                margin-bottom: 10px;
            }

            #modeProgressBar {
                width: 0%;
                height: 100%;
                background-color: #00FFFF;
                transition: width 0.1s ease-in-out;
            }

            #modeProgressText {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #FF69B4;
                font-family: 'CustomFont', sans-serif;
                font-size: 1.5vw;
                display: block;
            }
        `;
        document.head.appendChild(style);

        const variables = await getVariables();
        const currentModeStatus = variables.modeStatus;
        let lastTimeModeStatus = variables.lastTimeModeStatus;

        if (currentModeStatus === 'openCot' || currentModeStatus === 'startCot') {
            lastTimeModeStatus = 'routineCot';
            triggerSlash(`/setvar key=lastTimeModeStatus ${lastTimeModeStatus}`);
        }

        const progressText = document.getElementById('modeProgressText');

        if (modeObject.mode === "no" && currentModeStatus !== "routineCot") {
            simulateProgress("未激活模式", "routineCot");
        } else if (modeObject.mode === "ready" && currentModeStatus !== "orderCot") {
            simulateProgress("预备点酒", "orderCot");
        } else if (modeObject.mode === "start" && currentModeStatus !== "startCot") {
            simulateProgress("调酒模式已经开启", "startCot");
        } else {
            // 如果当前状态已经匹���，则不播放进度条，直接设置文本和进度条
            if (progressText) {
                if (modeObject.mode === "no") {
                    progressText.textContent = "未激活模式";
                } else if (modeObject.mode === "ready") {
                    progressText.textContent = "预备点酒";
                } else if (modeObject.mode === "start") {
                    progressText.textContent = "调酒模式已经开启";
                }
            }
            updateProgressBar(0);
        }
    }
}


function updateProgressBar(progress) {
    const progressBar = document.getElementById('modeProgressBar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

function simulateProgress(text, statusType) {
    let progress = 0;
    const progressText = document.getElementById('modeProgressText');
    if (progressText) {
        progressText.textContent = text;
    }

    const interval = setInterval(() => {
        progress += 10;
        updateProgressBar(progress);
        if (progress >= 100) {
            clearInterval(interval);
            if (progressText) {
                progressText.style.display = 'block';
            }
            setFinalVariables(statusType);
        }
    }, 100);
}

async function setFinalVariables(statusType) {
    const variables = await getVariables();
    const currentModeStatus = variables.modeStatus;

    if (statusType === "startCot") {
        let requestServedDrink = 'noServed';
        let newAppearChar = variables.appearChar; // 默认保持当前角色

        // 查找包含 mixtarget 的对象
        const mixtargetObject = globalJsonData.find(item => item.hasOwnProperty('mixtarget'));
        if (mixtargetObject) {
            requestServedDrink = mixtargetObject.mixtarget;
            
            // 如果存在 character 属性，更新 appearChar
            if (mixtargetObject.character) {
                newAppearChar = mixtargetObject.character.toLowerCase();
            }
        }

        // 使用模板字符串构建命令，包含更新 appearChar
        triggerSlash(`/setvar key=lastTimeModeStatus routineCot| /setvar key=modeStatus ${statusType}| /setvar key=lastServedDrink noServed| /setvar key=requestServedDrink ${requestServedDrink}| /setvar key=appearChar ${newAppearChar}`);
    } else {
        await setModeStatus(statusType, currentModeStatus);
    }
}

async function setModeStatus(statusType, currentModeStatus) {
    try {
        if (!currentModeStatus) {
            const variables = await getVariables();
            currentModeStatus = variables.modeStatus;
        }

        if (currentModeStatus === 'openCot' || currentModeStatus === 'startCot') {
            triggerSlash(`/setvar key=lastTimeModeStatus routineCot| /setvar key=modeStatus ${statusType}`);
        } else {
            triggerSlash(`/setvar key=lastTimeModeStatus ${currentModeStatus}| /setvar key=modeStatus ${statusType}`);
        }
    } catch (error) {
        console.error('设置模式状态时出错:', error);
    }
}

function switchMode(newMode) {
    const modeObject = globalJsonData.find(item => item.hasOwnProperty('mode'));
    if (modeObject) {
        modeObject.mode = newMode;
        checkAndAddProgressBar();
    }
}

document.addEventListener('DOMContentLoaded', checkAndAddProgressBar);
