"use strict";
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = [];
sendButton.addEventListener("click", () => {
    const msg = messageInput.value.trim();
    if (msg !== "") {
        const newMessage = {
            user: "You",
            message: msg
        };
        messages.push(newMessage);
        displayMessages();
        messageInput.value = "";
    }
});
function displayMessages() {
    chatBox.innerHTML = "";
    messages.forEach((m) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${m.user}:</strong> ${m.message}`;
        chatBox.appendChild(p);
    });
}
