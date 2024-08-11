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

// -----------------------------------------------------------------------
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  const label = input.previousElementSibling;

  input.addEventListener("focus", () => {
    label.style.transform = "translateY(-25px)";
    label.style.transition = "transform 0.3s ease";
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      label.style.transform = "translateY(-8px)";
    }
  });
});

let stat = true;
let kind;

function status(lang) {
  kind = lang;
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
    setLanguage(lang);
    languagee = lang;
    status(lang);
  });

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    el.textContent = translations[lang][el.getAttribute("data-lang")];
  });
  if (lang == "ar") {
    document.querySelector(".right").style.direction = "rtl";
    localStorage.setItem("lang", "ar");
  } else {
    document.querySelector(".right").style.direction = "ltr";
  }
}

const translations = {
  en: {
    signup: "Signup",
    userName: "User Name",
    phoneNumber: "Phone Number",
    email: "Email",
    password: "Password",
    rePassword: "Re Password",
    uploadCertificate: "Upload Certificate",
    haveAccount: "Have an account?",
    login: "login",
    a: "INTER CODE",
    b: "The verification code has been sent to your email",
    c: "The code consists of 6 digits containing letters and numbers and is valid for 10 minutes.",
    verify: "Verify",
    welcome: "Welcome to our store",
    logout: "Logout",
    forget: "Forget Password",
    dont: "don't have an account?",
    have: "Have an account?",
  },
  fr: {
    signup: "S'inscrire",
    userName: "Nom d'utilisateur",
    phoneNumber: "Numéro de téléphone",
    email: "Email",
    password: "Mot de passe",
    rePassword: "Confirmer le mot de passe",
    uploadCertificate: "Télécharger le certificat",
    haveAccount: "Vous avez un compte?",
    login: "connexion",
    welcome: "Bienvenue dans notre magasin",
    logout: "Se déconnecter",
    forget: "Forget Password",
    dont: "don't have an account?",
    have: "Have an account?",
  },
  de: {
    signup: "Anmelden",
    userName: "Benutzername",
    phoneNumber: "Telefonnummer",
    email: "Email",
    password: "Passwort",
    rePassword: "Passwort bestätigen",
    uploadCertificate: "Zertifikat hochladen",
    haveAccount: "Haben Sie ein Konto?",
    login: "einloggen",
    welcome: "Willkommen in unserem Geschäft",
    logout: "Ausloggen",
    forget: "Forget Password",
    dont: "don't have an account?",
    have: "Have an account?",
  },
  ar: {
    signup: "إنشاء حساب",
    login: "سجل الدخول",
    userName: "اسم المستخدم",
    phoneNumber: "رقم الهاتف",
    email: "الإيميل",
    password: "كلمة السر",
    rePassword: "إعادة كلمة السر",
    uploadCertificate: "تحميل شهادة",
    haveAccount: "هل لديك حساب؟",
    login: "سجل الدخول",
    a: "ادخل الكود",
    b: "تم ارسال رمز التحقق لبريدك الالكتروني",
    c: "الكود يحتوي على 6 حروف و صالح لمدة عشر دقائق",
    verify: "تحقق",
    welcome: "اهلا بك في متجرنا",
    logout: "تسجيل حروج",
    forget: "نسيت كلمة السر",
    dont: "ليس لديك حساب؟",
    have: "هل لديك حساب؟",
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
console.log(kind);
