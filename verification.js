const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollright = document.querySelectorAll(".scroll-right");
scrollright.forEach((el) => observer.observe(el));

const scrollleft = document.querySelectorAll(".scroll-left");
scrollleft.forEach((el) => observer.observe(el));

let stat = true;

function status(lang) {
  let span = document.getElementById("save-ar");
  span.classList.add("save-ar");
  let div = document.createElement("div");
  div.classList.add("save-area");
  let text = document.createTextNode("Do you want to save language?");
  // text.classList.add("text1");
  div.appendChild(text);
  span.appendChild(div);
  let btns = document.createElement("div");
  btns.classList.add("btns");
  let fbtn = document.createTextNode("Yes");
  let sbtn = document.createTextNode("NO");
  let divfbtn = document.createElement("div");
  divfbtn.classList.add("fbtn");
  divfbtn.appendChild(fbtn);
  let divsbtn = document.createElement("div");
  divsbtn.classList.add("sbtn");
  divsbtn.appendChild(sbtn);

  btns.appendChild(divfbtn);
  btns.appendChild(divsbtn);
  div.appendChild(btns);

  divfbtn.onclick = function () {
    document.querySelector(".save-area").remove();
    // document.querySelector(".save-ar::before").remove();
    stat = true;
    console.log(stat);
    localStorage.setItem("lang", lang);
  };
  divsbtn.onclick = function () {
    document.querySelector(".save-area").remove();
    // document.querySelector(".save-ar::before").remove();
    stat = false;
    console.log(stat);
    localStorage.removeItem("lang");
  };
}

document
  .getElementById("language-select")
  .addEventListener("change", function () {
    const lang = this.value;
    status(lang);
    setLanguage(lang);
  });

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    el.textContent = translations[lang][el.getAttribute("data-lang")];
  });
  if (lang == "ar") {
    document.querySelector(".right").style.direction = "rtl";
  } else {
    document.querySelector(".right").style.direction = "ltr";
  }
}

const translations = {
  en: {
    a: "INTER CODE",
    b: "The verification code has been sent to your email",
    c: "The code consists of 6 digits containing letters and numbers and is valid for 10 minutes.",
    verify: "Verify",
  },
  fr: {
    a: "CODE INTER",
    b: "Le code de vérification a été envoyé à votre adresse e-mail",
    c: "Le code est composé de 6 chiffres contenant des lettres et des chiffres et est valable 10 minutes.",
    verify: "Vérifier",
  },
  de: {
    a: "INTER CODE",
    b: "Der Bestätigungscode wurde an Ihre E-Mail gesendet",
    c: "Der Code besteht aus 6 Ziffern aus Buchstaben und Zahlen und ist 10 Minuten gültig.",
    verify: "Verifizieren",
  },
  ar: {
    a: "ادخل الكود",
    b: "تم ارسال رمز التحقق لبريدك الالكتروني",
    c: "الكود يحتوي على 6 حروف و صالح لمدة عشر دقائق",
    verify: "تحقق",
  },
};

setLanguage(localStorage.getItem("lang"));

function mode() {
  let span = document.getElementById("save-ar");
  span.classList.add("save-ar");
  let div = document.createElement("div");
  div.classList.add("save-area");
  let text = document.createTextNode("Do you want to save The Mode?");
  // text.classList.add("text1");
  div.appendChild(text);
  span.appendChild(div);
  let btns = document.createElement("div");
  btns.classList.add("btns");
  let fbtn = document.createTextNode("Yes");
  let sbtn = document.createTextNode("NO");
  let divfbtn = document.createElement("div");
  divfbtn.classList.add("fbtn");
  divfbtn.appendChild(fbtn);
  let divsbtn = document.createElement("div");
  divsbtn.classList.add("sbtn");
  divsbtn.appendChild(sbtn);

  btns.appendChild(divfbtn);
  btns.appendChild(divsbtn);
  div.appendChild(btns);

  divfbtn.onclick = function () {
    document.querySelector(".save-area").remove();
    // document.querySelector(".save-ar::before").remove();
    stat = true;
    console.log(stat);
    localStorage.setItem("mode", "dark-mode");
  };
  divsbtn.onclick = function () {
    document.querySelector(".save-area").remove();
    // document.querySelector(".save-ar::before").remove();
    stat = false;
    console.log(stat);
    localStorage.removeItem("mode");
  };
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  mode();
}
if (localStorage.getItem("mode") != null) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}
