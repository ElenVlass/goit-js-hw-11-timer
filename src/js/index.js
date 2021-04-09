import '../styles/styles.css';
import refs from './refs.js';


class CountdownTimer {
    constructor() {
        this.intervalId = null;
        this.targetDate = new Date('Apr 25, 2021').getTime();
          
        this.start();
    }
    
    start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const clockParts = this.createClockParts(deltaTime);
            this.setClockInterface(clockParts);
            setTimeout(() => {
                clearInterval(this.intervalId);
            }, deltaTime);
        }, 1000);
    }

createClockParts(time) {
    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');

    return { days, hours, mins, secs };
    }
setClockInterface({ days, hours, mins, secs }) {
    refs.daysCount.textContent = `${days}`;
    refs.hoursCount.textContent = `${hours}`;
    refs.minsCount.textContent = `${mins}`;
    refs.secsCount.textContent = `${secs}`;
} 
};


const timer = new CountdownTimer();
