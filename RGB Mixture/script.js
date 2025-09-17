    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");

    const redVal = document.getElementById("red-val");
    const greenVal = document.getElementById("green-val");
    const blueVal = document.getElementById("blue-val");

    const colorBox = document.getElementById("colorBox");
    const colorCode = document.getElementById("colorCode");

    function updateColor() {
      const r = parseInt(red.value);
      const g = parseInt(green.value);
      const b = parseInt(blue.value);

      redVal.textContent = r;
      greenVal.textContent = g;
      blueVal.textContent = b;

      const rgb = `rgb(${r}, ${g}, ${b})`;
      const hex = "#" + [r, g, b].map(x => {
        const hexVal = x.toString(16);
        return hexVal.length === 1 ? "0" + hexVal : hexVal;
      }).join("");

      colorBox.style.backgroundColor = rgb;
      colorCode.textContent = `${rgb} | ${hex}`;
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    updateColor();
