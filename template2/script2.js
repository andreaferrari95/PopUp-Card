document.addEventListener("DOMContentLoaded", (event) => {
  // All images and titles inside the image modal content class
  const lightboxImages = document.querySelectorAll(".images-smp");
  const lightboxTitles = document.querySelectorAll(".image-modal-title");

  // Dynamically selects all elements inside modal popup
  const modalElement = (element) =>
    document.querySelector(`.image-modal-popup ${element}`);

  const body = document.querySelector("body");

  const modalPopup = document.querySelector(".image-modal-popup");
  const modalWrapper = document.querySelector(".image-modal-popup .wrapper");

  // Closes modal on clicking outside of modal content
  modalPopup.addEventListener("click", (e) => {
    if (e.target === modalPopup || e.target === modalWrapper) {
      body.style.overflow = "auto";
      modalPopup.style.display = "none";
    }
  });

  // Closes modal on clicking the close button (span)
  modalElement("span").addEventListener("click", () => {
    body.style.overflow = "auto";
    modalPopup.style.display = "none";
  });

  // Function to open modal with the respective data
  const openModal = (data, src) => {
    body.style.overflow = "hidden";
    modalPopup.style.display = "block";
    modalElement("h1").innerHTML = data.title;
    modalElement("p").innerHTML = data.description;
    modalElement("img").src = src;
  };

  // Loops over each image and adds click event functionality
  lightboxImages.forEach((img) => {
    const data = img.dataset;
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(data, img.src);
    });
  });

  // Loops over each title and adds click event functionality
  lightboxTitles.forEach((title) => {
    const img = title.previousElementSibling;
    const data = img.dataset;
    title.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(data, img.src);
    });
  });
});
