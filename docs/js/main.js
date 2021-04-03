const xhr = new XMLHttpRequest();
function pobierzDane(nazwaPliku)
{ if (xhr) {
    var url = "https://kxorath.github.io/SkiJumpingPolska/text" + nazwaPliku + ".txt";
    xhr.open("GET", url);
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4) {
            document.getElementById("tresc").innerHTML = xhr.responseText;
        }
    });
    xhr.send(null);
}
}