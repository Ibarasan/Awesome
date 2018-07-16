const circleSquare = document.querySelector("#circle_square");


circleSquare.addEventListener("click", function() {
    
    circleSquare.style.transition = "2s";
    circleSquare.style.transform = "rotate(360deg)";

});

circleSquare.addEventListener("transitionend", function(){
    circleSquare.style.transition = "none";
    circleSquare.style.transform = "none";
});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("NavOverlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("NavOverlay").style.width = "0%";
}