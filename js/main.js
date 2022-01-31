const hnumbU = document.querySelector('.hnumbU');
const hnumbD = document.querySelector('.hnumbD');
const mnumbU = document.querySelector('.mnumbU');
const mnumbD = document.querySelector('.mnumbD');
const flipdivL = document.querySelector('.flipdivL');
const flipnumL = document.querySelector('.flipnumL');
const flipdivR = document.querySelector('.flipdivR');
const flipdnumR = document.querySelector('.flipnumR');

function runner() {
    let clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();

    if (hour < 10) {
        hnumbU.innerHTML = `0${hour}`;
        hnumbD.innerHTML = `0${hour}`;
        flipnumL.innerHTML = `0${hour}`;
    }
    else {
        hnumbU.innerHTML = `${hour}`;
        hnumbD.innerHTML = `${hour}`;
        flipnumL.innerHTML = `${hour}`;
    }
    if (minute < 10) {
        mnumbU.innerHTML = `0${minute}`;
        mnumbD.innerHTML = `0${minute}`;
        flipdnumR.innerHTML = `0${minute}`;

    }
    else {
        mnumbU.innerHTML = `${minute}`;
        mnumbD.innerHTML = `${minute}`;
        flipdnumR.innerHTML = `${minute}`;
    }

    if (second === 0) {
        flipdivR.style.display = "flex";
        flipdivR.style.animationName = "flipup1";
        flipdivR.style.animationDuration = "0.3s";
        flipdivR.style.animationTimingFunction = "linear";
    }
    else {
        flipdivR.style.display = "none";
        flipdivR.style.animationName = "none";

    }
    if (minute === 00 && second === 0) {
        flipdivL.style.display = "flex";
        flipdivL.style.animationName = "flipup2";
        flipdivL.style.animationDuration = "0.3";
        flipdivL.style.animationTimingFunction = "linear";
    }
    else {
        flipdivL.style.display = "none";
        flipdivL.style.animationName = "none";

    }

};
setInterval(runner, 500);