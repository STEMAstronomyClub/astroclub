const imgs = [];
var nimgs = 8;

for(var i = 1; i <= nimgs; i++) {
    imgs.push(document.getElementById(i.toString()));
}

var current = 0;
var m = 1;

function tra(com) {
    if(com == 0) {
        if (m != 8) {
            current -= 100;
            for(var a = 0; a < nimgs; a++) {
                imgs[a].style.transform = "translateX(" + current.toString() + "%)";
            }
            m++;
        }
        else {
            m = 1;
            current = 0;
            for(var a = 0; a < nimgs; a++) {
                imgs[a].style.display = "none";
                imgs[a].style.transform = "translateX(0)";
            }
            setTimeout(function() { for(var a = 0; a < nimgs; a++) {
                imgs[a].style.display = "block";
            } }, 1)
            setTimeout(function() { tra(com) }, 50);
        }
    }
    else {
        if (m != 1) {
            current += 100;
            for(var a = 0; a < nimgs; a++) {
                imgs[a].style.transform = "translateX(" + current.toString() + "%)";
            }
            m--;
        }
        else {
            m = 8;
            current = - 7 * 100;
            for(var a = 0; a < nimgs; a++) {
                imgs[a].style.display = "none";
                imgs[a].style.transform = "translateX(" + current.toString() + "%)";
            }
            setTimeout(function() { for(var a = 0; a < nimgs; a++) {
                imgs[a].style.display = "block";
            } }, 1)
            setTimeout(function() { tra(com) }, 50);
        }
    }

    document.getElementById("schoolName").innerHTML = imgs[m-1].getAttribute("alt"); 
}

document.getElementById("b1").addEventListener("click", function() { tra(0); });
document.getElementById("b2").addEventListener("click", function() { tra(1); });