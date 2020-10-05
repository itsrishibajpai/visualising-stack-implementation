//my code

var counter = -1;
var counter_arr = 0;
var arr = [];
function push() {
  if (counter == 8) {
    alert("stack full");
  } else {
    counter++;
    document.getElementById("pointer").innerHTML = counter;

    arr.push(document.getElementById("push-item").value);
    $("#stack").prepend(
      '<div id="r' +
        counter +
        1 +
        '" class="stack_box">  ' +
        document.getElementById("push-item").value +
        " </div>"
    );
    document.getElementById("pushed").innerHTML = document.getElementById(
      "push-item"
    ).value;
    document.getElementById("top_element").innerHTML = arr[counter];
    $("#array").append(
      '<div id="a' +
        counter +
        '" class="array_box">  ' +
        document.getElementById("push-item").value +
        " </div>"
    );
    document.getElementById("push-item").value = "";
    document.getElementById("popped").innerHTML = "";
  }
}

function pop() {
  if (counter >= 0) {
    if (arr[counter] == undefined) {
    } else {
      document.getElementById("popped").innerHTML = arr[counter];
      document.getElementById("pushed").innerHTML = "";
      arr.pop();
    }
    $("#r" + counter + 1).remove();
    $("#a" + counter).remove();

    counter--;
    if (counter >= 0) {
      document.getElementById("top_element").innerHTML = arr[counter];
    } else {
      document.getElementById("top_element").innerHTML = "";
    }

    document.getElementById("pointer").innerHTML = counter;
  } else {
    counter = -1;
    document.getElementById("top_element").innerHTML = "";
    document.getElementById("pointer").innerHTML = counter;
  }
}

function ispeak() {
  if (arr[counter != undefined]) alert("Element at Peak is : " + arr[counter]);
  else alert("Stack is empty.");
}
function isempty() {
  if (counter < 8) {
    alert("Yes , the given stack is empty ");
  } else {
    alert("No , the given stack is not empty.You cannot push more items . ");
  }
}

// Get the modal

var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("launch");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  popup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  popup.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

// buttons functionality
// start() function to start predefined simulation
function start() {
  // hiding the start button
  var start = document.getElementById("start");
  start.className = start.className.replace(/\bshow\b/g, "hide");
  // making prev and next buttons visible
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  prev.className = prev.className.replace(/\bhide\b/g, "show");
  next.className = next.className.replace(/\bhide\b/g, "show");
  // hiding user input tab (if displayed at that moment)
  var moveable = document.getElementById("moveable");
  moveable.className = moveable.className.replace(/\bshow\b/g, "hide");
}

// reset() function to reset the simulator
function reset() {
  window.location.reload();
  return false;
}

// input() function to show input tab and take user input
function input() {
  // displaying confirm box
  var choice = confirm(
    "Have you Learnt the concept and want to do it yourself?"
  );
  if (choice == true) {
    //clearing the previous content
    var animArea = document.getElementById("target");
    animArea.innerHTML = "";
    var explanation = document.getElementById("explanation");
    explanation.innerHTML = "";

    //hiding prev and next
    document.getElementById("prev").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";

    //displaying the input tab
    var moveable = document.getElementById("moveable");
    moveable.className = moveable.className.replace(/\bhide\b/g, "show");

    // hiding the start button
    var start = document.getElementById("start");
    start.className = start.className.replace(/\bshow\b/g, "hide");

    // making prev and next buttons visible
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    prev.className = prev.className.replace(/\bshow\b/g, "hide");
    next.className = next.className.replace(/\bshow\b/g, "hide");

    //clearing all fields
    $("#start-val").empty();
    $("#mid").empty();
    $("#last").empty();
  } else {
    reset();
  }
}

var codetab = document.getElementById("code");
codetab.onclick = codetab.className.replace(/\bhide\b/g, "show");

// code to make the div draggable
function makeDragable(dragHandle, dragTarget) {
  let dragObj = null; //object to be moved
  let xOffset = 0; //used to prevent dragged object jumping to mouse location
  let yOffset = 0;

  document
    .querySelector(dragHandle)
    .addEventListener("mousedown", startDrag, true);
  document
    .querySelector(dragHandle)
    .addEventListener("touchstart", startDrag, true);

  /*sets offset parameters and starts listening for mouse-move*/
  function startDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    dragObj = document.querySelector(dragTarget);
    dragObj.style.position = "absolute";
    let rect = dragObj.getBoundingClientRect();

    if (e.type == "mousedown") {
      xOffset = e.clientX - rect.left; //clientX and getBoundingClientRect() both use viewable area adjusted when scrolling aka 'viewport'
      yOffset = e.clientY - rect.top;
      window.addEventListener("mousemove", dragObject, true);
    } else if (e.type == "touchstart") {
      xOffset = e.targetTouches[0].clientX - rect.left;
      yOffset = e.targetTouches[0].clientY - rect.top;
      window.addEventListener("touchmove", dragObject, true);
    }
  }

  /*Drag object*/
  function dragObject(e) {
    e.preventDefault();
    e.stopPropagation();

    if (dragObj == null) {
      return; // if there is no object being dragged then do nothing
    } else if (e.type == "mousemove") {
      dragObj.style.left = e.clientX - xOffset + "px"; // adjust location of dragged object so doesn't jump to mouse position
      dragObj.style.top = e.clientY - yOffset + "px";
    } else if (e.type == "touchmove") {
      dragObj.style.left = e.targetTouches[0].clientX - xOffset + "px"; // adjust location of dragged object so doesn't jump to mouse position
      dragObj.style.top = e.targetTouches[0].clientY - yOffset + "px";
    }
  }

  /*End dragging*/
  document.onmouseup = function (e) {
    if (dragObj) {
      dragObj = null;
      window.removeEventListener("mousemove", dragObject, true);
      window.removeEventListener("touchmove", dragObject, true);
    }
  };
}

makeDragable("#handle", "#moveable");
