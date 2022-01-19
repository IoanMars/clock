setInterval( () => {
    const time = document.getElementById('time');
    const data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10  ) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }

    time.textContent = hours + ':' + minutes + ':' + seconds;
},);