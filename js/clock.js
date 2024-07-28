const clock = document.querySelector("#clock");
const dateElement = document.createElement("div");
dateElement.setAttribute("id", "date");
clock.parentElement.insertBefore(dateElement, clock);

function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    dateElement.innerHTML = `<span>${year}/${month}/${day}</span><span>${dayOfWeek}</span>`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);