import '../styles/styles.css';

const refs = {
    daysCount: document.querySelector('[data-value="days"]'),
    hoursCount: document.querySelector('[data-value="hours"]'),
    minsCount: document.querySelector('[data-value="mins"]'),
    secsCount: document.querySelector('[data-value="secs"]'),
}

//Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Apr 25, 2021'),
// });

const timer = {
    intervalId: null,
    targetDate: new Date('Apr 25, 2021').getTime(),
    start() {

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const clockParts = createClockParts(deltaTime);
            setClockInterface(clockParts);
            setTimeout(() => {
                clearInterval(this.intervalId);
            }, deltaTime);
        }, 1000);
    },
    
};

// console.log(timer.start());


function createClockParts(time) {
    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');

    return { days, hours, mins, secs };
};

function setClockInterface({ days, hours, mins, secs }) {
    refs.daysCount.textContent = `${days}`;
    refs.hoursCount.textContent = `${hours}`;
    refs.minsCount.textContent = `${mins}`;
    refs.secsCount.textContent = `${secs}`;
}