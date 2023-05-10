const refs = {
    startBtn: document.querySelector('button[data-start'),
    stopBtn: document.querySelector('button[data-stop'),
}

// function Для генерации случайного цвета
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function updateBodyColor(color){
    document.body.style.backgroundColor = color;
  }

  class ColorSwither {
    constructor(updateBodyColor) {
        this.intervalID = null;
        this.isActive = false;
        this.updateBodyColor = updateBodyColor;
        refs.startBtn.disable = true;
    }

    startChangeBgColor() {
        if(this.isActive) {
            return;
        }

        refs.startBtn.disable = true;
        refs.stopBtn.disable = false;

        this.isActive = true;
        this.intervalID = setInterval(() => updateBodyColor(getRandomHexColor()), 1000);
    }

    stopChangeBgColor() {
        refs.startBtn.disable = false;
        refs.stopBtn.disable = true;

        clearInterval(this.intervalID);
        this.isActive = false;
    }
  }

  const colorSwitcher = new ColorSwither();

  refs.startBtn.addEventListener('click', () => colorSwitcher.startChangeBgColor());
  refs.stopBtn.addEventListener('click', () => colorSwitcher.stopChangeBgColor());