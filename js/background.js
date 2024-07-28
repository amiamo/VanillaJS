const picsumAPI = "https://picsum.photos/1920/1080";

const bgImage = document.createElement("img");
bgImage.src = picsumAPI;
bgImage.classList.add("background");

document.body.appendChild(bgImage);