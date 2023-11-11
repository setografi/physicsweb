//========== Form ==========
function initForm() {
  const submit = document.querySelector("[data-submit]");
  const email = document.querySelector("[data-email]");
  const name = document.querySelector("[data-name]");

  submit.addEventListener("click", () => {
    // alert(`Name: ${name.value} || Email: ${email.value}`);
    alert(`Thank you for your order. Please wait a moment`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const matterHolder = document.querySelector("[data-html-matter]");
  if (!matterHolder) {
    return;
  }
  initMatter(matterHolder);
  initForm();
});

//========== Button ==========
const toggleButtons = document.querySelectorAll(".toggleButton");

// Menambah event listener pada setiap elemen
toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener("click", function () {
    const isClicked = this.classList.contains("clicked");

    if (isClicked) {
      document.documentElement.style.removeProperty("--buttonColor");
      document.documentElement.style.removeProperty("--buttonTextColor");
      this.textContent = "Buy";
    } else {
      document.documentElement.style.setProperty("--buttonColor", "#fcb22b");
      document.documentElement.style.setProperty(
        "--buttonTextColor",
        "#ecf0f1"
      );
      this.textContent = "Cancel";
    }

    this.classList.toggle("clicked");
  });
});
