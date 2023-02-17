let imageElement = document.getElementById("image");
let warningelement = document.getElementById("warningMessage");
console.log(warningelement);
let imagewidthelement = document.getElementById("imageWidth");
let originalWidth = 200;

imageElement.style.width = originalWidth + "px";
imagewidthelement.textContent = originalWidth + "px";

function dec() {

    if (originalWidth <= 100) {
        warningelement.textContent = "Can't Visible. Increase the size of the image";

    } else {
        originalWidth = originalWidth - 5;
        let updated = originalWidth;
        warningelement.textContent = "";
        imageElement.style.width = updated + "px";
        imagewidthelement.textContent = updated + "px";

    }

}

function inc() {
    if (originalWidth >= 300) {
        warningelement.textContent = "Too big. Decrease the size of the image";

    } else {
        originalWidth = originalWidth + 5;
        let updated = originalWidth;
        warningelement.textContent = "";
        imageElement.style.width = updated + "px";
        imagewidthelement.textContent = updated + "px";

    }


}
