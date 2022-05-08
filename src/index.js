import { Keybtns } from "./Keybtns";
import { data } from "./data";

console.log(data);

window.onload = function () {
  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.append(wrapper);

  // let row1 = document.createElement("div");
  // row1.className = "row";

  const renderKeysToDom = () => {
    let keyboardWrapper = getKeyboardWrapper();
    //keyboardWrapper.append(row1);

    // generateKeys(dataRow1).forEach((key) => {
    //   row1.append(key.generateKey());
    // });
    4;
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
    const keyboardContainer = document.querySelector(".container");
    keyboardContainer.innerHTML = "";
    return keyboardContainer;
  };
  if (data) {
    renderKeysToDom();
  }
};
