/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Keybtns.js":
/*!************************!*\
  !*** ./src/Keybtns.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keybtns": () => (/* binding */ Keybtns)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Keybtns = /*#__PURE__*/function () {
  function Keybtns(_ref) {
    var keycode = _ref.keycode,
        rus = _ref.rus,
        eng = _ref.eng;

    _classCallCheck(this, Keybtns);

    this.rus = rus;
    this.eng = eng;
    this.keycode = keycode;
  } //Key generator


  _createClass(Keybtns, [{
    key: "generateKey",
    value: function generateKey() {
      var template = "";
      var key = document.createElement("div");
      key.className = "key ".concat(this.keycode); //key.setAttribute("data-id", this.id);

      template += "<span class=\"rus hidden\">\n    <span class=\"caseDown hidden\">".concat(this.rus.down, "</span>\n    <span class=\"caseUp hidden\">").concat(this.rus.up, "</span>\n    <span class=\"caps hidden\">").concat(this.rus.capslock, "</span>\n    <span class=\"shiftCaps hidden\">").concat(this.rus.shift_capslock, "</span>\n    </span>");
      template += "<span class=\"eng\">\n    <span class=\"caseDown\">".concat(this.eng.down, "</span>\n    <span class=\"caseUp hidden\">").concat(this.eng.up, "</span>\n    <span class=\"caps hidden\">").concat(this.eng.capslock, "</span>\n    <span class=\"shiftCaps hidden\">").concat(this.eng.shift_capslock, "</span></span>");
      key.innerHTML = template;
      return key;
    }
  }]);

  return Keybtns;
}();

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
var dataRow1 = [{
  keycode: "Backquote",
  rus: {
    down: "ё",
    up: "Ё",
    capslock: "Ё",
    shift_capslock: "ё"
  },
  eng: {
    down: "`",
    up: "~",
    capslock: "`",
    shift_capslock: "~"
  }
}, {
  keycode: "Digit1",
  rus: {
    down: "1",
    up: "!",
    capslock: "1",
    shift_capslock: "!"
  },
  eng: {
    down: "1",
    up: "!",
    capslock: "1",
    shift_capslock: "!"
  }
}, {
  keycode: "Digit2",
  rus: {
    down: "2",
    up: "@",
    capslock: "2",
    shift_capslock: "@"
  },
  eng: {
    down: "2",
    up: "@",
    capslock: "2",
    shift_capslock: "@"
  }
}, {
  keycode: "Digit3",
  rus: {
    down: "3",
    up: "#",
    capslock: "3",
    shift_capslock: "#"
  },
  eng: {
    down: "3",
    up: "#",
    capslock: "3",
    shift_capslock: "#"
  }
}, {
  keycode: "Digit4",
  rus: {
    down: "4",
    up: "$",
    capslock: "4",
    shift_capslock: "$"
  },
  eng: {
    down: "4",
    up: "$",
    capslock: "4",
    shift_capslock: "$"
  }
}, {
  keycode: "Digit5",
  rus: {
    down: "5",
    up: "%",
    capslock: "5",
    shift_capslock: "%"
  },
  eng: {
    down: "5",
    up: "%",
    capslock: "5",
    shift_capslock: "%"
  }
}, {
  keycode: "Digit6",
  rus: {
    down: "6",
    up: "^",
    capslock: "6",
    shift_capslock: "^"
  },
  eng: {
    down: "6",
    up: "^",
    capslock: "6",
    shift_capslock: "^"
  }
}, {
  keycode: "Digit7",
  rus: {
    down: "7",
    up: "&",
    capslock: "7",
    shift_capslock: "&"
  },
  eng: {
    down: "7",
    up: "&",
    capslock: "7",
    shift_capslock: "&"
  }
}, {
  keycode: "Digit8",
  rus: {
    down: "8",
    up: "*",
    capslock: "8",
    shift_capslock: "*"
  },
  eng: {
    down: "8",
    up: "*",
    capslock: "8",
    shift_capslock: "*"
  }
}, {
  keycode: "Digit9",
  rus: {
    down: "9",
    up: "(",
    capslock: "9",
    shift_capslock: "("
  },
  eng: {
    down: "9",
    up: "(",
    capslock: "9",
    shift_capslock: "("
  }
}, {
  keycode: "Digit0",
  rus: {
    down: "0",
    up: ")",
    capslock: "0",
    shift_capslock: ")"
  },
  eng: {
    down: "0",
    up: ")",
    capslock: "0",
    shift_capslock: ")"
  }
}, {
  keycode: "Minus",
  rus: {
    down: "-",
    up: "_",
    capslock: "-",
    shift_capslock: "_"
  },
  eng: {
    down: "-",
    up: "_",
    capslock: "-",
    shift_capslock: "_"
  }
}, {
  keycode: "Equal",
  rus: {
    down: "=",
    up: "+",
    capslock: "=",
    shift_capslock: "+"
  },
  eng: {
    down: "=",
    up: "+",
    capslock: "=",
    shift_capslock: "+"
  }
}, {
  keycode: "Backspace",
  rus: {
    down: "Backspace",
    up: "Backspace",
    capslock: "Backspace",
    shift_capslock: "Backspace"
  },
  eng: {
    down: "Backspace",
    up: "Backspace",
    capslock: "Backspace1",
    shift_capslock: "Backspace"
  }
}];
var dataRow2 = [{
  keycode: "Tab",
  rus: {
    down: "TAB",
    up: "TAB",
    capslock: "TAB",
    shift_capslock: "TAB"
  },
  eng: {
    down: "TAB",
    up: "TAB",
    capslock: "TAB",
    shift_capslock: "TAB"
  }
}, {
  keycode: "KeyQ",
  rus: {
    down: "й",
    up: "Й",
    capslock: "Й",
    shift_capslock: "й"
  },
  eng: {
    down: "q",
    up: "Q",
    capslock: "Q",
    shift_capslock: "q"
  }
}, {
  keycode: "KeyW",
  rus: {
    down: "ц",
    up: "Ц",
    capslock: "Ц",
    shift_capslock: "ц"
  },
  eng: {
    down: "w",
    up: "W",
    capslock: "W",
    shift_capslock: "w"
  }
}, {
  keycode: "KeyE",
  rus: {
    down: "у",
    up: "У",
    capslock: "У",
    shift_capslock: "у"
  },
  eng: {
    down: "e",
    up: "E",
    capslock: "E",
    shift_capslock: "e"
  }
}, {
  keycode: "KeyR",
  rus: {
    down: "к",
    up: "К",
    capslock: "К",
    shift_capslock: "к"
  },
  eng: {
    down: "r",
    up: "R",
    capslock: "R",
    shift_capslock: "r"
  }
}, {
  keycode: "KeyT",
  rus: {
    down: "е",
    up: "Е",
    capslock: "Е",
    shift_capslock: "е"
  },
  eng: {
    down: "t",
    up: "T",
    capslock: "T",
    shift_capslock: "t"
  }
}, {
  keycode: "KeyY",
  rus: {
    down: "н",
    up: "Н",
    capslock: "Н",
    shift_capslock: "н"
  },
  eng: {
    down: "y",
    up: "Y",
    capslock: "Y",
    shift_capslock: "y"
  }
}, {
  keycode: "KeyU",
  rus: {
    down: "г",
    up: "Г",
    capslock: "Г",
    shift_capslock: "г"
  },
  eng: {
    down: "u",
    up: "U",
    capslock: "U",
    shift_capslock: "u"
  }
}, {
  keycode: "KeyI",
  rus: {
    down: "ш",
    up: "Ш",
    capslock: "Ш",
    shift_capslock: "ш"
  },
  eng: {
    down: "i",
    up: "I",
    capslock: "I",
    shift_capslock: "i"
  }
}, {
  keycode: "KeyO",
  rus: {
    down: "щ",
    up: "Щ",
    capslock: "Щ",
    shift_capslock: "щ"
  },
  eng: {
    down: "o",
    up: "O",
    capslock: "O",
    shift_capslock: "o"
  }
}, {
  keycode: "KeyP",
  rus: {
    down: "з",
    up: "З",
    capslock: "З",
    shift_capslock: "з"
  },
  eng: {
    down: "p",
    up: "P",
    capslock: "P",
    shift_capslock: "p"
  }
}, {
  keycode: "BracketLeft",
  rus: {
    down: "х",
    up: "Х",
    capslock: "Х",
    shift_capslock: "х"
  },
  eng: {
    down: "[",
    up: "{",
    capslock: "[",
    shift_capslock: "{"
  }
}, {
  keycode: "BracketRight",
  rus: {
    down: "ъ",
    up: "Ъ",
    capslock: "Ъ",
    shift_capslock: "ъ"
  },
  eng: {
    down: "]",
    up: "}",
    capslock: "]",
    shift_capslock: "}"
  }
}, {
  keycode: "Backslash",
  rus: {
    down: "&#47;",
    up: "/",
    capslock: "&#47;",
    shift_capslock: "/"
  },
  eng: {
    down: "&#47;",
    up: "|",
    capslock: "&#47;",
    shift_capslock: "|"
  }
}, {
  keycode: "Delete",
  rus: {
    down: "DEL",
    up: "DEL",
    capslock: "DEL",
    shift_capslock: "DEL"
  },
  eng: {
    down: "DEL",
    up: "DEL",
    capslock: "DEL",
    shift_capslock: "DEL"
  }
}];
var dataRow3 = [{
  keycode: "CapsLock",
  rus: {
    down: "CapcLock",
    up: "CapcLock",
    capslock: "CapcLock",
    shift_capslock: "CapcLock"
  },
  eng: {
    down: "CapcLock",
    up: "CapcLock",
    capslock: "CapcLock",
    shift_capslock: "CapcLock"
  }
}, {
  keycode: "KeyA",
  rus: {
    down: "ф",
    up: "Ф",
    capslock: "Ф",
    shift_capslock: "ф"
  },
  eng: {
    down: "a",
    up: "A",
    capslock: "A",
    shift_capslock: "a"
  }
}, {
  keycode: "KeyS",
  rus: {
    down: "ы",
    up: "Ы",
    capslock: "Ы",
    shift_capslock: "ы"
  },
  eng: {
    down: "s",
    up: "S",
    capslock: "S",
    shift_capslock: "s"
  }
}, {
  keycode: "KeyD",
  rus: {
    down: "в",
    up: "В",
    capslock: "В",
    shift_capslock: "в"
  },
  eng: {
    down: "d",
    up: "D",
    capslock: "D",
    shift_capslock: "d"
  }
}, {
  keycode: "KeyF",
  rus: {
    down: "а",
    up: "А",
    capslock: "А",
    shift_capslock: "а"
  },
  eng: {
    down: "f",
    up: "F",
    capslock: "F",
    shift_capslock: "f"
  }
}, {
  keycode: "KeyG",
  rus: {
    down: "п",
    up: "П",
    capslock: "П",
    shift_capslock: "п"
  },
  eng: {
    down: "g",
    up: "G",
    capslock: "G",
    shift_capslock: "g"
  }
}, {
  keycode: "KeyH",
  rus: {
    down: "р",
    up: "р",
    capslock: "Р",
    shift_capslock: "р"
  },
  eng: {
    down: "h",
    up: "H",
    capslock: "H",
    shift_capslock: "h"
  }
}, {
  keycode: "KeyJ",
  rus: {
    down: "о",
    up: "О",
    capslock: "О",
    shift_capslock: "о"
  },
  eng: {
    down: "j",
    up: "J",
    capslock: "J",
    shift_capslock: "j"
  }
}, {
  keycode: "KeyK",
  rus: {
    down: "л",
    up: "Л",
    capslock: "Л",
    shift_capslock: "л"
  },
  eng: {
    down: "k",
    up: "K",
    capslock: "K",
    shift_capslock: "k"
  }
}, {
  keycode: "KeyL",
  rus: {
    down: "д",
    up: "Д",
    capslock: "Д",
    shift_capslock: "д"
  },
  eng: {
    down: "l",
    up: "L",
    capslock: "L",
    shift_capslock: "l"
  }
}, {
  keycode: "Semicolon",
  rus: {
    down: "ж",
    up: "Ж",
    capslock: "Ж",
    shift_capslock: "ж"
  },
  eng: {
    down: ";",
    up: ":",
    capslock: ";",
    shift_capslock: ":"
  }
}, {
  keycode: "Quote",
  rus: {
    down: "э",
    up: "Э",
    capslock: "Э",
    shift_capslock: "э"
  },
  eng: {
    down: "'",
    up: "&#8242",
    capslock: "'",
    shift_capslock: "&#8242"
  }
}, {
  keycode: "Enter",
  rus: {
    down: "Enter",
    up: "Enter",
    capslock: "Enter",
    shift_capslock: "Enter"
  },
  eng: {
    down: "Enter",
    up: "Enter",
    capslock: "Enter",
    shift_capslock: "Enter"
  }
}];
var dataRow4 = [{
  keycode: "ShiftLeft",
  rus: {
    down: "Shift",
    up: "Shift",
    capslock: "Shift",
    shift_capslock: "Shift"
  },
  eng: {
    down: "Shift",
    up: "Shift",
    capslock: "Shift",
    shift_capslock: "Shift"
  }
}, {
  keycode: "KeyZ",
  rus: {
    down: "я",
    up: "Я",
    capslock: "Я",
    shift_capslock: "я"
  },
  eng: {
    down: "z",
    up: "Z",
    capslock: "Z",
    shift_capslock: "z"
  }
}, {
  keycode: "KeyX",
  rus: {
    down: "ч",
    up: "Ч",
    capslock: "Ч",
    shift_capslock: "ч"
  },
  eng: {
    down: "x",
    up: "X",
    capslock: "X",
    shift_capslock: "x"
  }
}, {
  keycode: "KeyC",
  rus: {
    down: "c",
    up: "C",
    capslock: "C",
    shift_capslock: "c"
  },
  eng: {
    down: "с",
    up: "С",
    capslock: "С",
    shift_capslock: "с"
  }
}, {
  keycode: "KeyV",
  rus: {
    down: "м",
    up: "М",
    capslock: "М",
    shift_capslock: "м"
  },
  eng: {
    down: "v",
    up: "V",
    capslock: "V",
    shift_capslock: "v"
  }
}, {
  keycode: "KeyB",
  rus: {
    down: "и",
    up: "И",
    capslock: "И",
    shift_capslock: "и"
  },
  eng: {
    down: "b",
    up: "B",
    capslock: "B",
    shift_capslock: "b"
  }
}, {
  keycode: "KeyN",
  rus: {
    down: "т",
    up: "Т",
    capslock: "Т",
    shift_capslock: "т"
  },
  eng: {
    down: "n",
    up: "N",
    capslock: "N",
    shift_capslock: "n"
  }
}, {
  keycode: "KeyM",
  rus: {
    down: "ь",
    up: "Ь",
    capslock: "Ь",
    shift_capslock: "ь"
  },
  eng: {
    down: "m",
    up: "M",
    capslock: "M",
    shift_capslock: "m"
  }
}, {
  keycode: "Comma",
  rus: {
    down: "б",
    up: "Б",
    capslock: "Б",
    shift_capslock: "б"
  },
  eng: {
    down: ",",
    up: "<",
    capslock: "<",
    shift_capslock: ","
  }
}, {
  keycode: "Period",
  rus: {
    down: "ю",
    up: "Ю",
    capslock: "Ю",
    shift_capslock: "ю"
  },
  eng: {
    down: ".",
    up: ">",
    capslock: ">",
    shift_capslock: "."
  }
}, {
  keycode: "Slash",
  rus: {
    down: ".",
    up: ",",
    capslock: ".",
    shift_capslock: ","
  },
  eng: {
    down: "/",
    up: "?",
    capslock: "/",
    shift_capslock: "?"
  }
}, {
  keycode: "ArrowUp",
  rus: {
    down: "&#8593;",
    up: "&#8593;",
    capslock: "&#8593;",
    shift_capslock: "&#8593;"
  },
  eng: {
    down: "&#8593;",
    up: "&#8593;",
    capslock: "&#8593;",
    shift_capslock: "&#8593;"
  }
}, {
  keycode: "ShiftRight",
  rus: {
    down: "Shift",
    up: "Shift",
    capslock: "Shift",
    shift_capslock: "Shift"
  },
  eng: {
    down: "Shift",
    up: "Shift",
    capslock: "Shift",
    shift_capslock: "Shift"
  }
}];
var dataRow5 = [{
  keycode: "ControlLeft",
  rus: {
    down: "Ctrl",
    up: "Ctrl",
    capslock: "Ctrl",
    shift_capslock: "Ctrl"
  },
  eng: {
    down: "Ctrl",
    up: "Ctrl",
    capslock: "Ctrl",
    shift_capslock: "Ctrl"
  }
}, {
  keycode: "OSLeft",
  rus: {
    down: "Win",
    up: "Win",
    capslock: "Win",
    shift_capslock: "Win"
  },
  eng: {
    down: "Win",
    up: "Win",
    capslock: "Win",
    shift_capslock: "Win"
  }
}, {
  keycode: "AltLeft",
  rus: {
    down: "Alt",
    up: "Alt",
    capslock: "Alt",
    shift_capslock: "Alt"
  },
  eng: {
    down: "Alt",
    up: "Alt",
    capslock: "Alt",
    shift_capslock: "Alt"
  }
}, {
  keycode: "Space",
  rus: {
    down: "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
    up: "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
    capslock: "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
    shift_capslock: "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;"
  },
  eng: {
    down: "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
    up: "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
    capslock: "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
    shift_capslock: "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;"
  }
}, {
  keycode: "AltRight",
  rus: {
    down: "Alt",
    up: "Alt",
    capslock: "Alt",
    shift_capslock: "Alt"
  },
  eng: {
    down: "Alt",
    up: "Alt",
    capslock: "Alt",
    shift_capslock: "Alt"
  }
}, {
  keycode: "ArrowLeft",
  rus: {
    down: "&#8592;",
    up: "&#8592;",
    capslock: "&#8592;",
    shift_capslock: "&#8592;"
  },
  eng: {
    down: "&#8592;",
    up: "&#8592;",
    capslock: "&#8592;",
    shift_capslock: "&#8592;"
  }
}, {
  keycode: "ArrowDown",
  rus: {
    down: "&#8595;",
    up: "&#8595;",
    capslock: "&#8595;",
    shift_capslock: "&#8595;"
  },
  eng: {
    down: "&#8595;",
    up: "&#8595;",
    capslock: "&#8595;",
    shift_capslock: "&#8595;"
  }
}, {
  keycode: "ArrowRight",
  rus: {
    down: "&#8594;",
    up: "&#8594;",
    capslock: "&#8594;",
    shift_capslock: "&#8594;"
  },
  eng: {
    down: "&#8594;",
    up: "&#8594;",
    capslock: "&#8594;",
    shift_capslock: "&#8594;"
  }
}, {
  keycode: "ControlRight",
  rus: {
    down: "Ctrl",
    up: "Ctrl",
    capslock: "Ctrl",
    shift_capslock: "Ctrl"
  },
  eng: {
    down: "Ctrl",
    up: "Ctrl",
    capslock: "Ctrl",
    shift_capslock: "Ctrl"
  }
}];
var data = [dataRow1, dataRow2, dataRow3, dataRow4, dataRow5];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Keybtns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keybtns */ "./src/Keybtns.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




