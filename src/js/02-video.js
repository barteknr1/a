import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', () => {
    player
        .getCurrentTime()
        .then(function (seconds) {
            console.log(seconds);
            localStorage.setItem('videoplayer-current-time', seconds);
        })
        .catch((err) => {
            console.log(err.name);
            console.log(err.message);
        })
    });
    
console.log(localStorage.getItem('videoplayer-current-time')
)