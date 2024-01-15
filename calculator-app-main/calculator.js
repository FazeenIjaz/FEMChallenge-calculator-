function clearAll() {
    document.getElementById("screen").innerText = "0";
    document.getElementById("screen").setAttribute("data-answered", "false");
  }
  
  function display(value) {
    var screen = document.getElementById("screen");
    var answered = screen.getAttribute("data-answered");
  
    if (answered === "true" || screen.innerText === "0") {
      screen.innerText = value;
      screen.setAttribute("data-answered", "false");
    } else {
      screen.innerText += value;
    }
  }
  
  function calculate() {
    var screen = document.getElementById("screen");
    var x = screen.innerText.replace(/x/g, '*');
  
    try {
      var y = eval(x);
      if (isNaN(y) || !isFinite(y)) {
        screen.innerText = "ERROR";
      } else {
        screen.innerText = y;
      }
      screen.setAttribute("data-answered", "true");
    } catch (error) {
      screen.innerText = "ERROR";
      screen.setAttribute("data-answered", "true");
    }
  }
  