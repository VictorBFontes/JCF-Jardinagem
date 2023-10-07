function myFunction(){
    var x = document.getElementById("header23");
    if (x.className === "header") {
        x.className += "responsive";
    }else{
        x.className = "header";
    }
}