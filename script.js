const messages = [
  'May every wish you make today find its way to you. ✦',
  '오늘도, 그리고 앞으로의 모든 날도 행복하길 바라요 ♡',
  'You make every ordinary moment feel a little more magical.',
  'Here’s to your softest, brightest, most beautiful year yet.'
];

const wishButton = document.querySelector('#wishButton');
const againButton = document.querySelector('#againButton');
const wishMessage = document.querySelector('#wishMessage');
const showWish = (button) => {
  wishMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
  button.textContent = 'Wish made  ✦';
  wishMessage.animate([{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 450, easing: 'ease-out' });
};

wishButton.addEventListener('click', () => {
  showWish(wishButton);
  document.querySelector('#message').scrollIntoView({ behavior: 'smooth' });
});
againButton.addEventListener('click', () => showWish(againButton));

const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
document.querySelectorAll('.photo').forEach((photo) => photo.addEventListener('click', () => {
  lightboxImage.src = photo.dataset.image;
  lightbox.showModal();
}));
document.querySelector('.close-lightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
