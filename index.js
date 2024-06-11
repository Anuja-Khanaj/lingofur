$(document).ready(function() {
console.log($);

$('.ham-burger').click(function () {
    console.log("clicked");
    let element4 = document.getElementById("nav");
    element4.style.height = "25vh";
    let element2 = document.getElementById("left-nav");
        element2.style.opacity = "1";
    let element1 = document.getElementById("right-nav");
        element1.style.opacity = "1";
let element3 = document.getElementById("nav");
        element3.style.opacity = "1";
    $('#whole-nav').slideToggle(1000);
    
});

})