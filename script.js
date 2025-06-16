const form = document.getElementById('messageForm');
const messagesDiv = document.getElementById('messages');

let messages = JSON.parse(localStorage.getItem('messages')) || [];

function renderMessages() {
  messagesDiv.innerHTML = '';
  messages.forEach(msg => {
    const div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = `<strong>${msg.name}</strong>: ${msg.text}`;
    messagesDiv.appendChild(div);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const text = document.getElementById('message').value.trim();
  if (name && text) {
    messages.push({ name, text });
    localStorage.setItem('messages', JSON.stringify(messages));
    renderMessages();
    form.reset();
  }
});

renderMessages();
