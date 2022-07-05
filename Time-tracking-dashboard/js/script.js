function montarBox(object, time) {
  let element, title, class_, word;
  word = "Yesterday";
  if (time == "weekly") {
    word = "Last week";
  }
  if (time == "monthly") {
    word = "Last month";
  }
  word += " - ";
  title = object["title"];
  class_ = title.toLocaleLowerCase();

  if (class_.includes(" ")) {
    class_ = class_.split(" ");
    class_ = class_.join("-");
  }

  element = document.querySelector("." + class_);
  if (element) {
    element.remove();
  }

  //   cloning...
  element = document.querySelector("[data-box-template]");
  element = element.cloneNode(true).content.children[0];

  //   Changing icon src
  element.querySelector("img").src = `images/icon-${class_}.svg`;

  //   Changing box title
  element.querySelector(".box-title").textContent = object.title;
  element.classList.add("box", class_);

  //   Changing Hours
  object = object["timeframes"][time];
  element.querySelector(".hrs").textContent = object.current + "hrs";
  element.querySelector(".when").textContent = word;
  element.querySelector(".previous-hrs").textContent = object.previous + "hrs";

  return element;
}
function montarConteiner(time) {
  const conteiner = document.querySelector(".conteiner");
  data.forEach((object) => {
    conteiner.append(montarBox(object, time));
  });
}

const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

document.querySelectorAll(".action").forEach((action) => {
  action.addEventListener("click", function (e) {
    if (document.querySelector(".selected")) {
      document.querySelector(".selected").classList.remove("selected");
    }

    montarConteiner(e.target.innerText.toLocaleLowerCase());
    e.target.classList.add("selected");
  });
});

montarConteiner("daily");
