import { fetchOpenAIResponse } from './GPT.js';

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chatMessages");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", function () {
        const messageText = messageInput.value;
        const response = "";

        if (messageText.trim() !== "") {
            appendMessage("Usuario", messageText);
            response = fetchOpenAIResponse(messageText);
            if (response.trim() !== "") {
                appendAIResponse(response);
            }
            
            messageInput.value = "";
        }
    });

    function appendAIResponse(response) {
        appendMessage("AI", response);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");

        const senderElement = document.createElement("span");
        senderElement.classList.add("sender");
        senderElement.textContent = sender + ":";

        const messageTextElement = document.createElement("span");
        messageTextElement.textContent = message;

        messageElement.appendChild(senderElement);
        messageElement.appendChild(messageTextElement);

        chatMessages.appendChild(messageElement);

        // Scroll hacia abajo para mostrar el último mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

});
