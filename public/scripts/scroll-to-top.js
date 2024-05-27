var prevScrollpos = window.scrollY;
window.onscroll = function() {
    if(window.innerWidth <= 920) {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }
}