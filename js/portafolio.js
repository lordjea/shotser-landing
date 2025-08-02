const images = document.querySelectorAll('.carousel-image');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentImageIndex = 0;
let imageList = Array.from(images);

// Abrir modal al hacer click en una imagen
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentImageIndex = index;
    showModal();
  });
});

function showModal() {
  modal.style.display = 'block';
  modalImg.src = imageList[currentImageIndex].src;
}

// Cerrar modal
closeBtn.onclick = () => {
  modal.style.display = 'none';
};

// Navegar a siguiente imagen
nextBtn.onclick = () => {
  currentImageIndex = (currentImageIndex + 1) % imageList.length;
  showModal();
};

// Navegar a imagen anterior
prevBtn.onclick = () => {
  currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
  showModal();
};

// Cerrar modal si se hace click fuera de la imagen
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};