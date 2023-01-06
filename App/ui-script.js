// VERSION*/
// B&B - Engine.US.1.0
//

 // Make the DIV element draggable:
dragElement(document.getElementById("injectdiv"));
dragElement(document.getElementById("initinject"));
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("dicebox"));
dragElement(document.getElementById("gmnotes"));
dragElement(document.getElementById("counter1"));
dragElement(document.getElementById("counter2"));
dragElement(document.getElementById("counter3"));
dragElement(document.getElementById("hold1"));
dragElement(document.getElementById("hold2"));
dragElement(document.getElementById("hold3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//TOGGLE FUNCTIONS

function diceboxtoggle() {
  var x = document.getElementById("dicebox");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function solutiontoggle() {
  var x = document.getElementById("dm_solution");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function scenariotoggle() {
  var x = document.getElementById("dm_scenario");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function notestoggle() {
  var x = document.getElementById("gmnotes");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function injectstoggle() {
  var x = document.getElementById("injectdiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function initinjectstoggle() {
  var x = document.getElementById("initinject");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
