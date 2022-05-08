export class Keybtns {
  constructor({ rus, eng }) {
    console.log(rus, eng);
    this.rus = rus;
    this.eng = eng;
  }

  //Key generator
  generateKey() {
    let template = "";

    let key = document.createElement("div");
    key.className = "key";
    //key.setAttribute("data-id", this.id);

    template += `<span class="rus hidden">
    <span class="caseDown hidden">${this.rus.down}</span>
    <span class="caseUp hidden">${this.rus.up}</span>
    <span class="caps hidden">${this.rus.capslock}</span>
    <span class="shiftCaps hidden">${this.rus.shift_capslock}</span>
    </span>`;

    template += `<span class="eng">
    <span class="caseDown">${this.eng.down}</span>
    <span class="caseUp hidden">${this.eng.up}</span>
    <span class="caps hidden">${this.eng.capslock}</span>
    <span class="shiftCaps hidden">${this.eng.shift_capslock}</span></span>`;
    key.innerHTML = template;
    return key;
  }
}
