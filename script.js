let deadline = new Date("Dec 31, 2023 23:59:59").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let time = deadline - now;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    document.querySelector("#countDown").innerHTML = days + ` days ` + hours + ` hours ` + "<br>" + minutes + ` minutes ` + seconds + ` seconds `;
    if (time < 0) {
        clearInterval(x);
        document.querySelector("#countDown").innerHTML = "EXPIRED";
    }
}, 1000);