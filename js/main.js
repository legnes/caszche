function setup() {
  var counter = document.getElementById('counter');
  var button = document.getElementById('button');
  var sound = document.getElementById('sound');
  var count = parseInt(window.location.hash.substring(1), 10) || 0;

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

  button.addEventListener('click', onButton)
  updateCount();
}

window.onload = setup;