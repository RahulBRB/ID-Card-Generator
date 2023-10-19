const showImg = document.getElementById("user-image");
const hidePara = document.getElementById("droptext");
document.getElementById("generate-button").addEventListener("click", function (event) {
    event.preventDefault();

    const userName = document.getElementById("name").value;
    const userTitle = document.getElementById("title").value;
    const userLocation = document.getElementById("location").value;
    const userImageUrl = document.getElementById("image-url").value;
    let userAbout = document.getElementById("about").value;

    if (userName !== "") {
        document.getElementById("user-name").textContent = userName;
    }

    if (userTitle !== "") {
        document.getElementById("user-title").textContent = userTitle;
    }

    if (userLocation !== "") {
        document.getElementById("user-location").textContent = userLocation;
    }

    if (userImageUrl) {
        showImg.style.display = 'inline';
        hidePara.style.display = 'none';
        document.getElementById("user-image").src = userImageUrl.replace(/["']/g, '');
    }

    if (userAbout !== "") {
        if (userAbout.length > 200) {
            userAbout = userAbout.substring(0, 200); // Truncate if longer than 200 characters
        }
        document.getElementById("user-about").textContent = userAbout;
    }
});


const dropArea = document.getElementById("Profile");

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("change");
});
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("change");
});
var imageUrl;
dropArea.addEventListener("drop", (e) => {
    dropArea.classList.remove("change");
    e.preventDefault();
    const image = e.dataTransfer.files[0];
    var imageUrl = URL.createObjectURL(image);
    console.log(imageUrl);
    showImg.style.display = 'inline';
    hidePara.style.display = 'none';
    const imageElement = document.getElementById("user-image");
    imageElement.src = imageUrl;
});


const userImage = document.getElementById("user-image");
const zoomSlider = document.getElementById("zoom-slider");
const rotateSlider = document.getElementById("rotate-slider");

zoomSlider.addEventListener("input", function() {
    applyTransformations();
});

rotateSlider.addEventListener("input", function() {
    applyTransformations();
});

function applyTransformations() {
    const scaleValue = zoomSlider.value;
    const rotateValue = rotateSlider.value;
    userImage.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
}

