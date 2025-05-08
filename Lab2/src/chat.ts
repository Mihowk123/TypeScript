const chatBox = document.getElementById("chat-box") as HTMLElement;
const messageInput = document.getElementById("messageInput") as HTMLInputElement;
const sendButton = document.getElementById("sendButton") as HTMLButtonElement;

interface ChatMessage {
  user: string;
  message: string;
}

const messages: ChatMessage[] = [];

sendButton.addEventListener("click", () => {
  const msg = messageInput.value.trim();
  if (msg !== "") {
    const newMessage: ChatMessage = {
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
