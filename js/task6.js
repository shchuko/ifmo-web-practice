let floatingObj = document.getElementsByClassName("floatingObj")
let closeAllFloating = function () {
    for (const floatingObjKey of floatingObj) {
        floatingObjKey.style.display = "none"
    }
}

window.onload = () => {
    closeAllFloating()

    let contactsBox = document.getElementById("contactsBox")
    document.getElementById("showContactsButton").onclick = function () {
        closeAllFloating()
        contactsBox.style.display = "block"
    }
    document.getElementById("hideContactsButton").onclick = function () {
        contactsBox.style.display = "none"
    }

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

    let chatBox = document.getElementById("chatBox")
    document.getElementById("showChatButton").onclick = function () {
        closeAllFloating()
        chatBox.style.display = "block"
    }
    document.getElementById("hideChatButton").onclick = function () {
        chatBox.style.display = "none"
    }


    document.getElementById("sendButton").onclick = function () {
        let msgTextArea = document.getElementById("msgTextArea")
        let chatMessages = document.getElementById("chatMessages")

        let sleep = function (ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        chatMessages.innerHTML = chatMessages.innerHTML +
            "<p> You: " + msgTextArea.value + "<p/>"
        msgTextArea.value = ""

        sleep(1000).then(() => {
            chatMessages.innerHTML = chatMessages.innerHTML +
                "<p> Bot: " + "That's fine!" + "<p/>"
        })

    }
}

