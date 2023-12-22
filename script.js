class Counter {
  constructor() {
    this.count = 0;
    this.intevalId = null;
    this.isCounter = false;

    this.counterDisplay = document.getElementById("counterDisplay");
    this.toggleButton = document.getElementById("toggleButton");
    this.incrementButton = document.getElementById("incrementButton");
    this.decrementButton = document.getElementById("decrementButton");

    this.toggleButton.addEventListener("click", this.toggle.bind(this));
    this.incrementButton.addEventListener("click", this.increase.bind(this));
    this.decrementButton.addEventListener("click", this.decrease.bind(this));
  }
  toggle() {
    if (this.isCounter) {
      this.stop();
    } else {
      this.start();
    }
  }
  start() {
    this.isCounter = true;
    this.toggleButton.textContent = "Stop";
    this.intevalId = setInterval(() => {
      this.count++;
      this.counterDisplayArea();
    }, 1000);
  }

  stop() {
    this.isCounter = false;
    this.toggleButton.textContent = "Start";
    clearInterval(this.intevalId);
  }
  increase() {
    if (!this.isCounter) {
      this.count++;
      this.counterDisplayArea();
    }
  }
  decrease() {
    if (!this.isCounter) {
      this.count--;
      this.counterDisplayArea();
    }
  }
  counterDisplayArea() {
    this.counterDisplay.textContent = this.count;
  }
}
let counter = new Counter();
