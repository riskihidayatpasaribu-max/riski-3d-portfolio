const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      card.classList.toggle("hidden", filter !== "all" && category !== filter);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const previewImages = document.querySelectorAll(".gallery-mini img, .project-image");
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalClose = document.getElementById("modalClose");

  if (!previewImages.length || !imageModal || !modalImage || !modalClose) {
    return;
  }

  function openModal(image) {
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    imageModal.classList.add("open");
  }

  function closeModal() {
    imageModal.classList.remove("open");

    setTimeout(() => {
      modalImage.src = "";
      modalImage.alt = "Preview Gambar Portfolio";
    }, 350);
  }

  previewImages.forEach((image) => {
    image.addEventListener("click", () => {
      openModal(image);
    });
  });

  modalClose.addEventListener("click", closeModal);

  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && imageModal.classList.contains("open")) {
      closeModal();
    }
  });
});