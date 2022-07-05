document.querySelectorAll(".nav-item-box .feature-box").forEach((feature) => {
  let li = feature.parentElement;
  li.addEventListener("click", function () {
    li.classList.toggle("open");
  });
});

document.querySelector(".menu").addEventListener("click", function (e) {
  document.body.classList.toggle("nav-open");
});
