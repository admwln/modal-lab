// Get the modal
const productData = [
  {
    name: "Product One",
    imgA: "product1a.png",
    imgB: "product1b.png",
  },
  {
    name: "Product Two",
    imgA: "product2a.png",
    imgB: "product2b.png",
  },
  {
    name: "Product Three",
    imgA: "product1a.png",
    imgB: "product1b.png",
  },
  {
    name: "Product Four",
    imgA: "product2a.png",
    imgB: "product2b.png",
  },
];

const modal = document.querySelector("#myModal");
const buttons = document.querySelectorAll(".toggle-img");

const products = document.querySelectorAll(".product");
for (let i = 0; i < products.length; i++) {
  // Open modal on click and populate with correct title and image
  products[i].onclick = function () {
    // Reset button colors
    buttons[0].classList.add("chosen");
    buttons[1].classList.remove("chosen");
    modal.style.display = "block";
    let modalImg = document.querySelector("#myModal img");
    modalImg.src = productData[i].imgA;
    let productTitle = document.querySelector(".modal-content h2");
    productTitle.innerText = "";
    productTitle.innerText = productData[i].name;

    // Toggle image in modal content
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].onclick = function () {
        // Toggle button color
        buttons[0].classList.toggle("chosen");
        buttons[1].classList.toggle("chosen");
        let modalImg = document.querySelector("#myModal img");
        if (j == 0) {
          modalImg.src = productData[i].imgA;
        } else {
          modalImg.src = productData[i].imgB;
        }
      };
    }
  };
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
