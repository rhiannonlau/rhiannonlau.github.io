function animate_sidebar() {
    var x = document.getElementById("mySidebar");

    x.addEventListener("animationend", function(e) {
        e.preventDefault();

        if(x.style.animationName == "slide-left") {
            x.style.display = "none";
        }
    });

    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.animation = "1s slide-right";
    }

    else {
        x.style.animation = "1s slide-left";
    }
}
