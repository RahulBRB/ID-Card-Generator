document.getElementById("generate-button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const userName = document.getElementById("name").value;
    const userTitle = document.getElementById("title").value;
    const userLocation = document.getElementById("location").value;
    const userInfo = document.getElementById("info").value;
    const userImage = document.getElementById("image").files[0];

    if (userName !== "") {
        document.getElementById("user-name").textContent = userName;
    }

    if (userTitle !== "") {
        document.getElementById("user-title").textContent = userTitle;
    }

    if (userLocation !== "") {
        document.getElementById("user-location").textContent = userLocation;
    }

    if (userInfo !== "") {
        document.getElementById("user-info").textContent = userInfo;
    }

    if (userImage) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById("user-image").src = reader.result;
        };
        reader.readAsDataURL(userImage);
    }
});
