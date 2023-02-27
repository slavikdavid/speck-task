function ObrisiElemente() {
    const element = document.querySelector('.elements');
    if (element.firstChild) {
        while (element.firstChild) {
            element.firstChild.remove()
        }
    } else {
        alert("There are no items to remove!");
    }
    document.getElementById("empty").style.display = "block";
}

function DodajElement() {
    /* Dodavanje novih elemenata samo ako tekstualno polje nije prazno,
    ne vrsi se samo provjera duljine vec i da nema znakova praznina */
    if (document.getElementById("technology").value.trim().length) {
        var gridElement = document.createElement("div");
        gridElement.setAttribute("class", "content");
        gridElement.innerText = document.getElementById('technology').value;
        document.querySelector('.elements').appendChild(gridElement);
        document.getElementById("technology").value = "";
        document.getElementById("empty").style.display = "none";
    }
    else {
        alert("Text field should not be empty (also no whitespaces)!");
    }
}