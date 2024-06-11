console.log("slider");

var arrow1 = document.getElementById('left');
var slide1 = document.getElementById("second")

arrow1.onclick = function(){
    console.log("occured");
    slide2.style.opacity = "0";
    slide1.style.transform = "translateX(-150rem)";
    
}

var arrow2 = document.getElementById('right');
var slide2 = document.getElementById("onetwo")

arrow2 .onclick = function(){
    slide2.style.opacity = "1";
    slide1.style.transform = "translateX(0rem)";
}
