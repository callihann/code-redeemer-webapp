function hash(input) {
    var md = forge.md.sha256.create()
    md.update(input)
    return md.digest().toHex()
}

function updateHidden(data) {
    let json = JSON.parse(data)
    console.log(json["url"])
    if (json["status"] == "valid") {
        document.getElementById("hiddenStatus").style.visibility = "visible"
        document.getElementById("hiddenStatus").innerHTML = "Success!"
        document.getElementById("hiddenStatus").href = json["url"]
        document.getElementById("submitButton").classList.remove("btn-primary")
        document.getElementById("submitButton").classList.add("btn-success")
    } else if (json["status"] == "invalid") {
        document.getElementById("hiddenStatus").style.visibility = "visible"
        document.getElementById("hiddenStatus").innerHTML = "Code not valid"
        document.getElementById("hiddenStatus").href = ""
    }
    else {
        document.getElementById("hiddenStatus").style.visibility = "visible"
        document.getElementById("hiddenStatus").innerHTML = "redemption was unsuccessful"
    }
}
async function checkIfValid() {
    let code = document.getElementById("codeField").value
    await fetch('/verify', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"code": hash(code)})
    })
    .then(response => response.json())
    .then(response => updateHidden(JSON.stringify(response)))
}