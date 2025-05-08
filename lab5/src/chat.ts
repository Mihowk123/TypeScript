interface ChatMessage {
  user: string;
  message: string;
}

const chatBox = document.getElementById("chat-box") as HTMLElement;
const messageInput = document.getElementById("messageInput") as HTMLInputElement;
const sendButton = document.getElementById("sendButton") as HTMLButtonElement;

// Завантаження існуючих повідомлень з db.json
async function loadMessages() {
  const res = await fetch("http://localhost:5000/messages");
  const data = await res.json();
  chatBox.innerHTML = "";
  data.forEach((m: { user?: string; text: string }) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${m.user || "User"}:</strong> ${m.text}`;
    chatBox.appendChild(p);
  });
}

sendButton.addEventListener("click", async () => {
  const msg = messageInput.value.trim();
  if (msg !== "") {
    const newMessage: ChatMessage = {
      user: "You",
      message: msg
    };

    // Надсилаємо POST-запит на json-server
    await fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: newMessage.user,
        text: newMessage.message
      })
    });

    messageInput.value = "";
    loadMessages(); // оновити вивід
  }
});

// Завантажити повідомлення при старті
loadMessages();
