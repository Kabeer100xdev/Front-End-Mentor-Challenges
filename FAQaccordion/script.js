const accordionBtn = document.querySelectorAll(".accodion-btn");
// btns

accordionBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const accordionBox = btn.closest(".accodion-box");
    const accordionText = accordionBox.querySelector(".accodion-text");
    const plusBtn = btn.querySelector(".plus");
    const minusbtn = btn.querySelector(".minus");

    accordionText.classList.toggle("show");
    plusBtn.classList.toggle("hidden");
    minusbtn.classList.toggle("hidden");
  });
});
