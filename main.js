var incrementButton = document.getElementsByClassName("inc");
var decrementButton = document.getElementsByClassName("dec");

// Increment
for (var i = 0; i < incrementButton.length; i++) {
  incrementButton[i].addEventListener("click", function () {
    var value = parseInt(this.previousElementSibling.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    this.previousElementSibling.value = value;
  });
}

// Decrement
for (var i = 0; i < decrementButton.length; i++) {
  decrementButton[i].addEventListener("click", function () {
    var value = parseInt(this.nextElementSibling.value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    this.nextElementSibling.value = value;
  });
}
