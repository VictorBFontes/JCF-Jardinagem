window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop >  550| document.documentElement.scrollTop > 550) {
        document.getElementById("header").style.backgroundColor = "#DEEDE5";
        document.getElementById("header").style.height = "100px";
    }else{
        document.getElementById("header").style.backgroundColor = ("transparent");
        document.getElementById("header").style.height = ("80px");
    }
}