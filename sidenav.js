function openNav(){
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("header-items").style.marginLeft = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.opacity = "0.3"
    document.body.style.backgroundColor = "black";
    document.getElementById("header").style.opacity = "0.3";
    document.getElementById("footer").style.opacity = "0.3";
    document.getElementById("main-item").style.marginLeft = "50px";
    document.getElementById("feedback-form").style.opacity = "0.3";
    document.getElementById("feedback-form").style.marginLeft = "250px"
}
function closeNav(){
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.opacity = "1"
    document.getElementById("header-items").style.marginLeft = "0";
    document.body.style.backgroundColor = "black"; 
    document.getElementById("header").style.opacity = "1"
    document.getElementById("footer").style.opacity = "1"
    document.getElementById("main-item").style.marginLeft = "0";
    document.getElementById("feedback-form").style.opacity = "1";
    document.getElementById("feedback-form").style.marginLeft = "0"
}

