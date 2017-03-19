function setup() {
  var counter = document.getElementById('counter');
  var button = document.getElementById('button');
  var sound = document.getElementById('sound');
  var count = parseInt(window.location.hash.substring(1), 10) || 0;
  var pressed;

  function updateCount() {
    counter.innerHTML = count;
    // if (count) window.location.hash = count;
  }

  function playSound() {
    sound.play();
    sound.currentTime = 0;
    sound.play();
  }

  function onButton() {
    count++;
    updateCount();
    playSound();
  }

  // Force-refresh backdoor because apple
  function onDown() {
    pressed = Date.now();
  }

  function onUp() {
    if (Date.now() - pressed > 3000) {
      location.reload(true);
    }
  }

  button.addEventListener('click', onButton);
  button.addEventListener('mousedown', onDown);
  button.addEventListener('touchstart', onDown);
  button.addEventListener('mouseup', onUp);
  button.addEventListener('touchend', onUp);
  document.ontouchmove = function (e) {
    e.preventDefault();
  };

  updateCount();
}

window.onload = setup;