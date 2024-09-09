const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");
const counter = document.getElementById("counter");

let counterValue = 0;

function updateCounter() {
    counter.textContent = counterValue;
    updateButtonStates();
}

function updateButtonStates() {
    if (counterValue === 0) {
        decrement.disabled = true;
    } else {
        decrement.disabled = false;
    }
}

increment.addEventListener("click", function() {
    counterValue++;
    updateCounter();
});

decrement.addEventListener("click", function() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
});

reset.addEventListener("click", function() {
    counterValue = 0;
    updateCounter();
});


updateButtonStates();
