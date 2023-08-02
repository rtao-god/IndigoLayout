let textHtml = [$("#box2Drop a")]

let textOriginal = $("#box2Drop a").text()

let letters = textOriginal.split(". ")

for (let i in letters) {
    letters[i] = letters[i].toLowerCase()
}

for (let i in letters) {
    letters[i] = letters[i][0].toUpperCase() + letters[i].substr(1)
}

for (let i in letters) {
    for (let g in textHtml) {
        textHtml[g].innerHTML = letters[i]
        textHtml[g].html(letters[i])
        $("#box2Drop a").innerHTML = letters[i]
        $("#box2Drop a").html(letters[i])
    }
}