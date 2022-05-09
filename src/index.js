import { Keybtns } from "./Keybtns";
import { data } from "./data";

window.onload = function () {
  let lang = "en";

  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.append(wrapper);

  let title = document.createElement("h1");
  title.innerHTML = "Virtual Keyboard";
  document.body.prepend(title);

  let textarea = document.createElement("textarea");
  textarea.setAttribute("autofocus", "");
  title.after(textarea);

  let description = document.createElement("h2");
  description.innerHTML =
    "The keyboard was created in the Windows operating system";
  document.body.append(description);

  let changeLangDesc = document.createElement("h2");
  changeLangDesc.innerHTML =
    "To switch the language combination: left CtrlLeft + AltLeft";
  document.body.append(changeLangDesc);

  const renderKeysToDom = () => {
    let keyboardWrapper = getKeyboardWrapper();

    for (let i = 0; i < 5; i++) {
      let row = document.createElement("div");
      row.className = "row";
      keyboardWrapper.append(row);

      generateKeys(data[i]).forEach((key) => {
        row.append(key.generateKey());
      });
    }

    wrapper.append(keyboardWrapper);
  };

  const generateKeys = (data) => {
    let keys = [];
    data.forEach((key) => {
      keys.push(new Keybtns(key));
    });

    return keys;
  };

  const getKeyboardWrapper = () => {
    const keyboardContainer = document.createElement("div");
    keyboardContainer.className = "container";
    keyboardContainer.innerHTML = "";
    document.body.append(keyboardContainer);
    return keyboardContainer;
  };
  if (data) {
    renderKeysToDom();
  }

  const textArea = document.querySelector("textarea");
  textArea.innerHTML = "Enter something...";

  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      textArea.setRangeText(
        "\t",
        textArea.selectionStart,
        textArea.selectionEnd,
        "end"
      );
    }

    if (e.key === "Alt") {
      e.preventDefault();
    }

    let pressed = document.querySelector(`.${e.code}`);
    pressed.classList.add("pressed");
  });

  document.addEventListener("keyup", (e) => {
    //console.log("keyup", e.code);
    let unpressed = document.querySelector(`.${e.code}`);
    unpressed.classList.remove("pressed");
  });

  //Checking keyboard shortcuts CtrlLeft + AltLeft
  function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener("keydown", function (e) {
      pressed.add(e.code);

      for (let code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }

      pressed.clear();

      func();
    });

    document.addEventListener("keyup", function (e) {
      pressed.delete(e.code);
    });
  }

  function setLocalStorage() {
    localStorage.setItem("lang", lang);
  }

  function getLocalStorage() {
    console.log("getLocalStorage");
    if (localStorage.getItem("lang")) {
      console.log("ku");
      lang = localStorage.getItem("lang");
    } else {
      console.log("или тут");
      lang = "en";
    }
  }
  window.addEventListener("load", getLocalStorage);

  function changeLang() {
    console.log("Change Language");
    const keys = document.querySelectorAll(".key");
    console.log(lang);
    if (lang === "en") {
      lang = true;
    } else {
      lang = false;
    }
    console.log(lang);
    for (let key of keys) {
      let spanRUS = key.querySelector(".rus");
      let spanENG = key.querySelector(".eng");

      spanRUS.classList.toggle("hidden");
      spanENG.classList.toggle("hidden");

      if (lang) {
        //Т.е. переводим с английского на русский
        console.log("мы тут");
        spanRUS.querySelector(".caseDown").className = spanENG.querySelector(
          ".caseDown"
        ).className;
        spanRUS.querySelector(".caseUp").className = spanENG.querySelector(
          ".caseUp"
        ).className;
        spanRUS.querySelector(".caps").className = spanENG.querySelector(
          ".caps"
        ).className;
        spanRUS.querySelector(".shiftCaps").className = spanENG.querySelector(
          ".shiftCaps"
        ).className;
      } else {
        spanENG.querySelector(".caseDown").className = spanRUS.querySelector(
          ".caseDown"
        ).className;
        spanENG.querySelector(".caseUp").className = spanRUS.querySelector(
          ".caseUp"
        ).className;
        spanENG.querySelector(".caps").className = spanRUS.querySelector(
          ".caps"
        ).className;
        spanENG.querySelector(".shiftCaps").className = spanRUS.querySelector(
          ".shiftCaps"
        ).className;
      }
    }

    lang = !lang;

    if (lang === true) {
      lang = "en";
    } else {
      lang = "ru";
    }

    localStorage.setItem("lang", lang);
  }

  runOnKeys(changeLang, "ControlLeft", "AltLeft");
};
