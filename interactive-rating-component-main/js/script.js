const btnConteiner = document.querySelector(".btn-conteiner");
const submit = document.querySelector(".submit");
const btns = [...document.querySelectorAll("button.option")];

submit.addEventListener("click", enviar);

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

function selected() {
  return btns.filter((e) => e.classList.contains("active"));
}

function enviar() {
  const s = selected().length;
  if (!s) return;

  document.body.innerHTML = sentHTML(s, btns.length);
}

function sentHTML(n1, n2) {
  return `<div class="card sent">
    <img
      src="images/illustration-thank-you.svg"
      alt="sent icon"
      class="sent-icon"
    />

    <div class="infos">You selected ${n1} of ${n2}</div>

    <h1>Thank You</h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
  </div>`;
}
