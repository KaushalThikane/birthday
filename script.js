const messages = [
  'May every wish you make today come true! 🌟',
  'Here is to another year of beautiful adventures! 🥳',
  'You make the world brighter just by being in it! 💛',
  'Today is all about celebrating wonderful you! 🎈'
];

const button = document.querySelector('#wishButton');
const message = document.querySelector('#wishMessage');

button.addEventListener('click', () => {
  const nextMessage = messages[Math.floor(Math.random() * messages.length)];
  message.textContent = nextMessage;
  button.textContent = 'Another wish ✨';
});
