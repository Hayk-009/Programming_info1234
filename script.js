function buton() {
    document.write("ERROR")
}

hashiv=0
let calculate = document.getElementById("calculate")

function calc() {
    hashiv=hashiv+1
    calculate.innerHTML=hashiv

}

//------------------------------------------




let textVideo = document.getElementById("textVideo")


function vid() {
    textVideo.innerHTML = "You see this video - DOM ?"

}







function vidCopy() {
    document.getElementById("textNew").append("You see this video - DOM ?")
}



function answer() {
    let pr = prompt("Այո կամ Ոչ")
    if (pr=="Այո") {
        document.getElementById("ansQuess").innerHTML = "GREAT"
    }
    else if (pr=="Ոչ") {
        document.getElementById("ansQuess").innerHTML = "Mmmmmmm ... View this video :)"
    }
    else{
        document.getElementById("ansQuess").innerHTML = "I don't now what do you write"
    }
}

let ansQuess = document.getElementById("ansQuess")

function delText() {
    textVideo.innerHTML = ""
    textNew.innerHTML = ""
    ansQuess.innerHTML = ""
}