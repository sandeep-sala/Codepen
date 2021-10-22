document
  .getElementById("toggle-switch")
  .addEventListener("change", function (event) {
    if (event.target.checked) {
      document.body.style.backgroundColor = "unset";
    } else {
      document.body.style.backgroundColor = "black";
    }
  });