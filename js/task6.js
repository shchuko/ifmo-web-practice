
window.onload = () => {
    let floatingObj = document.getElementsByClassName("floatingObj")
    let closeAllFloating = function () {
        for (const floatingObjKey of floatingObj) {
            floatingObjKey.style.display = "none"
        }
    }
    closeAllFloating()

    let contactsBox = document.getElementById("contactsBox")
    let showContactsButton = document.getElementById("showContactsButton")
    showContactsButton.onclick = function () {
        closeAllFloating()
        contactsBox.style.display = "block"
    }

    let hideContactsButton = document.getElementById("hideContactsButton")
    hideContactsButton.onclick = function () { contactsBox.style.display = "none" }

    let somepic = document.getElementById("somepic")
    somepicSources = [
        "resources/pics/pic0.png",
        "resources/pics/pic1.png",
        "resources/pics/pic2.png",
        "resources/pics/pic3.png"

    ]
    let index = 0;
    somepic.src = somepicSources[index]
    somepic.onclick = function () {
        if (++index === somepicSources.length) {
            index = 0
        }
        somepic.src = somepicSources[index]
    }

}