window.onload = function () {
  var lang = "en";
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.append(wrapper);
  var title = document.createElement("h1");
  title.innerHTML = "Virtual Keyboard";
  document.body.prepend(title);
  var textarea = document.createElement("textarea");
  textarea.setAttribute("autofocus", "");
  title.after(textarea);
  var description = document.createElement("h2");
  description.innerHTML = "The keyboard was created in the Windows operating system";
  document.body.append(description);
  var changeLangDesc = document.createElement("h2");
  changeLangDesc.innerHTML = "To switch the language combination: left CtrlLeft + AltLeft";
  document.body.append(changeLangDesc);

  var renderKeysToDom = function renderKeysToDom() {
    var keyboardWrapper = getKeyboardWrapper();

    var _loop = function _loop(i) {
      var row = document.createElement("div");
      row.className = "row";
      keyboardWrapper.append(row);
      generateKeys(_data__WEBPACK_IMPORTED_MODULE_1__.data[i]).forEach(function (key) {
        row.append(key.generateKey());
      });
    };

    for (var i = 0; i < 5; i++) {
      _loop(i);
    }

    wrapper.append(keyboardWrapper);
  };

  var generateKeys = function generateKeys(data) {
    var keys = [];
    data.forEach(function (key) {
      keys.push(new _Keybtns__WEBPACK_IMPORTED_MODULE_0__.Keybtns(key));
    });
    return keys;
  };

  var getKeyboardWrapper = function getKeyboardWrapper() {
    var keyboardContainer = document.createElement("div");
    keyboardContainer.className = "container";
    keyboardContainer.innerHTML = "";
    document.body.append(keyboardContainer);
    return keyboardContainer;
  };

  if (_data__WEBPACK_IMPORTED_MODULE_1__.data) {
    renderKeysToDom();
  }

  var textArea = document.querySelector("textarea");
  textArea.innerHTML = "Enter something...";
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
      textArea.setRangeText("\t", textArea.selectionStart, textArea.selectionEnd, "end");
    }

    if (e.key === "Alt") {
      e.preventDefault();
    }

    var pressed = document.querySelector(".".concat(e.code));
    pressed.classList.add("pressed");
  });
  document.addEventListener("keyup", function (e) {
    //console.log("keyup", e.code);
    var unpressed = document.querySelector(".".concat(e.code));
    unpressed.classList.remove("pressed");
  }); //Checking keyboard shortcuts CtrlLeft + AltLeft

  function runOnKeys(func) {
    for (var _len = arguments.length, codes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      codes[_key - 1] = arguments[_key];
    }

    var pressed = new Set();
    document.addEventListener("keydown", function (e) {
      pressed.add(e.code);

      var _iterator = _createForOfIteratorHelper(codes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var code = _step.value;

          if (!pressed.has(code)) {
            return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      pressed.clear();
      func();
    });
    document.addEventListener("keyup", function (e) {
      pressed["delete"](e.code);
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
    var keys = document.querySelectorAll(".key");
    console.log(lang);

    if (lang === "en") {
      lang = true;
    } else {
      lang = false;
    }

    console.log(lang);

    var _iterator2 = _createForOfIteratorHelper(keys),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var key = _step2.value;
        var spanRUS = key.querySelector(".rus");
        var spanENG = key.querySelector(".eng");
        spanRUS.classList.toggle("hidden");
        spanENG.classList.toggle("hidden");

        if (lang) {
          //Т.е. переводим с английского на русский
          console.log("мы тут");
          spanRUS.querySelector(".caseDown").className = spanENG.querySelector(".caseDown").className;
          spanRUS.querySelector(".caseUp").className = spanENG.querySelector(".caseUp").className;
          spanRUS.querySelector(".caps").className = spanENG.querySelector(".caps").className;
          spanRUS.querySelector(".shiftCaps").className = spanENG.querySelector(".shiftCaps").className;
        } else {
          spanENG.querySelector(".caseDown").className = spanRUS.querySelector(".caseDown").className;
          spanENG.querySelector(".caseUp").className = spanRUS.querySelector(".caseUp").className;
          spanENG.querySelector(".caps").className = spanRUS.querySelector(".caps").className;
          spanENG.querySelector(".shiftCaps").className = spanRUS.querySelector(".shiftCaps").className;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.js.map