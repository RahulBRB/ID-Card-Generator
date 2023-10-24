const showImg = document.getElementById("user-image");
const hidePara = document.getElementById("droptext");
document.getElementById("generate-button").addEventListener("click", function (event) {
    event.preventDefault();

    const userName = document.getElementById("name").value;
    const userTitle = document.getElementById("title").value;
    const userLocation = document.getElementById("location").value;
    const userImageUrl = document.getElementById("image-url").value;
    const userPhone = document.getElementById("phone").value;
    const userEmail = document.getElementById("email").value;
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
    
    if (userPhone !== "") {
        document.getElementById("user-phone").textContent = userPhone; // Update phone element
    }

    if (userEmail !== "") {
        document.getElementById("user-email").textContent = userEmail; // Update email element
    }

    if (userAbout !== "") {
        if (userAbout.length > 200) {
            userAbout = userAbout.substring(0, 200); // Truncate if longer than 200 characters
        }
        document.getElementById("user-about").textContent = userAbout;
    }

    function color() {
        const collt=document.getElementById("coll-text").value;
        const collh=document.getElementById("coll-head").value;
        const collb=document.getElementById("coll-back").value;
        const prev=document.getElementsByClassName("preview")[0];
        const abou=document.getElementsByClassName("About")[0];
        var paragraphs = document.getElementsByClassName("pp");
        var heading = document.getElementsByClassName("hh");

        prev.style.backgroundColor=collb;
        abou.style.backgroundColor=collb;

        for (i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color =collt;
        }

        for (i = 0; i < heading.length; i++) {
            heading[i].style.color =collh;
        }
    }
    color();

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

function takeshot() { 
    let div = document.getElementById('photo'); 

    html2canvas(div).then( 
        function (canvas) { 
            // document.getElementById('output').appendChild(canvas); 
            var dataURL = canvas.toDataURL("image/png");
            var a = document.createElement('a');
            a.href = dataURL;
            a.download = 'canvas-download.jpeg';
            a.click();
        }) 
} 