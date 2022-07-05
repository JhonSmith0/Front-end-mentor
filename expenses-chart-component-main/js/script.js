(function () {
  const data = [
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ];

  const bars = document.querySelector(".bars");
  const values = Object.values(data);

  const max = values
    .map((obj) => obj.amount)
    .reduce((m, n) => {
      return n > m ? (m = n) : m;
    }, 0);

  values.forEach((obj) => {
    const { day, amount } = obj;
    const html = ` <div class="bar-box">
    <div class="bar" style="height:${
      (amount / max) * 100
    }%"><span class="value-box">\$${amount}</span></div>
    <p>${day}</p>
    
  </div>`;

    bars.insertAdjacentHTML("beforeend", html);
  });

  bars.addEventListener("click", function (e) {
    const target = e.target;
    if (!target.classList.contains("bar")) return;
    target.closest(".bar-box").classList.toggle("active");
  });
})();
