function Frakswitch(sel) {
    var frak = sel.options[sel.selectedIndex].text;
    switch (frak) {
        default:
            document.getElementById("primary").innerText = "Primär: "
            document.getElementById("secondary").innerText = "Sekundär: "
            document.getElementById("pearl").innerText = "Perleffekt: "
            document.getElementById("unten").innerText = "Unterboden: "
            document.getElementById("wheels").innerText = "Reifenqualm: "
            break;
    }
}