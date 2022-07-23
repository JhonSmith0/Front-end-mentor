const btnConteiner = document.querySelector(".btn-conteiner");

const btns = [...document.querySelectorAll("button.option")];
btnConteiner.addEventListener("click", function ({ target }) {
  if (target.tagName != "BUTTON") return;

  const i = btns.indexOf(target);
  const active = target.classList.contains("active");
  const ultimo = btns[i + 1] ? !btns[i + 1].classList.contains("active") : true;

  reset();
  if (active && ultimo) return;

  btns.slice(0, i + 1).forEach((e) => e.classList.add("active"));
});

function reset() {
  btns.forEach((btn) => btn.classList.remove("active"));
}
