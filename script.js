const heroText = document.querySelector("hero h2");
const colors = ["FF5733", "#33FF57", "3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
    heroText.computedStyle.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeHeroTextColor, 2000);

let curerentImageIndex = 0;
const images = ["wallpapersden.com_dark-natural-landscape-hd-black-aesthetic_2563x1436.jpg", "j0yohS.jpg", "halloween-scarecrow-laptop-art-5bavkxjz7wd9npo7.jpg"];

function changeHeroImage() {
    curerentImageIndex = (curerentImageIndex + 1) % images.length;
    document.querySelector(
        "body"
    ).style.backgroundImage = `url('${images[curerentImageIndex]}')`;
}

setInterval(changeHeroImage, 2000);

produckImages.forEach((image) => {
    image.addEventListener("click", () => {
    image.style.transform = "scale(1.5)";
    image.style.transition = "transform 0.2s";
});
image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
});
});