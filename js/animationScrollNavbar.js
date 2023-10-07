window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop >  200| document.documentElement.scrollTop > 200) {
        document.getElementById("header23").style.backgroundColor = "#DEEDE5";
        document.getElementById("header23").style.height = "100px";
    }else{
        document.getElementById("header23").style.backgroundColor = ("transparent");
        document.getElementById("header23").style.height = ("90px");
    }
}