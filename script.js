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
        document.getElementById("user-image").src = userImageUrl;
    }

    if (userAbout !== "") {
        if (userAbout.length > 200) {
            userAbout = userAbout.substring(0, 200); // Truncate if longer than 200 characters
        }
        document.getElementById("user-about").textContent = userAbout;
    }
});
