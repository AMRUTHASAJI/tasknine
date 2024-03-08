const imageContainer = document.getElementById("imageContainer");
    const myImage = document.getElementById("myImage");

    imageContainer.style.width = "300px";
    imageContainer.style.height = "300px";
    imageContainer.style.position = "relative";

    myImage.style.position = "absolute";
    myImage.style.top = "0";
    myImage.style.left = "0";
    myImage.style.width = "100%";
    myImage.style.height = "100%";

    myImage.addEventListener("mouseenter", function() {
        myImage.style.visibility = "hidden";
    });

    myImage.addEventListener("mouseleave", function() {
        myImage.style.visibility = "visible";
    });




